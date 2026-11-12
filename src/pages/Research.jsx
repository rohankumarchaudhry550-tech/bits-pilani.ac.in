import React from 'react';

export default function Research() {
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <div className="subpage_header">
        <div className="container">
          <h1>Research & Innovation</h1>
          <div className="subpage_breadcrumbs">Home / Research</div>
        </div>
      </div>

      <div className="subpage_content">
        <div className="container">
          <div className="subpage_grid">
            
            <div>
              <div className="card_program">
                <h3>Overview of Research & Development</h3>
                <p>BITS Pilani strongly promotes active research. Research projects are funded by both government bodies (DST, DBT, CSIR, DRDO) and industrial collaborators. The university maintains robust support for publications, patents, and incubation ventures.</p>
              </div>

              <div className="card_program">
                <h3>Centers of Excellence (CoEs)</h3>
                <p>Our specialized research centers include the Center for Robotics, Center for Biotechnology, Center for Renewable Energy, and the advanced Nano-Technology Cleanrooms. These spaces support interdisciplinary research groups.</p>
              </div>

              <div className="card_program">
                <h3>Incubation & Entrepreneurship (TBI)</h3>
                <p>Through our Technology Business Incubators (TBI), we support student and faculty startup ventures, providing seed funding, office space, and mentoring from BITS alumni leaders.</p>
              </div>
            </div>

            <div className="campus_sidebar">
              <div className="campus_sidebar_widget">
                <h4>Research Metrics</h4>
                <div className="campus_sidebar_list" style={{ fontSize: '13.5px' }}>
                  <p><strong>Sponsored Projects:</strong> 350+ active grants</p>
                  <p><strong>Annual Funding:</strong> ₹60+ Crores</p>
                  <p><strong>Publications:</strong> 2500+ Scopus-indexed papers</p>
                  <p><strong>Patents Filed:</strong> 75+ in last 3 years</p>
                </div>
              </div>

              <div className="campus_sidebar_widget">
                <h4>Quick Actions</h4>
                <div className="campus_sidebar_list">
                  <a href="#">Apply for PhD Fellowships</a>
                  <a href="#">Submit Research Proposal</a>
                  <a href="#">TBI Startup Application</a>
                  <a href="#">Contact Dean of Research</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
