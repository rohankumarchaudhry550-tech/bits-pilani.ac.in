import React, { useState, useRef } from 'react';
import {
  FaTimes,
  FaDownload,
  FaPrint,
  FaCheckCircle,
  FaUniversity,
  FaShieldAlt,
  FaQrcode,
  FaBarcode,
  FaClock,
  FaCalendarAlt,
  FaUserCheck,
  FaIdCard,
  FaLaptopCode,
  FaSpinner,
  FaMapMarkerAlt
} from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function HallTicketModal({ isOpen, onClose, studentData }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const hallTicketRef = useRef(null);

  if (!isOpen) return null;

  const candidate = {
    name: studentData?.name || 'Rohan Kumar Chaudhry',
    roll: studentData?.roll || '2026ML005831',
    program: 'M.Tech in Artificial Intelligence & Machine Learning',
    semester: 'First Semester 2026-27',
    sponsor: 'Larsen & Toubro Limited (L&T) Executive Program',
    campus: 'Hyderabad Campus',
    campusAddress: 'Jawahar Nagar, Kapra Mandal, Hyderabad - 500078, Telangana',
    hallTicketNo: 'WILP-2026-MST-HYD-5831',
    examCenter: 'BITS Pilani, Hyderabad Campus (Online Proctored Division)',
    portalId: 'BITS-HYD-PROCTOR-ALPHA-5831',
    dateOfIssue: '16 November 2026',
    barcodeString: '*WILP-2026-MST-HYD-5831*',
    verificationToken: 'BITS-HYD-AUTH-7892-2026ML005831-SECURE',
    photoUrl: '/rohan-candidate-photo.jpg',
    logoUrl: '/bits-logo.webp'
  };

  const schedule = [
    {
      day: 'Day 1: 17 Nov 2026 (Tuesday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F112',
      name: 'Mathematical Foundations for Machine Learning',
      duration: '150 Mins',
      hall: 'Online Hall HYD-1',
      invigilator: 'Dr. A. Sen',
      status: 'Admitted'
    },
    {
      day: 'Day 2: 18 Nov 2026 (Wednesday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F111',
      name: 'Introduction to Statistical Methods',
      duration: '150 Mins',
      hall: 'Online Hall HYD-2',
      invigilator: 'Prof. R. Sharma',
      status: 'Admitted'
    },
    {
      day: 'Day 3: 19 Nov 2026 (Thursday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F113',
      name: 'Machine Learning',
      duration: '150 Mins',
      hall: 'Online Hall HYD-1',
      invigilator: 'Dr. K. Patel',
      status: 'Admitted'
    },
    {
      day: 'Day 4: 20 Nov 2026 (Friday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F114',
      name: 'Artificial and Computational Intelligence',
      duration: '150 Mins',
      hall: 'Online Hall HYD-3',
      invigilator: 'Prof. S. Das',
      status: 'Admitted'
    }
  ];

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    try {
      const element = hallTicketRef.current;
      if (!element) return;

      const canvas = await html2canvas(element, {
        scale: 2.5,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`BITS_Hyderabad_HallTicket_${candidate.roll}_MST.pdf`);

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
        backgroundColor: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
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
          maxHeight: '94vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
          overflow: 'hidden'
        }}
      >
        {/* Top Modal Action Bar */}
        <div
          className="no-print"
          style={{
            padding: '16px 24px',
            backgroundColor: '#0f172a',
            color: '#ffffff',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #334155',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaIdCard style={{ color: '#fcb900', fontSize: '22px' }} />
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                BITS Pilani, Hyderabad Campus • Official Hall Ticket
              </h3>
              <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                Candidate: {candidate.name} ({candidate.roll}) • MST 17–20 Nov 2026
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              style={{
                backgroundColor: isGenerating ? '#475569' : '#16a34a',
                color: '#ffffff',
                border: 'none',
                padding: '9px 18px',
                borderRadius: '6px',
                fontWeight: '700',
                fontSize: '13px',
                cursor: isGenerating ? 'wait' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 6px rgba(22, 163, 74, 0.35)',
                transition: 'all 0.2s'
              }}
            >
              {isGenerating ? <FaSpinner className="spin" /> : <FaDownload />}
              {isGenerating ? 'Generating High-Res PDF...' : downloadSuccess ? 'Downloaded Successfully!' : 'Download Hall Ticket (PDF)'}
            </button>

            <button
              onClick={handlePrint}
              style={{
                backgroundColor: '#1e293b',
                color: '#ffffff',
                border: '1px solid #475569',
                padding: '9px 16px',
                borderRadius: '6px',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <FaPrint /> Print / Save PDF
            </button>

            <button
              onClick={onClose}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#94a3b8',
                fontSize: '20px',
                cursor: 'pointer',
                padding: '6px',
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

        {/* Scrollable Container containing Printable Hall Ticket */}
        <div style={{ overflowY: 'auto', padding: '24px', backgroundColor: '#f1f5f9' }}>
          
          {/* THE OFFICIAL PRINTABLE HALL TICKET ELEMENT */}
          <div
            id="bits-hall-ticket-document"
            ref={hallTicketRef}
            style={{
              backgroundColor: '#ffffff',
              padding: '28px 32px',
              borderRadius: '4px',
              border: '3px double #004b93',
              boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
              position: 'relative',
              maxWidth: '820px',
              margin: '0 auto',
              fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
              color: '#0f172a'
            }}
          >
            {/* Watermark Logo in Background */}
            <div
              style={{
                position: 'absolute',
                top: '52%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-28deg)',
                fontSize: '48px',
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
                paddingBottom: '16px',
                marginBottom: '16px',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Official BITS Pilani Logo Image */}
                <div
                  style={{
                    width: '80px',
                    height: '80px',
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
                      maxHeight: '76px',
                      maxWidth: '76px',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      // Fallback to stylized university crest if image fails
                      e.target.style.display = 'none';
                      if (e.target.parentNode) {
                        e.target.parentNode.innerHTML = `
                          <div style="width:68px;height:68px;border-radius:50%;background:#004b93;border:3px solid #c29b38;display:flex;align-items:center;justify-content:center;color:#ffffff;font-size:30px;">
                            🏛️
                          </div>
                        `;
                      }
                    }}
                  />
                </div>

                <div>
                  <h1
                    style={{
                      fontSize: '18px',
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
                      fontSize: '14.5px',
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
                      fontSize: '11.5px',
                      fontWeight: '700',
                      color: '#475569',
                      margin: '0 0 2px 0'
                    }}
                  >
                    WORK INTEGRATED LEARNING PROGRAMMES (WILP) DIVISION
                  </div>
                  <div
                    style={{
                      fontSize: '10px',
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
                  padding: '6px 10px',
                  backgroundColor: '#f8fafc',
                  flexShrink: 0
                }}
              >
                <FaQrcode style={{ fontSize: '42px', color: '#004b93' }} />
                <div style={{ fontSize: '8.5px', fontWeight: '800', color: '#15803d', marginTop: '2px' }}>
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
                padding: '8px 12px',
                borderRadius: '4px',
                marginBottom: '16px',
                position: 'relative',
                zIndex: 1,
                borderBottom: '3px solid #b58b2a'
              }}
            >
              <div style={{ fontSize: '14px', fontWeight: '900', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                MID-SEMESTER TEST (MST) ADMIT CARD / HALL TICKET
              </div>
              <div style={{ fontSize: '11px', color: '#fef08a', fontWeight: '700' }}>
                First Semester 2026-27 • BITS Pilani, Hyderabad Campus • Online AI-Proctored Mode
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
                padding: '8px 14px',
                marginBottom: '16px',
                fontSize: '12px',
                position: 'relative',
                zIndex: 1,
                flexWrap: 'wrap',
                gap: '8px'
              }}
            >
              <div>
                <strong>Hall Ticket No:</strong>{' '}
                <span style={{ color: '#b91c1c', fontWeight: '800', fontSize: '13px' }}>
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
                <strong>Date of Issue:</strong> {candidate.dateOfIssue}
              </div>
              <div>
                <strong>Token:</strong>{' '}
                <span style={{ fontFamily: 'monospace', color: '#475569', fontSize: '11px' }}>
                  {candidate.verificationToken.slice(0, 16)}...
                </span>
              </div>
            </div>

            {/* Candidate Details Table & Real Passport Photo Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 170px',
                gap: '16px',
                marginBottom: '18px',
                position: 'relative',
                zIndex: 1
              }}
            >
              {/* Left Column: Academic & Identity Details Table */}
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '12px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1'
                }}
              >
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '7px 10px', backgroundColor: '#f8fafc', fontWeight: '700', width: '38%', color: '#334155' }}>
                      Candidate Full Name:
                    </td>
                    <td style={{ padding: '7px 10px', fontWeight: '900', color: '#004b93', fontSize: '13.5px' }}>
                      {candidate.name}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '7px 10px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Student ID / Roll No:
                    </td>
                    <td style={{ padding: '7px 10px', fontWeight: '800', color: '#0f172a' }}>
                      {candidate.roll}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '7px 10px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Degree Programme:
                    </td>
                    <td style={{ padding: '7px 10px', fontWeight: '600', color: '#0f172a' }}>
                      {candidate.program}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '7px 10px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Campus Affiliation:
                    </td>
                    <td style={{ padding: '7px 10px', fontWeight: '800', color: '#b91c1c' }}>
                      BITS Pilani, Hyderabad Campus
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '7px 10px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Sponsoring Corporate:
                    </td>
                    <td style={{ padding: '7px 10px', fontWeight: '700', color: '#059669' }}>
                      {candidate.sponsor}
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '7px 10px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Exam Center / Mode:
                    </td>
                    <td style={{ padding: '7px 10px', color: '#0f172a' }}>
                      {candidate.examCenter}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '7px 10px', backgroundColor: '#f8fafc', fontWeight: '700', color: '#334155' }}>
                      Portal Session ID:
                    </td>
                    <td style={{ padding: '7px 10px', fontFamily: 'monospace', color: '#2563eb', fontWeight: '700' }}>
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
                  gap: '8px'
                }}
              >
                {/* Photo Frame */}
                <div
                  style={{
                    width: '140px',
                    height: '165px',
                    border: '2.5px solid #004b93',
                    borderRadius: '4px',
                    backgroundColor: '#e2e8f0',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 3px 8px rgba(0,0,0,0.15)'
                  }}
                >
                  {/* Candidate Real Photo */}
                  <img
                    src={candidate.photoUrl}
                    alt="Rohan Kumar Chaudhry - Candidate Photograph"
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
                      bottom: '5px',
                      right: '5px',
                      backgroundColor: 'rgba(185, 28, 28, 0.92)',
                      color: '#ffffff',
                      fontSize: '7.5px',
                      fontWeight: '900',
                      padding: '2px 6px',
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
                    width: '140px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '3px',
                    padding: '4px 6px',
                    textAlign: 'center',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Brush Script MT', 'Dancing Script', cursive, sans-serif",
                      fontSize: '18px',
                      color: '#0f172a',
                      fontWeight: '700',
                      letterSpacing: '0.5px',
                      lineHeight: '1.2'
                    }}
                  >
                    Rohan K. Chaudhry
                  </div>
                  <div style={{ fontSize: '8px', color: '#64748b', borderTop: '1px dashed #cbd5e1', paddingTop: '2px', marginTop: '2px' }}>
                    Candidate Signature
                  </div>
                </div>
              </div>
            </div>

            {/* Examination Schedule Timetable (17–20 Nov 2026, 06:30 PM to 09:00 PM Daily) */}
            <div style={{ marginBottom: '16px', position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: '800',
                  color: '#004b93',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginBottom: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <FaCalendarAlt style={{ color: '#b91c1c' }} /> Mid-Semester Test (MST) Timetable & Paper Allocation
              </div>

              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '11.5px',
                  textAlign: 'left',
                  border: '1.5px solid #004b93'
                }}
              >
                <thead>
                  <tr style={{ backgroundColor: '#004b93', color: '#ffffff' }}>
                    <th style={{ padding: '7px 8px', width: '22%' }}>Date & Day</th>
                    <th style={{ padding: '7px 8px', width: '18%' }}>Exam Slot</th>
                    <th style={{ padding: '7px 8px', width: '12%' }}>Course</th>
                    <th style={{ padding: '7px 8px', width: '28%' }}>Course Title</th>
                    <th style={{ padding: '7px 8px', width: '10%' }}>Duration</th>
                    <th style={{ padding: '7px 8px', width: '10%' }}>Proctor</th>
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
                      <td style={{ padding: '7px 8px', fontWeight: '700', color: '#b91c1c' }}>
                        {item.day}
                      </td>
                      <td style={{ padding: '7px 8px', fontWeight: '800', color: '#0f172a' }}>
                        {item.time}
                      </td>
                      <td style={{ padding: '7px 8px', fontWeight: '800', color: '#004b93' }}>
                        {item.code}
                      </td>
                      <td style={{ padding: '7px 8px', fontWeight: '600' }}>
                        {item.name}
                      </td>
                      <td style={{ padding: '7px 8px', color: '#475569' }}>
                        {item.duration}
                      </td>
                      <td style={{ padding: '7px 8px', color: '#16a34a', fontWeight: '700' }}>
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
                paddingTop: '14px',
                marginBottom: '16px',
                position: 'relative',
                zIndex: 1
              }}
            >
              {/* Candidate Declaration */}
              <div style={{ maxWidth: '280px', fontSize: '9.5px', color: '#64748b', lineHeight: '1.4' }}>
                <strong>Candidate Declaration:</strong> I hereby certify that the particulars furnished above are true and correct. I will adhere strictly to all BITS Pilani, Hyderabad Campus examination regulations.
              </div>

              {/* Official Hyderabad Campus Seal */}
              <div
                style={{
                  width: '94px',
                  height: '94px',
                  borderRadius: '50%',
                  border: '2px dashed #004b93',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#004b93',
                  textAlign: 'center',
                  padding: '4px',
                  backgroundColor: 'rgba(0, 75, 147, 0.02)'
                }}
              >
                <span style={{ fontSize: '7px', fontWeight: '800', textTransform: 'uppercase' }}>BITS PILANI</span>
                <span style={{ fontSize: '8px', fontWeight: '900', color: '#b91c1c' }}>HYDERABAD</span>
                <span style={{ fontSize: '6.5px', fontWeight: '700' }}>WILP EXAM SEAL</span>
                <span style={{ fontSize: '6px', color: '#64748b' }}>2026-27</span>
              </div>

              {/* Controller / In-Charge Examinations Signature */}
              <div style={{ textAlign: 'center', minWidth: '190px' }}>
                <div
                  style={{
                    fontFamily: "'Brush Script MT', 'Dancing Script', cursive, sans-serif",
                    fontSize: '20px',
                    color: '#004b93',
                    fontWeight: '700',
                    lineHeight: '1.2'
                  }}
                >
                  M. S. Radhakrishnan
                </div>
                <div style={{ fontSize: '11px', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>
                  Dr. M. S. Radhakrishnan
                </div>
                <div style={{ fontSize: '9.5px', color: '#475569', fontWeight: '600' }}>
                  Controller of Examinations
                </div>
                <div style={{ fontSize: '8.5px', color: '#b91c1c', fontWeight: '700' }}>
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
                padding: '10px 12px',
                fontSize: '10px',
                color: '#334155',
                lineHeight: '1.45',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div style={{ fontWeight: '800', color: '#004b93', marginBottom: '4px', textTransform: 'uppercase', fontSize: '10.5px' }}>
                IMPORTANT INSTRUCTIONS FOR THE CANDIDATE • HYDERABAD CAMPUS
              </div>
              <ol style={{ paddingLeft: '16px', margin: 0 }}>
                <li>This Admit Card must be kept accessible during each examination session and presented to the online AI proctor alongside a valid photo identity card (e.g. Aadhaar Card, Passport, or L&T Employee ID Card).</li>
                <li>The examination portal opens strictly 30 minutes prior to scheduled start (06:00 PM IST). Candidates must complete facial recognition and room 360-degree environmental scan before 06:25 PM IST.</li>
                <li>Dual camera proctoring (primary webcam + secondary angle camera via mobile phone) must remain active throughout the 150-minute testing window.</li>
                <li>No electronic communication devices, secondary monitor screens, or unauthorized materials are permitted in the testing perimeter.</li>
                <li>In case of technical or connectivity interruption during the exam, contact the Hyderabad Campus WILP Emergency Helpdesk immediately: <strong>exams.wilp@hyderabad.bits-pilani.ac.in</strong> | Emergency Phone: <strong>+91-40-6630-3999 / +91-40-6630-3831</strong>.</li>
              </ol>
            </div>

            {/* Bottom Barcode Graphic */}
            <div
              style={{
                marginTop: '12px',
                textAlign: 'center',
                borderTop: '1px solid #e2e8f0',
                paddingTop: '8px',
                position: 'relative',
                zIndex: 1
              }}
            >
              <div
                style={{
                  fontFamily: "'Courier New', Courier, monospace",
                  fontSize: '14px',
                  letterSpacing: '5px',
                  fontWeight: '700',
                  color: '#1e293b'
                }}
              >
                ||| ||||| ||| ||||||| |||| |||||| |||||||| ||||| |||
              </div>
              <div style={{ fontSize: '9px', color: '#64748b', letterSpacing: '1px', marginTop: '2px' }}>
                {candidate.barcodeString} • BITS PILANI HYDERABAD CAMPUS • SYSTEM COMPATIBILITY: PASSED
              </div>
            </div>

          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div
          className="no-print"
          style={{
            padding: '12px 24px',
            backgroundColor: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '12px',
            color: '#64748b'
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
              padding: '6px 14px',
              borderRadius: '4px',
              fontSize: '12px',
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
