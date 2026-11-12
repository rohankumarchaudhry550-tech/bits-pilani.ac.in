import React from 'react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#fff', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '72px', color: 'var(--primary-dark)', marginBottom: '10px' }}>404</h1>
      <h2 style={{ fontSize: '24px', color: 'var(--text-gray)', marginBottom: '20px' }}>Page Under Construction</h2>
      <p style={{ maxWidth: '500px', margin: '0 auto 30px', color: 'var(--text-gray)' }}>
        This page from the BITS Pilani website clone is currently a placeholder. Most main navigation features (Home, Admissions, Academics, Research, Campuses) are fully operational.
      </p>
      <Link to="/" style={{ padding: '12px 25px', backgroundColor: 'var(--secondary-blue)', color: '#fff', borderRadius: '4px', fontWeight: '600', display: 'inline-block', alignSelf: 'center' }}>
        Back to University Home
      </Link>
    </div>
  );
}
