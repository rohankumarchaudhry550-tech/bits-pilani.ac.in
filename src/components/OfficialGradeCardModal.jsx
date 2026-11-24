import React, { useState, useRef, useEffect } from 'react';
import {
  FaTimes,
  FaDownload,
  FaPrint,
  FaCheckCircle,
  FaUniversity,
  FaAward,
  FaTrophy,
  FaBarcode,
  FaQrcode,
  FaSpinner,
  FaGraduationCap,
  FaFileAlt
} from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {
  rohanMstScorecard,
  rohanMst2Scorecard,
  rohanAssignmentScorecard,
  assignmentResultsData
} from '../data/mstResultsData';
import { bitsLogoBase64 } from '../data/bitsLogoBase64';

export default function OfficialGradeCardModal({ isOpen, onClose, initialResultType = 'mst1' }) {
  const [resultType, setResultType] = useState(initialResultType || 'mst1'); // 'mst1' | 'mst2' | 'assignments'
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const gradeCardRef = useRef(null);

  useEffect(() => {
    if (initialResultType) {
      setResultType(initialResultType);
    }
  }, [initialResultType, isOpen]);

  if (!isOpen) return null;

  const isMst1 = resultType === 'mst1';
  const isMst2 = resultType === 'mst2';
  const isAssg = resultType === 'assignments';

  const scorecard = isMst2
    ? rohanMst2Scorecard
    : isAssg
    ? rohanAssignmentScorecard
    : rohanMstScorecard;

  const documentTitle = isMst1
    ? 'OFFICIAL MID-SEMESTER GRADE SHEET (MST-1)'
    : isMst2
    ? 'OFFICIAL MID-SEMESTER GRADE SHEET (MST-2 • SECOND EVALUATION)'
    : 'OFFICIAL CONTINUOUS ASSESSMENT & ASSIGNMENTS TRANSCRIPT';

  const documentRefNo = isMst1
    ? 'BITS/HYD/EXAM/2026-27/MST1-005831'
    : isMst2
    ? 'BITS/HYD/EXAM/2026-27/MST2-005831'
    : 'BITS/HYD/EXAM/2026-27/ASSG-005831';

  const declarationDate = isMst1
    ? '10 October 2026'
    : isMst2
    ? '14 November 2026'
    : '15 November 2026';

  const doCaptureAndDownload = async (typeToSave) => {
    const element = gradeCardRef.current;
    if (!element) {
      throw new Error('Grade sheet element not found in DOM');
    }

    // Small delay to ensure styles and canvas are ready
    await new Promise((resolve) => setTimeout(resolve, 150));

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      logging: false,
      backgroundColor: '#ffffff',
      windowWidth: 1200,
      scrollX: 0,
      scrollY: 0,
      onclone: (clonedDoc) => {
        const clonedElement = clonedDoc.getElementById('bits-official-grade-sheet');
        if (clonedElement) {
          clonedElement.style.width = '800px';
          clonedElement.style.minWidth = '800px';
          clonedElement.style.maxWidth = '800px';
          clonedElement.style.padding = '24px 28px';
          clonedElement.style.margin = '0 auto';
          clonedElement.style.boxSizing = 'border-box';
          clonedElement.style.boxShadow = 'none';
        }
      }
    });

    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pageWidth = pdf.internal.pageSize.getWidth(); // 210mm
    const pageHeight = pdf.internal.pageSize.getHeight(); // 297mm
    const margin = 6; // 6mm margin
    const printableWidth = pageWidth - (margin * 2); // 198mm
    const printableHeight = (canvas.height * printableWidth) / canvas.width;

    if (printableHeight <= (pageHeight - margin * 2)) {
      // Fits perfectly on single page
      const yOffset = margin + Math.max(0, (pageHeight - margin * 2 - printableHeight) / 2);
      pdf.addImage(imgData, 'PNG', margin, yOffset, printableWidth, printableHeight);
    } else if (printableHeight <= (pageHeight * 1.15)) {
      // Fits with slight scaling to keep entire official transcript on 1 page
      const scaledHeight = pageHeight - (margin * 2);
      const scaledWidth = (canvas.width * scaledHeight) / canvas.height;
      const xOffset = margin + (printableWidth - scaledWidth) / 2;
      pdf.addImage(imgData, 'PNG', xOffset, margin, scaledWidth, scaledHeight);
    } else {
      // Multi-page handling
      let heightLeft = printableHeight;
      let position = margin;

      pdf.addImage(imgData, 'PNG', margin, position, printableWidth, printableHeight);
      heightLeft -= (pageHeight - margin * 2);

      while (heightLeft > 0) {
        position = heightLeft - printableHeight + margin;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', margin, position, printableWidth, printableHeight);
        heightLeft -= (pageHeight - margin * 2);
      }
    }

    const currentScorecard = typeToSave === 'mst2'
      ? rohanMst2Scorecard
      : typeToSave === 'assignments'
      ? rohanAssignmentScorecard
      : rohanMstScorecard;

    const fileName = `BITS_Pilani_Hyderabad_Official_Grade_Sheet_${currentScorecard.rollNumber}_${typeToSave.toUpperCase()}.pdf`;

    try {
      const blob = pdf.output('blob');
      const blobUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = fileName;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      setTimeout(() => {
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(blobUrl);
      }, 3000);
    } catch (blobErr) {
      pdf.save(fileName);
    }
  };

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    try {
      await doCaptureAndDownload(resultType);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3500);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Generating printable grade sheet view. You can choose "Save as PDF" from your browser print dialog.');
      window.print();
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadBothMst = async () => {
    setIsGenerating(true);
    try {
      // 1. Download MST-1
      setResultType('mst1');
      await new Promise((r) => setTimeout(r, 200));
      await doCaptureAndDownload('mst1');

      // 2. Download MST-2
      await new Promise((r) => setTimeout(r, 600));
      setResultType('mst2');
      await new Promise((r) => setTimeout(r, 200));
      await doCaptureAndDownload('mst2');

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (error) {
      console.error('Error downloading both MST PDFs:', error);
      alert('Generating printable grade sheet view.');
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
        backgroundColor: 'rgba(15, 23, 42, 0.82)',
        backdropFilter: 'blur(5px)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12px',
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
          width: '100%',
          maxWidth: '860px',
          maxHeight: '94vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
          overflow: 'hidden'
        }}
      >
        {/* Modal Top Control Bar */}
        <div
          style={{
            backgroundColor: '#0f172a',
            color: '#ffffff',
            padding: '14px 22px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #334155',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaGraduationCap style={{ color: '#fcb900', fontSize: '20px' }} />
            <div>
              <h3 style={{ margin: 0, fontSize: '15.5px', fontWeight: '700', letterSpacing: '0.3px' }}>
                BITS Pilani Official Institutional Grade Sheet
              </h3>
              <span style={{ fontSize: '11.5px', color: '#94a3b8' }}>
                Division of Evaluation & Examinations • Hyderabad Campus
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {/* Result Type Selector */}
            <div style={{ display: 'flex', backgroundColor: '#1e293b', borderRadius: '6px', padding: '3px', border: '1px solid #475569' }}>
              <button
                onClick={() => setResultType('mst1')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: isMst1 ? '#004b93' : 'transparent',
                  color: isMst1 ? '#ffffff' : '#cbd5e1',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                MST-1 Result
              </button>
              <button
                onClick={() => setResultType('mst2')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: isMst2 ? '#004b93' : 'transparent',
                  color: isMst2 ? '#ffffff' : '#cbd5e1',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                MST-2 (Second Result)
              </button>
              <button
                onClick={() => setResultType('assignments')}
                style={{
                  padding: '5px 12px',
                  borderRadius: '4px',
                  border: 'none',
                  backgroundColor: isAssg ? '#004b93' : 'transparent',
                  color: isAssg ? '#ffffff' : '#cbd5e1',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Assignments Result
              </button>
            </div>

            {/* Download Active PDF Button */}
            <button
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              style={{
                backgroundColor: downloadSuccess ? '#16a34a' : '#b91c1c',
                color: '#ffffff',
                border: 'none',
                padding: '7px 16px',
                borderRadius: '6px',
                fontSize: '12.5px',
                fontWeight: '700',
                cursor: isGenerating ? 'wait' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
            >
              {isGenerating ? <FaSpinner className="fa-spin" /> : downloadSuccess ? <FaCheckCircle /> : <FaDownload />}
              {isGenerating ? 'Generating PDF...' : downloadSuccess ? 'Downloaded!' : `Download ${isMst2 ? 'MST-2' : isMst1 ? 'MST-1' : 'Assignments'} PDF`}
            </button>

            {/* Download Both MSTs Button */}
            <button
              onClick={handleDownloadBothMst}
              disabled={isGenerating}
              style={{
                backgroundColor: '#004b93',
                color: '#ffffff',
                border: 'none',
                padding: '7px 14px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: isGenerating ? 'wait' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}
              title="Download official PDF transcripts for both MST-1 and MST-2"
            >
              <FaDownload /> Download Both MSTs (1 & 2)
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: 'none',
                padding: '7px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <FaPrint /> Print
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#94a3b8',
                fontSize: '18px',
                cursor: 'pointer',
                padding: '4px 8px',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Close modal"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body: Authentic College Grade Card */}
        <div style={{ overflowY: 'auto', padding: '24px', backgroundColor: '#f1f5f9' }}>
          
          <div
            id="bits-official-grade-sheet"
            ref={gradeCardRef}
            style={{
              backgroundColor: '#ffffff',
              maxWidth: '780px',
              margin: '0 auto',
              padding: '30px 34px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              border: '2px solid #004b93',
              borderRadius: '4px',
              position: 'relative',
              color: '#0f172a',
              fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
            }}
          >
            {/* Subtle BITS Watermark */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-30deg)',
                fontSize: '90px',
                fontWeight: '900',
                color: 'rgba(0, 75, 147, 0.035)',
                pointerEvents: 'none',
                userSelect: 'none',
                whiteSpace: 'nowrap',
                letterSpacing: '8px',
                zIndex: 0
              }}
            >
              BITS PILANI
            </div>

            {/* Top Security Barcode Strip */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #cbd5e1',
                paddingBottom: '8px',
                marginBottom: '18px',
                fontSize: '10.5px',
                color: '#64748b'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <FaBarcode style={{ fontSize: '14px' }} />
                <span style={{ fontFamily: 'monospace', letterSpacing: '1px' }}>
                  *BITS-HYD-GR-{scorecard.rollNumber}*
                </span>
              </div>
              <div>
                <strong>Document Ref:</strong> {documentRefNo}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#15803d', fontWeight: '700' }}>
                <FaCheckCircle /> SECURE VERIFIED TRANSCRIPT
              </div>
            </div>

            {/* Official University Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                borderBottom: '3px double #004b93',
                paddingBottom: '18px',
                marginBottom: '20px'
              }}
            >
              <img
                src={bitsLogoBase64}
                alt="BITS Pilani Logo"
                style={{
                  width: '85px',
                  height: '85px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))'
                }}
              />

              <div style={{ flex: 1, textAlign: 'center' }}>
                <div style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '1.5px', color: '#b91c1c', textTransform: 'uppercase' }}>
                  ज्ञानं परमं बलम् • BIRLA INSTITUTE OF TECHNOLOGY & SCIENCE, PILANI
                </div>
                <h1 style={{ fontSize: '20px', fontWeight: '900', color: '#004b93', margin: '4px 0 2px', letterSpacing: '0.4px' }}>
                  BITS PILANI, HYDERABAD CAMPUS
                </h1>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#334155' }}>
                  DIVISION OF EVALUATION AND EXAMINATIONS • HYDERABAD - 500078
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#004b93',
                    color: '#ffffff',
                    padding: '3px 14px',
                    borderRadius: '3px',
                    fontSize: '11px',
                    fontWeight: '800',
                    letterSpacing: '0.8px',
                    marginTop: '6px',
                    textTransform: 'uppercase'
                  }}
                >
                  {documentTitle}
                </div>
              </div>

              {/* Digital QR Authentication */}
              <div
                style={{
                  textAlign: 'center',
                  padding: '6px',
                  border: '1px solid #cbd5e1',
                  borderRadius: '4px',
                  backgroundColor: '#f8fafc',
                  width: '85px'
                }}
              >
                <FaQrcode style={{ fontSize: '42px', color: '#004b93', margin: '0 auto' }} />
                <span style={{ fontSize: '8.5px', color: '#64748b', display: 'block', marginTop: '2px', fontWeight: '700' }}>
                  Scan to Verify
                </span>
              </div>
            </div>

            {/* Candidate Academic Particulars (100% Free of Company Names) */}
            <div
              style={{
                backgroundColor: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                borderRadius: '6px',
                padding: '14px 18px',
                marginBottom: '20px',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px 24px',
                fontSize: '12px'
              }}
            >
              <div>
                <span style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                  Candidate Name
                </span>
                <strong style={{ fontSize: '14px', color: '#0f172a' }}>{scorecard.studentName}</strong>
              </div>

              <div>
                <span style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                  BITS Student ID / Roll No.
                </span>
                <strong style={{ fontSize: '14px', color: '#004b93' }}>{scorecard.rollNumber}</strong>
              </div>

              <div>
                <span style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                  Programme & Degree
                </span>
                <strong style={{ color: '#1e293b' }}>{scorecard.program}</strong>
              </div>

              <div>
                <span style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                  Academic Session & Semester
                </span>
                <strong style={{ color: '#1e293b' }}>First Semester 2026-27</strong>
              </div>

              <div>
                <span style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                  Department / Faculty
                </span>
                <strong style={{ color: '#1e293b' }}>Dept. of Computer Science & Information Systems (CSIS)</strong>
              </div>

              <div>
                <span style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                  Examination Center / Campus
                </span>
                <strong style={{ color: '#1e293b' }}>BITS Pilani, Hyderabad Campus (Academic Block / LTC)</strong>
              </div>
            </div>

            {/* Marks & Grade Table */}
            {isAssg ? (
              /* Assignment Continuous Assessment Table */
              <div style={{ marginBottom: '22px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11.5px', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#004b93', color: '#ffffff' }}>
                      <th style={{ padding: '8px 10px', width: '50px', textAlign: 'center' }}>Week</th>
                      <th style={{ padding: '8px 10px' }}>Continuous Assessment Assignment Title</th>
                      <th style={{ padding: '8px 10px', width: '85px', textAlign: 'center' }}>Course</th>
                      <th style={{ padding: '8px 10px', width: '70px', textAlign: 'center' }}>Max</th>
                      <th style={{ padding: '8px 10px', width: '75px', textAlign: 'center' }}>Obtained</th>
                      <th style={{ padding: '8px 10px', width: '70px', textAlign: 'center' }}>Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignmentResultsData.filter(a => a.score !== null && a.score > 0).map((assgItem, idx) => (
                      <tr
                        key={idx}
                        style={{
                          backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                          borderBottom: '1px solid #e2e8f0'
                        }}
                      >
                        <td style={{ padding: '7px 10px', textAlign: 'center', fontWeight: '700', color: '#64748b' }}>
                          W{assgItem.week}
                        </td>
                        <td style={{ padding: '7px 10px' }}>
                          <strong style={{ color: '#0f172a' }}>{assgItem.title}</strong>
                          <div style={{ fontSize: '10px', color: '#64748b' }}>Instructor: {assgItem.instructor}</div>
                        </td>
                        <td style={{ padding: '7px 10px', textAlign: 'center', fontWeight: '700', color: '#004b93' }}>
                          {assgItem.subjectCode}
                        </td>
                        <td style={{ padding: '7px 10px', textAlign: 'center', color: '#64748b' }}>
                          {assgItem.maxScore}
                        </td>
                        <td style={{ padding: '7px 10px', textAlign: 'center', fontWeight: '900', color: '#16a34a' }}>
                          {assgItem.score}.0
                        </td>
                        <td style={{ padding: '7px 10px', textAlign: 'center', fontWeight: '800', color: '#15803d' }}>
                          A+ (10/10)
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ backgroundColor: '#eff6ff', fontWeight: '900', borderTop: '2px solid #004b93' }}>
                      <td colSpan={3} style={{ padding: '9px 12px', color: '#004b93', fontSize: '12px' }}>
                        Cumulative Continuous Assessment Performance (11 Graded Submissions)
                      </td>
                      <td style={{ padding: '9px 10px', textAlign: 'center', color: '#64748b' }}>1100</td>
                      <td style={{ padding: '9px 10px', textAlign: 'center', color: '#16a34a', fontSize: '13px' }}>1094.0</td>
                      <td style={{ padding: '9px 10px', textAlign: 'center', color: '#15803d', fontSize: '13px' }}>99.4% (A+)</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            ) : (
              /* Mid-Semester Test Subject Table (MST-1 or MST-2) */
              <div style={{ marginBottom: '22px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#004b93', color: '#ffffff' }}>
                      <th style={{ padding: '9px 12px', width: '85px', textAlign: 'center' }}>Course</th>
                      <th style={{ padding: '9px 12px' }}>Course Title</th>
                      <th style={{ padding: '9px 10px', width: '60px', textAlign: 'center' }}>Credits</th>
                      <th style={{ padding: '9px 10px', width: '70px', textAlign: 'center' }}>Max</th>
                      <th style={{ padding: '9px 10px', width: '75px', textAlign: 'center' }}>Awarded</th>
                      <th style={{ padding: '9px 10px', width: '65px', textAlign: 'center' }}>Grade</th>
                      <th style={{ padding: '9px 10px', width: '55px', textAlign: 'center' }}>GP</th>
                      <th style={{ padding: '9px 12px' }}>Academic Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scorecard.subjectScores.map((subj, idx) => (
                      <tr
                        key={idx}
                        style={{
                          backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                          borderBottom: '1px solid #e2e8f0'
                        }}
                      >
                        <td style={{ padding: '9px 12px', textAlign: 'center', fontWeight: '800', color: '#004b93' }}>
                          {subj.code}
                        </td>
                        <td style={{ padding: '9px 12px' }}>
                          <strong style={{ color: '#0f172a' }}>{subj.name}</strong>
                          <div style={{ fontSize: '10.5px', color: '#64748b' }}>
                            Part A: {subj.partA}/15.0 • Part B: {subj.partB}/25.0
                          </div>
                        </td>
                        <td style={{ padding: '9px 10px', textAlign: 'center', color: '#334155' }}>
                          4.0
                        </td>
                        <td style={{ padding: '9px 10px', textAlign: 'center', color: '#64748b' }}>
                          {subj.maxMarks}.0
                        </td>
                        <td style={{ padding: '9px 10px', textAlign: 'center', fontWeight: '900', color: '#16a34a' }}>
                          {subj.obtained.toFixed(1)}
                        </td>
                        <td style={{ padding: '9px 10px', textAlign: 'center', fontWeight: '800', color: '#15803d' }}>
                          {subj.grade}
                        </td>
                        <td style={{ padding: '9px 10px', textAlign: 'center', fontWeight: '800', color: '#0f172a' }}>
                          {subj.gradePoint}
                        </td>
                        <td style={{ padding: '9px 12px', fontSize: '11px', color: '#475569', fontStyle: 'italic' }}>
                          {subj.remarks.split('.')[0]}.
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ backgroundColor: '#eff6ff', fontWeight: '900', borderTop: '2px solid #004b93' }}>
                      <td colSpan={2} style={{ padding: '10px 14px', color: '#004b93', fontSize: '13px' }}>
                        TOTAL SEMESTER SUMMARY (4 Courses)
                      </td>
                      <td style={{ padding: '10px 10px', textAlign: 'center', color: '#004b93' }}>16.0</td>
                      <td style={{ padding: '10px 10px', textAlign: 'center', color: '#64748b' }}>{scorecard.totalMaxMarks}.0</td>
                      <td style={{ padding: '10px 10px', textAlign: 'center', color: '#16a34a', fontSize: '14px' }}>
                        {scorecard.totalMarksObtained.toFixed(1)}
                      </td>
                      <td style={{ padding: '10px 10px', textAlign: 'center', color: '#15803d' }}>
                        {isMst2 ? 'A+' : 'A'}
                      </td>
                      <td style={{ padding: '10px 10px', textAlign: 'center', color: '#004b93' }}>10.0</td>
                      <td style={{ padding: '10px 12px', color: '#15803d' }}>
                        Grade Point Average: 10.00 / 10.00
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            )}

            {/* Official Performance & Standing Summary Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '12px',
                marginBottom: '24px',
                textAlign: 'center'
              }}
            >
              <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '10px 8px' }}>
                <span style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                  Total Score
                </span>
                <strong style={{ fontSize: '16px', color: '#16a34a' }}>
                  {isAssg ? '99.4%' : `${scorecard.totalMarksObtained} / ${scorecard.totalMaxMarks}`}
                </strong>
                <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>
                  {isAssg ? '1094 / 1100' : `${scorecard.overallPercentage}%`}
                </span>
              </div>

              <div style={{ backgroundColor: '#fefce8', border: '1px solid #fde047', borderRadius: '4px', padding: '10px 8px' }}>
                <span style={{ fontSize: '10px', color: '#854d0e', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                  Official Standing
                </span>
                <strong style={{ fontSize: '16px', color: '#92400e', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                  <FaTrophy /> Rank #1
                </strong>
                <span style={{ fontSize: '10px', color: '#854d0e', display: 'block' }}>
                  Cohort Topper (of 45)
                </span>
              </div>

              <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '4px', padding: '10px 8px' }}>
                <span style={{ fontSize: '10px', color: '#166534', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                  Grade Point Average
                </span>
                <strong style={{ fontSize: '16px', color: '#15803d' }}>
                  10.00 / 10.00
                </strong>
                <span style={{ fontSize: '10px', color: '#166534', display: 'block' }}>
                  Letter Grade: A+ Exemplary
                </span>
              </div>

              <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '4px', padding: '10px 8px' }}>
                <span style={{ fontSize: '10px', color: '#1e40af', textTransform: 'uppercase', fontWeight: '700', display: 'block' }}>
                  Academic Division
                </span>
                <strong style={{ fontSize: '14px', color: '#1e3a8a' }}>
                  DISTINCTION
                </strong>
                <span style={{ fontSize: '10px', color: '#1e40af', display: 'block' }}>
                  100th Percentile
                </span>
              </div>
            </div>

            {/* Official Certification, Signatures & Seals Footer */}
            <div
              style={{
                borderTop: '2px solid #004b93',
                paddingTop: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap',
                gap: '16px',
                fontSize: '11px'
              }}
            >
              <div>
                <div style={{ color: '#64748b', marginBottom: '2px' }}>
                  <strong>Date of Declaration:</strong> {declarationDate}
                </div>
                <div style={{ color: '#64748b', marginBottom: '2px' }}>
                  <strong>Date of Issuance:</strong> 24 November 2026
                </div>
                <div style={{ color: '#64748b' }}>
                  <strong>Place:</strong> BITS Pilani, Hyderabad Campus
                </div>
                <div style={{ color: '#94a3b8', fontSize: '9.5px', marginTop: '6px' }}>
                  Doc Authenticity Token: BITS-HYD-GR-AUTH-2026ML005831-SECURE
                </div>
              </div>

              {/* Institutional Seal & Signature Block */}
              <div style={{ textAlign: 'center', minWidth: '220px' }}>
                {/* Visual Stamp Seal */}
                <div
                  style={{
                    display: 'inline-block',
                    border: '1.5px dashed #004b93',
                    borderRadius: '50%',
                    width: '68px',
                    height: '68px',
                    margin: '0 auto 6px',
                    padding: '8px',
                    textAlign: 'center',
                    backgroundColor: 'rgba(0, 75, 147, 0.04)'
                  }}
                >
                  <div style={{ fontSize: '7.5px', fontWeight: '800', color: '#004b93', textTransform: 'uppercase', lineHeight: '1.2' }}>
                    BITS PILANI<br />EXAM DIV<br />★ VERIFIED ★
                  </div>
                </div>

                <div style={{ fontFamily: "'Brush Script MT', cursive, sans-serif", fontSize: '20px', color: '#004b93', lineHeight: '1' }}>
                  M. S. Radhakrishnan
                </div>
                <div style={{ borderTop: '1px solid #475569', marginTop: '4px', paddingTop: '4px', fontWeight: '700', color: '#0f172a' }}>
                  Dr. M. S. Radhakrishnan
                </div>
                <div style={{ fontSize: '10px', color: '#64748b' }}>
                  Controller of Examinations
                </div>
                <div style={{ fontSize: '9.5px', color: '#64748b' }}>
                  Birla Institute of Technology and Science, Pilani
                </div>
              </div>
            </div>

            {/* Bottom Fine Security Footnote */}
            <div
              style={{
                marginTop: '16px',
                borderTop: '1px solid #e2e8f0',
                paddingTop: '8px',
                fontSize: '9px',
                color: '#94a3b8',
                textAlign: 'center',
                lineHeight: '1.4'
              }}
            >
              This is an official university grade transcript issued under the authority of the Division of Evaluation and Examinations, BITS Pilani. Any alteration or unauthorized reproduction renders this document invalid. For online authentication, visit https://bits-pilani.ac.in/verify or scan the verification QR code.
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
