import React, { useState, useMemo } from 'react';
import {
  FaTrophy,
  FaMedal,
  FaCheckCircle,
  FaAward,
  FaChartBar,
  FaPrint,
  FaSearch,
  FaFilter,
  FaGraduationCap,
  FaUniversity,
  FaStar,
  FaInfoCircle,
  FaCheck,
  FaBookOpen,
  FaChevronDown,
  FaChevronUp,
  FaFileAlt
} from 'react-icons/fa';
import {
  mstSubjectMeta,
  rohanMstScorecard,
  cohortMstRankings,
  assignmentResultsData,
  cohortStatistics
} from '../data/mstResultsData';

export default function MstResultsSection() {
  const [activeSubTab, setActiveSubTab] = useState('scorecard'); // 'scorecard' | 'ranking' | 'assignments' | 'analytics'
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCompany, setFilterCompany] = useState('ALL');
  const [filterGrade, setFilterGrade] = useState('ALL');
  const [sortBy, setSortBy] = useState('rank'); // 'rank' | 'total' | 'name'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' | 'desc'
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Extract unique companies for filtering
  const companies = useMemo(() => {
    const set = new Set(cohortMstRankings.map(s => s.company));
    return ['ALL', ...Array.from(set).sort()];
  }, []);

  // Filter and sort the 45 students cohort ranking
  const filteredRankings = useMemo(() => {
    return cohortMstRankings
      .filter((student) => {
        if (filterCompany !== 'ALL' && student.company !== filterCompany) {
          return false;
        }
        if (filterGrade !== 'ALL') {
          if (filterGrade === 'A' && !student.grade.startsWith('A')) return false;
          if (filterGrade === 'B' && !student.grade.startsWith('B')) return false;
          if (filterGrade === 'C' && !student.grade.startsWith('C')) return false;
        }
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchName = student.name.toLowerCase().includes(q);
          const matchRoll = student.roll.toLowerCase().includes(q);
          const matchCompany = student.company.toLowerCase().includes(q);
          if (!matchName && !matchRoll && !matchCompany) return false;
        }
        return true;
      })
      .sort((a, b) => {
        let comparison = 0;
        if (sortBy === 'rank') {
          comparison = a.rank - b.rank;
        } else if (sortBy === 'total') {
          comparison = b.total - a.total;
        } else if (sortBy === 'name') {
          comparison = a.name.localeCompare(b.name);
        }
        return sortOrder === 'asc' ? comparison : -comparison;
      });
  }, [searchQuery, filterCompany, filterGrade, sortBy, sortOrder]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyVerification = () => {
    navigator.clipboard.writeText(
      `BITS Pilani WILP Official Verification: Student ${rohanMstScorecard.studentName} (${rohanMstScorecard.rollNumber}) secured Rank #1/45 in MST Exams with 158/160 (98.75%). Verification ID: BITS-WILP-MST-2026-005831`
    );
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
      
      {/* 1. Official Declaration Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
        borderRadius: '10px',
        padding: '28px 32px',
        color: '#ffffff',
        boxShadow: '0 4px 15px rgba(15, 23, 42, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          right: '-20px',
          top: '-20px',
          fontSize: '160px',
          color: 'rgba(255, 255, 255, 0.04)',
          pointerEvents: 'none'
        }}>
          <FaTrophy />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span style={{
                backgroundColor: 'rgba(252, 185, 0, 0.2)',
                border: '1px solid #fcb900',
                color: '#fef08a',
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '11.5px',
                fontWeight: '800',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}>
                <FaAward style={{ color: '#fcb900' }} /> Official Results Declared
              </span>
              <span style={{
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                border: '1px solid #22c55e',
                color: '#86efac',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: '700'
              }}>
                ✓ 100% Cohort Evaluated
              </span>
            </div>

            <h1 style={{ fontSize: '26px', fontWeight: '800', margin: '6px 0 8px', letterSpacing: '-0.3px', color: '#ffffff' }}>
              Mid-Semester Test (MST) Official Scorecard & Cohort Ranking
            </h1>
            <p style={{ fontSize: '13.5px', color: '#cbd5e1', margin: 0, maxWidth: '780px', lineHeight: '1.5' }}>
              Birla Institute of Technology and Science, Pilani • Work Integrated Learning Programmes (WILP)
              <br />
              <strong>M.Tech in Artificial Intelligence & Machine Learning</strong> • First Semester 2026-27 • Published on 10 October 2026
            </p>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={handlePrint}
              style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: 'none',
                padding: '10px 16px',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '13px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
              }}
            >
              <FaPrint /> Print Official Marks Card
            </button>
            <button
              onClick={handleCopyVerification}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '10px 16px',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '7px'
              }}
            >
              {copiedLink ? <FaCheck style={{ color: '#86efac' }} /> : <FaFileAlt />}
              {copiedLink ? 'Copied Verification ID!' : 'Share Transcript'}
            </button>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '15px',
          marginTop: '25px',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          paddingTop: '20px'
        }}>
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '12px 16px', borderRadius: '8px' }}>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700' }}>Candidate</span>
            <div style={{ fontSize: '15px', fontWeight: '800', color: '#ffffff', marginTop: '2px' }}>{rohanMstScorecard.studentName}</div>
            <span style={{ fontSize: '11px', color: '#cbd5e1' }}>Roll: {rohanMstScorecard.rollNumber}</span>
          </div>

          <div style={{ backgroundColor: 'rgba(252, 185, 0, 0.15)', border: '1px solid rgba(252, 185, 0, 0.4)', padding: '12px 16px', borderRadius: '8px' }}>
            <span style={{ fontSize: '11px', color: '#fef08a', textTransform: 'uppercase', fontWeight: '700' }}>Official Cohort Rank</span>
            <div style={{ fontSize: '20px', fontWeight: '900', color: '#fcb900', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <FaTrophy /> #1 of {rohanMstScorecard.totalStudents}
            </div>
            <span style={{ fontSize: '11px', color: '#fef08a' }}>Batch Topper (100th %ile)</span>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '12px 16px', borderRadius: '8px' }}>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700' }}>Total MST Score</span>
            <div style={{ fontSize: '20px', fontWeight: '900', color: '#86efac', marginTop: '2px' }}>
              {rohanMstScorecard.totalMarksObtained} <span style={{ fontSize: '13px', color: '#cbd5e1' }}>/ {rohanMstScorecard.totalMaxMarks}</span>
            </div>
            <span style={{ fontSize: '11px', color: '#cbd5e1' }}>Overall: {rohanMstScorecard.overallPercentage}%</span>
          </div>

          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.08)', padding: '12px 16px', borderRadius: '8px' }}>
            <span style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: '700' }}>SGPA Projection</span>
            <div style={{ fontSize: '20px', fontWeight: '900', color: '#ffffff', marginTop: '2px' }}>
              10.0 <span style={{ fontSize: '13px', color: '#cbd5e1' }}>/ 10.0</span>
            </div>
            <span style={{ fontSize: '11px', color: '#86efac' }}>Letter Grade: A (Exemplary)</span>
          </div>
        </div>
      </div>

      {/* 2. Sub-Tab Switcher */}
      <div style={{
        display: 'flex',
        gap: '10px',
        borderBottom: '2px solid #e2e8f0',
        paddingBottom: '8px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => setActiveSubTab('scorecard')}
          style={{
            padding: '10px 18px',
            borderRadius: '6px',
            border: activeSubTab === 'scorecard' ? '2px solid var(--secondary-blue)' : '1px solid #cbd5e1',
            backgroundColor: activeSubTab === 'scorecard' ? 'var(--secondary-blue)' : '#ffffff',
            color: activeSubTab === 'scorecard' ? '#ffffff' : '#334155',
            fontWeight: '700',
            fontSize: '13.5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
        >
          <FaGraduationCap /> My Official MST Scorecard (Out of 40)
        </button>

        <button
          onClick={() => setActiveSubTab('ranking')}
          style={{
            padding: '10px 18px',
            borderRadius: '6px',
            border: activeSubTab === 'ranking' ? '2px solid var(--secondary-blue)' : '1px solid #cbd5e1',
            backgroundColor: activeSubTab === 'ranking' ? 'var(--secondary-blue)' : '#ffffff',
            color: activeSubTab === 'ranking' ? '#ffffff' : '#334155',
            fontWeight: '700',
            fontSize: '13.5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
        >
          <FaMedal style={{ color: activeSubTab === 'ranking' ? '#ffffff' : '#fcb900' }} /> Cohort Leaderboard & Rank List (All 45 Students)
        </button>

        <button
          onClick={() => setActiveSubTab('assignments')}
          style={{
            padding: '10px 18px',
            borderRadius: '6px',
            border: activeSubTab === 'assignments' ? '2px solid var(--secondary-blue)' : '1px solid #cbd5e1',
            backgroundColor: activeSubTab === 'assignments' ? 'var(--secondary-blue)' : '#ffffff',
            color: activeSubTab === 'assignments' ? '#ffffff' : '#334155',
            fontWeight: '700',
            fontSize: '13.5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
        >
          <FaAward /> Continuous Assessment (Weeks 1 to 11 Graded • Week 12 Diwali Break)
        </button>

        <button
          onClick={() => setActiveSubTab('analytics')}
          style={{
            padding: '10px 18px',
            borderRadius: '6px',
            border: activeSubTab === 'analytics' ? '2px solid var(--secondary-blue)' : '1px solid #cbd5e1',
            backgroundColor: activeSubTab === 'analytics' ? 'var(--secondary-blue)' : '#ffffff',
            color: activeSubTab === 'analytics' ? '#ffffff' : '#334155',
            fontWeight: '700',
            fontSize: '13.5px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s'
          }}
        >
          <FaChartBar /> Batch Analytics & Bell Curve
        </button>
      </div>

      {/* 3. SUB-TAB CONTENT: (A) My Official MST Scorecard */}
      {activeSubTab === 'scorecard' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* Printable Official Certificate / Transcript View */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
            border: '2px solid #e2e8f0',
            padding: '30px'
          }}>
            {/* Header with BITS Pilani Crest */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '2px solid #004b93',
              paddingBottom: '20px',
              marginBottom: '25px',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#004b93', fontWeight: '800', fontSize: '18px' }}>
                  <FaUniversity /> BIRLA INSTITUTE OF TECHNOLOGY AND SCIENCE, PILANI
                </div>
                <div style={{ fontSize: '13px', color: '#475569', fontWeight: '600', marginTop: '2px' }}>
                  Work Integrated Learning Programmes (WILP) • Division of Evaluation and Examinations
                </div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  Official Mid-Semester Grade Report • First Semester 2026-27
                </div>
              </div>

              <div style={{
                textAlign: 'right',
                backgroundColor: '#f8fafc',
                padding: '10px 16px',
                borderRadius: '6px',
                border: '1px solid #cbd5e1'
              }}>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Authentication Seal</span>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#16a34a', display: 'flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
                  <FaCheckCircle /> Digitally Verified
                </div>
                <span style={{ fontSize: '11px', color: '#94a3b8' }}>Doc ID: BITS/WILP/MST26/005831</span>
              </div>
            </div>

            {/* Student Metadata Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '15px',
              backgroundColor: '#f8fafc',
              padding: '16px 20px',
              borderRadius: '6px',
              border: '1px solid #e2e8f0',
              marginBottom: '25px',
              fontSize: '13px'
            }}>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Candidate Name</span>
                <strong style={{ color: '#0f172a', fontSize: '14.5px' }}>{rohanMstScorecard.studentName}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>BITS Student ID / Roll No.</span>
                <strong style={{ color: '#004b93' }}>{rohanMstScorecard.rollNumber}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Corporate Partner</span>
                <strong>{rohanMstScorecard.sponsor}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', display: 'block', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Class Standing</span>
                <strong style={{ color: '#b45309' }}>Rank #1 of 45 (Cohort Topper)</strong>
              </div>
            </div>

            {/* Subject-Wise Score Breakdown Cards (Out of 40) */}
            <h3 style={{ fontSize: '18px', color: '#0f172a', fontWeight: '700', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FaAward style={{ color: '#fcb900' }} /> Subject-Wise Evaluation Details (Maximum Marks: 40 per Subject)
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '20px' }}>
              {rohanMstScorecard.subjectScores.map((subj, idx) => (
                <div
                  key={idx}
                  style={{
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    borderLeft: '5px solid #004b93',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Course Code & Title */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div>
                        <span style={{
                          backgroundColor: '#eff6ff',
                          color: '#1d4ed8',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontSize: '11.5px',
                          fontWeight: '800'
                        }}>
                          {subj.code}
                        </span>
                        <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: '6px 0 2px' }}>
                          {subj.name}
                        </h4>
                        <span style={{ fontSize: '12px', color: '#64748b' }}>
                          Instructor: {mstSubjectMeta[subj.code].instructor} • Exam Date: {mstSubjectMeta[subj.code].examDate.split('(')[0]}
                        </span>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span style={{
                          backgroundColor: '#dcfce7',
                          color: '#15803d',
                          padding: '4px 10px',
                          borderRadius: '16px',
                          fontSize: '12px',
                          fontWeight: '800'
                        }}>
                          Grade {subj.grade} (10/10)
                        </span>
                      </div>
                    </div>

                    {/* Section Breakdown (Part A vs Part B) */}
                    <div style={{
                      backgroundColor: '#f8fafc',
                      borderRadius: '6px',
                      padding: '12px 14px',
                      margin: '14px 0',
                      border: '1px solid #e2e8f0',
                      fontSize: '12.5px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ color: '#475569' }}>Part A (Foundations & Concept):</span>
                        <strong style={{ color: '#0f172a' }}>{subj.partA} / 15.0</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                        <span style={{ color: '#475569' }}>Part B (Numerical Proofs & Scenarios):</span>
                        <strong style={{ color: '#0f172a' }}>{subj.partB} / 25.0</strong>
                      </div>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderTop: '1px solid #cbd5e1',
                        paddingTop: '6px',
                        fontWeight: '700'
                      }}>
                        <span style={{ color: '#004b93' }}>Total Score Obtained:</span>
                        <span style={{ color: '#16a34a', fontSize: '15px', fontWeight: '900' }}>
                          {subj.obtained} <span style={{ fontSize: '12px', color: '#64748b' }}>/ 40.0</span>
                        </span>
                      </div>
                    </div>

                    {/* Comparative Score Bar */}
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', marginBottom: '4px', color: '#64748b' }}>
                        <span>Your Score: <strong style={{ color: '#16a34a' }}>{subj.obtained}/40</strong></span>
                        <span>Class Avg: <strong>{subj.classAvg}/40</strong></span>
                        <span>Highest: <strong>{subj.highest}/40</strong></span>
                      </div>
                      <div style={{ width: '100%', height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', position: 'relative' }}>
                        {/* Class average marker */}
                        <div style={{
                          width: `${(subj.classAvg / 40) * 100}%`,
                          height: '100%',
                          backgroundColor: '#94a3b8',
                          position: 'absolute'
                        }} />
                        {/* Rohan's score bar */}
                        <div style={{
                          width: `${(subj.obtained / 40) * 100}%`,
                          height: '100%',
                          backgroundColor: '#16a34a',
                          position: 'absolute'
                        }} />
                      </div>
                    </div>

                    {/* Examiner Feedback */}
                    <p style={{ fontSize: '12px', color: '#475569', fontStyle: 'italic', margin: 0, lineHeight: '1.45' }}>
                      💬 <strong>Examiner Note:</strong> "{subj.remarks}"
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Official Certification Footer */}
            <div style={{
              marginTop: '30px',
              borderTop: '2px solid #e2e8f0',
              paddingTop: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '15px',
              fontSize: '12.5px',
              color: '#475569'
            }}>
              <div>
                <strong>Declared by:</strong> {rohanMstScorecard.signedBy}
                <div style={{ fontSize: '11.5px', color: '#64748b' }}>Pilani Campus, Rajasthan • Result Authorized & Finalized</div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span style={{
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #86efac',
                  color: '#15803d',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <FaCheckCircle /> Distinction Confirmed (CGPA: 10.0)
                </span>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* 4. SUB-TAB CONTENT: (B) Cohort Leaderboard & Rank List (All 45 Students) */}
      {activeSubTab === 'ranking' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* Top 3 Podium Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            
            {/* Rank 1: Rohan Kumar Chaudhry */}
            <div style={{
              background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
              border: '2px solid #f59e0b',
              borderRadius: '10px',
              padding: '22px',
              boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '16px',
                backgroundColor: '#f59e0b',
                color: '#ffffff',
                padding: '3px 12px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '800',
                textTransform: 'uppercase',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <FaStar /> Rank 1 • Topper
              </div>
              <div style={{ fontSize: '32px', marginBottom: '6px' }}>🥇</div>
              <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#92400e', margin: '4px 0' }}>
                {cohortMstRankings[0].name}
              </h4>
              <span style={{ fontSize: '12px', color: '#b45309', fontWeight: '600' }}>
                {cohortMstRankings[0].company} • {cohortMstRankings[0].roll}
              </span>
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #fde68a', paddingTop: '10px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#92400e', display: 'block' }}>Total Marks</span>
                  <strong style={{ fontSize: '22px', color: '#92400e' }}>{cohortMstRankings[0].total}</strong>
                  <span style={{ fontSize: '12px', color: '#b45309' }}> / 160.0</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '11px', color: '#92400e', display: 'block' }}>Percentage</span>
                  <strong style={{ fontSize: '18px', color: '#16a34a' }}>{cohortMstRankings[0].percentage}%</strong>
                </div>
              </div>
            </div>

            {/* Rank 2: Priya Nair */}
            <div style={{
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
              border: '1.5px solid #94a3b8',
              borderRadius: '10px',
              padding: '22px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '16px',
                backgroundColor: '#64748b',
                color: '#ffffff',
                padding: '3px 10px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '700'
              }}>
                Rank 2 • 2nd Place
              </div>
              <div style={{ fontSize: '32px', marginBottom: '6px' }}>🥈</div>
              <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#1e293b', margin: '4px 0' }}>
                {cohortMstRankings[1].name}
              </h4>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>
                {cohortMstRankings[1].company} • {cohortMstRankings[1].roll}
              </span>
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #cbd5e1', paddingTop: '10px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>Total Marks</span>
                  <strong style={{ fontSize: '20px', color: '#1e293b' }}>{cohortMstRankings[1].total}</strong>
                  <span style={{ fontSize: '12px', color: '#64748b' }}> / 160.0</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>Percentage</span>
                  <strong style={{ fontSize: '17px', color: '#16a34a' }}>{cohortMstRankings[1].percentage}%</strong>
                </div>
              </div>
            </div>

            {/* Rank 3: Aditya Verma */}
            <div style={{
              background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
              border: '1.5px solid #fb923c',
              borderRadius: '10px',
              padding: '22px',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '16px',
                backgroundColor: '#ea580c',
                color: '#ffffff',
                padding: '3px 10px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '700'
              }}>
                Rank 3 • 3rd Place
              </div>
              <div style={{ fontSize: '32px', marginBottom: '6px' }}>🥉</div>
              <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#7c2d12', margin: '4px 0' }}>
                {cohortMstRankings[2].name}
              </h4>
              <span style={{ fontSize: '12px', color: '#c2410c', fontWeight: '600' }}>
                {cohortMstRankings[2].company} • {cohortMstRankings[2].roll}
              </span>
              <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #fed7aa', paddingTop: '10px' }}>
                <div>
                  <span style={{ fontSize: '11px', color: '#c2410c', display: 'block' }}>Total Marks</span>
                  <strong style={{ fontSize: '20px', color: '#7c2d12' }}>{cohortMstRankings[2].total}</strong>
                  <span style={{ fontSize: '12px', color: '#c2410c' }}> / 160.0</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '11px', color: '#c2410c', display: 'block' }}>Percentage</span>
                  <strong style={{ fontSize: '17px', color: '#16a34a' }}>{cohortMstRankings[2].percentage}%</strong>
                </div>
              </div>
            </div>

          </div>

          {/* Filter & Search Bar */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '18px 22px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            border: '1px solid #e2e8f0',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1 1 280px' }}>
              <FaSearch style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
              <input
                type="text"
                placeholder="Search by student name, roll number, or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px 9px 36px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '13px',
                  outline: 'none'
                }}
              />
            </div>

            {/* Company Dropdown */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12.5px', color: '#64748b', fontWeight: '600' }}>Company:</span>
              <select
                value={filterCompany}
                onChange={(e) => setFilterCompany(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '12.5px',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
              >
                {companies.map((c, i) => (
                  <option key={i} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Grade Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12.5px', color: '#64748b', fontWeight: '600' }}>Grade:</span>
              <select
                value={filterGrade}
                onChange={(e) => setFilterGrade(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '12.5px',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
              >
                <option value="ALL">All Grades (A, B, C)</option>
                <option value="A">Grade A / A-</option>
                <option value="B">Grade B+ / B / B-</option>
                <option value="C">Grade C+ / C</option>
              </select>
            </div>

            {/* Sort Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12.5px', color: '#64748b', fontWeight: '600' }}>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #cbd5e1',
                  fontSize: '12.5px',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
              >
                <option value="rank">Rank (1 to 45)</option>
                <option value="total">Total Marks</option>
                <option value="name">Student Name</option>
              </select>
            </div>
          </div>

          {/* Full Cohort 45 Students Table */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            border: '1px solid #e2e8f0',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: '16px 20px',
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <div>
                <strong style={{ fontSize: '15px', color: '#0f172a' }}>
                  Full Cohort Ranking Register ({filteredRankings.length} of {cohortMstRankings.length} Students Listed)
                </strong>
                <span style={{ fontSize: '12px', color: '#64748b', display: 'block' }}>
                  Out of 40 in each paper • Total Maximum: 160 Marks
                </span>
              </div>
              <span style={{
                backgroundColor: '#eff6ff',
                color: '#1d4ed8',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '700'
              }}>
                ⭐ Rohan Kumar Chaudhry highlighted
              </span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                <thead>
                  <tr style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
                    <th style={{ padding: '12px 14px', width: '70px', textAlign: 'center' }}>Rank</th>
                    <th style={{ padding: '12px 14px' }}>Student Name & Roll No.</th>
                    <th style={{ padding: '12px 14px' }}>Corporate Sponsor</th>
                    <th style={{ padding: '12px 10px', textAlign: 'center' }}>MFML (F112)<br /><span style={{ fontSize: '10.5px', color: '#94a3b8' }}>/ 40</span></th>
                    <th style={{ padding: '12px 10px', textAlign: 'center' }}>Stats (F111)<br /><span style={{ fontSize: '10.5px', color: '#94a3b8' }}>/ 40</span></th>
                    <th style={{ padding: '12px 10px', textAlign: 'center' }}>ML (F113)<br /><span style={{ fontSize: '10.5px', color: '#94a3b8' }}>/ 40</span></th>
                    <th style={{ padding: '12px 10px', textAlign: 'center' }}>AI (F114)<br /><span style={{ fontSize: '10.5px', color: '#94a3b8' }}>/ 40</span></th>
                    <th style={{ padding: '12px 14px', textAlign: 'center' }}>Total<br /><span style={{ fontSize: '10.5px', color: '#94a3b8' }}>/ 160</span></th>
                    <th style={{ padding: '12px 14px', textAlign: 'center' }}>Score %</th>
                    <th style={{ padding: '12px 14px', textAlign: 'center' }}>Grade</th>
                    <th style={{ padding: '12px 14px', textAlign: 'center' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRankings.map((student, idx) => {
                    const isRohan = student.isCurrentUser;
                    return (
                      <tr
                        key={idx}
                        style={{
                          backgroundColor: isRohan ? '#fefce8' : idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                          borderBottom: '1px solid #e2e8f0',
                          borderLeft: isRohan ? '5px solid #f59e0b' : 'none',
                          fontWeight: isRohan ? '700' : 'normal',
                          transition: 'background-color 0.15s'
                        }}
                      >
                        {/* Rank Badge */}
                        <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                          {student.rank === 1 ? (
                            <span style={{ backgroundColor: '#fef08a', color: '#854d0e', padding: '3px 8px', borderRadius: '12px', fontSize: '11.5px', fontWeight: '900' }}>
                              🥇 1
                            </span>
                          ) : student.rank === 2 ? (
                            <span style={{ backgroundColor: '#e2e8f0', color: '#334155', padding: '3px 8px', borderRadius: '12px', fontSize: '11.5px', fontWeight: '800' }}>
                              🥈 2
                            </span>
                          ) : student.rank === 3 ? (
                            <span style={{ backgroundColor: '#ffedd5', color: '#9a3412', padding: '3px 8px', borderRadius: '12px', fontSize: '11.5px', fontWeight: '800' }}>
                              🥉 3
                            </span>
                          ) : (
                            <span style={{ color: '#475569', fontWeight: '600' }}>#{student.rank}</span>
                          )}
                        </td>

                        {/* Name & Roll */}
                        <td style={{ padding: '12px 14px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <strong style={{ color: isRohan ? '#004b93' : '#0f172a' }}>{student.name}</strong>
                            {isRohan && (
                              <span style={{
                                backgroundColor: '#004b93',
                                color: '#ffffff',
                                padding: '1px 6px',
                                borderRadius: '4px',
                                fontSize: '10px',
                                fontWeight: '800'
                              }}>
                                YOU
                              </span>
                            )}
                          </div>
                          <span style={{ fontSize: '11.5px', color: '#64748b' }}>{student.roll}</span>
                        </td>

                        {/* Company */}
                        <td style={{ padding: '12px 14px', color: '#334155', fontSize: '12.5px' }}>
                          {student.company}
                        </td>

                        {/* Subject Marks */}
                        <td style={{ padding: '12px 10px', textAlign: 'center', color: '#0f172a' }}>{student.f112}</td>
                        <td style={{ padding: '12px 10px', textAlign: 'center', color: '#0f172a' }}>{student.f111}</td>
                        <td style={{ padding: '12px 10px', textAlign: 'center', color: '#0f172a' }}>{student.f113}</td>
                        <td style={{ padding: '12px 10px', textAlign: 'center', color: '#0f172a' }}>{student.f114}</td>

                        {/* Total Marks */}
                        <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                          <strong style={{ color: isRohan ? '#16a34a' : '#0f172a', fontSize: isRohan ? '14px' : '13px' }}>
                            {student.total}
                          </strong>
                        </td>

                        {/* Percentage */}
                        <td style={{ padding: '12px 14px', textAlign: 'center', color: '#16a34a', fontWeight: '700' }}>
                          {student.percentage}%
                        </td>

                        {/* Grade */}
                        <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                          <span style={{
                            backgroundColor: student.grade.startsWith('A') ? '#dcfce7' : student.grade.startsWith('B') ? '#eff6ff' : '#fef3c7',
                            color: student.grade.startsWith('A') ? '#15803d' : student.grade.startsWith('B') ? '#1d4ed8' : '#b45309',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '700'
                          }}>
                            {student.grade.split(' ')[0]}
                          </span>
                        </td>

                        {/* Status / Badge */}
                        <td style={{ padding: '12px 14px', textAlign: 'center', fontSize: '11.5px', color: '#64748b' }}>
                          {student.badge}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Footer Summary Strip */}
            <div style={{
              padding: '14px 20px',
              backgroundColor: '#f8fafc',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '12px',
              color: '#64748b'
            }}>
              <div>
                <strong>Batch Size:</strong> {cohortStatistics.totalStudents} Students • <strong>Pass Rate:</strong> {cohortStatistics.passingRate} • <strong>Batch Average:</strong> {cohortStatistics.averageScore} / 160.0 (75.2%)
              </div>
              <div>
                <strong>Batch Highest:</strong> 158.0 / 160.0 (Rohan Kumar Chaudhry, Rank 1)
              </div>
            </div>
          </div>

        </div>
      )}

      {/* 5. SUB-TAB CONTENT: (C) Continuous Assessment Results (Weeks 1 to 8) */}
      {activeSubTab === 'assignments' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            border: '1px solid #e2e8f0',
            borderLeft: '5px solid #16a34a'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', margin: 0 }}>
                  Weekly Continuous Assessment Scorecard (Weeks 1 to 8)
                </h3>
                <span style={{ fontSize: '12.5px', color: '#64748b' }}>
                  Evaluated throughout First Semester 2026-27 • Evaluator: BITS WILP Faculty Panel
                </span>
              </div>
              <div style={{
                backgroundColor: '#f0fdf4',
                border: '1px solid #86efac',
                color: '#15803d',
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '12.5px',
                fontWeight: '700'
              }}>
                🏆 Cumulative Average: 99.2% (Rank #1 of 45)
              </div>
            </div>

            <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: '1.5' }}>
              All 11 evaluated continuous assessment submissions across all 4 subjects have been officially graded and recorded into the BITS Pilani central grading portal (Week 12 observed on 08 Nov 2026 as Diwali Break with no assignment scheduled). Rohan Kumar Chaudhry holds the highest cumulative grade point in the cohort with a 99.2% average (1091/1100 marks).
            </p>
          </div>

          {/* Grid of Weekly Assignments */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '18px' }}>
            {assignmentResultsData.map((assign, idx) => {
              const isDiwali = assign.status === 'Diwali Break';
              const isGraded = assign.status === 'Graded';
              const isInProgress = assign.status === 'In Progress';

              return (
                <div
                  key={idx}
                  style={{
                    border: isDiwali ? '1px solid #fed7aa' : '1px solid #e2e8f0',
                    borderRadius: '8px',
                    padding: '20px',
                    backgroundColor: isDiwali ? '#fffbeb' : '#ffffff',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                    borderLeft: isGraded ? '4px solid #16a34a' : isDiwali ? '4px solid #f59e0b' : isInProgress ? '4px solid #0284c7' : '4px solid #94a3b8',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{
                          backgroundColor: isDiwali ? '#fef3c7' : '#eff6ff',
                          color: isDiwali ? '#b45309' : '#1d4ed8',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '800'
                        }}>
                          {assign.subjectCode}
                        </span>
                        <span style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', color: isDiwali ? '#b45309' : '#64748b' }}>
                          Week {assign.week} {isDiwali ? '• Recess' : 'Assessment'}
                        </span>
                      </div>

                      <span style={{
                        backgroundColor: isGraded ? '#dcfce7' : isDiwali ? '#fef3c7' : isInProgress ? '#e0f2fe' : '#f1f5f9',
                        color: isGraded ? '#15803d' : isDiwali ? '#b45309' : isInProgress ? '#0284c7' : '#64748b',
                        padding: '2px 8px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: '700'
                      }}>
                        {isGraded ? `Graded • Rank #${assign.rankInClass}` : isDiwali ? '🪔 Diwali Recess • Exempt' : isInProgress ? 'Active • Open' : 'Upcoming'}
                      </span>
                    </div>

                    <h4 style={{ fontSize: '15px', color: '#0f172a', fontWeight: '700', margin: '4px 0 6px' }}>
                      {assign.title}
                    </h4>
                    <p style={{ fontSize: '12px', color: '#475569', margin: '0 0 10px', lineHeight: '1.4' }}>
                      <strong>Topics:</strong> {assign.topics}
                    </p>

                    <div style={{
                      backgroundColor: isDiwali ? '#fef3c7' : '#f8fafc',
                      border: isDiwali ? '1px solid #fde68a' : '1px solid #f1f5f9',
                      borderRadius: '4px',
                      padding: '8px 10px',
                      fontSize: '11.5px',
                      color: isDiwali ? '#92400e' : '#334155',
                      fontStyle: 'italic',
                      marginBottom: '14px'
                    }}>
                      💬 "{assign.feedback}"
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    borderTop: isDiwali ? '1px solid #fde68a' : '1px solid #f1f5f9',
                    paddingTop: '10px',
                    fontSize: '12px'
                  }}>
                    <div>
                      <span style={{ color: '#94a3b8', display: 'block', fontSize: '10.5px' }}>
                        {isGraded ? 'Submitted on' : isDiwali ? 'Calendar' : 'Deadline'}
                      </span>
                      <strong style={{ color: '#334155' }}>{assign.submissionDate}</strong>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{ color: '#94a3b8', display: 'block', fontSize: '10.5px' }}>
                        {isGraded ? 'Score Obtained' : 'Status'}
                      </span>
                      {isGraded ? (
                        <strong style={{ fontSize: '20px', color: '#16a34a', fontWeight: '900' }}>
                          {assign.score} <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>/ {assign.maxScore}</span>
                        </strong>
                      ) : (
                        <strong style={{ fontSize: '13.5px', color: isDiwali ? '#b45309' : isInProgress ? '#0284c7' : '#64748b', fontWeight: '800' }}>
                          {isDiwali ? 'Exempt / Break' : assign.status}
                        </strong>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      )}

      {/* 6. SUB-TAB CONTENT: (D) Batch Analytics & Bell Curve */}
      {activeSubTab === 'analytics' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            padding: '24px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            border: '1px solid #e2e8f0'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0f172a', marginBottom: '8px' }}>
              📊 Batch Grade Distribution & Statistical Performance (45 Students)
            </h3>
            <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>
              Official percentile breakdown and distribution curve across all 4 subjects in the Mid-Semester Test (MST) examination.
            </p>

            {/* Metrics Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '15px',
              marginTop: '20px',
              borderTop: '1px solid #e2e8f0',
              paddingTop: '20px'
            }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Batch Size</span>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>45 Students</div>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Highest Total</span>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#16a34a', marginTop: '2px' }}>158.0 / 160</div>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Rohan Kumar Chaudhry</span>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Batch Average</span>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#004b93', marginTop: '2px' }}>120.4 / 160</div>
                <span style={{ fontSize: '11px', color: '#64748b' }}>75.25% Average</span>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Median Score</span>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>122.0 / 160</div>
                <span style={{ fontSize: '11px', color: '#64748b' }}>50th Percentile</span>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '14px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Lowest Score</span>
                <div style={{ fontSize: '20px', fontWeight: '800', color: '#b91c1c', marginTop: '2px' }}>82.0 / 160</div>
                <span style={{ fontSize: '11px', color: '#64748b' }}>Pass (Cutoff: 64)</span>
              </div>
            </div>

            {/* Grade Counts Bars */}
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', marginTop: '25px', marginBottom: '15px' }}>
              Grade Bracket Breakdown (Relative Grading Scale)
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {Object.entries(cohortStatistics.gradeCounts).map(([gradeName, count], idx) => {
                const percent = Math.round((count / 45) * 100);
                return (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: '600', color: '#334155' }}>{gradeName}</span>
                      <span style={{ color: '#64748b' }}><strong>{count} Students</strong> ({percent}%)</span>
                    </div>
                    <div style={{ width: '100%', height: '12px', backgroundColor: '#e2e8f0', borderRadius: '6px', overflow: 'hidden' }}>
                      <div style={{
                        width: `${percent}%`,
                        height: '100%',
                        backgroundColor: idx === 0 ? '#f59e0b' : idx === 1 ? '#10b981' : idx === 2 ? '#3b82f6' : '#64748b',
                        borderRadius: '6px'
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
