import React from 'react';
import { Link } from 'react-router-dom';

export default function BentoGrid() {
  const events = [
    { title: 'Advanced Instructional School on Harmonic Analysis and PDE', date: 'Dec 10 - Dec 28, 2026' },
    { title: 'Summer Workshop on Machine Learning & Analytics 2026', date: 'July 15 - July 22, 2026' },
    { title: 'National Seminar on GST 2.0: Effects on MSME (GSTREAM 2026)', date: 'June 05, 2026' },
    { title: 'Hands-on-Training on Sigmaplot 16 for Researchers', date: 'May 20, 2026' }
  ];

  return (
    <section className="bento_section">
      <div className="container">
        <h2 className="bento_title">Experience BITS Pilani</h2>
        <div className="bento_grid">
          
          {/* Tile 1: Research (spans 2 columns) */}
          <div 
            className="bento_card span-2" 
            style={{ 
              backgroundImage: `url('https://www.bits-pilani.ac.in/wp-content/uploads/Research.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bento_card_content">
              <h2>Research & Innovation</h2>
              <p>BITS Pilani is dedicated to pioneering research across biotechnology, computing, electronics, and humanities with state-of-the-art facilities.</p>
              <Link to="/research" style={{ color: 'var(--accent-gold-light)', fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>Explore Grants & Publications →</Link>
            </div>
          </div>

          {/* Tile 2: BITSAT Apply Now (Gold card, spans 1 row/col) */}
          <div 
            className="bento_card gold-accent"
            style={{ 
              backgroundImage: `url('https://www.bits-pilani.ac.in/wp-content/uploads/bitsat.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark overlay just for this image-backed card */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(181, 139, 42, 0.85)', zIndex: 1 }}></div>
            <div className="bento_card_content" style={{ zIndex: 2 }}>
              <h2>BITSAT 2026</h2>
              <p>Admissions open for First Degree Programmes</p>
              <a href="https://www.bitsadmission.com/" target="_blank" rel="noopener noreferrer" className="btn_apply">
                APPLY NOW
              </a>
            </div>
          </div>

          {/* Tile 3: Alumni */}
          <div 
            className="bento_card" 
            style={{ 
              backgroundImage: `url('https://www.bits-pilani.ac.in/wp-content/uploads/Explore.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bento_card_content">
              <h2>BITS Alumni</h2>
              <p>A global network of 180,000+ leaders, founders, and change-makers across industries.</p>
              <Link to="/alumni" style={{ color: '#fff', textDecoration: 'underline', fontSize: '13px' }}>Connect with Alumni</Link>
            </div>
          </div>

          {/* Tile 4: Events (Text-card, lists active events) */}
          <div className="bento_card text-card row-2">
            <h2>Upcoming Events</h2>
            <div className="bento_events_list">
              {events.map((evt, idx) => (
                <div key={idx} className="bento_event_item">
                  <a href={`/events#${idx}`}>{evt.title}</a>
                  <span>{evt.date}</span>
                </div>
              ))}
            </div>
            <Link to="/events" style={{ color: 'var(--secondary-blue)', fontWeight: '600', fontSize: '13px', marginTop: 'auto' }}>All Events →</Link>
          </div>

          {/* Tile 5: Practice School */}
          <div 
            className="bento_card" 
            style={{ 
              backgroundImage: `url('https://www.bits-pilani.ac.in/wp-content/uploads/Divisions.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bento_card_content">
              <h2>Practice School</h2>
              <p>Connecting classroom learning with industry experience through structured internships at top global corporations.</p>
            </div>
          </div>

          {/* Tile 6: Student Welfare */}
          <div 
            className="bento_card" 
            style={{ 
              backgroundImage: `url('https://www.bits-pilani.ac.in/wp-content/uploads/Departments.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bento_card_content">
              <h2>Student Welfare</h2>
              <p>Supporting personal and professional growth with comprehensive counseling and vibrant campus housing.</p>
            </div>
          </div>

          {/* Tile 7: Placements */}
          <div 
            className="bento_card span-2" 
            style={{ 
              backgroundImage: `url('https://www.bits-pilani.ac.in/wp-content/uploads/sponsored_projects-2-1.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bento_card_content">
              <h2>Global Placements</h2>
              <p>Top multinational corporations recruit annually from BITS campuses, with average salary packages and placement rates among the highest in the nation.</p>
              <a href="https://www.bits-pilani.ac.in/placements/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold-light)', fontWeight: 'bold' }}>View Placement Report →</a>
            </div>
          </div>

          {/* Tile 8: Life @ BITS */}
          <div 
            className="bento_card" 
            style={{ 
              backgroundImage: `url('https://www.bits-pilani.ac.in/wp-content/uploads/Student-Event-1-1.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="bento_card_content">
              <h2>Life @ BITS</h2>
              <p>Explore cultural fests, sports tournaments, and student clubs that shape a well-rounded graduate.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
