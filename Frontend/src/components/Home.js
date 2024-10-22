import React from 'react';
import { FaUserPlus, FaList, FaHeart, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className='hero'>
        <h1>Connect with Alumni, Unlock Your Future!</h1>
        <h4>
          Building a bridge between students and alumni, empowering you with insights and opportunities.
        </h4>
        <div className='box'>
          Discover a wealth of knowledge and job opportunities from alumni who have walked the same path. Get answers to your placement questions and academic queries while networking with industry professionals.
        </div>
      </section>

      {/* How It Works Section */}
      <section className='howItWorks'>
        <h3>How CampusConnect Works?</h3>
        <div className='container'>
          <div className='card'>
            <div className='icon'>
              <FaUserPlus />
            </div>
            <h4>Create an Account</h4>
            <p>Join CampusConnect to tap into a network of alumni and gain insights into job opportunities, placement processes, and academic guidance. Signing up is quick and easy!</p>
          </div>

          <div className='card'>
            <div className='icon'>
              <FaList />
            </div>
            <h4>Connect with Alumni</h4>
            <p>Reach out to alumni who can share their experiences and advice. Whether it's about job applications or academic challenges, find mentors ready to help.</p>
          </div>

          <div className='card'>
            <div className='icon'>
              <FaHeart />
            </div>
            <h4>Achieve Your Goals</h4>
            <p>Receive personalized guidance and support. Our alumni network is here to help you navigate your career path and academic inquiries successfully.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className='footer-content'>
          <div>
            <img src="/image.png" alt="CampusConnect Logo" className='footer-logo' />
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Pune, Maharashtra, India</li>
              <li>support@campusconnect.com</li>
              <li>+91 9378451260</li>
            </ul>
          </div>

          <div>
            <h4>Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/jobs">Jobs</a></li>
              <li><a href="/dashboard">Profile</a></li>
            </ul>
          </div>

          <div>
            <h4>Follow Us</h4>
            <ul className='social-links'>
              <li><a href="https://twitter.com"><FaTwitter /> Twitter</a></li>
              <li><a href="https://instagram.com"><FaInstagram /> Instagram</a></li>
              <li><a href="https://youtube.com"><FaYoutube /> YouTube</a></li>
              <li><a href="https://linkedin.com"><FaLinkedin /> LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
