import React, { useState, useMemo } from 'react';
import { 
  FaBookOpen, 
  FaSearch, 
  FaCalendarAlt, 
  FaClock, 
  FaCode, 
  FaCopy, 
  FaCheck, 
  FaPrint, 
  FaLightbulb, 
  FaTimes, 
  FaBookmark, 
  FaRegBookmark,
  FaArrowLeft,
  FaArrowRight,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaCalculator,
  FaCheckCircle,
  FaBolt,
  FaListUl,
  FaLayerGroup,
  FaFileAlt,
  FaVideo
} from 'react-icons/fa';
import { courseSyllabus, dailyNotes } from '../data/notesData';

export default function NotesSection({ onOpenVideoLectures }) {
  const [viewMode, setViewMode] = useState('reader'); // 'reader' | 'syllabus' | 'cheatsheet'
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [selectedWeek, setSelectedWeek] = useState('ALL');
  const [selectedNoteId, setSelectedNoteId] = useState(dailyNotes[0].id); // default to first lecture (17 Aug 2026)
  const [selectedSyllabusCourse, setSelectedSyllabusCourse] = useState(courseSyllabus[0].code);
  const [showMstSolution, setShowMstSolution] = useState(true);
  const [copiedCodeId, setCopiedCodeId] = useState(null);
  const [copiedNoteId, setCopiedNoteId] = useState(null);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  // Filter notes for the left sidebar
  const filteredNotes = useMemo(() => {
    return dailyNotes.filter((note) => {
      if (selectedSubject !== 'ALL' && note.subjectCode !== selectedSubject) {
        return false;
      }
      if (selectedWeek !== 'ALL' && note.week.toString() !== selectedWeek) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchTitle = note.title.toLowerCase().includes(q);
        const matchTopic = note.module.toLowerCase().includes(q);
        const matchSummary = note.summary.toLowerCase().includes(q);
        const matchInstructor = note.instructor.toLowerCase().includes(q);
        const matchDate = note.date.toLowerCase().includes(q) || note.day.toLowerCase().includes(q);
        if (!matchTitle && !matchTopic && !matchSummary && !matchInstructor && !matchDate) {
          return false;
        }
      }
      return true;
    });
  }, [searchQuery, selectedSubject, selectedWeek]);

  // Current active lecture
  const currentNote = useMemo(() => {
    const found = dailyNotes.find(n => n.id === selectedNoteId);
    return found || dailyNotes[0];
  }, [selectedNoteId]);

  // Index in dailyNotes for Prev/Next
  const currentIndex = useMemo(() => {
    return dailyNotes.findIndex(n => n.id === currentNote.id);
  }, [currentNote]);

  const toggleBookmark = (id) => {
    if (bookmarkedIds.includes(id)) {
      setBookmarkedIds(bookmarkedIds.filter(item => item !== id));
    } else {
      setBookmarkedIds([...bookmarkedIds, id]);
    }
  };

  const copyCode = (id, code) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2500);
  };

  const copyLectureText = (note) => {
    const text = `${note.title}\nDate: ${note.date} (${note.day}) | Timing: ${note.timing}\nSubject: ${note.subjectCode} - ${note.subjectName}\nFaculty: ${note.instructor}\n\nSUMMARY:\n${note.summary}\n\nDETAILED NOTES:\n${note.detailedNotes}\n\nWORKED EXAMPLE:\n${note.workedExample?.problem || ''}\n${note.workedExample?.finalAnswer || ''}\n\nMST REVIEW QUESTION:\n${note.mstReviewQuestion || ''}\n\nMODEL SOLUTION:\n${note.mstSolution?.modelAnswer || ''}`;
    navigator.clipboard.writeText(text);
    setCopiedNoteId(note.id);
    setTimeout(() => setCopiedNoteId(null), 2500);
  };

  const getSubjectColor = (code) => {
    switch(code) {
      case 'BITS F112': return { bg: '#eff6ff', text: '#1d4ed8', border: '#bfdbfe', badge: '#2563eb' };
      case 'BITS F111': return { bg: '#fef3c7', text: '#b45309', border: '#fde68a', badge: '#d97706' };
      case 'BITS F113': return { bg: '#f0fdf4', text: '#15803d', border: '#bbf7d0', badge: '#16a34a' };
      case 'BITS F114': return { bg: '#faf5ff', text: '#7e22ce', border: '#e9d5ff', badge: '#9333ea' };
      default: return { bg: '#f3f4f6', text: '#374151', border: '#e5e7eb', badge: '#4b5563' };
    }
  };

  // Helper to parse detailed notes markdown into clean structured sections
  const renderFormattedNotes = (text) => {
    if (!text) return null;
    const parts = text.split(/(###\s+[^\n]+)/g);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        {parts.map((part, idx) => {
          if (part.startsWith('###')) {
            const heading = part.replace(/^###\s+/, '');
            return (
              <h4 
                key={idx} 
                style={{ 
                  fontSize: '17px', 
                  color: 'var(--primary-dark)', 
                  fontWeight: '700', 
                  margin: '18px 0 6px',
                  paddingBottom: '8px',
                  borderBottom: '2px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <FaBookOpen style={{ color: 'var(--secondary-blue)', fontSize: '15px' }} />
                {heading}
              </h4>
            );
          } else if (part.trim()) {
            return (
              <div 
                key={idx} 
                style={{ 
                  fontSize: '14.5px', 
                  color: '#334155', 
                  lineHeight: '1.75', 
                  whiteSpace: 'pre-wrap',
                  backgroundColor: '#f8fafc',
                  padding: '16px 20px',
                  borderRadius: '6px',
                  border: '1px solid #f1f5f9'
                }}
              >
                {part.trim()}
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Top Academic Header & View Mode Switcher */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        padding: '24px 30px',
        boxShadow: 'var(--shadow-sm)',
        borderLeft: '5px solid var(--secondary-blue)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
            <span style={{ backgroundColor: '#eff6ff', color: 'var(--secondary-blue)', padding: '3px 10px', borderRadius: '12px', fontSize: '11.5px', fontWeight: '700', textTransform: 'uppercase' }}>
              BITS Pilani WILP M.Tech AI/ML
            </span>
            <span style={{ backgroundColor: '#fef2f2', color: '#b91c1c', padding: '3px 10px', borderRadius: '12px', fontSize: '11.5px', fontWeight: '700' }}>
              First Semester 2026-27
            </span>
          </div>
          <h2 style={{ fontSize: '24px', color: 'var(--primary-dark)', fontWeight: '800', margin: '4px 0 6px' }}>
            Comprehensive Day-by-Day Course Notes & Study Portal
          </h2>
          <p style={{ fontSize: '13.5px', color: 'var(--text-gray)', margin: 0 }}>
            Official textbook-grade lecture archives covering <strong>17 August 2026 to 02 October 2026 (41 Total Sessions)</strong> with complete mathematical derivations, worked numerical examples, and high-yield MST model answers.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button
            onClick={() => setViewMode('reader')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '6px',
              border: viewMode === 'reader' ? '2px solid var(--secondary-blue)' : '1px solid #cbd5e1',
              backgroundColor: viewMode === 'reader' ? 'var(--secondary-blue)' : '#ffffff',
              color: viewMode === 'reader' ? '#ffffff' : '#334155',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <FaBookOpen /> Interactive Lecture Reader (41 Days)
          </button>

          <button
            onClick={() => setViewMode('syllabus')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '6px',
              border: viewMode === 'syllabus' ? '2px solid var(--secondary-blue)' : '1px solid #cbd5e1',
              backgroundColor: viewMode === 'syllabus' ? 'var(--secondary-blue)' : '#ffffff',
              color: viewMode === 'syllabus' ? '#ffffff' : '#334155',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <FaGraduationCap /> Official Syllabus & Curriculum
          </button>

          <button
            onClick={() => setViewMode('cheatsheet')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '6px',
              border: viewMode === 'cheatsheet' ? '2px solid #b91c1c' : '1px solid #cbd5e1',
              backgroundColor: viewMode === 'cheatsheet' ? '#b91c1c' : '#ffffff',
              color: viewMode === 'cheatsheet' ? '#ffffff' : '#334155',
              fontWeight: '700',
              fontSize: '13px',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            <FaBolt /> MST Quick Revision Cheat Sheet
          </button>

          {onOpenVideoLectures && (
            <button
              onClick={onOpenVideoLectures}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '6px',
                border: '1.5px solid #004b93',
                backgroundColor: '#ffffff',
                color: '#004b93',
                fontWeight: '700',
                fontSize: '13px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <FaVideo style={{ color: '#004b93' }} /> Topic Video Lectures (61) →
            </button>
          )}
        </div>
      </div>

      {/* ===================== VIEW 1: INTERACTIVE LECTURE WORKSPACE ===================== */}
      {viewMode === 'reader' && (
        <div style={{ display: 'grid', gridTemplateColumns: '350px 1fr', gap: '25px', alignItems: 'start' }} className="notes_workspace_grid">
          
          {/* LEFT SIDEBAR: Lecture Navigator & Timeline */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-sm)',
            padding: '20px',
            position: 'sticky',
            top: '80px',
            maxHeight: 'calc(100vh - 100px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}>
            {/* Search Input */}
            <div style={{ position: 'relative' }}>
              <FaSearch style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', fontSize: '13px' }} />
              <input
                type="text"
                placeholder="Search by topic, formula, faculty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 38px',
                  border: '1.5px solid #e2e8f0',
                  borderRadius: '6px',
                  fontSize: '13px',
                  color: '#1e293b',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8' }}
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Subject Filters */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              <button
                onClick={() => setSelectedSubject('ALL')}
                style={{
                  padding: '4px 10px',
                  borderRadius: '14px',
                  fontSize: '11px',
                  fontWeight: '700',
                  border: 'none',
                  backgroundColor: selectedSubject === 'ALL' ? 'var(--secondary-blue)' : '#f1f5f9',
                  color: selectedSubject === 'ALL' ? '#ffffff' : '#475569',
                  cursor: 'pointer'
                }}
              >
                All (41)
              </button>
              {courseSyllabus.map(c => {
                const isSel = selectedSubject === c.code;
                const count = dailyNotes.filter(n => n.subjectCode === c.code).length;
                return (
                  <button
                    key={c.code}
                    onClick={() => setSelectedSubject(c.code)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '14px',
                      fontSize: '11px',
                      fontWeight: '700',
                      border: 'none',
                      backgroundColor: isSel ? 'var(--secondary-blue)' : '#f1f5f9',
                      color: isSel ? '#ffffff' : '#475569',
                      cursor: 'pointer'
                    }}
                  >
                    {c.code.split(' ')[1]} ({count})
                  </button>
                );
              })}
            </div>

            {/* Week Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase' }}>Week:</span>
              <select
                value={selectedWeek}
                onChange={(e) => setSelectedWeek(e.target.value)}
                style={{
                  flex: 1,
                  padding: '6px 10px',
                  borderRadius: '4px',
                  border: '1px solid #cbd5e1',
                  fontSize: '12px',
                  color: '#334155',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
              >
                <option value="ALL">All Weeks (1 to 7)</option>
                <option value="1">Week 1 (17 Aug – 22 Aug)</option>
                <option value="2">Week 2 (24 Aug – 29 Aug)</option>
                <option value="3">Week 3 (31 Aug – 05 Sep)</option>
                <option value="4">Week 4 (07 Sep – 12 Sep)</option>
                <option value="5">Week 5 (14 Sep – 19 Sep)</option>
                <option value="6">Week 6 (21 Sep – 26 Sep)</option>
                <option value="7">Week 7 (28 Sep – 02 Oct • MST Prep)</option>
              </select>
            </div>

            {/* Timeline Session List */}
            <div style={{
              overflowY: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              paddingRight: '4px'
            }}>
              {filteredNotes.map((note) => {
                const isActive = note.id === currentNote.id;
                const subjColor = getSubjectColor(note.subjectCode);
                const isBookmarked = bookmarkedIds.includes(note.id);

                return (
                  <div
                    key={note.id}
                    onClick={() => setSelectedNoteId(note.id)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      border: isActive ? `2px solid ${subjColor.badge}` : '1px solid #e2e8f0',
                      backgroundColor: isActive ? '#eff6ff' : '#ffffff',
                      borderLeft: `4px solid ${subjColor.badge}`,
                      transition: 'all 0.15s ease',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '11px', fontWeight: '800', color: subjColor.text }}>
                          {note.subjectCode}
                        </span>
                        <span style={{ fontSize: '10.5px', color: '#64748b' }}>
                          • Wk {note.week}
                        </span>
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: '600', color: '#475569' }}>
                        {note.date.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>

                    <h5 style={{
                      fontSize: '12.5px',
                      color: isActive ? '#0f172a' : '#334155',
                      fontWeight: isActive ? '700' : '600',
                      margin: '2px 0 4px',
                      lineHeight: '1.4'
                    }}>
                      {note.title.split(': ')[1] || note.title}
                    </h5>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10.5px', color: '#64748b' }}>
                      <span>{note.day} • {note.sessionType.split(' ')[0]}</span>
                      {isBookmarked && <FaBookmark style={{ color: '#eab308' }} />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT CANVAS: In-Depth Textbook Lecture Document */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-sm)',
            padding: '35px 42px',
            display: 'flex',
            flexDirection: 'column',
            gap: '30px'
          }}>
            
            {/* Top Toolbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0', paddingBottom: '14px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                <span style={{ fontWeight: '700', color: 'var(--secondary-blue)' }}>BITS Pilani WILP</span> &gt; {currentNote.subjectCode} &gt; {currentNote.date}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setSelectedNoteId(dailyNotes[currentIndex - 1].id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#f8fafc',
                    color: currentIndex === 0 ? '#cbd5e1' : '#334155',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
                  }}
                >
                  <FaArrowLeft /> Prev Day
                </button>

                <button
                  disabled={currentIndex === dailyNotes.length - 1}
                  onClick={() => setSelectedNoteId(dailyNotes[currentIndex + 1].id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#f8fafc',
                    color: currentIndex === dailyNotes.length - 1 ? '#cbd5e1' : '#334155',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: currentIndex === dailyNotes.length - 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  Next Day <FaArrowRight />
                </button>

                <button
                  onClick={() => copyLectureText(currentNote)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '4px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: copiedNoteId === currentNote.id ? '#15803d' : '#f1f5f9',
                    color: copiedNoteId === currentNote.id ? '#ffffff' : '#334155',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  {copiedNoteId === currentNote.id ? <><FaCheck /> Notes Copied!</> : <><FaCopy /> Copy Notes</>}
                </button>

                <button
                  onClick={() => toggleBookmark(currentNote.id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '4px',
                    border: '1px solid #cbd5e1',
                    backgroundColor: '#ffffff',
                    color: bookmarkedIds.includes(currentNote.id) ? '#eab308' : '#64748b',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                  title="Bookmark"
                >
                  {bookmarkedIds.includes(currentNote.id) ? <FaBookmark /> : <FaRegBookmark />}
                </button>

                <button
                  onClick={() => window.print()}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--primary-dark)',
                    color: '#ffffff',
                    border: 'none',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  <FaPrint /> Print
                </button>

                {onOpenVideoLectures && (
                  <button
                    onClick={onOpenVideoLectures}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 14px',
                      borderRadius: '4px',
                      backgroundColor: '#004b93',
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    <FaVideo /> Watch Video Lecture
                  </button>
                )}
              </div>
            </div>

            {/* Lecture Hero Header */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{ ...getSubjectColor(currentNote.subjectCode), padding: '4px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '800' }}>
                  {currentNote.subjectCode} • {currentNote.subjectName}
                </span>
                <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '700' }}>
                  Week {currentNote.week}
                </span>
                <span style={{ backgroundColor: '#f1f5f9', color: '#334155', padding: '4px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>
                  {currentNote.sessionType}
                </span>
                <span style={{ backgroundColor: '#fef2f2', color: '#b91c1c', padding: '4px 10px', borderRadius: '4px', fontSize: '11.5px', fontWeight: '700' }}>
                  MST High-Yield Topic
                </span>
              </div>

              <h1 style={{ fontSize: '26px', color: 'var(--primary-dark)', fontWeight: '800', margin: '8px 0 10px', lineHeight: '1.3' }}>
                {currentNote.title}
              </h1>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', fontSize: '13px', color: '#475569', backgroundColor: '#f8fafc', padding: '12px 18px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                <span>📅 <strong>Date:</strong> {currentNote.date} ({currentNote.day})</span>
                <span>⏰ <strong>Timing:</strong> {currentNote.timing}</span>
                <span>👨‍🏫 <strong>Faculty:</strong> {currentNote.instructor}</span>
                <span>📖 <strong>Module:</strong> {currentNote.module}</span>
              </div>
            </div>

            {/* Quick Section Anchor Jumper */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', padding: '10px 14px', backgroundColor: '#f1f5f9', borderRadius: '6px' }}>
              <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginRight: '6px', alignSelf: 'center' }}>
                Jump to:
              </span>
              <a href="#section-overview" style={{ textDecoration: 'none', color: '#1e293b', fontSize: '11.5px', fontWeight: '600', backgroundColor: '#ffffff', padding: '3px 8px', borderRadius: '3px', border: '1px solid #cbd5e1' }}>1. Overview</a>
              <a href="#section-theory" style={{ textDecoration: 'none', color: '#1e293b', fontSize: '11.5px', fontWeight: '600', backgroundColor: '#ffffff', padding: '3px 8px', borderRadius: '3px', border: '1px solid #cbd5e1' }}>2. Theory & Concepts</a>
              <a href="#section-formulas" style={{ textDecoration: 'none', color: '#1e293b', fontSize: '11.5px', fontWeight: '600', backgroundColor: '#ffffff', padding: '3px 8px', borderRadius: '3px', border: '1px solid #cbd5e1' }}>3. Key Formulas</a>
              <a href="#section-worked" style={{ textDecoration: 'none', color: '#1e293b', fontSize: '11.5px', fontWeight: '600', backgroundColor: '#ffffff', padding: '3px 8px', borderRadius: '3px', border: '1px solid #cbd5e1' }}>4. Worked Numerical</a>
              <a href="#section-code" style={{ textDecoration: 'none', color: '#1e293b', fontSize: '11.5px', fontWeight: '600', backgroundColor: '#ffffff', padding: '3px 8px', borderRadius: '3px', border: '1px solid #cbd5e1' }}>5. Python Code</a>
              <a href="#section-mst" style={{ textDecoration: 'none', color: '#b91c1c', fontSize: '11.5px', fontWeight: '700', backgroundColor: '#fef2f2', padding: '3px 8px', borderRadius: '3px', border: '1px solid #fecaca' }}>6. MST Exam Solution</a>
            </div>

            {/* SECTION 1: Overview & Learning Goals */}
            <div id="section-overview">
              <h3 style={{ fontSize: '17px', color: 'var(--primary-dark)', fontWeight: '700', borderBottom: '2px solid #e2e8f0', paddingBottom: '6px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaCheckCircle style={{ color: '#16a34a' }} /> 1. Executive Summary & Learning Objectives
              </h3>
              <p style={{ fontSize: '14.5px', color: '#334155', lineHeight: '1.7', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '16px 20px', borderRadius: '6px', margin: '0 0 14px' }}>
                {currentNote.summary}
              </p>
              {currentNote.objectives && (
                <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '14px 18px' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Key Learning Outcomes:
                  </span>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13.5px', color: '#334155', lineHeight: '1.6' }}>
                    {currentNote.objectives.map((obj, oIdx) => (
                      <li key={oIdx}>{obj}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* SECTION 2: Comprehensive Theoretical Notes & Proofs */}
            <div id="section-theory">
              <h3 style={{ fontSize: '17px', color: 'var(--primary-dark)', fontWeight: '700', borderBottom: '2px solid #e2e8f0', paddingBottom: '6px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaBookOpen style={{ color: 'var(--secondary-blue)' }} /> 2. Comprehensive Theoretical Foundations & Concept Notes
              </h3>
              {renderFormattedNotes(currentNote.detailedNotes)}
            </div>

            {/* SECTION 3: Mathematical Formulations */}
            {currentNote.keyFormulas && currentNote.keyFormulas.length > 0 && (
              <div id="section-formulas">
                <h3 style={{ fontSize: '17px', color: 'var(--primary-dark)', fontWeight: '700', borderBottom: '2px solid #e2e8f0', paddingBottom: '6px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaLightbulb style={{ color: '#eab308' }} /> 3. Governing Mathematical Formulas & Definitions
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '12px' }}>
                  {currentNote.keyFormulas.map((formula, fIdx) => (
                    <div key={fIdx} style={{ backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '6px', padding: '14px 16px' }}>
                      <span style={{ fontSize: '10.5px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                        Equation {fIdx + 1}:
                      </span>
                      <code style={{ fontSize: '13.5px', color: '#0f172a', fontFamily: 'monospace', whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontWeight: '600' }}>
                        {formula}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECTION 4: Step-by-Step Worked Numerical Problem */}
            {currentNote.workedExample && (
              <div id="section-worked" style={{ backgroundColor: '#fffdf5', border: '1.5px solid #fde68a', borderRadius: '8px', padding: '22px 26px' }}>
                <h3 style={{ fontSize: '17px', color: '#92400e', fontWeight: '700', borderBottom: '2px solid #fde68a', paddingBottom: '8px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaCalculator style={{ color: '#d97706' }} /> 4. Step-by-Step Worked Numerical Problem
                </h3>
                
                <h4 style={{ fontSize: '15px', color: '#78350f', fontWeight: '700', margin: '0 0 10px' }}>
                  {currentNote.workedExample.title}
                </h4>

                <div style={{ backgroundColor: '#ffffff', border: '1px solid #fde68a', padding: '14px 18px', borderRadius: '6px', marginBottom: '14px', fontSize: '13.5px', color: '#1f2937', fontWeight: '600', lineHeight: '1.5' }}>
                  <strong>Problem Statement:</strong> {currentNote.workedExample.problem}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                  {currentNote.workedExample.steps.map((step, sIdx) => (
                    <div key={sIdx} style={{ backgroundColor: '#ffffff', border: '1px solid #f1f5f9', padding: '10px 14px', borderRadius: '4px', fontSize: '13px', color: '#334155', lineHeight: '1.5' }}>
                      {step}
                    </div>
                  ))}
                </div>

                <div style={{ backgroundColor: '#f0fdf4', border: '1.5px solid #86efac', padding: '12px 18px', borderRadius: '6px', fontSize: '13.5px', color: '#166534', fontWeight: '700' }}>
                  ✓ Final Answer: {currentNote.workedExample.finalAnswer}
                </div>
              </div>
            )}

            {/* SECTION 5: Practical Computational Implementation */}
            {currentNote.codeSnippet && (
              <div id="section-code">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #e2e8f0', paddingBottom: '6px', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--primary-dark)', fontWeight: '700', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FaCode style={{ color: '#059669' }} /> 5. Practical Python / Computational Implementation
                  </h3>
                  <button
                    onClick={() => copyCode(currentNote.id, currentNote.codeSnippet)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 12px',
                      backgroundColor: copiedCodeId === currentNote.id ? '#15803d' : '#f1f5f9',
                      color: copiedCodeId === currentNote.id ? '#ffffff' : '#334155',
                      border: 'none',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    {copiedCodeId === currentNote.id ? <><FaCheck /> Copied!</> : <><FaCopy /> Copy Python Script</>}
                  </button>
                </div>

                <pre style={{
                  backgroundColor: '#0f172a',
                  color: '#f8fafc',
                  padding: '18px 22px',
                  borderRadius: '6px',
                  fontSize: '13px',
                  lineHeight: '1.55',
                  overflowX: 'auto',
                  fontFamily: 'Consolas, Monaco, "Courier New", monospace',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                }}>
                  <code>{currentNote.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* SECTION 6: High-Yield MST Exam Question & Model Solution */}
            {currentNote.mstReviewQuestion && (
              <div id="section-mst" style={{ backgroundColor: '#fef2f2', border: '1.5px solid #fecaca', borderRadius: '8px', padding: '24px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #fecaca', paddingBottom: '8px', marginBottom: '14px', flexWrap: 'wrap', gap: '10px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ backgroundColor: '#b91c1c', color: '#ffffff', padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '800' }}>
                      MST High-Yield Question
                    </span>
                    <h3 style={{ fontSize: '17px', color: '#991b1b', fontWeight: '800', margin: 0 }}>
                      6. Official Examination Review Problem & Scoring Rubric
                    </h3>
                  </div>

                  <button
                    onClick={() => setShowMstSolution(!showMstSolution)}
                    style={{
                      padding: '5px 12px',
                      backgroundColor: '#ffffff',
                      color: '#b91c1c',
                      border: '1px solid #fecaca',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    {showMstSolution ? 'Hide Model Solution' : 'Show Official Model Answer'}
                  </button>
                </div>

                <div style={{ backgroundColor: '#ffffff', border: '1px solid #fecaca', padding: '16px 20px', borderRadius: '6px', marginBottom: '14px', fontSize: '14px', color: '#7f1d1d', fontWeight: '700', lineHeight: '1.55' }}>
                  ❓ <strong>Exam Question [{currentNote.mstSolution?.marks || '10 Marks'}]:</strong> {currentNote.mstReviewQuestion}
                </div>

                {showMstSolution && currentNote.mstSolution && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', padding: '16px 20px', borderRadius: '6px' }}>
                      <span style={{ fontSize: '11px', fontWeight: '800', color: '#15803d', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                        ✓ Official BITS Model Answer:
                      </span>
                      <p style={{ fontSize: '13.5px', color: '#1e293b', lineHeight: '1.7', margin: 0, whiteSpace: 'pre-wrap' }}>
                        {currentNote.mstSolution.modelAnswer}
                      </p>
                    </div>

                    {currentNote.mstSolution.rubric && (
                      <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', padding: '12px 18px', borderRadius: '6px' }}>
                        <span style={{ fontSize: '11px', fontWeight: '700', color: '#475569', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                          Examination Marking Rubric:
                        </span>
                        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '12.5px', color: '#475569', lineHeight: '1.5' }}>
                          {currentNote.mstSolution.rubric.map((r, rIdx) => (
                            <li key={rIdx}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* SECTION 7: Reference Textbooks */}
            {currentNote.readings && (
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '16px 20px' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  📚 Prescribed Textbook Reference & Recommended Reading:
                </span>
                <p style={{ fontSize: '13.5px', color: '#334155', margin: 0, fontWeight: '600' }}>
                  {currentNote.readings}
                </p>
              </div>
            )}

            {/* Bottom Next/Prev Pagination Card */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #e2e8f0', paddingTop: '20px', flexWrap: 'wrap', gap: '15px' }}>
              {currentIndex > 0 ? (
                <div 
                  onClick={() => setSelectedNoteId(dailyNotes[currentIndex - 1].id)}
                  style={{ cursor: 'pointer', maxWidth: '300px' }}
                >
                  <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>← Previous Session</span>
                  <strong style={{ fontSize: '13.5px', color: 'var(--secondary-blue)' }}>{dailyNotes[currentIndex - 1].title}</strong>
                </div>
              ) : <div />}

              {currentIndex < dailyNotes.length - 1 && (
                <div 
                  onClick={() => setSelectedNoteId(dailyNotes[currentIndex + 1].id)}
                  style={{ cursor: 'pointer', textAlign: 'right', maxWidth: '300px' }}
                >
                  <span style={{ fontSize: '11px', color: '#64748b', display: 'block' }}>Next Session →</span>
                  <strong style={{ fontSize: '13.5px', color: 'var(--secondary-blue)' }}>{dailyNotes[currentIndex + 1].title}</strong>
                </div>
              )}
            </div>

          </div>

        </div>
      )}

      {/* ===================== VIEW 2: OFFICIAL COURSE SYLLABUS ===================== */}
      {viewMode === 'syllabus' && (
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-sm)',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '25px'
        }}>
          <div>
            <span style={{ backgroundColor: '#eff6ff', color: 'var(--secondary-blue)', padding: '4px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: '800' }}>
              Academic Year 2026-27 • First Semester
            </span>
            <h3 style={{ fontSize: '22px', color: 'var(--primary-dark)', fontWeight: '800', margin: '8px 0 6px' }}>
              Official BITS Pilani M.Tech AI/ML Course Curriculum & Grading Structure
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-gray)', margin: 0 }}>
              Complete course structure, credits, faculty directory, module outlines, and reference books across all 4 core subjects.
            </p>
          </div>

          {/* Course Tabs */}
          <div style={{ display: 'flex', borderBottom: '2px solid #e2e8f0', gap: '8px', overflowX: 'auto' }}>
            {courseSyllabus.map(course => (
              <button
                key={course.code}
                onClick={() => setSelectedSyllabusCourse(course.code)}
                style={{
                  padding: '12px 20px',
                  border: 'none',
                  borderBottom: selectedSyllabusCourse === course.code ? '3px solid var(--secondary-blue)' : '3px solid transparent',
                  backgroundColor: 'transparent',
                  color: selectedSyllabusCourse === course.code ? 'var(--secondary-blue)' : '#64748b',
                  fontWeight: '700',
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {course.code}: {course.title}
              </button>
            ))}
          </div>

          {/* Course Content */}
          {(() => {
            const course = courseSyllabus.find(c => c.code === selectedSyllabusCourse) || courseSyllabus[0];
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px', backgroundColor: '#f8fafc', padding: '20px 24px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div>
                    <h4 style={{ fontSize: '20px', color: 'var(--primary-dark)', fontWeight: '800', margin: '0 0 6px' }}>
                      {course.code}: {course.title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: '#475569', margin: '0 0 10px', maxWidth: '800px', lineHeight: '1.5' }}>
                      {course.description}
                    </p>
                    <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#334155' }}>
                      <span>👨‍🏫 <strong>Instructor-in-Charge:</strong> {course.faculty}</span>
                      <span>🎓 <strong>Course Units:</strong> {course.credits} Credits</span>
                      <span>📅 <strong>Class Schedule:</strong> 6:00 PM – 9:00 PM</span>
                    </div>
                  </div>

                  <div style={{ backgroundColor: '#ffffff', padding: '12px 18px', borderRadius: '6px', border: '1.5px solid #cbd5e1', textAlign: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Weightage</span>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b', marginTop: '4px' }}>
                      MST: <strong>30%</strong> | Assgn: <strong>30%</strong> | Final: <strong>40%</strong>
                    </div>
                  </div>
                </div>

                {/* Modules Grid */}
                <h4 style={{ fontSize: '17px', color: 'var(--primary-dark)', fontWeight: '700', margin: 0 }}>
                  Detailed Course Modules (MST Coverage: Modules 1 to 4)
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))', gap: '18px' }}>
                  {course.modules.map(mod => (
                    <div key={mod.moduleNumber} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', backgroundColor: '#ffffff', borderTop: '4px solid var(--secondary-blue)' }}>
                      <span style={{ fontSize: '11px', fontWeight: '800', color: 'var(--secondary-blue)', textTransform: 'uppercase' }}>
                        Module {mod.moduleNumber}
                      </span>
                      <h5 style={{ fontSize: '16px', color: 'var(--primary-dark)', fontWeight: '700', margin: '4px 0 10px' }}>
                        {mod.title}
                      </h5>
                      <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#334155', lineHeight: '1.6' }}>
                        {mod.topics.map((t, tIdx) => (
                          <li key={tIdx}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Prescribed Books */}
                <div style={{ backgroundColor: '#f8fafc', padding: '20px 24px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ fontSize: '16px', color: 'var(--primary-dark)', fontWeight: '700', margin: '0 0 10px' }}>
                    Prescribed Textbooks and Reference Literature
                  </h4>
                  <ol style={{ margin: 0, paddingLeft: '22px', fontSize: '13.5px', color: '#334155', lineHeight: '1.7' }}>
                    {course.referenceBooks.map((book, bIdx) => (
                      <li key={bIdx}><strong>{book}</strong></li>
                    ))}
                  </ol>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* ===================== VIEW 3: MST QUICK REVISION CHEAT SHEET ===================== */}
      {viewMode === 'cheatsheet' && (
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          boxShadow: 'var(--shadow-sm)',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '25px'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', borderBottom: '2px solid #e2e8f0', paddingBottom: '14px' }}>
            <div>
              <span style={{ backgroundColor: '#fef2f2', color: '#b91c1c', padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '800' }}>
                Pre-Exam Rapid Revision
              </span>
              <h3 style={{ fontSize: '22px', color: 'var(--primary-dark)', fontWeight: '800', margin: '6px 0 4px' }}>
                Mid-Semester Test (MST) High-Yield Formula Cheat Sheet
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--text-gray)', margin: 0 }}>
                Essential formulas, theorems, and convergence rates across all 4 subjects for tomorrow's examinations.
              </p>
            </div>
            <button
              onClick={() => window.print()}
              style={{ padding: '8px 16px', backgroundColor: '#b91c1c', color: '#ffffff', border: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}
            >
              <FaPrint /> Print Cheat Sheet
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '20px' }}>
            
            {/* Card 1: Math Foundations */}
            <div style={{ border: '1.5px solid #bfdbfe', borderRadius: '8px', padding: '20px', backgroundColor: '#f8fafc', borderTop: '4px solid #2563eb' }}>
              <span style={{ backgroundColor: '#eff6ff', color: '#1d4ed8', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '800' }}>BITS F112</span>
              <h4 style={{ fontSize: '16px', color: '#1e3a8a', fontWeight: '800', margin: '6px 0 12px' }}>
                Mathematical Foundations for ML
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                <div><strong>Orthogonal Projection:</strong> <code>P = A(A^T A)^(-1) A^T</code> (P^2 = P, P^T = P)</div>
                <div><strong>Gram-Schmidt:</strong> <code>u_k = v_k - sum (v_k . u_j / ||u_j||^2) u_j</code></div>
                <div><strong>Spectral Theorem:</strong> <code>A = Q Lambda Q^T</code> (for real symmetric A)</div>
                <div><strong>SVD:</strong> <code>A = U Sigma V^T = sum sigma_i u_i v_i^T</code> (sigma_i = sqrt(lambda_i(A^T A)))</div>
                <div><strong>Hessian Curvature:</strong> H &gt; 0 =&gt; local min, H &lt; 0 =&gt; local max, indef =&gt; saddle</div>
                <div><strong>KKT Conditions:</strong> Stationarity + Primal Feas + Dual Feas (lambda &gt;= 0) + Slackness (lambda_i * g_i = 0)</div>
              </div>
            </div>

            {/* Card 2: Statistical Methods */}
            <div style={{ border: '1.5px solid #fde68a', borderRadius: '8px', padding: '20px', backgroundColor: '#fffdf5', borderTop: '4px solid #d97706' }}>
              <span style={{ backgroundColor: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '800' }}>BITS F111</span>
              <h4 style={{ fontSize: '16px', color: '#78350f', fontWeight: '800', margin: '6px 0 12px' }}>
                Introduction to Statistical Methods
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                <div><strong>Bayes Theorem:</strong> <code>P(A|B) = [P(B|A) P(A)] / sum P(B|A_i) P(A_i)</code></div>
                <div><strong>Poisson PMF:</strong> <code>P(X=k) = (lambda^k e^(-lambda)) / k!</code> (E[X] = Var(X) = lambda)</div>
                <div><strong>CLT:</strong> <code>Z = (X_bar - mu) / (sigma / sqrt(n)) ~ N(0, 1)</code> for n &gt;= 30</div>
                <div><strong>Student's t-test:</strong> <code>t = (X_bar - mu_0) / (S / sqrt(n)) ~ t_(n-1)</code></div>
                <div><strong>Chi-Square:</strong> <code>chi^2 = sum (O_i - E_i)^2 / E_i</code> with df = (r-1)(c-1)</div>
                <div><strong>ANOVA F-test:</strong> <code>F = MS_Between / MS_Within = (SS_B / (k-1)) / (SS_W / (N-k))</code></div>
              </div>
            </div>

            {/* Card 3: Machine Learning */}
            <div style={{ border: '1.5px solid #bbf7d0', borderRadius: '8px', padding: '20px', backgroundColor: '#f0fdf4', borderTop: '4px solid #16a34a' }}>
              <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '800' }}>BITS F113</span>
              <h4 style={{ fontSize: '16px', color: '#14532d', fontWeight: '800', margin: '6px 0 12px' }}>
                Machine Learning Algorithms
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                <div><strong>OLS Closed Form:</strong> <code>theta = (X^T X)^(-1) X^T y</code></div>
                <div><strong>Ridge (L2):</strong> <code>theta = (X^T X + lambda*I)^(-1) X^T y</code></div>
                <div><strong>Logistic Sigmoid:</strong> <code>sigma(z) = 1 / (1 + e^(-z))</code>, <code>sigma' = sigma(1 - sigma)</code></div>
                <div><strong>Cross-Entropy:</strong> <code>Loss = -(1/m) sum [y ln(p) + (1-y) ln(1-p)]</code></div>
                <div><strong>Shannon Entropy:</strong> <code>H(S) = - sum p_i log2(p_i)</code> | <strong>Gini:</strong> <code>1 - sum p_i^2</code></div>
                <div><strong>SVM Margin:</strong> <code>gamma = 1 / ||w||</code> | <strong>Dual:</strong> <code>max sum alpha_i - (1/2) sum alpha_i alpha_j y_i y_j K(x_i, x_j)</code></div>
              </div>
            </div>

            {/* Card 4: AI & Computational Intelligence */}
            <div style={{ border: '1.5px solid #e9d5ff', borderRadius: '8px', padding: '20px', backgroundColor: '#faf5ff', borderTop: '4px solid #9333ea' }}>
              <span style={{ backgroundColor: '#f3e8ff', color: '#7e22ce', padding: '2px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: '800' }}>BITS F114</span>
              <h4 style={{ fontSize: '16px', color: '#581c87', fontWeight: '800', margin: '6px 0 12px' }}>
                Artificial and Computational Intelligence
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12.5px' }}>
                <div><strong>A* Search:</strong> <code>f(n) = g(n) + h(n)</code> (Admissible: <code>h(n) &lt;= h*(n)</code>, Consistent: <code>h(n) &lt;= c + h(n')</code>)</div>
                <div><strong>IDA* Space:</strong> <code>O(bd)</code> memory, cutoffs updated to min f(n) &gt; current cutoff</div>
                <div><strong>Minimax:</strong> MAX takes max child, MIN takes min child</div>
                <div><strong>Alpha-Beta Pruning:</strong> Prune child if <code>alpha &gt;= beta</code> (Optimal move ordering: <code>O(b^(m/2))</code>)</div>
                <div><strong>Resolution Rule:</strong> <code>(A or B) and (~B or C) =&gt; (A or C)</code></div>
                <div><strong>Heuristic Dominance:</strong> If <code>h2(n) &gt;= h1(n)</code> for all n, h2 never expands more nodes than h1</div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
