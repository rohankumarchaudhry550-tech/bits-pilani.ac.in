import React from 'react';

export default function NewsMarquee() {
  const newsItems = [
    { title: 'Faculty Recruitment: Professor of Practice (POP)', date: '15 July, 2026', campus: 'Pilani' },
    { title: 'Convocation 2026, BITS Pilani details announced', date: '22 June, 2026', campus: 'Pilani' },
    { title: 'BITS Pilani ranked #1 in three categories by THE WEEK–Hansa Survey 2026', date: '18 May, 2026', campus: 'National' },
    { title: 'PhD Position Announcement (Dual Degree Program – India & USA)', date: '12 April, 2026', campus: 'University' },
    { title: 'Visiting Summer Research Internship (ViSRI) registrations open', date: '05 March, 2026', campus: 'All Campuses' },
    { title: 'Join BITS Pilani as a Professor of Practice in key disciplines', date: '20 February, 2026', campus: 'Pilani/Goa/Hyd' },
    { title: 'Springer Nature and BITS Pilani signed a Memorandum of Understanding', date: '15 January, 2026', campus: 'University' }
  ];

  // Double the list to make seamless scrolling marquee
  const trackItems = [...newsItems, ...newsItems];

  return (
    <div className="marquee_container">
      <div className="marquee_title">LATEST UPDATES</div>
      <div className="marquee_track">
        {trackItems.map((item, idx) => (
          <div key={idx} className="marquee_item">
            <h4>{item.title}</h4>
            <p>{item.date} | {item.campus}</p>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold', marginLeft: '20px' }}>•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
