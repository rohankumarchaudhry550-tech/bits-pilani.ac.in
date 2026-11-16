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
  FaSpinner
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
    hallTicketNo: 'WILP-2026-MST-5831',
    examCenter: 'Online Proctored Mode (WILP AI Secure Portal)',
    portalId: 'BITS-WILP-EXAM-PROCTOR-ALPHA',
    dateOfIssue: '16 November 2026',
    barcodeString: '*WILP-2026-MST-5831*',
    verificationToken: 'BITS-WILP-AUTH-7892-2026ML005831-SECURE'
  };

  const schedule = [
    {
      day: 'Day 1: 17 Nov 2026 (Tuesday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F112',
      name: 'Mathematical Foundations for Machine Learning',
      duration: '150 Mins',
      hall: 'Online Hall 1',
      invigilator: 'Dr. A. Sen',
      status: 'Admitted'
    },
    {
      day: 'Day 2: 18 Nov 2026 (Wednesday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F111',
      name: 'Introduction to Statistical Methods',
      duration: '150 Mins',
      hall: 'Online Hall 2',
      invigilator: 'Prof. R. Sharma',
      status: 'Admitted'
    },
    {
      day: 'Day 3: 19 Nov 2026 (Thursday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F113',
      name: 'Machine Learning',
      duration: '150 Mins',
      hall: 'Online Hall 1',
      invigilator: 'Dr. K. Patel',
      status: 'Admitted'
    },
    {
      day: 'Day 4: 20 Nov 2026 (Friday)',
      time: '06:30 PM – 09:00 PM',
      code: 'BITS F114',
      name: 'Artificial and Computational Intelligence',
      duration: '150 Mins',
      hall: 'Online Hall 3',
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
      pdf.save(`BITS_Pilani_HallTicket_${candidate.roll}_MST.pdf`);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback to window.print()
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
            <FaIdCard style={{ color: '#fcb900', fontSize: '20px' }} />
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', margin: 0 }}>
                BITS Pilani Official Examination Hall Ticket
              </h3>
              <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>
                Roll: {candidate.roll} • Mid-Semester Tests (17–20 Nov 2026)
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
              {isGenerating ? 'Generating PDF...' : downloadSuccess ? 'Downloaded!' : 'Download Hall Ticket (PDF)'}
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
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-30deg)',
                fontSize: '70px',
                fontWeight: '900',
                color: 'rgba(0, 75, 147, 0.03)',
                letterSpacing: '10px',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                zIndex: 0
              }}
            >
              BITS PILANI • WILP
            </div>

            {/* Top Official Header with BITS Pilani Crest */}
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
                {/* Crest Emulation */}
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#004b93',
                    border: '3px solid #c29b38',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '28px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                    flexShrink: 0
                  }}
                >
                  <FaUniversity />
                </div>

                <div>
                  <h1
                    style={{
                      fontSize: '18px',
                      fontWeight: '900',
                      color: '#004b93',
                      letterSpacing: '0.5px',
                      margin: '0 0 2px 0',
                      textTransform: 'uppercase'
                    }}
                  >
                    BIRLA INSTITUTE OF TECHNOLOGY & SCIENCE, PILANI
                  </h1>
                  <h2
                    style={{
                      fontSize: '12.5px',
                      fontWeight: '700',
                      color: '#475569',
                      margin: '0 0 2px 0'
                    }}
                  >
                    WORK INTEGRATED LEARNING PROGRAMMES (WILP) DIVISION
                  </h2>
                  <div
                    style={{
                      fontSize: '11px',
                      color: '#b58b2a',
                      fontWeight: '800',
                      letterSpacing: '1px'
                    }}
                  >
                    ज्ञानं परमं बलम् • VIDYA PARAMA BALAM
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
                  backgroundColor: '#f8fafc'
                }}
              >
                <FaQrcode style={{ fontSize: '42px', color: '#004b93' }} />
                <div style={{ fontSize: '9px', fontWeight: '800', color: '#15803d', marginTop: '2px' }}>
                  VERIFIED ADMIT CARD
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
                zIndex: 1
              }}
            >
              <div style={{ fontSize: '14.5px', fontWeight: '800', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                OFFICIAL EXAMINATION ADMIT CARD / HALL TICKET
              </div>
              <div style={{ fontSize: '11.5px', color: '#e2e8f0', fontWeight: '600' }}>
                First Semester 2026-27 • Mid-Semester Tests (MST) • Online Proctored Mode
              </div>
            </div>

            {/* Hall Ticket Meta & Barcode Strip */}
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
                zIndex: 1
              }}
            >
              <div>
                <strong>Hall Ticket No:</strong>{' '}
                <span style={{ color: '#b91c1c', fontWeight: '800', fontSize: '13px' }}>
                  {candidate.hallTicketNo}
                </span>
              </div>
              <div>
                <strong>Date of Issue:</strong> {candidate.dateOfIssue}
              </div>
              <div>
                <strong>Security Token:</strong>{' '}
                <span style={{ fontFamily: 'monospace', color: '#475569' }}>
                  {candidate.verificationToken.slice(0, 18)}...
                </span>
              </div>
            </div>

            {/* Candidate Identity Details & Photo/Signature Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 180px',
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
                    <td style={{ padding: '7px 10px', fontWeight: '800', color: '#004b93', fontSize: '13.5px' }}>
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

              {/* Right Column: Photo Frame with Official Stamp & Specimen Signature */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {/* Photo Box */}
                <div
                  style={{
                    width: '135px',
                    height: '155px',
                    border: '2px solid #004b93',
                    borderRadius: '4px',
                    backgroundColor: '#e2e8f0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                  }}
                >
                  {/* Photo Avatar Placeholder with High Detail */}
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#1e293b',
                      color: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '50%',
                        backgroundColor: '#3b82f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '22px',
                        fontWeight: '800'
                      }}
                    >
                      RK
                    </div>
                    <span style={{ fontSize: '10.5px', fontWeight: '700', marginTop: '8px', textAlign: 'center', padding: '0 4px' }}>
                      Rohan K. Chaudhry
                    </span>
                    <span style={{ fontSize: '8.5px', color: '#94a3b8' }}>
                      2026ML005831
                    </span>
                  </div>

                  {/* Red Verification Stamp Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      right: '4px',
                      backgroundColor: 'rgba(220, 38, 38, 0.9)',
                      color: '#ffffff',
                      fontSize: '8px',
                      fontWeight: '800',
                      padding: '2px 6px',
                      borderRadius: '3px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.4px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.3)'
                    }}
                  >
                    VERIFIED
                  </div>
                </div>

                {/* Candidate Signature Box */}
                <div
                  style={{
                    width: '135px',
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
                  <div style={{ fontSize: '8.5px', color: '#64748b', borderTop: '1px dashed #cbd5e1', paddingTop: '2px', marginTop: '2px' }}>
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

            {/* Institutional Signatures & Authentication Stamp */}
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
                <strong>Candidate Declaration:</strong> I hereby certify that the particulars furnished above are true and correct. I will adhere strictly to all BITS Pilani examination regulations.
              </div>

              {/* Institutional Seal */}
              <div
                style={{
                  width: '90px',
                  height: '90px',
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
                <span style={{ fontSize: '8.5px', fontWeight: '900', color: '#b91c1c' }}>WILP EXAM</span>
                <span style={{ fontSize: '6.5px', fontWeight: '700' }}>SEAL OF DIVISION</span>
                <span style={{ fontSize: '6px', color: '#64748b' }}>2026-27</span>
              </div>

              {/* Controller of Examinations Signature */}
              <div style={{ textAlign: 'center', minWidth: '180px' }}>
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
                <div style={{ fontSize: '9.5px', color: '#475569' }}>
                  Controller of Examinations
                </div>
                <div style={{ fontSize: '8.5px', color: '#64748b' }}>
                  BITS Pilani (Rajasthan) India
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
                IMPORTANT INSTRUCTIONS FOR THE CANDIDATE
              </div>
              <ol style={{ paddingLeft: '16px', margin: 0 }}>
                <li>This Admit Card must be kept accessible during each examination session and presented to the online AI proctor alongside a valid photo identity card (e.g. Aadhaar Card, Passport, or L&T Employee ID Card).</li>
                <li>The examination portal opens strictly 30 minutes prior to scheduled start (06:00 PM IST). Candidates must complete facial recognition and room 360-degree environmental scan before 06:25 PM IST.</li>
                <li>Dual camera proctoring (primary webcam + secondary angle camera via mobile phone) must remain active throughout the 150-minute testing window.</li>
                <li>No electronic communication devices, secondary monitor screens, or unauthorized materials are permitted in the testing perimeter.</li>
                <li>In case of technical or connectivity interruption during the exam, contact the WILP Emergency Helpdesk immediately: <strong>wilp.exams@pilani.bits-pilani.ac.in</strong> | Emergency Phone: <strong>+91-1596-242210</strong>.</li>
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
                {candidate.barcodeString} • SYSTEM COMPATIBILITY: PASSED
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
            💡 <strong>Tip:</strong> Click "Download Hall Ticket (PDF)" to directly save the PDF, or choose "Print / Save PDF" to select your printer.
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
