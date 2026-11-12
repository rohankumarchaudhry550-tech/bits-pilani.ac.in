import React from 'react';

export default function Academics() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div className="subpage_header">
        <div className="container">
          <h1>Academics</h1>
          <div className="subpage_breadcrumbs">Home / Academics</div>
        </div>
      </div>

      <div className="subpage_content">
        <div className="container">
          <div className="subpage_grid">
            
            <div>
              <div className="card_program">
                <h3>Our Pedagogical Approach</h3>
                <p>BITS Pilani’s educational model is based on flexibility, autonomy, and strong industry partnerships. Students benefit from option-based curriculums, elective streams, double degrees, and the unique Practice School internship programs that prepare them for success on day one.</p>
              </div>

              <div className="card_program">
                <h3>Undergraduate Programmes (B.E. Hons.)</h3>
                <p>Offered in Computer Science, Electrical & Electronics, Electronics & Instrumentation, Mechanical, Chemical, Civil, and Biotechnology. The curriculum integrates core engineering courses, technical electives, and humanities projects.</p>
              </div>

              <div className="card_program">
                <h3>Science and Pharmacy Programmes (M.Sc. / B.Pharm)</h3>
                <p>Integrated M.Sc. programmes in Physics, Chemistry, Mathematics, Biological Sciences, and Economics, alongside a comprehensive Bachelor of Pharmacy programme.</p>
              </div>

              <div className="card_program">
                <h3>Postgraduate Masters (M.E. / M.Pharm / MBA)</h3>
                <p>High-level specialized degrees matching industry requirements, featuring research theses or industrial practice options.</p>
              </div>
            </div>

            <div className="campus_sidebar">
              <div className="campus_sidebar_widget">
                <h4>Academic Structure</h4>
                <div className="campus_sidebar_list">
                  <a href="#">Academic Calendar 2026-27</a>
                  <a href="#">Bulletin & Course Catalogs</a>
                  <a href="#">Dual Degree Options</a>
                  <a href="#">Practice School Guidelines</a>
                </div>
              </div>

              <div className="campus_sidebar_widget">
                <h4>Key Features</h4>
                <ul style={{ fontSize: '13px', color: 'var(--text-gray)', paddingLeft: '15px', listStyleType: 'disc' }}>
                  <li style={{ marginBottom: '10px' }}><strong>Flexibility:</strong> Zero-attendance requirements (on selected courses) and customizable course tables.</li>
                  <li style={{ marginBottom: '10px' }}><strong>Industry Practice:</strong> Dual internship terms of 7.5 months in total.</li>
                  <li><strong>Research Focus:</strong> Mandatory projects and experimental design courses.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
