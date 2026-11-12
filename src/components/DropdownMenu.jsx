import React from 'react';
import { Link } from 'react-router-dom';

export default function DropdownMenu({ menuId }) {
  
  // 1. Sidebar-Tab Megamenus (Academics, Admission, Research)
  const tabMenuData = {
    academics: {
      tabs: ['Integrated First Degree', 'Higher Degree', 'Doctoral Programmes', 'WILP', 'Dubai Campus'],
      content: [
        [
          { label: 'B.E. Computer Science', path: 'https://www.bits-pilani.ac.in/pilani/computer-science-information-systems/' },
          { label: 'B.E. Electrical & Electronics', path: 'https://www.bits-pilani.ac.in/pilani/electrical-and-electronics-engineering/' },
          { label: 'B.E. Mechanical Engineering', path: 'https://www.bits-pilani.ac.in/pilani/mechanical-engineering/' },
          { label: 'B.E. Chemical Engineering', path: 'https://www.bits-pilani.ac.in/pilani/chemical-engineering/' },
          { label: 'B.E. Civil Engineering', path: 'https://www.bits-pilani.ac.in/pilani/civil-engineering/' },
          { label: 'B.E. Biotechnology', path: 'https://www.bits-pilani.ac.in/pilani/biological-sciences/' },
          { label: 'M.Sc. Biological Sciences', path: 'https://www.bits-pilani.ac.in/pilani/biological-sciences/' },
          { label: 'M.Sc. Chemistry', path: 'https://www.bits-pilani.ac.in/pilani/chemistry/' },
          { label: 'M.Sc. Mathematics', path: 'https://www.bits-pilani.ac.in/pilani/mathematics/' },
          { label: 'M.Sc. Physics', path: 'https://www.bits-pilani.ac.in/pilani/physics/' },
          { label: 'M.Sc. Economics', path: 'https://www.bits-pilani.ac.in/pilani/economics-and-finance/' },
          { label: 'B.Pharm. (Pharmacy)', path: 'https://www.bits-pilani.ac.in/pilani/pharmacy/' }
        ],
        [
          { label: 'M.E. Software Systems', path: 'https://www.bits-pilani.ac.in/academics/higher-degree/' },
          { label: 'M.E. Microelectronics', path: 'https://www.bits-pilani.ac.in/academics/higher-degree/' },
          { label: 'M.E. Embedded Systems', path: 'https://www.bits-pilani.ac.in/academics/higher-degree/' },
          { label: 'M.E. Biotechnology', path: 'https://www.bits-pilani.ac.in/academics/higher-degree/' },
          { label: 'M.E. Communication Engineering', path: 'https://www.bits-pilani.ac.in/academics/higher-degree/' },
          { label: 'M.E. Design Engineering', path: 'https://www.bits-pilani.ac.in/academics/higher-degree/' },
          { label: 'M.Pharm. (Pharmacy)', path: 'https://www.bits-pilani.ac.in/academics/higher-degree/m-pharma-pharmacy/' },
          { label: 'MBA in Business Analytics', path: 'https://www.bits-pilani.ac.in/academics/higher-degree/mba-master-of-business-administration-in-business-analytics/' },
          { label: 'Master in Public Health', path: 'https://www.bits-pilani.ac.in/academics/higher-degree/master-in-public-health/' }
        ],
        [
          { label: 'PhD in Biological Sciences', path: 'https://www.bits-pilani.ac.in/academics/doctoral-programmes/phd-biological-sciences/' },
          { label: 'PhD in Chemical Engineering', path: 'https://www.bits-pilani.ac.in/academics/doctoral-programmes/phd-chemical-engineering/' },
          { label: 'PhD in Chemistry', path: 'https://www.bits-pilani.ac.in/academics/doctoral-programmes/phd-chemistry/' },
          { label: 'PhD in Civil Engineering', path: 'https://www.bits-pilani.ac.in/academics/doctoral-programmes/phd-civil-engineering/' },
          { label: 'PhD in Computer Science', path: 'https://www.bits-pilani.ac.in/academics/doctoral-programmes/phd-computer-science-information-systems/' },
          { label: 'PhD in Electrical & Electronics', path: 'https://www.bits-pilani.ac.in/academics/doctoral-programmes/phd-electrical-electronics-engineering/' },
          { label: 'PhD in Humanities & Social Sciences', path: 'https://www.bits-pilani.ac.in/academics/doctoral-programmes/phd-humanities-social-sciences/' },
          { label: 'PhD in Mathematics', path: 'https://www.bits-pilani.ac.in/academics/doctoral-programmes/phd-mathematics/' },
          { label: 'PhD in Management', path: 'https://www.bits-pilani.ac.in/academics/doctoral-programmes/phd-management/' }
        ],
        [
          { label: 'B.Tech for Working Professionals', path: 'https://bits-pilani-wilp.ac.in/' },
          { label: 'M.Tech in Software Systems', path: 'https://bits-pilani-wilp.ac.in/' },
          { label: 'M.Tech in Data Science', path: 'https://bits-pilani-wilp.ac.in/' },
          { label: 'M.Tech in AI & ML', path: 'https://bits-pilani-wilp.ac.in/' },
          { label: 'M.Tech in Manufacturing Systems', path: 'https://bits-pilani-wilp.ac.in/' },
          { label: 'Post Graduate Diplomas', path: 'https://bits-pilani-wilp.ac.in/' }
        ],
        [
          { label: 'Bachelor of Engineering (Dubai)', path: 'https://www.bits-dubai.ac.ae/admissions/be/' },
          { label: 'Master of Engineering (Dubai)', path: 'https://www.bits-dubai.ac.ae/admissions/me/' },
          { label: 'Master of Business Administration', path: 'https://www.bits-dubai.ac.ae/admissions/mba/' },
          { label: 'Doctor of Philosophy (Dubai)', path: 'https://www.bits-dubai.ac.ae/admissions/phd/' }
        ]
      ]
    },
    admission: {
      tabs: ['On Campus: India', 'Work Integrated Learning (WILP)', 'Dubai Campus', 'Mumbai Campus'],
      content: [
        [
          { label: 'BITSAT Admission Portal', path: 'https://www.bitsadmission.com/' },
          { label: 'First Degree (B.E./M.Sc.) Admission', path: 'https://www.bitsadmission.com/' },
          { label: 'Higher Degree (M.E./M.Pharm.) Admission', path: 'https://www.bitsadmission.com/' },
          { label: 'Ph.D. Programme Admission', path: 'https://www.bitsadmission.com/' },
          { label: 'International Student Admissions', path: 'https://www.bitsadmission.com/' },
          { label: 'MBA Business Analytics Admissions', path: 'https://www.bitsadmission.com/' }
        ],
        [
          { label: 'Admission Deadlines & Apply', path: 'https://wilpadmissions.bits-pilani.ac.in/' },
          { label: 'Corporate Collaborations', path: 'https://bits-pilani-wilp.ac.in/' },
          { label: 'Program Finder & Eligibility', path: 'https://bits-pilani-wilp.ac.in/' }
        ],
        [
          { label: 'Bachelor of Engineering Admissions', path: 'https://www.bits-dubai.ac.ae/admissions/' },
          { label: 'Master of Engineering Admissions', path: 'https://www.bits-dubai.ac.ae/admissions/' },
          { label: 'MBA Admissions', path: 'https://www.bits-dubai.ac.ae/admissions/' },
          { label: 'Doctoral Programme (Ph.D.) Admissions', path: 'https://www.bits-dubai.ac.ae/admissions/' }
        ],
        [
          { label: 'BITS School of Management (BITSoM) MBA', path: 'https://www.bitsom.edu.in/' },
          { label: 'BITS Law School (BITSLAW) BA/BBA LLB', path: 'https://www.bitslawschool.edu.in/' },
          { label: 'BITS Design School (BITSDES) B.Des', path: 'https://www.bitsdesign.edu.in/' }
        ]
      ]
    },
    research: {
      tabs: ['Research & Innovation Overview', 'Research Resources'],
      content: [
        [
          { label: 'Research Home & Impact', path: 'https://www.bits-pilani.ac.in/research/home/' },
          { label: 'Sponsored Projects', path: 'https://www.bits-pilani.ac.in/research/grants/' },
          { label: 'Research Publications', path: 'https://www.bits-pilani.ac.in/research/publications/' },
          { label: 'Patents and IP Licensing', path: 'https://www.bits-pilani.ac.in/research/patents/' },
          { label: 'Centers of Excellence (CoE)', path: 'https://www.bits-pilani.ac.in/research/coe/' }
        ],
        [
          { label: 'Research Facilities', path: 'https://www.bits-pilani.ac.in/research/facilities/' },
          { label: 'Institutional Ethics Committee', path: 'https://www.bits-pilani.ac.in/research/ipec/' },
          { label: 'Technology Transfer Office (TTO)', path: 'https://www.bits-pilani.ac.in/research/tto/' },
          { label: 'Technology Business Incubator (TBI)', path: 'https://www.bits-pilani.ac.in/research/tbi/' },
          { label: 'Outreach & Collaborations', path: 'https://research.bits-pilani.ac.in/' },
          { label: 'Contacts & Office of Research', path: 'https://www.bits-pilani.ac.in/research/contacts/' }
        ]
      ]
    }
  };

  // 2. 4-Column Campus-Based Megamenus (Students, Department, Faculty) - Matches STUDENTS screenshot
  const campusMenuData = {
    students: [
      {
        campus: 'Pilani',
        links: [
          { label: '🎓 WILP Student Portal Login', path: '/studentlogin', isInternal: true },
          { label: 'Duplicate Transcript Request', path: 'https://www.bits-pilani.ac.in/wp-content/uploads/DuplicateAcademicTranscriptRequestFormForOnRoll.pdf' },
          { label: 'Prevention of Sexual Harassment', path: 'https://www.bits-pilani.ac.in/prevention-of-sexual-harassment/' },
          { label: 'BITScan', path: 'https://www.bits-pilani.ac.in/pilani/bitscan/' }
        ]
      },
      {
        campus: 'Dubai',
        links: [
          { label: '🎓 Student Portal Login', path: '/studentlogin', isInternal: true },
          { label: 'Student Facilities', path: 'https://www.bits-pilani.ac.in/dubai/student-facilities/' },
          { label: 'Photographic Views', path: 'https://www.bits-pilani.ac.in/dubai/photographic-views/' },
          { label: 'Picture Gallery', path: 'https://www.bits-pilani.ac.in/picture-gallery/' }
        ]
      },
      {
        campus: 'K K Birla Goa',
        links: [
          { label: '🎓 Student Portal Login', path: '/studentlogin', isInternal: true },
          { label: 'Anti Ragging', path: 'https://www.bits-pilani.ac.in/goa/anti-ragging/' },
          { label: 'RE-OPENING OF CAMPUS - SOP', path: 'https://www.bits-pilani.ac.in/goa/re-opening-of-campus-sop/' },
          { label: 'National Service Scheme (NSS)', path: 'https://www.bits-pilani.ac.in/goa/nss/' }
        ]
      },
      {
        campus: 'Hyderabad',
        links: [
          { label: '🎓 Student Portal Login', path: '/studentlogin', isInternal: true },
          { label: 'Student Welfare', path: 'https://swd.bits-pilani.ac.in/index.aspx' },
          { label: 'Events & Festivals', path: 'https://www.bits-pilani.ac.in/hyderabad/events-festivals/' },
          { label: 'My BITS My Voice', path: 'https://www.bits-pilani.ac.in/hyderabad/my-bits-my-voice/' }
        ]
      }
    ],
    department: [
      {
        campus: 'Pilani',
        links: [
          { label: 'Computer Science & IS', path: 'https://www.bits-pilani.ac.in/pilani/computer-science-information-systems/' },
          { label: 'Electrical & Electronics', path: 'https://www.bits-pilani.ac.in/pilani/electrical-and-electronics-engineering/' },
          { label: 'Mechanical Engineering', path: 'https://www.bits-pilani.ac.in/pilani/mechanical-engineering/' }
        ]
      },
      {
        campus: 'Dubai',
        links: [
          { label: 'Computer Science (Dubai)', path: 'https://www.bits-dubai.ac.ae/' },
          { label: 'Electrical Engineering (Dubai)', path: 'https://www.bits-dubai.ac.ae/' },
          { label: 'Mechanical Engineering (Dubai)', path: 'https://www.bits-dubai.ac.ae/' }
        ]
      },
      {
        campus: 'K K Birla Goa',
        links: [
          { label: 'Chemical Engineering (Goa)', path: 'https://www.bits-pilani.ac.in/goa/chemical-engineering/' },
          { label: 'Chemistry (Goa)', path: 'https://www.bits-pilani.ac.in/goa/chemistry/' },
          { label: 'Physics (Goa)', path: 'https://www.bits-pilani.ac.in/goa/physics/' }
        ]
      },
      {
        campus: 'Hyderabad',
        links: [
          { label: 'Biological Sciences (Hyd)', path: 'https://www.bits-pilani.ac.in/hyderabad/biological-sciences/' },
          { label: 'Pharmacy (Hyd)', path: 'https://www.bits-pilani.ac.in/hyderabad/pharmacy/' },
          { label: 'Civil Engineering (Hyd)', path: 'https://www.bits-pilani.ac.in/hyderabad/civil-engineering/' }
        ]
      }
    ],
    faculty: [
      {
        campus: 'Pilani',
        links: [
          { label: 'Computer Science Faculty', path: 'https://www.bits-pilani.ac.in/faculty/?campus=pilani&department=computer-science-information-systems' },
          { label: 'Electrical Engineering Faculty', path: 'https://www.bits-pilani.ac.in/faculty/?campus=pilani&department=electrical-and-electronics-engineering' }
        ]
      },
      {
        campus: 'Dubai',
        links: [
          { label: 'Engineering Faculty (Dubai)', path: 'https://www.bits-dubai.ac.ae/' },
          { label: 'Management Studies (Dubai)', path: 'https://www.bits-dubai.ac.ae/' }
        ]
      },
      {
        campus: 'K K Birla Goa',
        links: [
          { label: 'Computer Science Faculty (Goa)', path: 'https://www.bits-pilani.ac.in/faculty/?campus=goa&department=computer-science' },
          { label: 'Economics Faculty (Goa)', path: 'https://www.bits-pilani.ac.in/faculty/?campus=goa&department=economics-and-finance' }
        ]
      },
      {
        campus: 'Hyderabad',
        links: [
          { label: 'Computer Science Faculty (Hyd)', path: 'https://www.bits-pilani.ac.in/faculty/?campus=hyderabad&department=computer-science-information-systems' },
          { label: 'Pharmacy Faculty (Hyd)', path: 'https://www.bits-pilani.ac.in/faculty/?campus=hyderabad&department=pharmacy' }
        ]
      }
    ]
  };

  const [activeTab, setActiveTab] = React.useState(0);

  // Render Sidebar-Tab layout for academics, admission, research
  if (tabMenuData[menuId]) {
    const currentMenu = tabMenuData[menuId];
    return (
      <div className="submenu_panel">
        <ul className="submenu_tabs">
          {currentMenu.tabs.map((tab, idx) => (
            <li
              key={idx}
              className={activeTab === idx ? 'active' : ''}
              onMouseEnter={() => setActiveTab(idx)}
            >
              {tab}
            </li>
          ))}
        </ul>

        <div className="submenu_content">
          <div className="submenu_links_grid">
            {currentMenu.content[activeTab]?.map((link, idx) => (
              <a 
                key={idx} 
                href={link.path} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Render 4-Column Campus layout for students, department, faculty (No Tabs, matches original BITS layout)
  if (campusMenuData[menuId]) {
    const columns = campusMenuData[menuId];
    return (
      <div className="submenu_panel campus_four_col_panel">
        {columns.map((col, idx) => (
          <div key={idx} className="campus_col">
            {/* Header Box - Hover details aligned in CSS */}
            <div className={`campus_col_header_box ${col.campus === 'Hyderabad' ? 'active_red' : ''}`}>
              {col.campus}
            </div>
            
            {/* Divider lines listed list */}
            <div className="campus_col_links_list">
              {col.links.map((link, lIdx) => (
                link.isInternal ? (
                  <Link
                    key={lIdx}
                    to={link.path}
                    className="campus_col_link_item"
                    style={{ color: '#e31e24', fontWeight: '700' }}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    key={lIdx} 
                    href={link.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="campus_col_link_item"
                  >
                    {link.label}
                  </a>
                )
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
