import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProgramFinder() {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCampus, setSelectedCampus] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  // Sample index of searchable terms mapped to routes/urls
  const searchIndex = [
    { name: 'BITSAT Admission Registration', path: 'https://www.bitsadmission.com/' },
    { name: 'Admissions and Programs', path: '/admissions' },
    { name: 'Integrated First Degree (BE/MSc)', path: '/academics' },
    { name: 'Higher Degree (ME/MPharm)', path: '/academics' },
    { name: 'PhD Research Positions', path: '/research' },
    { name: 'Computer Science Department', path: '/departments' },
    { name: 'Placements & Statistics', path: '/placements' },
    { name: 'Practice School (PS-I & PS-II)', path: 'https://www.bits-pilani.ac.in/practice-school/' },
    { name: 'Pilani Campus Overview', path: '/campus/pilani' },
    { name: 'Goa Campus Overview', path: '/campus/goa' },
    { name: 'Hyderabad Campus Overview', path: '/campus/hyderabad' },
    { name: 'Dubai Campus Overview', path: '/campus/dubai' }
  ];

  const filteredSuggestions = searchIndex.filter(item => 
    item.name.toLowerCase().includes(searchVal.toLowerCase())
  );

  const handleSuggestionClick = (path) => {
    if (path.startsWith('http')) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
    setSearchVal('');
    setShowSuggestions(false);
  };

  const handleFinderSubmit = (e) => {
    e.preventDefault();
    if (!selectedCampus || !selectedLevel) {
      alert('Please select both Campus and Academic Level.');
      return;
    }
    // Navigate to academics or custom portal
    navigate('/academics');
  };

  return (
    <section className="split_finder_section">
      <div className="container">
        <div className="split_finder_grid">
          
          {/* Left Column: What are you here for? */}
          <div className="finder_col left">
            <h2 className="finder_title">What are you here for?</h2>
            
            <div className="search_widget">
              <label className="search_label">I want to...</label>
              <div className="search_input_wrapper">
                <input 
                  type="text" 
                  className="search_input"
                  placeholder="e.g. BITSAT, computer science, admissions..."
                  value={searchVal}
                  onChange={(e) => {
                    setSearchVal(e.target.value);
                    setShowSuggestions(e.target.value.length > 0);
                  }}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  onFocus={() => setShowSuggestions(searchVal.length > 0)}
                />
                
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="autocomplete_dropdown">
                    {filteredSuggestions.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="autocomplete_item"
                        onMouseDown={() => handleSuggestionClick(item.path)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="quick_actions">
              <label className="search_label" style={{ fontSize: '13px', color: 'var(--text-gray)' }}>Quick Links:</label>
              <div className="quick_links_list">
                <a href="/academics">Know Courses Offered</a>
                <a href="https://www.bitsadmission.com/" target="_blank" rel="noopener noreferrer">Register for BITSAT</a>
                <a href="/faculty">Know About Faculty</a>
                <a href="/campus/pilani">See Campus Locations</a>
              </div>
            </div>
          </div>

          {/* Right Column: Find the right programme */}
          <div className="finder_col right">
            <h2 className="finder_title" style={{ color: '#ffffff' }}>Find the right programme</h2>
            
            <form className="finder_form" onSubmit={handleFinderSubmit}>
              <div className="form-group">
                <select 
                  value={selectedCampus}
                  onChange={(e) => setSelectedCampus(e.target.value)}
                  aria-label="Select Campus"
                >
                  <option value="">Select Campus</option>
                  <option value="pilani">Pilani Campus</option>
                  <option value="goa">K K Birla Goa Campus</option>
                  <option value="hyderabad">Hyderabad Campus</option>
                  <option value="dubai">Dubai Campus</option>
                  <option value="mumbai">Mumbai Campus</option>
                </select>
              </div>

              <div className="form-group">
                <select 
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  aria-label="Select Academics Level"
                >
                  <option value="">Select Academics</option>
                  <option value="first">Integrated First Degree (B.E. / M.Sc. / B.Pharm)</option>
                  <option value="higher">Higher Degree (M.E. / M.Pharm / MBA)</option>
                  <option value="phd">Doctoral Programmes (Ph.D.)</option>
                  <option value="wilp">Work Integrated Learning Programs (WILP)</option>
                </select>
              </div>

              <button type="submit">Search Programmes</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
