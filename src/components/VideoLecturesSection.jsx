import React, { useState, useMemo, useEffect } from 'react';
import {
  FaPlay,
  FaPause,
  FaVideo,
  FaSearch,
  FaFilter,
  FaClock,
  FaChalkboardTeacher,
  FaBookOpen,
  FaCheckCircle,
  FaDownload,
  FaExternalLinkAlt,
  FaTimes,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaRedoAlt,
  FaBackward,
  FaForward,
  FaStar,
  FaListUl,
  FaGraduationCap,
  FaBookmark,
  FaRegBookmark,
  FaAward
} from 'react-icons/fa';
import { topicVideoLectures, videoSubjectMeta, videoStatistics } from '../data/videoLecturesData';

export default function VideoLecturesSection({ onOpenNotes }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('ALL');
  const [selectedType, setSelectedType] = useState('ALL');
  const [sortBy, setSortBy] = useState('default'); // 'default' | 'duration' | 'rating' | 'views'
  const [activeVideo, setActiveVideo] = useState(null); // Video object currently in player modal
  const [playerMode, setPlayerMode] = useState('video'); // 'video' | 'whiteboard'
  const [seekSeconds, setSeekSeconds] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeSec, setCurrentTimeSec] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [activeModalTab, setActiveModalTab] = useState('chapters'); // 'chapters' | 'concepts' | 'resources'
  const [bookmarkedVideoIds, setBookmarkedVideoIds] = useState([]);
  const [watchedStatusMap, setWatchedStatusMap] = useState(() => {
    const initial = {};
    topicVideoLectures.forEach(v => {
      initial[v.id] = v.watched;
    });
    return initial;
  });

  // Simulated player playback timer for whiteboard mode
  useEffect(() => {
    let interval = null;
    if (isPlaying && activeVideo && playerMode === 'whiteboard') {
      interval = setInterval(() => {
        setCurrentTimeSec(prev => {
          const totalSec = activeVideo.durationMinutes * 60;
          if (prev >= totalSec) {
            setIsPlaying(false);
            return totalSec;
          }
          return prev + 1 * playbackSpeed;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeVideo, playbackSpeed, playerMode]);

  // Open modal handler
  const handleOpenVideo = (video) => {
    setActiveVideo(video);
    setPlayerMode('video');
    setSeekSeconds(0);
    setIsPlaying(true);
    setCurrentTimeSec(0);
    setActiveModalTab('chapters');
  };

  // Chapter jump handler
  const handleChapterClick = (timeStr) => {
    const targetSec = parseTimeToSeconds(timeStr);
    setCurrentTimeSec(targetSec);
    setSeekSeconds(targetSec);
    setIsPlaying(true);
    setPlayerMode('video');
  };

  // Close modal handler
  const handleCloseModal = () => {
    setActiveVideo(null);
    setIsPlaying(false);
    setSeekSeconds(0);
  };

  // Toggle watched status
  const handleToggleWatched = (videoId, e) => {
    if (e) e.stopPropagation();
    setWatchedStatusMap(prev => ({
      ...prev,
      [videoId]: !prev[videoId]
    }));
  };

  // Toggle bookmark
  const handleToggleBookmark = (videoId, e) => {
    if (e) e.stopPropagation();
    setBookmarkedVideoIds(prev => 
      prev.includes(videoId) ? prev.filter(id => id !== videoId) : [...prev, videoId]
    );
  };

  // Convert time string "MM:SS" or "HH:MM" to seconds
  const parseTimeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 2) {
      return parts[0] * 60 + parts[1];
    } else if (parts.length === 3) {
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    return 0;
  };

  // Format seconds to MM:SS
  const formatSeconds = (sec) => {
    const mins = Math.floor(sec / 60);
    const remainingSec = Math.floor(sec % 60);
    return `${mins.toString().padStart(2, '0')}:${remainingSec.toString().padStart(2, '0')}`;
  };

  // Filtered & sorted videos
  const filteredVideos = useMemo(() => {
    return topicVideoLectures
      .filter(video => {
        if (selectedSubject !== 'ALL' && video.courseCode !== selectedSubject) {
          return false;
        }
        if (selectedType !== 'ALL' && video.type !== selectedType) {
          return false;
        }
        if (searchQuery.trim() !== '') {
          const q = searchQuery.toLowerCase();
          const matchTitle = video.title.toLowerCase().includes(q);
          const matchTopic = video.topic.toLowerCase().includes(q);
          const matchModule = video.module.toLowerCase().includes(q);
          const matchInstructor = video.instructor.toLowerCase().includes(q);
          const matchCode = video.courseCode.toLowerCase().includes(q);
          if (!matchTitle && !matchTopic && !matchModule && !matchInstructor && !matchCode) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'duration') {
          return b.durationMinutes - a.durationMinutes;
        }
        if (sortBy === 'rating') {
          return b.rating - a.rating;
        }
        if (sortBy === 'views') {
          return b.views - a.views;
        }
        return 0; // Default sequence
      });
  }, [selectedSubject, selectedType, searchQuery, sortBy]);

  // Unique video types
  const videoTypes = ['ALL', 'Core Lecture', 'Numerical Tutorial', 'Lab Hands-on Demo', 'Exam Masterclass'];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
      
      {/* 1. Header Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #091b34 0%, #102a54 50%, #004b93 100%)',
        borderRadius: '10px',
        padding: '28px 32px',
        color: '#ffffff',
        boxShadow: '0 4px 15px rgba(0, 75, 147, 0.25)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          right: '-25px',
          top: '-25px',
          fontSize: '180px',
          color: 'rgba(255, 255, 255, 0.04)',
          pointerEvents: 'none'
        }}>
          <FaVideo />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
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
                gap: '6px'
              }}>
                <FaVideo style={{ color: '#fcb900' }} /> Official Video Lecture Archives
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
                ✓ 1080p HD Full Sessions
              </span>
            </div>

            <h1 style={{ fontSize: '26px', fontWeight: '800', margin: '6px 0 8px', letterSpacing: '-0.3px', color: '#ffffff' }}>
              Topic-Wise Recorded Video Lectures & Masterclasses
            </h1>
            <p style={{ fontSize: '13.5px', color: '#cbd5e1', margin: 0, maxWidth: '820px', lineHeight: '1.5' }}>
              Exhaustive video repository covering all modules across the 4 First Semester core courses. Complete with clickable chapter timestamps, whiteboard derivations, computational demonstrations, and downloadable lecture slide decks.
            </p>
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            padding: '14px 20px',
            textAlign: 'right'
          }}>
            <span style={{ fontSize: '11px', color: '#cbd5e1', textTransform: 'uppercase', fontWeight: '700' }}>Semester Progress</span>
            <div style={{ fontSize: '20px', fontWeight: '900', color: '#86efac', margin: '2px 0' }}>
              {videoStatistics.totalCompleted} / {videoStatistics.totalLectures} Watched ({videoStatistics.percentWatched}%)
            </div>
            <span style={{ fontSize: '11.5px', color: '#fef08a' }}>Total Content: {videoStatistics.totalHours}</span>
          </div>
        </div>

        {/* Course Quick Filter Chips Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '12px',
          marginTop: '22px',
          borderTop: '1px solid rgba(255, 255, 255, 0.15)',
          paddingTop: '18px'
        }}>
          {Object.entries(videoSubjectMeta).map(([code, meta]) => {
            const isSelected = selectedSubject === code;
            return (
              <div
                key={code}
                onClick={() => setSelectedSubject(isSelected ? 'ALL' : code)}
                style={{
                  backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.08)',
                  border: isSelected ? '1.5px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.15)',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <div>
                  <span style={{ fontSize: '11px', fontWeight: '800', color: '#fef08a' }}>{meta.code}</span>
                  <div style={{ fontSize: '12px', fontWeight: '700', color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '145px' }}>
                    {meta.name}
                  </div>
                  <span style={{ fontSize: '10.5px', color: '#cbd5e1' }}>{meta.instructor}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    color: '#ffffff',
                    padding: '2px 7px',
                    borderRadius: '10px',
                    fontSize: '11px',
                    fontWeight: '800'
                  }}>
                    {meta.totalLectures}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Filter & Search Controls Bar */}
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
            placeholder="Search lectures by topic, theorem, module or professor..."
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

        {/* Subject Filter Dropdown */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12.5px', color: '#64748b', fontWeight: '600' }}>Subject:</span>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '12.5px',
              backgroundColor: '#ffffff',
              outline: 'none'
            }}
          >
            <option value="ALL">All 4 Core Subjects</option>
            <option value="BITS F112">BITS F112: Maths for ML</option>
            <option value="BITS F111">BITS F111: Statistical Methods</option>
            <option value="BITS F113">BITS F113: Machine Learning</option>
            <option value="BITS F114">BITS F114: Artificial Intelligence</option>
          </select>
        </div>

        {/* Video Type Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12.5px', color: '#64748b', fontWeight: '600' }}>Type:</span>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              fontSize: '12.5px',
              backgroundColor: '#ffffff',
              outline: 'none'
            }}
          >
            {videoTypes.map((t, idx) => (
              <option key={idx} value={t}>{t === 'ALL' ? 'All Formats' : t}</option>
            ))}
          </select>
        </div>

        {/* Sort Dropdown */}
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
            <option value="default">Syllabus Sequence</option>
            <option value="duration">Longest Duration</option>
            <option value="rating">Highest Rated (5.0)</option>
            <option value="views">Most Watched</option>
          </select>
        </div>
      </div>

      {/* 3. Filter Result Stats Summary */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px', fontSize: '13px', color: '#475569' }}>
        <span>
          Showing <strong>{filteredVideos.length}</strong> topic lectures {selectedSubject !== 'ALL' && `for ${selectedSubject}`}
        </span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            style={{
              backgroundColor: 'transparent',
              color: '#004b93',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '700',
              fontSize: '12px'
            }}
          >
            Clear Search Filter
          </button>
        )}
      </div>

      {/* 4. Video Lectures Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '22px'
      }}>
        {filteredVideos.map((video) => {
          const isWatched = watchedStatusMap[video.id];
          const isBookmarked = bookmarkedVideoIds.includes(video.id);
          const meta = videoSubjectMeta[video.courseCode];

          return (
            <div
              key={video.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 14px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.04)';
              }}
              onClick={() => handleOpenVideo(video)}
            >
              {/* Top Video Preview Thumbnail Area */}
              <div style={{
                height: '160px',
                background: `linear-gradient(135deg, ${meta.badgeColor} 0%, #0f172a 100%)`,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                padding: '16px'
              }}>
                {/* Course Code Chip */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(4px)',
                  color: '#ffffff',
                  padding: '2px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: '800'
                }}>
                  {video.courseCode}
                </div>

                {/* Duration Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                  color: '#ffffff',
                  padding: '3px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <FaClock style={{ fontSize: '10px' }} /> {video.duration}
                </div>

                {/* Bookmark Button */}
                <div
                  onClick={(e) => handleToggleBookmark(video.id, e)}
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: isBookmarked ? '#f59e0b' : '#ffffff',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Lecture'}
                >
                  {isBookmarked ? <FaBookmark style={{ fontSize: '12px' }} /> : <FaRegBookmark style={{ fontSize: '12px' }} />}
                </div>

                {/* Center Play Button Graphic */}
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: meta.badgeColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingLeft: '3px',
                  fontSize: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  transition: 'transform 0.2s'
                }}>
                  <FaPlay />
                </div>

                {/* Watched Progress Bar */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)'
                }}>
                  <div style={{
                    width: isWatched ? '100%' : `${video.progress}%`,
                    height: '100%',
                    backgroundColor: '#22c55e'
                  }} />
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: '700', color: meta.badgeColor, textTransform: 'uppercase' }}>
                    {video.module.split(':')[0]} • {video.type}
                  </span>
                  {isWatched && (
                    <span style={{
                      backgroundColor: '#dcfce7',
                      color: '#15803d',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '10.5px',
                      fontWeight: '800',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      <FaCheckCircle style={{ fontSize: '10px' }} /> Watched
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: 0, lineHeight: '1.4' }}>
                  {video.title}
                </h3>

                <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: '1.45', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {video.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#334155', marginTop: '4px' }}>
                  <FaChalkboardTeacher style={{ color: '#004b93' }} />
                  <strong>{video.instructor}</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11.5px', color: '#64748b', borderTop: '1px solid #f1f5f9', paddingTop: '10px', marginTop: '4px' }}>
                  <span>📅 {video.dateRecorded}</span>
                  <span>⭐ {video.rating} ({video.views} views)</span>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div style={{
                padding: '12px 20px',
                backgroundColor: '#f8fafc',
                borderTop: '1px solid #e2e8f0',
                display: 'flex',
                gap: '10px'
              }}>
                <button
                  onClick={() => handleOpenVideo(video)}
                  style={{
                    flex: 1,
                    backgroundColor: meta.badgeColor,
                    color: '#ffffff',
                    border: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    fontWeight: '700',
                    fontSize: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <FaPlay style={{ fontSize: '10px' }} /> Watch Lecture
                </button>

                {onOpenNotes && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenNotes(video.linkedNoteId);
                    }}
                    style={{
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      border: '1px solid #cbd5e1',
                      padding: '8px 12px',
                      borderRadius: '4px',
                      fontWeight: '600',
                      fontSize: '12px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                    title="Open Connected Written Lecture Notes"
                  >
                    <FaBookOpen /> Notes
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* 5. INTERACTIVE VIDEO THEATER PLAYER MODAL                 */}
      {/* ========================================================= */}
      {activeVideo && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            backgroundColor: '#0f172a',
            width: '100%',
            maxWidth: '1150px',
            maxHeight: '92vh',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6)',
            border: '1px solid #334155'
          }}>
            
            {/* Modal Header */}
            <div style={{
              padding: '16px 24px',
              backgroundColor: '#1e293b',
              borderBottom: '1px solid #334155',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: '#ffffff'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  backgroundColor: '#004b93',
                  color: '#ffffff',
                  padding: '3px 10px',
                  borderRadius: '4px',
                  fontSize: '11.5px',
                  fontWeight: '800'
                }}>
                  {activeVideo.courseCode}
                </span>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: '700', margin: 0, color: '#f8fafc' }}>
                    {activeVideo.title}
                  </h3>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                    Instructor: {activeVideo.instructor} • Recorded: {activeVideo.dateRecorded} • {activeVideo.module}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button
                  onClick={() => handleToggleWatched(activeVideo.id)}
                  style={{
                    backgroundColor: watchedStatusMap[activeVideo.id] ? '#16a34a' : 'transparent',
                    color: '#ffffff',
                    border: '1px solid #16a34a',
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <FaCheckCircle /> {watchedStatusMap[activeVideo.id] ? 'Completed' : 'Mark Watched'}
                </button>

                <button
                  onClick={handleCloseModal}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: '#ffffff',
                    border: 'none',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '16px'
                  }}
                  title="Close Player"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            {/* Modal Body: Split (Left: Player Screen, Right: Content Inspector) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 380px',
              flex: 1,
              overflow: 'hidden',
              backgroundColor: '#020617'
            }} className="video_player_split">
              
              {/* Left Column: Real HD Video Player Screen or Whiteboard */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#000000',
                position: 'relative',
                minHeight: '480px'
              }}>
                {/* Player Mode Switcher & Stream Info Bar */}
                <div style={{
                  padding: '10px 18px',
                  backgroundColor: '#0b1329',
                  borderBottom: '1px solid #1e293b',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '10px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => setPlayerMode('video')}
                      style={{
                        backgroundColor: playerMode === 'video' ? '#0284c7' : '#1e293b',
                        color: '#ffffff',
                        border: '1px solid ' + (playerMode === 'video' ? '#38bdf8' : '#334155'),
                        padding: '6px 14px',
                        borderRadius: '4px',
                        fontSize: '11.5px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <FaPlay style={{ fontSize: '9px' }} /> 🎬 Live Video Lecture (1080p HD)
                    </button>

                    <button
                      onClick={() => setPlayerMode('whiteboard')}
                      style={{
                        backgroundColor: playerMode === 'whiteboard' ? '#0284c7' : '#1e293b',
                        color: '#ffffff',
                        border: '1px solid ' + (playerMode === 'whiteboard' ? '#38bdf8' : '#334155'),
                        padding: '6px 14px',
                        borderRadius: '4px',
                        fontSize: '11.5px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <FaChalkboardTeacher /> 📊 Whiteboard & Key Formulas
                    </button>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {seekSeconds > 0 && playerMode === 'video' && (
                      <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: '700', backgroundColor: 'rgba(56, 189, 248, 0.1)', padding: '3px 8px', borderRadius: '4px' }}>
                        ▶ Jumped to {formatSeconds(seekSeconds)}
                      </span>
                    )}

                    <a
                      href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId || 'fNk_zzaMoSs'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: '#38bdf8',
                        fontSize: '11.5px',
                        fontWeight: '700',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                      title="Open Original Lecture in YouTube"
                    >
                      <FaExternalLinkAlt /> Open in YouTube
                    </a>
                  </div>
                </div>

                {/* Viewport Content */}
                {playerMode === 'video' ? (
                  /* Real Embedded HD Video Player */
                  <div style={{
                    flex: 1,
                    minHeight: '440px',
                    backgroundColor: '#000000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <iframe
                      key={`${activeVideo.id}-${seekSeconds}`}
                      src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId || 'fNk_zzaMoSs'}?autoplay=1&enablejsapi=1&rel=0&modestbranding=1${seekSeconds > 0 ? `&start=${seekSeconds}` : ''}`}
                      title={activeVideo.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '460px',
                        border: 'none',
                        display: 'block'
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  /* Whiteboard & Presentation Canvas View */
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}>
                    <div style={{
                      flex: 1,
                      minHeight: '380px',
                      background: 'radial-gradient(circle at center, #1e293b 0%, #020617 100%)',
                      position: 'relative',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      padding: '30px'
                    }}>
                      {/* BITS Pilani Top Watermark */}
                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        left: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        opacity: 0.8
                      }}>
                        <FaGraduationCap style={{ color: '#f59e0b', fontSize: '18px' }} />
                        <span style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.5px' }}>
                          BITS PILANI WILP • LECTURE WHITEBOARD
                        </span>
                      </div>

                      <div style={{
                        position: 'absolute',
                        top: '16px',
                        right: '20px',
                        backgroundColor: '#b91c1c',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: '800',
                        padding: '2px 8px',
                        borderRadius: '3px',
                        textTransform: 'uppercase'
                      }}>
                        1080p HD
                      </div>

                      {/* Whiteboard Canvas */}
                      <div style={{
                        width: '88%',
                        backgroundColor: 'rgba(30, 41, 59, 0.85)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '24px 30px',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
                        textAlign: 'center'
                      }}>
                        <span style={{
                          backgroundColor: 'rgba(59, 130, 246, 0.2)',
                          color: '#93c5fd',
                          padding: '3px 10px',
                          borderRadius: '12px',
                          fontSize: '11.5px',
                          fontWeight: '800',
                          textTransform: 'uppercase'
                        }}>
                          {activeVideo.topic}
                        </span>

                        <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#ffffff', margin: '12px 0 8px' }}>
                          {activeVideo.title}
                        </h2>

                        <div style={{ fontSize: '13px', color: '#cbd5e1', marginBottom: '16px' }}>
                          Faculty Speaker: <strong>{activeVideo.instructor}</strong> • {activeVideo.duration}
                        </div>

                        {/* Quick Theorem Preview */}
                        <div style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.4)',
                          borderRadius: '6px',
                          padding: '12px 16px',
                          fontSize: '13px',
                          color: '#fef08a',
                          fontFamily: 'monospace',
                          marginBottom: '16px'
                        }}>
                          📌 Key Theorem / Formula: {activeVideo.keyConcepts[0]}
                        </div>

                        <button
                          onClick={() => setPlayerMode('video')}
                          style={{
                            backgroundColor: '#0284c7',
                            color: '#ffffff',
                            border: 'none',
                            padding: '8px 20px',
                            borderRadius: '20px',
                            fontWeight: '700',
                            fontSize: '12px',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px'
                          }}
                        >
                          <FaPlay style={{ fontSize: '9px' }} /> Switch to HD Video Stream
                        </button>
                      </div>
                    </div>

                    {/* Timeline Bar for Whiteboard Mode */}
                    <div style={{
                      backgroundColor: '#0f172a',
                      borderTop: '1px solid #1e293b',
                      padding: '12px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: '#94a3b8',
                      fontSize: '12px'
                    }}>
                      <span>Whiteboard sync mode</span>
                      <button
                        onClick={() => setPlayerMode('video')}
                        style={{
                          backgroundColor: '#0284c7',
                          color: '#ffffff',
                          border: 'none',
                          padding: '4px 12px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '700',
                          cursor: 'pointer'
                        }}
                      >
                        Watch Video
                      </button>
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column: Tabbed Inspector (Chapters, Concepts, Resources) */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                borderLeft: '1px solid #1e293b',
                backgroundColor: '#0f172a'
              }}>
                {/* Inspector Tabs */}
                <div style={{
                  display: 'flex',
                  borderBottom: '1px solid #1e293b',
                  backgroundColor: '#1e293b'
                }}>
                  <button
                    onClick={() => setActiveModalTab('chapters')}
                    style={{
                      flex: 1,
                      padding: '12px 10px',
                      backgroundColor: activeModalTab === 'chapters' ? '#0f172a' : 'transparent',
                      color: activeModalTab === 'chapters' ? '#38bdf8' : '#94a3b8',
                      border: 'none',
                      borderBottom: activeModalTab === 'chapters' ? '2px solid #38bdf8' : 'none',
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    Chapters ({activeVideo.keyTimestamps.length})
                  </button>

                  <button
                    onClick={() => setActiveModalTab('concepts')}
                    style={{
                      flex: 1,
                      padding: '12px 10px',
                      backgroundColor: activeModalTab === 'concepts' ? '#0f172a' : 'transparent',
                      color: activeModalTab === 'concepts' ? '#38bdf8' : '#94a3b8',
                      border: 'none',
                      borderBottom: activeModalTab === 'concepts' ? '2px solid #38bdf8' : 'none',
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    Key Concepts
                  </button>

                  <button
                    onClick={() => setActiveModalTab('resources')}
                    style={{
                      flex: 1,
                      padding: '12px 10px',
                      backgroundColor: activeModalTab === 'resources' ? '#0f172a' : 'transparent',
                      color: activeModalTab === 'resources' ? '#38bdf8' : '#94a3b8',
                      border: 'none',
                      borderBottom: activeModalTab === 'resources' ? '2px solid #38bdf8' : 'none',
                      fontSize: '12px',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    Resources
                  </button>
                </div>

                {/* Tab 1: Clickable Chapters */}
                {activeModalTab === 'chapters' && (
                  <div style={{ padding: '16px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>
                      Click on any timestamp to jump:
                    </span>
                    {activeVideo.keyTimestamps.map((chapter, idx) => (
                      <div
                        key={idx}
                        onClick={() => handleChapterClick(chapter.time)}
                        style={{
                          backgroundColor: '#1e293b',
                          border: '1px solid #334155',
                          borderRadius: '6px',
                          padding: '10px 14px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                          transition: 'background-color 0.15s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#334155'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1e293b'}
                      >
                        <span style={{
                          backgroundColor: '#0284c7',
                          color: '#ffffff',
                          padding: '2px 7px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: '800',
                          fontFamily: 'monospace',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}>
                          <FaPlay style={{ fontSize: '8px' }} /> {chapter.time}
                        </span>
                        <span style={{ fontSize: '12.5px', color: '#f1f5f9', fontWeight: '600', flex: 1 }}>
                          {chapter.title}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 2: Core Theoretical Concept */}
                {activeModalTab === 'concepts' && (
                  <div style={{ padding: '16px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', color: '#cbd5e1', fontSize: '12.5px' }}>
                    <div style={{ backgroundColor: '#1e293b', padding: '12px 14px', borderRadius: '6px', border: '1px solid #334155' }}>
                      <strong style={{ color: '#38bdf8', display: 'block', marginBottom: '4px' }}>Overview</strong>
                      {activeVideo.description}
                    </div>

                    <div>
                      <strong style={{ color: '#fef08a', display: 'block', marginBottom: '8px' }}>Core Learning Outcomes:</strong>
                      <ul style={{ paddingLeft: '18px', margin: 0, lineHeight: '1.6' }}>
                        {activeVideo.keyConcepts.map((item, idx) => (
                          <li key={idx} style={{ marginBottom: '6px' }}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ backgroundColor: '#1e293b', padding: '12px 14px', borderRadius: '6px', border: '1px solid #334155' }}>
                      <span style={{ color: '#94a3b8', fontSize: '11px', display: 'block' }}>Course Curriculum</span>
                      <strong style={{ color: '#ffffff' }}>{activeVideo.module}</strong>
                    </div>
                  </div>
                )}

                {/* Tab 3: Downloads & Linked Notes */}
                {activeModalTab === 'resources' && (
                  <div style={{ padding: '16px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    
                    {/* Open Connected Notes */}
                    {onOpenNotes && (
                      <div style={{ backgroundColor: '#1e293b', padding: '14px', borderRadius: '6px', border: '1px solid #334155' }}>
                        <strong style={{ color: '#ffffff', fontSize: '13px', display: 'block', marginBottom: '4px' }}>
                          📚 Connected Written Lecture Note
                        </strong>
                        <p style={{ fontSize: '12px', color: '#94a3b8', margin: '0 0 10px' }}>
                          Explore exhaustive mathematical proofs, Python NumPy implementations, and MST review problems for this lecture.
                        </p>
                        <button
                          onClick={() => {
                            handleCloseModal();
                            onOpenNotes(activeVideo.linkedNoteId);
                          }}
                          style={{
                            width: '100%',
                            backgroundColor: '#004b93',
                            color: '#ffffff',
                            border: 'none',
                            padding: '9px',
                            borderRadius: '4px',
                            fontWeight: '700',
                            fontSize: '12px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '6px'
                          }}
                        >
                          <FaBookOpen /> Open Lecture Notes in Reader
                        </button>
                      </div>
                    )}

                    {/* Download Slides */}
                    <div style={{ backgroundColor: '#1e293b', padding: '14px', borderRadius: '6px', border: '1px solid #334155' }}>
                      <strong style={{ color: '#ffffff', fontSize: '13px', display: 'block', marginBottom: '4px' }}>
                        📑 Official Slide Deck (PDF)
                      </strong>
                      <span style={{ fontSize: '11.5px', color: '#94a3b8', display: 'block', marginBottom: '10px' }}>
                        {activeVideo.slidesPdf} • Prepared by {activeVideo.instructor}
                      </span>
                      <button
                        onClick={() => alert(`Downloading ${activeVideo.slidesPdf} for ${activeVideo.title}...`)}
                        style={{
                          width: '100%',
                          backgroundColor: '#334155',
                          color: '#ffffff',
                          border: 'none',
                          padding: '9px',
                          borderRadius: '4px',
                          fontWeight: '700',
                          fontSize: '12px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px'
                        }}
                      >
                        <FaDownload /> Download Slides PDF (14.2 MB)
                      </button>
                    </div>

                    {/* Video ID & Technical Tag */}
                    <div style={{ fontSize: '11px', color: '#64748b', textAlign: 'center', marginTop: '10px' }}>
                      Archive Ref: {activeVideo.id} • BITS WILP Portal 2026-27
                    </div>

                  </div>
                )}

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
