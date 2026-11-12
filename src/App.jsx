import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FeedbackWidget from './components/FeedbackWidget';
import Home from './pages/Home';
import CampusDetail from './pages/CampusDetail';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import Research from './pages/Research';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      {/* Global Header */}
      <Header />

      {/* Main Content Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campus/:id" element={<CampusDetail />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/research" element={<Research />} />
        <Route path="/studentlogin" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/student-login" element={<Login />} />
        <Route path="/portal" element={<Login />} />
        <Route path="/student" element={<Login />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/* Floating interactive feedback */}
      <FeedbackWidget />

      {/* Global Footer */}
      <Footer />
    </>
  );
}

export default App;
