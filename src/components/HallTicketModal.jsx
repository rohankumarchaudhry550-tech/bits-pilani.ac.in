import React, { useState, useRef } from 'react';
import {
  FaTimes,
  FaDownload,
  FaPrint,
  FaCheckCircle,
  FaUniversity,
  FaQrcode,
  FaBarcode,
  FaClock,
  FaCalendarAlt,
  FaIdCard,
  FaLaptopCode,
  FaSpinner,
  FaMobileAlt
} from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { bitsOfficialStampBase64 } from '../data/bitsStampBase64';

export default function HallTicketModal({ isOpen, onClose, studentData, defaultExamType = 'final' }) {
  const [examType, setExamType] = useState(defaultExamType || 'final');
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const hallTicketRef = useRef(null);

  if (!isOpen) return null;

  const isFinal = examType === 'final';

  const candidate = {
    name: studentData?.name || 'Rohan Kumar Chaudhry',
    roll: studentData?.roll || '2026ML005831',
    program: 'M.Tech in Artificial Intelligence & Machine Learning',
    semester: 'First Semester 2026-27',
    sponsor: 'Larsen & Toubro Limited (L&T) Executive Program',
    campus: 'Hyderabad Campus',
    campusAddress: 'Jawahar Nagar, Kapra Mandal, Hyderabad - 500078, Telangana',
    examTitle: isFinal ? 'COMPREHENSIVE FINAL EXAMINATION' : 'MID-SEMESTER TEST (MST)',
    examSubtitle: isFinal
      ? 'First Semester 2026-27 • 16 Dec to 26 Dec 2026 (06:00 PM – 09:00 PM IST) • BITS Pilani, Hyderabad Campus (Offline)'
      : 'First Semester 2026-27 • BITS Pilani, Hyderabad Campus • Offline In-Person Examination Mode',
    hallTicketNo: isFinal ? 'WILP-2026-COMPRE-HYD-5831' : 'WILP-2026-MST-HYD-5831',
    examCenter: 'BITS Pilani, Hyderabad Campus (Physical Examination Center, Academic Block, Hyderabad - 500078)',
    portalId: 'Desk #42 (Row B1, LTC)',
    dateOfIssue: isFinal ? '21 November 2026' : '16 November 2026',
    barcodeString: isFinal ? '*WILP-2026-COMPRE-HYD-5831*' : '*WILP-2026-MST-HYD-5831*',
    verificationToken: isFinal
      ? 'BITS-HYD-COMPRE-9182-2026ML005831-SECURE'
      : 'BITS-HYD-AUTH-7892-2026ML005831-SECURE',
    photoUrl: '/rohan-candidate-photo.jpg',
    logoUrl: '/bits-logo.webp'
  };

  const finalSchedule = [
    {
      day: 'Day 1: 16 Dec 2026 (Wednesday)',
      time: '06:00 PM – 09:00 PM',
      code: 'BITS F112',
      name: 'Mathematical Foundations for Machine Learning',
      duration: '180 Mins (3.0 Hrs)',
      hall: 'Offline Hall LTC-101 (Desk #42)',
      invigilator: 'Dr. A. Sen',
      status: 'Admitted (Part A: Closed + Part B: Open)'
    },
    {
      day: 'Day 2: 19 Dec 2026 (Saturday)',
      time: '06:00 PM – 09:00 PM',
      code: 'BITS F111',
      name: 'Introduction to Statistical Methods',
      duration: '180 Mins (3.0 Hrs)',
      hall: 'Offline Hall LTC-102 (Desk #42)',
      invigilator: 'Prof. R. Sharma',
      status: 'Admitted (Part A: Closed + Part B: Open)'
    },
    {
      day: 'Day 3: 22 Dec 2026 (Tuesday)',
      time: '06:00 PM – 09:00 PM',
      code: 'BITS F113',
      name: 'Machine Learning',
      duration: '180 Mins (3.0 Hrs)',
      hall: 'Offline Hall LTC-101 (Desk #42)',
      invigilator: 'Dr. K. Patel',
      status: 'Admitted (Part A: Closed + Part B: Open)'
    },
    {
      day: 'Day 4: 26 Dec 2026 (Saturday)',
      time: '06:00 PM – 09:00 PM',
      code: 'BITS F114',
      name: 'Artificial and Computational Intelligence',
      duration: '180 Mins (3.0 Hrs)',
      hall: 'Offline Hall LTC-103 (Desk #42)',
      invigilator: 'Prof. S. Das',
      status: 'Admitted (Part A: Closed + Part B: Open)'
    }
  ];

  const mstSchedule = [
    {
      day: 'Day 1: 17 Nov 2026 (Tuesday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F112',
      name: 'Mathematical Foundations for Machine Learning',
      duration: '150 Mins',
      hall: 'Offline Hall LTC-101 (Desk #42)',
      invigilator: 'Dr. A. Sen',
      status: 'Admitted'
    },
    {
      day: 'Day 2: 18 Nov 2026 (Wednesday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F111',
      name: 'Introduction to Statistical Methods',
      duration: '150 Mins',
      hall: 'Offline Hall LTC-102 (Desk #42)',
      invigilator: 'Prof. R. Sharma',
      status: 'Admitted'
    },
    {
      day: 'Day 3: 19 Nov 2026 (Thursday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F113',
      name: 'Machine Learning',
      duration: '150 Mins',
      hall: 'Offline Hall LTC-101 (Desk #42)',
      invigilator: 'Dr. K. Patel',
      status: 'Admitted'
    },
    {
      day: 'Day 4: 20 Nov 2026 (Friday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F114',
      name: 'Artificial and Computational Intelligence',
      duration: '150 Mins',
      hall: 'Offline Hall LTC-103 (Desk #42)',
      invigilator: 'Prof. S. Das',
      status: 'Admitted'
    }
  ];

  const schedule = isFinal ? finalSchedule : mstSchedule;

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    try {
      const element = hallTicketRef.current;
      if (!element) return;

      // Force high-DPI desktop A4 capture on any device (phone or PC)
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200,
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.getElementById('bits-hall-ticket-document');
          if (clonedElement) {
            clonedElement.style.width = '800px';
            clonedElement.style.minWidth = '800px';
            clonedElement.style.maxWidth = '800px';
            clonedElement.style.padding = '26px 30px';
            clonedElement.style.margin = '0 auto';
            clonedElement.style.boxSizing = 'border-box';
          }
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth(); // 210mm
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(
        isFinal
          ? `BITS_Hyderabad_Comprehensive_Final_HallTicket_${candidate.roll}.pdf`
          : `BITS_Hyderabad_HallTicket_${candidate.roll}_MST.pdf`
      );

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (error) {
      console.error('Error generating PDF:', error);
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        overflowY: 'auto'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          maxWidth: '920px',
          width: '100%',
          maxHeight: '96vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden'
        }}
      >
        {/* Top Modal Sticky Action Bar */}
        <div
          className="no-print"
          style={{
            padding: '14px 18px',
            backgroundColor: '#0f172a',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #334155',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: '220px' }}>
            <FaIdCard style={{ color: '#fcb900', fontSize: '20px' }} />
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: '700', margin: 0 }}>
                BITS Pilani, Hyderabad Campus
              </h3>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                Hall Ticket • {candidate.name} ({candidate.roll})
              </span>
            </div>
          </div>

          {/* Exam Type Toggle */}
          <div style={{ display: 'flex', gap: '6px', backgroundColor: 'rgba(255,255,255,0.08)', padding: '3px', borderRadius: '6px' }}>
            <button
              onClick={() => setExamType('final')}
              style={{
                backgroundColor: isFinal ? '#fcb900' : 'transparent',
                color: isFinal ? '#0f172a' : '#cbd5e1',
                border: 'none',
                padding: '5px 12px',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '11.5px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              🎓 Final Exam (16–26 Dec)
            </button>
            <button
              onClick={() => setExamType('mst')}
              style={{
                backgroundColor: !isFinal ? '#fcb900' : 'transparent',
                color: !isFinal ? '#0f172a' : '#cbd5e1',
                border: 'none',
                padding: '5px 12px',
                borderRadius: '4px',
                fontWeight: '700',
                fontSize: '11.5px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              📋 MST (17–20 Nov)
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              style={{
                backgroundColor: isGenerating ? '#475569' : '#16a34a',
                color: '#ffffff',
                border: 'none',
                padding: '8px 16px',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '12.5px',
                cursor: isGenerating ? 'wait' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                boxShadow: '0 2px 6px rgba(22, 163, 74, 0.35)',
                transition: 'all 0.2s'
              }}
            >
              {isGenerating ? <FaSpinner className="spin" /> : <FaDownload />}
              {isGenerating ? 'Generating PDF...' : downloadSuccess ? 'Downloaded!' : 'Download Hall Ticket (PDF)'}
            </button>

            <button
              onClick={handlePrint}
              style={{
                backgroundColor: '#1e293b',
                color: '#ffffff',
                border: '1px solid #475569',
                padding: '8px 14px',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <FaPrint /> Print / Save PDF
            </button>

            <button
              onClick={onClose}
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#ffffff',
                fontSize: '18px',
                cursor: 'pointer',
                padding: '6px 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px'
              }}
              title="Close Modal"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Mobile Swipe Notice Banner */}
        <div
          className="no-print"
          style={{
            backgroundColor: '#eff6ff',
            borderBottom: '1px solid #bfdbfe',
            padding: '8px 16px',
            fontSize: '11.5px',
            color: '#1e40af',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <FaMobileAlt style={{ fontSize: '14px', flexShrink: 0 }} />
          <span>
            <strong>Mobile Tip:</strong> Swipe horizontally inside the box below to inspect full admit card details, or tap <strong>"Download Hall Ticket (PDF)"</strong> to get the crystal-clear official single-page A4 document!
          </span>
        </div>

        {/* Scrollable Container containing Printable Hall Ticket */}
        <div style={{ overflowX: 'auto', overflowY: 'auto', padding: '16px', backgroundColor: '#f1f5f9', WebkitOverflowScrolling: 'touch' }}>
          
          {/* THE OFFICIAL PRINTABLE HALL TICKET ELEMENT */}
          <div
            id="bits-hall-ticket-document"
            ref={hallTicketRef}
            style={{
              backgroundColor: '#ffffff',
              padding: '24px 28px',
              borderRadius: '4px',
              border: '3px double #004b93',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              position: 'relative',
              maxWidth: '820px',
              minWidth: '700px',
              margin: '0 auto',
              fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
              color: '#0f172a',
              boxSizing: 'border-box'
            }}
          >
            {/* Watermark Logo in Background */}
            <div
              style={{
                position: 'absolute',
                top: '52%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-28deg)',
                fontSize: '44px',
                fontWeight: '900',
                color: 'rgba(0, 75, 147, 0.035)',
                letterSpacing: '8px',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                zIndex: 0,
                textAlign: 'center'
              }}
            >
              BITS PILANI • HYDERABAD CAMPUS
            </div>

            {/* Top Official Header with BITS Pilani Colored Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '2.5px solid #004b93',
                paddingBottom: '14px',
                marginBottom: '14px',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                {/* Official BITS Pilani Logo Image */}
                <div
                  style={{
                    width: '74px',
                    height: '74px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <img
                    src={candidate.logoUrl}
                    alt="BITS Pilani Crest Logo"
                    crossOrigin="anonymous"
                    style={{
                      maxHeight: '72px',
                      maxWidth: '72px',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <div>
                  <h1
                    style={{
                      fontSize: '17px',
                      fontWeight: '900',
                      color: '#004b93',
                      letterSpacing: '0.4px',
                      margin: '0 0 2px 0',
                      textTransform: 'uppercase'
                    }}
                  >
                    BIRLA INSTITUTE OF TECHNOLOGY & SCIENCE, PILANI
                  </h1>
                  <h2
                    style={{
                      fontSize: '14px',
                      fontWeight: '800',
                      color: '#b91c1c',
                      letterSpacing: '0.5px',
                      margin: '0 0 2px 0',
                      textTransform: 'uppercase'
                    }}
                  >
                    HYDERABAD CAMPUS
                  </h2>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: '#475569',
                      margin: '0 0 2px 0'
                    }}
                  >
                    WORK INTEGRATED LEARNING PROGRAMMES (WILP) DIVISION
                  </div>
                  <div
                    style={{
                      fontSize: '9.5px',
                      color: '#64748b'
                    }}
                  >
                    Jawahar Nagar, Kapra Mandal, Hyderabad - 500078, Telangana • <span style={{ color: '#b58b2a', fontWeight: '700' }}>ज्ञानं परमं बलम्</span>
                  </div>
                </div>
              </div>

              {/* QR Verification Stamp */}
              <div
                style={{
                  textAlign: 'center',
                  border: '1.5px solid #cbd5e1',
                  borderRadius: '6px',
                  padding: '5px 8px',
                  backgroundColor: '#f8fafc',
                  flexShrink: 0
                }}
              >
                <FaQrcode style={{ fontSize: '38px', color: '#004b93' }} />
                <div style={{ fontSize: '8px', fontWeight: '800', color: '#15803d', marginTop: '2px' }}>
                  HYD VERIFIED
                </div>
              </div>
            </div>

            {/* Document Title Banner */}
            <div
              style={{
                backgroundColor: '#004b93',
                color: '#ffffff',
                textAlign: 'center',
                padding: '7px 10px',
                borderRadius: '4px',
                marginBottom: '14px',
                position: 'relative',
                zIndex: 1,
                borderBottom: '3px solid #b58b2a'
              }}
            >
              <div style={{ fontSize: '13.5px', fontWeight: '900', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                {candidate.examTitle} ADMIT CARD / HALL TICKET
              </div>
              <div style={{ fontSize: '10.5px', color: '#fef08a', fontWeight: '700' }}>
                {candidate.examSubtitle}
              </div>
            </div>

            {/* Hall Ticket Meta Strip */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
                padding: '7px 12px',
                marginBottom: '14px',
                fontSize: '11.5px',
                position: 'relative',
                zIndex: 1,
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              <div>
                <strong>Hall Ticket No:</strong>{' '}
                <span style={{ color: '#b91c1c', fontWeight: '800', fontSize: '12.5px' }}>
                  {candidate.hallTicketNo}
                </span>
              </div>
              <div>
                <strong>Campus:</strong>{' '}
                <span style={{ color: '#004b93', fontWeight: '800' }}>
                  Hyderabad Campus
                </span>
              </div>
              <div>
                <strong>Issue Date:</strong> {candidate.dateOfIssue}
              </div>
              <div>
                <strong>Auth Token:</strong>{' '}
                <span style={{ fontFamily: 'monospace', color: '#475569', fontSize: '10.5px' }}>
                  {candidate.verificationToken.slice(0, 16)}...
                </span>
              </div>
            </div>

            {/* Candidate Details Table & Real Passport Photo Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 160px',
                gap: '14px',
                marginBottom: '16px',
                position: 'relative',
                zIndex: 1
              }}
            >
              {/* Left Column: Academic & Identity Details Table */}
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '11.5px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1'
                }}
              >
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '6px 8px', backgroundColor: '#f8fafc', fontWeight: '700', width: '38%', color: '#334155' }}>
                      Candidate Full Name:
                    </td>
                    <td style={{ padding: '6px 8px', fontWeight: '900', color: '#004b93', fontSize: '13px' }}>
                      {candidate.name}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '6px 8px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Student ID / Roll No:
                    </td>
                    <td style={{ padding: '6px 8px', fontWeight: '800', color: '#0f172a' }}>
                      {candidate.roll}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '6px 8px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Degree Programme:
                    </td>
                    <td style={{ padding: '6px 8px', fontWeight: '600', color: '#0f172a' }}>
                      {candidate.program}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '6px 8px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Campus Affiliation:
                    </td>
                    <td style={{ padding: '6px 8px', fontWeight: '800', color: '#b91c1c' }}>
                      BITS Pilani, Hyderabad Campus
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '6px 8px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Department / Faculty:
                    </td>
                    <td style={{ padding: '6px 8px', fontWeight: '700', color: '#004b93' }}>
                      Dept. of Computer Science & Information Systems (CSIS)
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '6px 8px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Exam Center / Mode:
                    </td>
                    <td style={{ padding: '6px 8px', color: '#0f172a' }}>
                      {candidate.examCenter}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px 8px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Assigned Hall & Desk:
                    </td>
                    <td style={{ padding: '6px 8px', fontFamily: 'monospace', color: '#16a34a', fontWeight: '800' }}>
                      {candidate.portalId}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Right Column: Rohan's Actual Photograph & Specimen Signature */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {/* Photo Frame */}
                <div
                  style={{
                    width: '135px',
                    height: '155px',
                    border: '2px solid #004b93',
                    borderRadius: '4px',
                    backgroundColor: '#e2e8f0',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                  }}
                >
                  {/* Candidate Real Photo */}
                  <img
                    src={candidate.photoUrl}
                    alt="Candidate Photograph"
                    crossOrigin="anonymous"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: '45% 15%',
                      display: 'block'
                    }}
                  />

                  {/* Red Verification Stamp Overlay across corner */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      right: '4px',
                      backgroundColor: 'rgba(185, 28, 28, 0.92)',
                      color: '#ffffff',
                      fontSize: '7px',
                      fontWeight: '900',
                      padding: '2px 5px',
                      borderRadius: '3px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.4px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.4)',
                      border: '1px solid rgba(255,255,255,0.6)'
                    }}
                  >
                    HYD • VERIFIED
                  </div>
                </div>

                {/* Candidate Signature Box */}
                <div
                  style={{
                    width: '135px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '3px',
                    padding: '3px 5px',
                    textAlign: 'center',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Brush Script MT', 'Dancing Script', cursive, sans-serif",
                      fontSize: '17px',
                      color: '#0f172a',
                      fontWeight: '700',
                      letterSpacing: '0.5px',
                      lineHeight: '1.2'
                    }}
                  >
                    Rohan K. Chaudhry
                  </div>
                  <div style={{ fontSize: '7.5px', color: '#64748b', borderTop: '1px dashed #cbd5e1', paddingTop: '2px', marginTop: '1px' }}>
                    Candidate Signature
                  </div>
                </div>
              </div>
            </div>

            {/* Examination Schedule Timetable (17–20 Nov 2026, 06:30 PM to 09:00 PM Daily) */}
            <div style={{ marginBottom: '14px', position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  fontSize: '11.5px',
                  fontWeight: '800',
                  color: '#004b93',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <FaCalendarAlt style={{ color: '#b91c1c' }} />{' '}
                {isFinal
                  ? 'Comprehensive Final Examination Timetable (16 Dec – 26 Dec 2026)'
                  : 'Mid-Semester Test (MST) Timetable & Paper Allocation'}
              </div>

              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '11px',
                  textAlign: 'left',
                  border: '1.5px solid #004b93'
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: '#004b93', color: '#ffffff' }}>
                    <th style={{ padding: '6px 8px', width: '22%' }}>Date & Day</th>
                    <th style={{ padding: '6px 8px', width: '18%' }}>Exam Slot</th>
                    <th style={{ padding: '6px 8px', width: '12%' }}>Course</th>
                    <th style={{ padding: '6px 8px', width: '24%' }}>Course Title</th>
                    <th style={{ padding: '6px 8px', width: '10%' }}>Duration</th>
                    <th style={{ padding: '6px 8px', width: '14%' }}>Offline Exam Hall</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, idx) => (
                    <tr
                      key={idx}
                      style={{
                        backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                        borderBottom: '1px solid #cbd5e1'
                      }}
                    >
                      <td style={{ padding: '6px 8px', fontWeight: '700', color: '#b91c1c' }}>
                        {item.day}
                      </td>
                      <td style={{ padding: '6px 8px', fontWeight: '800', color: '#0f172a' }}>
                        {item.time}
                      </td>
                      <td style={{ padding: '6px 8px', fontWeight: '800', color: '#004b93' }}>
                        {item.code}
                      </td>
                      <td style={{ padding: '6px 8px', fontWeight: '600' }}>
                        {item.name}
                      </td>
                      <td style={{ padding: '6px 8px', color: '#475569' }}>
                        {item.duration}
                      </td>
                      <td style={{ padding: '6px 8px', color: '#16a34a', fontWeight: '700' }}>
                        ✓ {item.hall}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Institutional Signatures & Official Hyderabad Seal */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                borderTop: '1.5px solid #cbd5e1',
                paddingTop: '12px',
                marginBottom: '14px',
                position: 'relative',
                zIndex: 1
              }}
            >
              {/* Candidate Declaration */}
              <div style={{ maxWidth: '280px', fontSize: '9px', color: '#64748b', lineHeight: '1.4' }}>
                <strong>Candidate Declaration:</strong> I hereby certify that the particulars furnished above are true and correct. I will adhere strictly to all BITS Pilani, Hyderabad Campus examination regulations.
              </div>

              {/* Official BITS Pilani Hyderabad Cogwheel Seal */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center'
                }}
              >
                <img
                  src={bitsOfficialStampBase64}
                  alt="BITS Pilani Seal"
                  style={{
                    width: '92px',
                    height: '92px',
                    objectFit: 'contain',
                    transform: 'rotate(-3deg)',
                    filter: 'drop-shadow(0 1px 3px rgba(0, 75, 147, 0.25))'
                  }}
                />
              </div>

              {/* Controller / In-Charge Examinations Signature */}
              <div style={{ textAlign: 'center', minWidth: '180px' }}>
                <div
                  style={{
                    fontFamily: "'Brush Script MT', 'Dancing Script', cursive, sans-serif",
                    fontSize: '19px',
                    color: '#004b93',
                    fontWeight: '700',
                    lineHeight: '1.2'
                  }}
                >
                  M. S. Radhakrishnan
                </div>
                <div style={{ fontSize: '10.5px', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>
                  Dr. M. S. Radhakrishnan
                </div>
                <div style={{ fontSize: '9px', color: '#475569', fontWeight: '600' }}>
                  Controller of Examinations
                </div>
                <div style={{ fontSize: '8px', color: '#b91c1c', fontWeight: '700' }}>
                  BITS Pilani, Hyderabad Campus
                </div>
              </div>
            </div>

            {/* Official Candidate Examination Instructions */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                padding: '9px 12px',
                fontSize: '9.5px',
                color: '#334155',
                lineHeight: '1.4',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div style={{ fontWeight: '800', color: '#004b93', marginBottom: '3px', textTransform: 'uppercase', fontSize: '10px' }}>
                IMPORTANT INSTRUCTIONS FOR THE CANDIDATE • HYDERABAD CAMPUS
              </div>
              <ol style={{ paddingLeft: '16px', margin: 0 }}>
                <li>This physical Admit Card must be presented at the examination hall entrance alongside a valid photo identity card (Aadhaar Card, Passport, or L&T Employee ID Card).</li>
                <li>Candidates must report to the designated Offline Examination Hall (Academic Block / Lecture Theatre Complex, BITS Pilani Hyderabad Campus) strictly 30 minutes prior to scheduled start (by 05:30 PM IST). Entry closes 10 minutes before commencement.</li>
                <li>Physical answer booklets and OMR sheets will be supplied in the hall. Candidates must bring their own blue/black ballpoint pens, pencils, and erasers.</li>
                <li>{isFinal ? 'Comprehensive Final Examinations are conducted offline in two parts: Part A (60 Mins) is strictly Closed Book. Part B (120 Mins) permits approved physical textbooks and bound printed/handwritten lecture notes.' : 'All offline examinations are conducted under strict institutional invigilation in designated lecture halls.'}</li>
                <li>All mobile phones, smartwatches, and communication devices must be deposited at the hall entrance. Non-programmable scientific calculators (Casio fx-991 series or equivalent) are permitted.</li>
                <li>In-person examination venue: Academic Block / Lecture Theatre Complex, BITS Pilani Hyderabad Campus, Jawahar Nagar, Kapra Mandal, Hyderabad - 500078. Emergency Contact: <strong>+91-40-6630-3999 / exams.wilp@hyderabad.bits-pilani.ac.in</strong>.</li>
              </ol>
            </div>

            {/* Bottom Barcode Graphic */}
            <div
              style={{
                marginTop: '10px',
                textAlign: 'center',
                borderTop: '1px solid #e2e8f0',
                paddingTop: '6px',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: '13px',
                  letterSpacing: '5px',
                  fontWeight: '700',
                  color: '#1e293b'
                }}
              >
                ||| ||||| ||| ||||||| |||| |||||| |||||||| ||||| |||
              </div>
              <div style={{ fontSize: '8.5px', color: '#64748b', letterSpacing: '1px', marginTop: '2px' }}>
                {candidate.barcodeString} • BITS PILANI HYDERABAD CAMPUS • {isFinal ? 'COMPREHENSIVE FINAL EXAM 2026-27' : 'MST EXAM 2026-27'} • SYSTEM COMPATIBILITY: PASSED
              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div
          className="no-print"
          style={{
            padding: '10px 18px',
            backgroundColor: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '11.5px',
            color: '#64748b',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          <span>
            📍 <strong>BITS Pilani, Hyderabad Campus</strong> • Jawahar Nagar, Hyderabad - 500078, Telangana.
          </span>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#e2e8f0',
              border: 'none',
              padding: '5px 12px',
              borderRadius: '4px',
              fontSize: '11.5px',
              fontWeight: '600',
              cursor: 'pointer',
              color: '#334155'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
