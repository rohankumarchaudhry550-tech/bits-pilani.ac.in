import React from 'react';

export default function Admissions() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div className="subpage_header">
        <div className="container">
          <h1>Admissions</h1>
          <div className="subpage_breadcrumbs">Home / Admissions</div>
        </div>
      </div>

      <div className="subpage_content">
        <div className="container">
          <div className="subpage_grid">
            
            <div>
              <div className="card_program">
                <h3>Integrated First Degree Programmes</h3>
                <p>Applications for admission to B.E., B.Pharm., and M.Sc. programmes at Pilani, Goa, and Hyderabad campuses are done through the BITSAT entrance test.</p>
                <div className="card_program_meta">
                  <span>Eligibility: 12th Standard (PCM/PCB)</span>
                  <span>Entrance: BITSAT 2026</span>
                </div>
              </div>

              <div className="card_program">
                <h3>Higher Degree Programmes</h3>
                <p>Admissions to M.E. and M.Pharm. programmes are based on BITS HD Online Test scores or GATE/GPAT scores.</p>
                <div className="card_program_meta">
                  <span>Eligibility: B.E. / B.Pharm / Equivalent</span>
                  <span>Entrance: BITS HD Test / GATE / GPAT</span>
                </div>
              </div>

              <div className="card_program">
                <h3>Doctoral Programmes (Ph.D.)</h3>
                <p>BITS Pilani offers Ph.D. programmes under Full-Time and Part-Time schemes across all science, engineering, and humanities departments.</p>
                <div className="card_program_meta">
                  <span>Eligibility: Master's Degree</span>
                  <span>Process: Written Test & Interview</span>
                </div>
              </div>

              <div className="card_program">
                <h3>Work Integrated Learning Programmes (WILP)</h3>
                <p>Unique degree programs specifically designed for working professionals to upgrade their skills without taking a break from their careers.</p>
                <div className="card_program_meta">
                  <span>Eligibility: Employed Professionals</span>
                  <span>Process: Work profile assessment</span>
                </div>
              </div>
            </div>

            <div className="campus_sidebar">
              <div className="campus_sidebar_widget">
                <h4>BITSAT Info</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginBottom: '15px' }}>
                  BITSAT is a computer-based online test for admission to Integrated First Degree Programmes.
                </p>
                <div className="campus_sidebar_list">
                  <a href="https://www.bitsadmission.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary-blue)' }}>Register for BITSAT 2026</a>
                  <a href="https://www.bitsadmission.com/" target="_blank" rel="noopener noreferrer">Exam Syllabus & Pattern</a>
                  <a href="https://www.bitsadmission.com/" target="_blank" rel="noopener noreferrer">Important Admission Deadlines</a>
                </div>
              </div>

              <div className="campus_sidebar_widget">
                <h4>Admission Offices</h4>
                <div className="campus_sidebar_list" style={{ fontSize: '13px', color: 'var(--text-gray)' }}>
                  <p><strong>Pilani Campus:</strong> +91-1596-242205</p>
                  <p><strong>Goa Campus:</strong> +91-832-2580126</p>
                  <p><strong>Hyderabad Campus:</strong> +91-40-66303830</p>
                  <p><strong>Dubai Campus:</strong> +971-4-2753700</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
