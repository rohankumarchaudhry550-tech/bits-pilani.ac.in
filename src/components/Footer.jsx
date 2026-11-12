import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_grid">
          
          <div className="footer_col">
            <h3>Campuses</h3>
            <div className="footer_links">
              <Link to="/campus/pilani">Pilani Campus</Link>
              <Link to="/campus/goa">K K Birla Goa Campus</Link>
              <Link to="/campus/hyderabad">Hyderabad Campus</Link>
              <Link to="/campus/dubai">Dubai Campus</Link>
              <Link to="/campus/mumbai">Mumbai Campus</Link>
            </div>
          </div>

          <div className="footer_col">
            <h3>Academics</h3>
            <div className="footer_links">
              <Link to="/academics">Integrated First Degree</Link>
              <Link to="/academics">Higher Degree</Link>
              <Link to="/academics">Doctoral Programmes</Link>
              <a href="https://bits-pilani-wilp.ac.in/" target="_blank" rel="noopener noreferrer">WILP (Work Professional)</a>
              <a href="https://www.bitsadmission.com/" target="_blank" rel="noopener noreferrer">BITSAT admissions</a>
            </div>
          </div>

          <div className="footer_col">
            <h3>Resources</h3>
            <div className="footer_links">
              <Link to="/research">Research & Publications</Link>
              <a href="https://www.bits-pilani.ac.in/placements/" target="_blank" rel="noopener noreferrer">Placements</a>
              <Link to="/departments">Departments Directory</Link>
              <a href="https://www.bits-pilani.ac.in/careers/" target="_blank" rel="noopener noreferrer">Careers @ BITS</a>
              <a href="https://www.bits-pilani.ac.in/contact-us/" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </div>
          </div>

          <div className="footer_col">
            <h3>Follow Us</h3>
            <p style={{ marginBottom: '15px', color: 'rgba(255,255,255,0.6)', fontSize: '13px' }}>
              Birla Institute of Technology and Science, Pilani. An Institution of Eminence.
            </p>
            <img 
              src="https://www.bits-pilani.ac.in/wp-content/uploads/bits-pillani-white-2.webp" 
              alt="BITS Logo" 
              style={{ height: '45px', filter: 'brightness(0.9)', marginBottom: '15px' }} 
            />
          </div>

        </div>
        
        <div className="footer_bottom">
          <p>© {new Date().getFullYear()} Birla Institute of Technology & Science, Pilani. All Rights Reserved.</p>
          <p style={{ marginTop: '5px', opacity: 0.5 }}>Cloned for representation and development demonstration purposes.</p>
        </div>
      </div>
    </footer>
  );
}
