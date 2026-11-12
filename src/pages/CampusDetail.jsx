import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function CampusDetail() {
  const { id } = useParams();

  const campusData = {
    pilani: {
      name: 'BITS Pilani, Pilani Campus',
      tagline: 'The Mother Campus - Est. 1964',
      bg: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200',
      description: 'The historic Pilani campus is spread over 328 acres of lush green landscaping, hosting world-class infrastructure, the iconic Birla Temple, and the state-of-the-art biological sciences and engineering labs. It has been a pioneer in higher education since its establishment in 1964.',
      stats: { students: '5,000+', area: '328 Acres', faculty: '350+' },
      gallery: [
        'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=400',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400',
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400'
      ],
      departments: ['Computer Science & Information Systems', 'Electrical & Electronics Engineering', 'Mechanical Engineering', 'Chemical Engineering', 'Civil Engineering', 'Biological Sciences', 'Mathematics', 'Physics', 'Chemistry', 'Humanities & Social Sciences']
    },
    goa: {
      name: 'BITS Pilani, K K Birla Goa Campus',
      tagline: 'Excellence by the Coast - Est. 2004',
      bg: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200',
      description: 'Located in Zuarinagar, Goa, on the banks of the scenic Zuari River, this campus provides a vibrant, modern learning environment. Spread over 180 acres, the campus represents a perfect blend of high academic rigor and dynamic coastal student life.',
      stats: { students: '4,000+', area: '180 Acres', faculty: '280+' },
      gallery: [
        'https://images.unsplash.com/photo-1498243691581-b145c3f54a91?q=80&w=400',
        'https://images.unsplash.com/photo-1525921429624-479b6c294b4e?q=80&w=400',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400'
      ],
      departments: ['Computer Science', 'Electrical & Electronics', 'Mechanical Engineering', 'Chemical Engineering', 'Biological Sciences', 'Chemistry', 'Mathematics', 'Physics', 'Humanities & Economics']
    },
    hyderabad: {
      name: 'BITS Pilani, Hyderabad Campus',
      tagline: 'Innovation & Research Hub - Est. 2008',
      bg: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200',
      description: 'Spread over 200 acres in Jawaharnagar, Hyderabad, this campus is recognized for its extensive research incubation centers, massive green cover, and close industrial ties with Hyderabad\'s tech and pharma corridors.',
      stats: { students: '4,500+', area: '200 Acres', faculty: '300+' },
      gallery: [
        'https://images.unsplash.com/photo-1521791136368-1a46827d0af1?q=80&w=400',
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400',
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400'
      ],
      departments: ['Computer Science & IS', 'Electrical & Electronics', 'Mechanical Engineering', 'Chemical Engineering', 'Civil Engineering', 'Biological Sciences', 'Pharmacy', 'Chemistry', 'Mathematics', 'Physics', 'Humanities']
    },
    dubai: {
      name: 'BITS Pilani, Dubai Campus',
      tagline: 'Global Footprint in the UAE - Est. 2000',
      bg: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200',
      description: 'Located in the Dubai International Academic City, the Dubai Campus is the international branch of BITS Pilani. It offers premier engineering and management programs designed for global business and engineering contexts.',
      stats: { students: '1,500+', area: '15 Acres', faculty: '100+' },
      gallery: [
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=400',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=400',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=400'
      ],
      departments: ['Computer Science', 'Electrical & Electronics', 'Mechanical Engineering', 'Chemical Engineering', 'Civil Engineering', 'Biotechnology', 'General Sciences', 'Humanities & Social Sciences']
    },
    mumbai: {
      name: 'BITS Kalyan & Mumbai Campuses',
      tagline: 'Executive & Professional Education',
      bg: 'https://images.unsplash.com/photo-1525921429624-479b6c294b4e?q=80&w=1200',
      description: 'Hosting specialized postgraduate and professional programs, the Mumbai centers (including BITSoM, BITSLAW, and BITSDES) focus on next-generation business leadership, design thinking, and corporate law.',
      stats: { students: '800+', area: 'State-of-the-art City Campus', faculty: '50+' },
      gallery: [
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400',
        'https://images.unsplash.com/photo-1521791136368-1a46827d0af1?q=80&w=400',
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400'
      ],
      departments: ['BITS School of Management (BITSoM)', 'BITS Law School (BITSLAW)', 'BITS Design School (BITSDES)']
    }
  };

  const campus = campusData[id] || campusData.pilani;

  return (
    <div style={{ backgroundColor: '#fff' }}>
      {/* Campus Hero */}
      <div className="campus_portal_hero" style={{ backgroundImage: `url(${campus.bg})` }}>
        <div className="container">
          <div className="campus_hero_content">
            <h1>{campus.name}</h1>
            <p>{campus.tagline}</p>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="stats_section" style={{ padding: '30px 0', borderTop: 'none' }}>
        <div className="container">
          <div className="stats_grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="stats_card">
              <h1 style={{ fontSize: '32px' }}>{campus.stats.students}</h1>
              <p>Students</p>
            </div>
            <div className="stats_card">
              <h1 style={{ fontSize: '32px' }}>{campus.stats.area}</h1>
              <p>Campus Area</p>
            </div>
            <div className="stats_card">
              <h1 style={{ fontSize: '32px' }}>{campus.stats.faculty}</h1>
              <p>Faculty Members</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="campus_details_section">
        <div className="container">
          <div className="campus_details_grid">
            
            {/* Main description */}
            <div className="campus_main_info">
              <h3>Overview</h3>
              <p>{campus.description}</p>
              <p>With an emphasis on student-led initiatives, top-tier research projects, and robust practice school programs, the campus creates an ecosystem that produces industry leaders, successful startup founders, and distinguished researchers.</p>
              
              <div className="campus_gallery">
                <h3>Campus Gallery</h3>
                <div className="campus_gallery_grid">
                  {campus.gallery.map((img, idx) => (
                    <img key={idx} src={img} alt={`Campus view ${idx+1}`} />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar widgets */}
            <div className="campus_sidebar">
              <div className="campus_sidebar_widget">
                <h4>Departments</h4>
                <div className="campus_sidebar_list">
                  {campus.departments.map((dept, idx) => (
                    <Link key={idx} to="/departments">{dept}</Link>
                  ))}
                </div>
              </div>

              <div className="campus_sidebar_widget">
                <h4>Quick Actions</h4>
                <div className="campus_sidebar_list">
                  <a href="https://www.bitsadmission.com/" target="_blank" rel="noopener noreferrer">Apply for Admission</a>
                  <Link to="/academics">Program Curriculum</Link>
                  <a href="https://www.bits-pilani.ac.in/placements/" target="_blank" rel="noopener noreferrer">Placement Cells</a>
                  <Link to="/contact-us">Reach the Campus</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
