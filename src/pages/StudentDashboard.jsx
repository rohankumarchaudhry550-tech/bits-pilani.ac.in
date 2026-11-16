import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaUser, 
  FaBookOpen, 
  FaCalendarAlt, 
  FaClock, 
  FaVideo, 
  FaInfoCircle, 
  FaChevronDown, 
  FaChevronUp, 
  FaTrophy, 
  FaChartLine, 
  FaClipboardList, 
  FaLaptopCode, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaMedal,
  FaAward,
  FaGraduationCap,
  FaBrain,
  FaStar,
  FaRocket,
  FaFlask
} from 'react-icons/fa';
import NotesSection from '../components/NotesSection';
import MstResultsSection from '../components/MstResultsSection';
import VideoLecturesSection from '../components/VideoLecturesSection';
import { mstScheduleData, advancedMlProjectData } from '../data/mstResultsData';

export default function StudentDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('mst'); // Default to newly declared MST results
  const [expandedSyllabus, setExpandedSyllabus] = useState(null);

  // 1. Session Auth Validation
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('studentLoggedIn');
    if (!isLoggedIn) {
      navigate('/studentlogin');
    }
    // Override old name cached in user's browser local storage to the new full name
    if (localStorage.getItem('studentName') === 'Rohan Chaudhry') {
      localStorage.setItem('studentName', 'Rohan Kumar Chaudhry');
    }
  }, [navigate]);

  const studentName = localStorage.getItem('studentName') || 'Rohan Kumar Chaudhry';
  const studentEmail = localStorage.getItem('studentEmail') || 'rohan.chaudhry@wilp.bits-pilani.ac.in';
  const studentRoll = localStorage.getItem('studentRoll') || '2026ML005831';
  const corporatePartner = localStorage.getItem('corporatePartner') || 'L&T (Larsen & Toubro) Executive Program';

  // 2. Syllabus descriptions
  const syllabusData = [
    {
      code: 'BITS F111',
      title: 'Introduction to Statistical Methods',
      topics: 'Probability theory, random variables, probability distributions (normal, binomial, poisson), sampling distributions, estimation theory, hypothesis testing, ANOVA, simple and multiple linear regression, correlation analysis, and non-parametric tests.'
    },
    {
      code: 'BITS F112',
      title: 'Mathematical Foundations for Machine Learning',
      topics: 'Linear algebra, vector spaces, linear transformations, eigenvalues/eigenvectors, singular value decomposition (SVD), vector calculus, gradient, Hessian, optimization algorithms, gradient descent, and constrained optimization techniques.'
    },
    {
      code: 'BITS F113',
      title: 'Machine Learning',
      topics: 'Supervised learning algorithms (linear regression, logistic regression, k-nearest neighbors, naive Bayes, decision trees, support vector machines), unsupervised learning (k-means, hierarchical clustering, principal component analysis), ensemble methods, random forests, model evaluation, and bias-variance tradeoff.'
    },
    {
      code: 'BITS F114',
      title: 'Artificial and Computational Intelligence',
      topics: 'Uninformed and heuristic search algorithms (A*, IDA*), adversarial search (Alpha-Beta pruning), knowledge representation, propositional and first-order logic, automated planning, decision-making under uncertainty, genetic algorithms, and fuzzy logic systems.'
    }
  ];

  // 3. Weekly schedule (Monday to Saturday, 6 PM to 9 PM)
  const schedule = [
    { day: 'Monday', subject: 'Mathematical Foundations for Machine Learning', instructor: 'Dr. A. Sen', room: 'Virtual Room A' },
    { day: 'Tuesday', subject: 'Introduction to Statistical Methods', instructor: 'Prof. R. Sharma', room: 'Virtual Room B' },
    { day: 'Wednesday', subject: 'Machine Learning', instructor: 'Dr. K. Patel', room: 'Virtual Room C' },
    { day: 'Thursday', subject: 'Artificial and Computational Intelligence', instructor: 'Prof. S. Das', room: 'Virtual Room A' },
    { day: 'Friday', subject: 'Mathematical Foundations / Stats (Lab & Tutorial)', instructor: 'Dr. A. Sen / Prof. R. Sharma', room: 'Virtual Lab 1' },
    { day: 'Saturday', subject: 'Machine Learning / AI (Lab & Tutorial)', instructor: 'Dr. K. Patel / Prof. S. Das', room: 'Virtual Lab 2' }
  ];

  // 4. Mid-Semester Test (MST) Official Exam Schedule (17–20 Nov 2026, 06:30 PM to 09:00 PM Daily)
  const mstSchedule = mstScheduleData;

  const toggleSyllabus = (idx) => {
    if (expandedSyllabus === idx) {
      setExpandedSyllabus(null);
    } else {
      setExpandedSyllabus(idx);
    }
  };

  return (
    <div style={{ backgroundColor: '#f4f5f8', padding: '40px 0', minHeight: '80svh' }}>
      <div className="container">
        
        {/* Top welcome banner */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '6px', boxShadow: 'var(--shadow-sm)', padding: '25px 30px', marginBottom: '30px', borderLeft: '5px solid var(--secondary-blue)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <span style={{ fontSize: '13px', fontWeight: '700', color: 'var(--secondary-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Welcome back
            </span>
            <h1 style={{ fontSize: '28px', color: 'var(--primary-dark)', fontWeight: '600', margin: '5px 0' }}>
              {studentName}
            </h1>
            <p style={{ fontSize: '14px', color: 'var(--text-gray)' }}>
              WILP M.Tech in Artificial Intelligence & Machine Learning
            </p>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#16a34a', padding: '10px 18px', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: '600' }}>
            <FaInfoCircle /> Partner Scheme: {corporatePartner}
          </div>
        </div>

        {/* MST Examination Announcement Alert */}
        <div style={{ backgroundColor: '#eff6ff', borderLeft: '5px solid #1d4ed8', color: '#1e3a8a', padding: '20px 30px', borderRadius: '6px', boxShadow: 'var(--shadow-sm)', marginBottom: '30px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
          <FaTrophy style={{ fontSize: '28px', marginTop: '2px', color: '#f59e0b', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '6px' }}>
              <h4 style={{ fontSize: '16.5px', fontWeight: '700', color: '#1e3a8a', margin: 0 }}>
                📅 Mid-Semester Test (MST) Schedule Announced & Advanced ML Practical Project (99/100 A+) Released!
              </h4>
              <span style={{ backgroundColor: '#16a34a', color: '#ffffff', fontSize: '11px', fontWeight: '800', padding: '3px 10px', borderRadius: '12px', textTransform: 'uppercase' }}>
                Batch Rank #1 of 45 (158/160 MST • 99/100 Practical)
              </span>
            </div>
            <p style={{ fontSize: '13.5px', lineHeight: '1.5', color: '#334155', margin: '0 0 12px' }}>
              Upcoming Mid-Semester Tests (MST) commence tomorrow, <strong>17 Nov to 20 Nov 2026</strong>, across 4 consecutive days (<strong>06:30 PM to 09:00 PM daily</strong>). Additionally, the evaluation for the BITS F113 Advanced Machine Learning Practical Capstone Project is officially published: <strong>Rohan Kumar Chaudhry</strong> has secured <strong>99.0 / 100.0 (Grade A+ Exemplary Distinction • Rank #1)</strong>!
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setActiveTab('mst')}
                style={{
                  backgroundColor: '#1d4ed8',
                  color: '#ffffff',
                  border: 'none',
                  padding: '7px 16px',
                  borderRadius: '4px',
                  fontWeight: '700',
                  fontSize: '12.5px',
                  cursor: 'pointer'
                }}
              >
                View MST Schedule & Scorecard →
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                style={{
                  backgroundColor: '#ffffff',
                  color: '#1d4ed8',
                  border: '1px solid #bfdbfe',
                  padding: '7px 14px',
                  borderRadius: '4px',
                  fontWeight: '700',
                  fontSize: '12.5px',
                  cursor: 'pointer'
                }}
              >
                Open Lecture Notes (41 Sessions)
              </button>
            </div>
          </div>
        </div>

        {/* Primary Dashboard Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '25px',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '10px',
          flexWrap: 'wrap'
        }}>
          <button
            onClick={() => setActiveTab('mst')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 22px',
              borderRadius: '6px',
              border: activeTab === 'mst' ? '2px solid #1d4ed8' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'mst' ? '#1d4ed8' : '#ffffff',
              color: activeTab === 'mst' ? '#ffffff' : '#334155',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: activeTab === 'mst' ? '0 2px 6px rgba(29, 78, 216, 0.25)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <FaTrophy style={{ color: activeTab === 'mst' ? '#fef08a' : '#f59e0b' }} /> MST Results & Class Ranking
            <span style={{
              backgroundColor: activeTab === 'mst' ? '#fef08a' : '#16a34a',
              color: activeTab === 'mst' ? '#854d0e' : '#ffffff',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '800'
            }}>
              Rank #1 (158/160)
            </span>
          </button>

          <button
            onClick={() => setActiveTab('videos')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 22px',
              borderRadius: '6px',
              border: activeTab === 'videos' ? '2px solid #004b93' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'videos' ? '#004b93' : '#ffffff',
              color: activeTab === 'videos' ? '#ffffff' : '#334155',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: activeTab === 'videos' ? '0 2px 6px rgba(0, 75, 147, 0.25)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <FaVideo style={{ color: activeTab === 'videos' ? '#fef08a' : '#004b93' }} /> Topic Video Lectures
            <span style={{
              backgroundColor: activeTab === 'videos' ? '#fef08a' : '#004b93',
              color: activeTab === 'videos' ? '#0f172a' : '#ffffff',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '800'
            }}>
              61 Classes
            </span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 22px',
              borderRadius: '6px',
              border: activeTab === 'notes' ? '2px solid var(--secondary-blue)' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'notes' ? 'var(--secondary-blue)' : '#ffffff',
              color: activeTab === 'notes' ? '#ffffff' : '#334155',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: activeTab === 'notes' ? '0 2px 6px rgba(0, 75, 147, 0.25)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <FaBookOpen /> Day-by-Day Lecture Notes (17 Aug – 02 Oct)
            <span style={{
              backgroundColor: activeTab === 'notes' ? '#ffffff' : 'var(--secondary-blue)',
              color: activeTab === 'notes' ? 'var(--secondary-blue)' : '#ffffff',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: '800'
            }}>
              41 Sessions
            </span>
          </button>

          <button
            onClick={() => setActiveTab('overview')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 22px',
              borderRadius: '6px',
              border: activeTab === 'overview' ? '2px solid var(--secondary-blue)' : '1px solid #cbd5e1',
              backgroundColor: activeTab === 'overview' ? 'var(--secondary-blue)' : '#ffffff',
              color: activeTab === 'overview' ? '#ffffff' : '#334155',
              fontWeight: '700',
              fontSize: '14px',
              cursor: 'pointer',
              boxShadow: activeTab === 'overview' ? '0 2px 6px rgba(0, 75, 147, 0.25)' : 'none',
              transition: 'all 0.2s'
            }}
          >
            <FaChartLine /> Academic Overview & Timetable
          </button>
        </div>

        {/* Tab Content Display */}
        {activeTab === 'mst' ? (
          <MstResultsSection />
        ) : activeTab === 'videos' ? (
          <VideoLecturesSection onOpenNotes={(noteId) => setActiveTab('notes')} />
        ) : activeTab === 'notes' ? (
          <NotesSection onOpenVideoLectures={() => setActiveTab('videos')} />
        ) : (
          /* Main Grid: Left = Schedule & Syllabus, Right = Profile details */
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 1.3fr', gap: '30px' }} className="dashboard_grid">
          
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              
              {/* Quick Jump to Notes Banner */}
              <div style={{
                backgroundColor: '#eff6ff',
                border: '1.5px solid #bfdbfe',
                borderRadius: '8px',
                padding: '18px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '15px'
              }}>
                <div>
                  <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#1d4ed8', textTransform: 'uppercase' }}>
                    📚 Complete Lecture Notes & Syllabus Archive
                  </span>
                  <h4 style={{ fontSize: '16.5px', color: '#1e3a8a', fontWeight: '700', margin: '3px 0 2px' }}>
                    41 Recorded Sessions (17 Aug 2026 – 02 Oct 2026)
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#475569', margin: 0 }}>
                    Detailed notes, formulas, code snippets, and review questions for all 4 courses.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('notes')}
                  style={{
                    backgroundColor: 'var(--secondary-blue)',
                    color: '#ffffff',
                    border: 'none',
                    padding: '9px 18px',
                    borderRadius: '5px',
                    fontWeight: '700',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  View Lecture Notes →
                </button>
              </div>

              {/* Quick Jump to Video Lectures Banner */}
              <div style={{
                backgroundColor: '#f0fdf4',
                border: '1.5px solid #bbf7d0',
                borderRadius: '8px',
                padding: '18px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '15px'
              }}>
                <div>
                  <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#16a34a', textTransform: 'uppercase' }}>
                    🎥 Topic-Wise Video Lecture Archives
                  </span>
                  <h4 style={{ fontSize: '16.5px', color: '#14532d', fontWeight: '700', margin: '3px 0 2px' }}>
                    61 Recorded HD Lectures & Masterclasses (62+ Hours)
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#475569', margin: 0 }}>
                    Full HD video player with clickable chapter timestamps, whiteboard derivations, and slides.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('videos')}
                  style={{
                    backgroundColor: '#16a34a',
                    color: '#ffffff',
                    border: 'none',
                    padding: '9px 18px',
                    borderRadius: '5px',
                    fontWeight: '700',
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <FaVideo /> Watch Video Lectures →
                </button>
              </div>

              {/* Official Mid-Semester Test (MST) Schedule Section */}
              <div style={{ backgroundColor: '#ffffff', borderRadius: '6px', boxShadow: 'var(--shadow-sm)', padding: '30px', borderTop: '4px solid #b91c1c' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px', borderBottom: '2px solid var(--border-light)', paddingBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaClipboardList style={{ color: '#b91c1c', fontSize: '22px' }} />
                  <div>
                    <h3 style={{ fontSize: '20px', color: 'var(--primary-dark)', fontWeight: '600', margin: 0 }}>
                      Official Mid-Semester Test (MST) Schedule
                    </h3>
                    <span style={{ fontSize: '13px', color: 'var(--text-gray)' }}>
                      First Semester 2026-27 • Online Proctored Examination
                    </span>
                  </div>
                </div>
                <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', padding: '6px 14px', borderRadius: '20px', fontSize: '12.5px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaClock /> 17 Nov (Tue) – 20 Nov (Fri) 2026 • 06:30 PM to 09:00 PM Daily
                </div>
              </div>

              {/* Instructions Pill Strip */}
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px 18px', marginBottom: '22px', display: 'flex', flexWrap: 'wrap', gap: '18px', fontSize: '12.5px', color: '#334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaCalendarAlt style={{ color: '#b91c1c' }} /> <strong>Schedule:</strong> 4 Consecutive Days (17–20 Nov 2026)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaClock style={{ color: '#16a34a' }} /> <strong>Daily Slot:</strong> 06:30 PM – 09:00 PM (2.5 Hours / 150 Mins)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaLaptopCode style={{ color: '#2563eb' }} /> <strong>Proctoring:</strong> WILP Secure AI Proctored Portal
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaCheckCircle style={{ color: '#15803d' }} /> <strong>Admit Card:</strong> Verified (#WILP-2026-MST-5831)
                </div>
              </div>

              {/* Exam Schedule Grid */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {mstSchedule.map((exam, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '18px 20px',
                      backgroundColor: '#fffbfb',
                      borderLeft: `5px solid ${exam.badgeColor || '#b91c1c'}`,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '15px',
                      transition: 'all 0.2s ease',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
                    }}
                  >
                    <div style={{ flex: '1 1 360px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                        <span style={{ backgroundColor: exam.badgeColor || '#b91c1c', color: '#ffffff', padding: '3px 10px', borderRadius: '4px', fontSize: '11.5px', fontWeight: '700', letterSpacing: '0.4px' }}>
                          {exam.dayBadge}
                        </span>
                        <span style={{ fontSize: '13px', fontWeight: '700', color: '#1f2937' }}>
                          📅 {exam.date}
                        </span>
                        <span style={{ backgroundColor: '#f3f4f6', color: '#374151', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>
                          {exam.code}
                        </span>
                      </div>

                      <h4 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--primary-dark)', margin: '4px 0 8px' }}>
                        {exam.subject}
                      </h4>

                      <p style={{ fontSize: '12.5px', color: 'var(--text-gray)', margin: '0 0 8px', lineHeight: '1.45' }}>
                        <strong>Syllabus Scope:</strong> {exam.topics}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', fontSize: '12px', color: '#4b5563' }}>
                        <span>👤 Instructor: <strong>{exam.instructor}</strong></span>
                        <span>🏛️ Venue: <strong>{exam.room}</strong></span>
                        <span>⏳ Duration: <strong>{exam.duration}</strong></span>
                        <span>📊 Weightage: <strong>{exam.maxMarks} Marks ({exam.weightage})</strong></span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center', gap: '10px' }}>
                      <div style={{ textAlign: 'right' }}>
                        <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block', textTransform: 'uppercase', fontWeight: '600' }}>Slot Timing</span>
                        <span style={{ fontSize: '14.5px', fontWeight: '800', color: '#b91c1c' }}>
                          ⏰ {exam.timeSlot}
                        </span>
                      </div>

                      <button
                        style={{
                          backgroundColor: '#b91c1c',
                          color: '#ffffff',
                          border: 'none',
                          padding: '9px 18px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: '700',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 4px rgba(185, 28, 28, 0.25)',
                          transition: 'background-color 0.2s'
                        }}
                        onClick={() => alert(`Launching Examination Portal for ${exam.code}: ${exam.subject}.\nDate: ${exam.date}\nSlot: ${exam.timeSlot}\nDuration: ${exam.duration}\nProctor: Verified.`)}
                      >
                        <FaLaptopCode /> Enter Exam Portal (Ready)
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Advanced Machine Learning Practical Capstone Project Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '6px',
              boxShadow: 'var(--shadow-sm)',
              padding: '30px',
              borderTop: '4px solid #059669',
              borderLeft: '5px solid #059669'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', borderBottom: '2px solid var(--border-light)', paddingBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaBrain style={{ color: '#059669', fontSize: '24px' }} />
                  <div>
                    <h3 style={{ fontSize: '20px', color: 'var(--primary-dark)', fontWeight: '600', margin: 0 }}>
                      Advanced Machine Learning Lab Practical Capstone Project
                    </h3>
                    <span style={{ fontSize: '13px', color: 'var(--text-gray)' }}>
                      BITS F113-PR • Enterprise Industrial AI Component • Graded & Certified
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ backgroundColor: '#dcfce7', border: '1px solid #bbf7d0', color: '#15803d', padding: '6px 14px', borderRadius: '20px', fontSize: '12.5px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FaStar /> Score: 99.0 / 100 (Grade A+)
                  </span>
                  <span style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#1e40af', padding: '6px 14px', borderRadius: '20px', fontSize: '12.5px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <FaMedal /> Rank #1 of 45
                  </span>
                </div>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #064e3b 0%, #047857 100%)',
                borderRadius: '8px',
                padding: '22px 24px',
                color: '#ffffff',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '15px'
              }}>
                <div style={{ flex: '1 1 500px' }}>
                  <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase' }}>
                    Project Title
                  </span>
                  <h4 style={{ fontSize: '17px', fontWeight: '700', margin: '6px 0 8px', color: '#ffffff', lineHeight: '1.4' }}>
                    Enterprise Predictive Maintenance & Degradation Prognostics using Physics-Informed Neural Networks (PINNs) and Temporal Graph Transformers
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#d1fae5', margin: 0, lineHeight: '1.45' }}>
                    Multimodal turbomachinery digital twin integrating Navier-Cauchy continuum mechanics with 8-head spatio-temporal graph attention. Edge-compiled via ONNX FP16 inside Docker.
                  </p>
                </div>

                <div style={{ textAlign: 'center', minWidth: '150px', backgroundColor: 'rgba(255,255,255,0.12)', border: '1.5px solid rgba(255,255,255,0.3)', padding: '12px 18px', borderRadius: '6px' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#a7f3d0', fontWeight: '700' }}>Marks Awarded</span>
                  <div style={{ fontSize: '32px', fontWeight: '900', color: '#ffffff' }}>99 / 100</div>
                  <span style={{ fontSize: '11.5px', color: '#fef08a', fontWeight: '700' }}>Grade A+ Distinction</span>
                </div>
              </div>

              {/* Rubric Breakdown Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px', marginBottom: '20px' }}>
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>1. Problem Formulation</div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#059669', margin: '2px 0' }}>25 / 25</div>
                  <div style={{ fontSize: '11px', color: '#475569' }}>Navier-Cauchy PDE derivation</div>
                </div>
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>2. Sensor Pipeline</div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#059669', margin: '2px 0' }}>20 / 20</div>
                  <div style={{ fontSize: '11px', color: '#475569' }}>128-channel wavelet FFT</div>
                </div>
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>3. Novel Architecture</div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#059669', margin: '2px 0' }}>25 / 25</div>
                  <div style={{ fontSize: '11px', color: '#475569' }}>PINN + Temporal GATv2</div>
                </div>
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>4. Empirical Benchmarks</div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#059669', margin: '2px 0' }}>15 / 15</div>
                  <div style={{ fontSize: '11px', color: '#475569' }}>99.2% Acc • 0.994 AUC</div>
                </div>
                <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '12px' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', color: '#64748b' }}>5. Edge Deployment</div>
                  <div style={{ fontSize: '16px', fontWeight: '800', color: '#059669', margin: '2px 0' }}>14 / 15</div>
                  <div style={{ fontSize: '11px', color: '#475569' }}>Docker & ONNX (12.4ms)</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                <div style={{ fontSize: '12.5px', color: '#475569' }}>
                  👤 <strong>Evaluator:</strong> Dr. K. Patel (Associate Professor, CSIS) • 📅 Evaluated: 15 Nov 2026
                </div>
                <button
                  onClick={() => setActiveTab('mst')}
                  style={{
                    backgroundColor: '#059669',
                    color: '#ffffff',
                    border: 'none',
                    padding: '9px 18px',
                    borderRadius: '5px',
                    fontWeight: '700',
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <FaBrain /> View Full Practical Project & Codebase →
                </button>
              </div>
            </div>

            {/* Assignment & Academic Performance Results */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '6px', boxShadow: 'var(--shadow-sm)', padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '2px solid var(--border-light)', paddingBottom: '12px', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaTrophy style={{ color: '#fcb900', fontSize: '22px' }} />
                  <h3 style={{ fontSize: '20px', color: 'var(--primary-dark)', fontWeight: '600' }}>Academic Performance & Assignment Results</h3>
                </div>
                <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', color: '#1d4ed8', padding: '6px 12px', borderRadius: '20px', fontSize: '12.5px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <FaChartLine /> Class Rank: #1 of 45 (Top Performer)
                </div>
              </div>

              <p style={{ fontSize: '14px', color: 'var(--text-gray)', marginBottom: '20px', lineHeight: '1.5' }}>
                Here are your evaluation details for the continuous assessments conducted during Weeks 1 to 12 (11 graded assignments, Week 12 on 08 Nov 2026 observed as Diwali Break with no assignment scheduled). You are currently leading the batch of 45 students with an outstanding cumulative performance of 99.2%. Keep it up!
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="dashboard_grid">
                
                {/* Assignment 1 Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', backgroundColor: '#fdfdfd', borderLeft: '4px solid #16a34a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 1 Assessment</span>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Graded</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 1: Mathematical Foundations for ML</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Linear Algebra, Vector Calculus, Optimization Techniques</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>23 Aug 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Obtained Score</span>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a' }}>99 <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-gray)' }}>/ 100</span></span>
                    </div>
                  </div>
                </div>

                {/* Assignment 2 Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', backgroundColor: '#fdfdfd', borderLeft: '4px solid #16a34a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 2 Assessment</span>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Graded</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 2: Machine Learning Algorithms</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Supervised Learning, Linear Regression, Loss Functions</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>30 Aug 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Obtained Score</span>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a' }}>98 <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-gray)' }}>/ 100</span></span>
                    </div>
                  </div>
                </div>

                {/* Assignment 3 Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', backgroundColor: '#fdfdfd', borderLeft: '4px solid #16a34a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 3 Assessment</span>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Graded</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 3: Introduction to Statistical Methods</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Probability Distributions, Hypothesis Testing, Bayesian Estimation</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>06 Sep 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Obtained Score</span>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a' }}>98 <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-gray)' }}>/ 100</span></span>
                    </div>
                  </div>
                </div>

                {/* Assignment 4 Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', backgroundColor: '#fdfdfd', borderLeft: '4px solid #16a34a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 4 Assessment</span>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Graded</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 4: Artificial & Computational Intelligence</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Informed Search Algorithms, Heuristic Optimization, Adversarial Search</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>13 Sep 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Obtained Score</span>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a' }}>100 <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-gray)' }}>/ 100</span></span>
                    </div>
                  </div>
                </div>

                {/* Assignment 5 Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', backgroundColor: '#fdfdfd', borderLeft: '4px solid #16a34a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 5 Assessment</span>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Graded</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 5: Statistical Learning & Bayesian Models</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Maximum Likelihood Estimation, Naive Bayes Classification, EM Algorithm</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>20 Sep 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Obtained Score</span>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a' }}>99 <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-gray)' }}>/ 100</span></span>
                    </div>
                  </div>
                </div>

                {/* Assignment 6 Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', backgroundColor: '#fdfdfd', borderLeft: '4px solid #16a34a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 6 Assessment</span>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Graded</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 6: Deep Learning & Neural Architectures</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Multi-Layer Perceptrons, Backpropagation, Gradient Descent Variants</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>27 Sep 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Obtained Score</span>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a' }}>99 <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-gray)' }}>/ 100</span></span>
                    </div>
                  </div>
                </div>

                {/* Assignment 7 Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', backgroundColor: '#fdfdfd', borderLeft: '4px solid #16a34a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 7 Assessment</span>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Graded</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 7: Constraint Satisfaction & Game Playing Agents</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: AC-3 Arc Consistency, Minimax with Alpha-Beta Pruning, MDPs</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>04 Oct 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Obtained Score</span>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a' }}>99 <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-gray)' }}>/ 100</span></span>
                    </div>
                  </div>
                </div>

                {/* Assignment 8 Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', backgroundColor: '#fdfdfd', borderLeft: '4px solid #16a34a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 8 Assessment</span>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Graded</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 8: Dimensionality Reduction & Spectral Clustering</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Principal Component Analysis (PCA), Truncated SVD, Kernel Methods</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>11 Oct 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Obtained Score</span>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a' }}>100 <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-gray)' }}>/ 100</span></span>
                    </div>
                  </div>
                </div>

                {/* Assignment 9 Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', backgroundColor: '#fdfdfd', borderLeft: '4px solid #16a34a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 9 Assessment</span>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Graded</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 9: Multiple Linear Regression & ANOVA</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Ordinary Least Squares (OLS), Multicollinearity, VIF, Two-Way ANOVA & F-Tests</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>18 Oct 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Obtained Score</span>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a' }}>99 <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-gray)' }}>/ 100</span></span>
                    </div>
                  </div>
                </div>

                {/* Assignment 10 Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', backgroundColor: '#fdfdfd', borderLeft: '4px solid #16a34a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 10 Assessment</span>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Graded</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 10: Support Vector Machines & Kernels</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Max Margin Hyperplanes, Primal/Dual Lagrangians, KKT, RBF Kernel</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>25 Oct 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Obtained Score</span>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a' }}>100 <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-gray)' }}>/ 100</span></span>
                    </div>
                  </div>
                </div>

                {/* Assignment 11 Card */}
                <div style={{ border: '1px solid #e5e7eb', borderRadius: '6px', padding: '20px', backgroundColor: '#fdfdfd', borderLeft: '4px solid #16a34a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 11 Assessment</span>
                      <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Graded</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 11: Probabilistic Graphical Models & HMMs</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Conditional Independence, D-Separation, Variable Elimination & Hidden Markov Models</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #f3f4f6', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>01 Nov 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Obtained Score</span>
                      <span style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a' }}>100 <span style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-gray)' }}>/ 100</span></span>
                    </div>
                  </div>
                </div>

                {/* Assignment 12 Card: Diwali Break (08 Nov 2026) */}
                <div style={{ border: '1px solid #fed7aa', borderRadius: '6px', padding: '20px', backgroundColor: '#fffbeb', borderLeft: '4px solid #f59e0b', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: '#b45309', letterSpacing: '0.5px' }}>Week 12 • Academic Recess</span>
                      <span style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>🪔 Diwali Break</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Week 12: Diwali Vacation (No Assignment Scheduled)</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Mid-Semester Diwali Festival Break observed across BITS Pilani campuses and WILP programs (Deepavali: 08 Nov 2026).</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #fde68a', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Academic Calendar</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: 'var(--text-dark)' }}>08 Nov 2026 (Diwali Holiday)</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Assessment Status</span>
                      <span style={{ fontSize: '16px', fontWeight: '800', color: '#b45309' }}>Exempt / Recess</span>
                    </div>
                  </div>
                </div>

                {/* Assignment 13 Card (Active / In Progress) */}
                <div style={{ border: '1px solid #fed7aa', borderRadius: '6px', padding: '20px', backgroundColor: '#fffbf5', borderLeft: '4px solid #f59e0b', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 13 Assessment</span>
                      <span style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Active • In Progress</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: 'var(--primary-dark)', fontWeight: '600', marginBottom: '8px' }}>Assignment 13: Ensemble Methods & XGBoost (SHAP/LIME)</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Gradient Boosted Trees, Second-Order Loss in XGBoost & Feature Attributions via Shapley Values</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #fed7aa', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Due Date</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#b45309' }}>15 Nov 2026 (11:59 PM)</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Submission Status</span>
                      <span style={{ fontSize: '13.5px', fontWeight: '800', color: '#b45309' }}>Open for Submission</span>
                    </div>
                  </div>
                </div>

                {/* Assignment 14 Card (Upcoming) */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: '6px', padding: '20px', backgroundColor: '#f8fafc', borderLeft: '4px solid #94a3b8', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-gray)', letterSpacing: '0.5px' }}>Week 14 Assessment</span>
                      <span style={{ backgroundColor: '#f1f5f9', color: '#64748b', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>Upcoming</span>
                    </div>
                    <h4 style={{ fontSize: '15px', color: '#0f172a', fontWeight: '600', marginBottom: '8px' }}>Assignment 14: Reinforcement Learning & Deep Q-Networks</h4>
                    <p style={{ fontSize: '12.5px', color: 'var(--text-gray)' }}>Topics: Markov Decision Processes, Value/Policy Iteration, Q-Learning & Experience Replay Dynamics</p>
                  </div>
                  <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #e2e8f0', paddingTop: '12px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Scheduled Release</span>
                      <span style={{ fontSize: '12.5px', fontWeight: '600', color: '#475569' }}>16 Nov 2026</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-gray)', display: 'block' }}>Deadline</span>
                      <span style={{ fontSize: '13.5px', fontWeight: '700', color: '#64748b' }}>22 Nov 2026</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Weekly Timetable */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '6px', boxShadow: 'var(--shadow-sm)', padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '2px solid var(--border-light)', paddingBottom: '12px' }}>
                <FaClock style={{ color: 'var(--secondary-blue)', fontSize: '20px' }} />
                <h3 style={{ fontSize: '20px', color: 'var(--primary-dark)', fontWeight: '600' }}>Weekly Class Timetable (6:00 PM - 9:00 PM)</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {schedule.map((item, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center', 
                      padding: '18px 20px', 
                      backgroundColor: '#f8fafc', 
                      border: '1px solid var(--border-light)', 
                      borderRadius: '6px',
                      flexWrap: 'wrap',
                      gap: '15px'
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-gray)', textTransform: 'uppercase' }}>
                        {item.day} (Daily 6 PM - 9 PM)
                      </span>
                      <strong style={{ fontSize: '15px', color: 'var(--text-dark)' }}>{item.subject}</strong>
                      <span style={{ fontSize: '13px', color: 'var(--text-gray)' }}>
                        Instructor: {item.instructor} | Room: {item.room}
                      </span>
                    </div>

                    <button 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        padding: '10px 18px', 
                        backgroundColor: idx === 0 ? 'var(--secondary-blue)' : '#e2e8f0', 
                        color: idx === 0 ? '#ffffff' : '#64748b', 
                        border: 'none', 
                        borderRadius: '4px', 
                        fontWeight: '600', 
                        fontSize: '13px', 
                        cursor: idx === 0 ? 'pointer' : 'not-allowed'
                      }}
                      onClick={() => {
                        alert(`Connecting to ${item.day} session for ${item.subject} (${item.instructor}).\nClass Timing: 6:00 PM - 9:00 PM\nVenue: ${item.room}`);
                      }}
                    >
                      <FaVideo /> Join Class (6 PM - 9 PM)
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Syllabus */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '6px', boxShadow: 'var(--shadow-sm)', padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px', borderBottom: '2px solid var(--border-light)', paddingBottom: '12px' }}>
                <FaBookOpen style={{ color: 'var(--secondary-blue)', fontSize: '20px' }} />
                <h3 style={{ fontSize: '20px', color: 'var(--primary-dark)', fontWeight: '600' }}>Semester 1 Course Syllabus</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {syllabusData.map((course, idx) => (
                  <div key={idx} style={{ border: '1px solid var(--border-light)', borderRadius: '6px', overflow: 'hidden' }}>
                    <div 
                      onClick={() => toggleSyllabus(idx)}
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', backgroundColor: '#f8fafc', cursor: 'pointer', fontWeight: '600' }}
                    >
                      <span style={{ fontSize: '14px', color: 'var(--accent-gold)' }}>{course.code} - {course.title}</span>
                      {expandedSyllabus === idx ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    
                    {expandedSyllabus === idx && (
                      <div style={{ padding: '20px', borderTop: '1px solid var(--border-light)', fontSize: '14px', color: 'var(--text-gray)', lineHeight: '1.6', backgroundColor: '#ffffff' }}>
                        <p><strong>Course Curriculum:</strong></p>
                        <p style={{ marginTop: '8px' }}>{course.topics}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Profile Widgets */}
          <div>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '6px', boxShadow: 'var(--shadow-sm)', padding: '25px', position: 'sticky', top: '90px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', borderBottom: '1px solid var(--border-light)', paddingBottom: '12px' }}>
                <FaUser style={{ color: 'var(--secondary-blue)' }} />
                <h4 style={{ fontSize: '16px', color: 'var(--primary-dark)', fontWeight: '600' }}>My Profile Details</h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '13.5px', color: 'var(--text-dark)' }}>
                <div>
                  <span style={{ color: 'var(--text-gray)', display: 'block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Student Name</span>
                  <strong>{studentName}</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-gray)', display: 'block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Email Address</span>
                  <strong>{studentEmail}</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-gray)', display: 'block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Student Roll Number</span>
                  <strong>{studentRoll}</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-gray)', display: 'block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Academic Session</span>
                  <strong>First Semester 2026-27</strong>
                </div>

                <div>
                  <span style={{ color: 'var(--text-gray)', display: 'block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Partnership Scheme</span>
                  <strong>{corporatePartner}</strong>
                </div>

                <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', padding: '14px' }}>
                  <span style={{ color: '#15803d', display: 'block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>MST Exam Status</span>
                  <strong style={{ color: '#16a34a', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                    🏆 Rank #1 of 45 (Topper)
                  </strong>
                  <span style={{ color: '#166534', display: 'block', fontSize: '12px', marginTop: '4px', fontWeight: '600' }}>
                    Score: 158.0 / 160 (98.75%)
                  </span>
                  <span style={{ color: '#64748b', display: 'block', fontSize: '11px', marginTop: '2px' }}>
                    Published 10 Oct 2026 • 100th %ile
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                  <button
                    onClick={() => setActiveTab('mst')}
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: '#1d4ed8',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '4px',
                      fontWeight: '700',
                      fontSize: '12.5px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <FaTrophy style={{ color: '#fef08a' }} /> MST Scorecard & Ranking
                  </button>

                  <button
                    onClick={() => setActiveTab('videos')}
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: '#004b93',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '4px',
                      fontWeight: '700',
                      fontSize: '12.5px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <FaVideo style={{ color: '#fef08a' }} /> Watch Video Lectures (61)
                  </button>

                  <button
                    onClick={() => setActiveTab('notes')}
                    style={{
                      width: '100%',
                      padding: '10px',
                      backgroundColor: 'var(--secondary-blue)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '4px',
                      fontWeight: '700',
                      fontSize: '12.5px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    <FaBookOpen /> Open Lecture Notes (41)
                  </button>
                </div>
              </div>
              
              <div style={{ marginTop: '25px', borderTop: '1px solid #f0f0f0', paddingTop: '20px' }}>
                <button 
                  style={{ width: '100%', padding: '12px', backgroundColor: 'transparent', color: '#b91c1c', border: '1px solid #b91c1c', borderRadius: '4px', fontWeight: '600', fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#b91c1c';
                    e.target.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#b91c1c';
                  }}
                  onClick={() => {
                    localStorage.removeItem('studentLoggedIn');
                    localStorage.removeItem('studentEmail');
                    localStorage.removeItem('studentName');
                    localStorage.removeItem('studentRoll');
                    localStorage.removeItem('corporatePartner');
                    window.dispatchEvent(new Event('storage'));
                    navigate('/studentlogin');
                  }}
                >
                  Log Out Session
                </button>
              </div>
            </div>
          </div>

        </div>
        )}

      </div>
    </div>
  );
}
