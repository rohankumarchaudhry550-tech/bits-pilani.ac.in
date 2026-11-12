import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export default function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    alert(`Thank you for your feedback, ${name}!`);
    setName('');
    setEmail('');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button 
        className="feedback_floating_btn"
        onClick={() => setIsOpen(true)}
      >
        FEEDBACK
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="feedback_modal_backdrop">
          <div className="feedback_modal">
            <span className="close_btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </span>
            
            <h3>Give us your feedback</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="feedback_form_group">
                <label htmlFor="fb_name">Name</label>
                <input 
                  type="text" 
                  id="fb_name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                />
              </div>

              <div className="feedback_form_group">
                <label htmlFor="fb_email">Email</label>
                <input 
                  type="email" 
                  id="fb_email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                />
              </div>

              <div className="feedback_form_group">
                <label htmlFor="fb_message">Message</label>
                <textarea 
                  id="fb_message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we improve the site?"
                />
              </div>

              <div className="feedback_form_group">
                <label htmlFor="fb_screenshot">Upload Screenshot (Optional)</label>
                <input type="file" id="fb_screenshot" style={{ border: 'none', padding: 0 }} />
              </div>

              <button type="submit" className="feedback_submit_btn">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
