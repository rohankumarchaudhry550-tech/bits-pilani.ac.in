import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaCaretDown, FaUser, FaTimes } from 'react-icons/fa';
import DropdownMenu from './DropdownMenu';

export default function Header() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [campusMenuOpen, setCampusMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  const checkAuth = () => {
    const logged = localStorage.getItem('studentLoggedIn') === 'true';
    setIsLoggedIn(logged);
    if (logged) {
      setStudentName(localStorage.getItem('studentName') || 'Student');
    } else {
      setStudentName('');
    }
  };

  useEffect(() => {
    checkAuth();
    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('studentLoggedIn');
    localStorage.removeItem('studentEmail');
    localStorage.removeItem('studentName');
    localStorage.removeItem('studentRoll');
    localStorage.removeItem('corporatePartner');
    setIsLoggedIn(false);
    setStudentName('');
    navigate('/studentlogin');
  };

  const mainNavItems = [
    { label: 'HOME', path: '/' },
    { label: 'ACADEMICS', id: 'academics' },
    { label: 'ADMISSION', id: 'admission' },
    { label: 'RESEARCH & INNOVATION', id: 'research' },
    { label: 'DEPARTMENT', id: 'department' },
    { label: 'FACULTY', id: 'faculty' },
    { label: 'STUDENTS', id: 'students' },
    { label: 'ALUMNI', path: '/alumni', ext: 'https://www.bits-pilani.ac.in/alumni/' }
  ];

  return (
    <header className={exploreOpen ? 'menu_open09' : ''}>
      {/* 1. Top Bar */}
      <div className="h-links_row">
        <div className="container">
          <div className="top_nav">
            <a href="https://www.bits-pilani.ac.in/about/bits-foundation/" target="_blank" rel="noopener noreferrer">ABOUT</a>
            <a href="https://bits-pilani-wilp.ac.in/" target="_blank" rel="noopener noreferrer">WILP</a>
            <a href="https://www.bits-pilani.ac.in/placements/" target="_blank" rel="noopener noreferrer">PLACEMENTS</a>
            <a href="https://admissions.bits-pilani.ac.in/" target="_blank" rel="noopener noreferrer" className="top_nav_bitsat">BITSAT</a>
            <a href="https://www.bits-pilani.ac.in/practice-school/" target="_blank" rel="noopener noreferrer">PRACTICE SCHOOL</a>
            <a href="https://www.bits-pilani.ac.in/careers/" target="_blank" rel="noopener noreferrer">CAREER</a>
            <a href="https://www.bits-pilani.ac.in/ipcd-overview/" target="_blank" rel="noopener noreferrer">INTERNATIONALIZATION</a>
            <a href="https://www.bits-pilani.ac.in/contact-us/" target="_blank" rel="noopener noreferrer" className="top_nav_contact">CONTACT</a>
          </div>
          
          <div className="top_nav_right">
            {isLoggedIn && (
              <div className="top_student_auth">
                <span className="student_name_label">
                  Welcome, {studentName}
                </span>
                <Link to="/dashboard" className="student_dash_link">PORTAL DASHBOARD</Link>
                <button onClick={handleLogout} className="student_logout_btn">LOGOUT</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. Middle Row: Brand Logo, Select Campus, Search, Explore */}
      <div className="logo-row">
        <div className="container logo_row_container">
          
          {/* Logo on the left */}
          <div className="logo_info_box">
            <Link to="/">
              <img 
                src="https://www.bits-pilani.ac.in/wp-content/uploads/bits-pillani-2-1.webp" 
                alt="BITS Pilani - Institute of Eminence Logo" 
                className="bits_colored_logo"
              />
            </Link>
          </div>

          {/* Select Campus (Middle Pill button) */}
          <div 
            className="campus_dropdown_middle"
            onMouseEnter={() => setCampusMenuOpen(true)}
            onMouseLeave={() => setCampusMenuOpen(false)}
          >
            <button className="select_campus_pill_btn">
              SELECT CAMPUS <FaCaretDown className="red_caret" />
            </button>
            {campusMenuOpen && (
              <ul className="campus_menu_dropdown">
                <li><Link to="/">University Home</Link></li>
                <li><a href="https://www.bits-pilani.ac.in/pilani/" target="_blank" rel="noopener noreferrer">Pilani Campus</a></li>
                <li><a href="https://www.bits-pilani.ac.in/goa/" target="_blank" rel="noopener noreferrer">K K Birla Goa Campus</a></li>
                <li><a href="https://www.bits-pilani.ac.in/hyderabad/" target="_blank" rel="noopener noreferrer">Hyderabad Campus</a></li>
                <li><a href="https://www.bits-pilani.ac.in/dubai/" target="_blank" rel="noopener noreferrer">Dubai Campus</a></li>
                <li><a href="https://www.bitsom.edu.in/" target="_blank" rel="noopener noreferrer">BITSoM, Mumbai Campus</a></li>
              </ul>
            )}
          </div>

          {/* Search bar & Explore on the right */}
          <div className="header_right_wrapper">
            {/* Search Pill Input */}
            <div className="search_pill_container">
              <input 
                type="text" 
                placeholder="Enter your search" 
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && alert(`Searching for: ${searchVal}`)}
              />
              <FaSearch className="search_icon_btn" onClick={() => alert(`Searching for: ${searchVal}`)} />
            </div>

            {/* Hamburger Explore Menu (Toggles open/close state exactly like BITS) */}
            <div 
              className={`explore_hamburger_btn menu_btn sidemenu_btn ${exploreOpen ? 'click' : ''}`} 
              onClick={() => setExploreOpen(!exploreOpen)}
            >
              <div className="burger_lines menu_btn_click">
                <span className="burger_line blue"></span>
                <span className="burger_line red"></span>
                <span className="burger_line gold"></span>
              </div>
              <span className="explore_text">EXPLORE</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Main Navigation Row */}
      <nav className="secondreader_nav">
        <div className="container">
          <ul className="header_nav">
            {mainNavItems.map((item, idx) => (
              <li 
                key={idx} 
                className="header_nav_lk"
                onMouseEnter={() => item.id && setActiveMenu(item.id)}
                onMouseLeave={() => item.id && setActiveMenu(null)}
              >
                {item.path ? (
                  item.ext ? (
                    <a className="nav_indg" href={item.ext} target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <Link className="nav_indg" to={item.path}>
                      {item.label}
                    </Link>
                  )
                ) : (
                  <span className="nav_indg">
                    {item.label}
                  </span>
                )}

                {item.id && activeMenu === item.id && (
                  <DropdownMenu menuId={item.id} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 4. Orange Scholarship Announcement Bar */}
      <div className="scholarship_announcement_bar">
        <div className="container">
          <span>NEW SCHOLARSHIPS BITSAT 2026</span>
        </div>
      </div>

      {/* 5. Slide-down Explore Drawer (sidebar09 - Covers page, opens below header) */}
      <div className={`sidebar09 ${exploreOpen ? 'show' : ''}`}>
        <div className="sidebar09_row">
          <div className="container sidebar_container_flex">
            
            {/* Left Column half */}
            <div className="sidebar09_col_sm">
              <div className="sidebar_inner_columns">
                
                {/* Campus Column */}
                <div className="innav_col">
                  <div className="innav_hd">Campus</div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/pilani/" target="_blank" rel="noopener noreferrer">Pilani</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/dubai/" target="_blank" rel="noopener noreferrer">Dubai</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/goa/" target="_blank" rel="noopener noreferrer">K K Birla Goa</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/hyderabad/" target="_blank" rel="noopener noreferrer">Hyderabad</a></div>
                  <div className="innav_l"><a href="https://www.bitsom.edu.in/" target="_blank" rel="noopener noreferrer">BITSoM, Mumbai</a></div>
                  <div className="innav_l"><a href="https://www.bitslawschool.edu.in/" target="_blank" rel="noopener noreferrer">BITSLAW, Mumbai</a></div>
                  <div className="innav_l"><a href="https://www.bitsdesign.edu.in/" target="_blank" rel="noopener noreferrer">BITSDES, Mumbai</a></div>
                </div>

                {/* Links For Column */}
                <div className="innav_col">
                  <div className="innav_hd">Links For</div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/bits-library/" target="_blank" rel="noopener noreferrer">BITS Library</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/admissions/" target="_blank" rel="noopener noreferrer">Admissions</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/faculty/" target="_blank" rel="noopener noreferrer">Faculty</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/practice-school/" target="_blank" rel="noopener noreferrer">Practice School</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/placements/" target="_blank" rel="noopener noreferrer">Placements</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/student-arena/" target="_blank" rel="noopener noreferrer">Student Arena</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/careers/" target="_blank" rel="noopener noreferrer">Career</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/news/" target="_blank" rel="noopener noreferrer">News</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/alumni/" target="_blank" rel="noopener noreferrer">Alumni</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/ipcd-overview/" target="_blank" rel="noopener noreferrer">Internationalization</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/events/" target="_blank" rel="noopener noreferrer">Events</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/mous/" target="_blank" rel="noopener noreferrer">MOUs</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/current-students/" target="_blank" rel="noopener noreferrer">Current Students</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/invest-in-leaders/" target="_blank" rel="noopener noreferrer">Invest in Leaders</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/outreach/" target="_blank" rel="noopener noreferrer">Outreach</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/picture-gallery/" target="_blank" rel="noopener noreferrer">Picture Gallery</a></div>
                </div>

                {/* Admission Column */}
                <div className="innav_col">
                  <div className="innav_hd">Admission</div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/admissions/integrated-first-degree/" target="_blank" rel="noopener noreferrer">Integrated first degree</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/admissions/higher-degree-hd-program/" target="_blank" rel="noopener noreferrer">Higher degree</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/admissions/doctoral-program-phd/" target="_blank" rel="noopener noreferrer">Doctorol programmes</a></div>
                  <div className="innav_l"><a href="http://sites.bits-hyderabad.ac.in/internationalstuadm/" target="_blank" rel="noopener noreferrer">International Admissions</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/admissions/online-programme/bachelor-of-science-in-computer-science/" target="_blank" rel="noopener noreferrer">Online Admissions</a></div>
                </div>

              </div>
            </div>

            {/* Right Column half */}
            <div className="sidebar09_col_sm">
              <div className="sidebar_inner_columns">
                
                {/* BITSAT Column */}
                <div className="innav_col">
                  <div className="innav_hd"><a href="https://www.bits-pilani.ac.in/bitsat" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>BITSAT</a></div>
                  <div className="innav_l" style={{ marginTop: '10px' }}>
                    <a href="https://www.bitsadmission.com/" target="_blank" rel="noopener noreferrer" style={{ background: '#e31e24', color: '#ffffff', padding: '6px 12px', borderRadius: '3px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block' }}>
                      Apply Now →
                    </a>
                  </div>
                </div>

                {/* Important Contacts Column */}
                <div className="innav_col">
                  <div className="innav_hd">IMPORTANT CONTACTS</div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/contact-us-detail/?campus=pilani" target="_blank" rel="noopener noreferrer">Pilani</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/contact-us-detail/?campus=dubai" target="_blank" rel="noopener noreferrer">Dubai</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/contact-us-detail/?campus=goa" target="_blank" rel="noopener noreferrer">Goa</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/contact-us-detail/?campus=hyderabad" target="_blank" rel="noopener noreferrer">Hyderabad</a></div>
                </div>

                {/* Research & Innovation Column */}
                <div className="innav_col">
                  <div className="innav_hd">RESEARCH & INNOVATION</div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/research/home/" target="_blank" rel="noopener noreferrer">R&I Home</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/research/grants/" target="_blank" rel="noopener noreferrer">Grants</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/research/research-publications/" target="_blank" rel="noopener noreferrer">Publications</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/research/patents/" target="_blank" rel="noopener noreferrer">Patents</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/research/facilities/" target="_blank" rel="noopener noreferrer">Facilities</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/research/coe/" target="_blank" rel="noopener noreferrer">CoE</a></div>
                  <div className="innav_l"><a href="https://www.bits-pilani.ac.in/research/iic/" target="_blank" rel="noopener noreferrer">IIC</a></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
