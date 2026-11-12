import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Clean inputs
    const cleanEmail = email.trim();
    const cleanPassword = password;

    // Simple email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(cleanEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (cleanPassword.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Specific user requested credentials check
    const targetEmail = 'rohan.chaudhry@wilp.bits-pilani.ac.in';
    const targetPassword = 'Bits#LNT2026@Rohan5831';

    if (cleanEmail === targetEmail && cleanPassword === targetPassword) {
      // Rohan's specific account
      localStorage.setItem('studentLoggedIn', 'true');
      localStorage.setItem('studentEmail', cleanEmail);
      localStorage.setItem('studentName', 'Rohan Kumar Chaudhry');
      localStorage.setItem('studentRoll', '2026ML005831');
      localStorage.setItem('corporatePartner', 'L&T (Larsen & Toubro) Executive Program');
      
      window.dispatchEvent(new Event('storage'));
      navigate('/dashboard');
    } else {
      // DYNAMIC login for any other student email, removing "default hardcoded account" limitation
      // Extract prefix from email (e.g. rahul.sharma@wilp.bits-pilani.ac.in -> rahul.sharma)
      const prefix = cleanEmail.split('@')[0];
      const nameParts = prefix.split(/[\._\-]/);
      const formattedName = nameParts
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');

      localStorage.setItem('studentLoggedIn', 'true');
      localStorage.setItem('studentEmail', cleanEmail);
      localStorage.setItem('studentName', formattedName);
      // Generate a dynamic mock roll number based on email length
      const randomRoll = `2026ML00${cleanEmail.length + 5000}`;
      localStorage.setItem('studentRoll', randomRoll);
      localStorage.setItem('corporatePartner', 'Standard Corporate Education Scheme');

      window.dispatchEvent(new Event('storage'));
      navigate('/dashboard');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '80px 20px', minHeight: '60svh', backgroundColor: '#f4f5f8' }}>
      <div style={{ width: '100%', maxWidth: '420px', backgroundColor: '#ffffff', borderTop: '4px solid var(--accent-gold)', borderRadius: '6px', boxShadow: 'var(--shadow-lg)', padding: '40px 30px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <img 
            src="https://www.bits-pilani.ac.in/wp-content/uploads/bits-pillani-2-1.webp" 
            alt="BITS Logo" 
            style={{ height: '55px', margin: '0 auto 15px', display: 'block' }} 
          />
          <h2 style={{ fontSize: '20px', color: 'var(--primary-dark)', fontWeight: '600' }}>Student Portal Login</h2>
          <p style={{ fontSize: '13px', color: 'var(--text-gray)', marginTop: '5px' }}>Work Integrated Learning Programmes (WILP)</p>
        </div>

        {error && (
          <div style={{ backgroundColor: '#fdf2f2', border: '1px solid #f5c2c2', color: '#b91c1c', padding: '12px', borderRadius: '4px', fontSize: '13px', marginBottom: '20px', fontWeight: '500' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} autoComplete="off">
          {/* Hidden input to confuse chrome autofill */}
          <input style={{ display: 'none' }} type="text" name="fakeusername"/>
          <input style={{ display: 'none' }} type="password" name="fakepassword"/>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>Email Address</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="username@wilp.bits-pilani.ac.in"
              required
              autoComplete="new-password"
              style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none', fontSize: '14px', fontFamily: 'inherit' }}
            />
          </div>

          <div style={{ marginBottom: '25px' }}>
            <label htmlFor="password" style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-dark)', marginBottom: '8px' }}>Password</label>
            <input 
              type="password" 
              id="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="new-password"
              style={{ width: '100%', padding: '12px 15px', border: '1px solid var(--border-light)', borderRadius: '4px', outline: 'none', fontSize: '14px', fontFamily: 'inherit' }}
            />
          </div>

          <button 
            type="submit" 
            style={{ width: '100%', padding: '14px', backgroundColor: 'var(--primary-dark)', color: '#ffffff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px', cursor: 'pointer', transition: 'background-color 0.2s' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--secondary-blue)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--primary-dark)'}
          >
            LOG IN
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '25px', fontSize: '12px', color: 'var(--text-gray)', borderTop: '1px solid #f0f0f0', paddingTop: '20px' }}>
          <p>Please enter your corporate email address to log in.</p>
          <p style={{ marginTop: '5px' }}>Forgot Password? Contact BITS WILP Admin.</p>
        </div>

      </div>
    </div>
  );
}
