import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material'; // Import Button from Material-UI
import './App.css';
import about from "./about.png";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      setActiveSection(getActiveSection());
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHover = (e) => {
    e.target.style.backgroundColor = '#555';
  };

  const handleLeave = (e) => {
    e.target.style.backgroundColor = '';
  };

  const sectionColors = {
    home: 'blue',
    about: 'gold', 
    services: 'red', 
    contact: 'green', 
  };

  const handleSetActiveSection = (id) => {
    setActiveSection(id);
  };

  const getActiveSection = () => {
    const home = document.getElementById('home').offsetTop;
    const about = document.getElementById('about').offsetTop;
    const services = document.getElementById('services').offsetTop;
    const contact = document.getElementById('contact').offsetTop;
    const scrollPosition = window.scrollY + 200;

    if (scrollPosition < about) return 'home';
    if (scrollPosition >= about && scrollPosition < services) return 'about';
    if (scrollPosition >= services && scrollPosition < contact) return 'services';
    return 'contact';
  };

  return (
    <div className={`App ${scrolled ? 'scrolled' : ''}`}>
      <nav id="navbar" style={{ backgroundColor: sectionColors[activeSection] }}>
        <ul>
          <li>
            <a href="#home" onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={() => handleSetActiveSection('home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={() => handleSetActiveSection('about')}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={() => handleSetActiveSection('services')}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" onMouseEnter={handleHover} onMouseLeave={handleLeave} onClick={() => handleSetActiveSection('contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      
      <div className="content">
        <div id="home" className="section">
          <p>"Welcome to Shopiee <br/>Where Every Purchase is a Delight!"</p>
          <Button variant="contained" style={{ backgroundColor: "blue" }}>Shop Now</Button> {/* Add Shop Now button */}
        </div>

        <div id="about" className="section">
          <div className="about-container">
            <div className="about-image">
              <img src={about} alt="About" />
            </div>
            <div className="about-content">
              <h2>About Us</h2>
              <p>Shopiee is your ultimate destination for online shopping. We offer a curated selection of high-quality products across various categories, including fashion, beauty, home decor, and electronics. With competitive prices, fast shipping, and excellent customer service, we're committed to providing you with a seamless shopping experience. Thank you for choosing Shopiee. Happy shopping!</p>
            </div>
          </div>
        </div>

        <div id="services" className="section">
          <center>
            <h2>Our Services</h2>
          </center>
          <div className='section1'>
            <div className="service-item">
              <h3>Product Photography</h3>
              <p>Showcase your products with professional photography.</p>
              <p>Our product photography service includes:</p>
              <ul>
                <li>High-resolution images that highlight your products' features.</li>
                <li>Multiple angles and close-ups for a detailed view.</li>
                <li>Editing and retouching to enhance the visual appeal.</li>
                <li>Customized packages to suit your budget and needs.</li>
              </ul>
              <p>Let your products shine with stunning photography that captures the attention of your customers.</p>
            </div>
            <div className="service-item">
              <h3>SEO Optimization</h3>
              <p>Improve your website's visibility on search engines.</p>
              <p>Our SEO optimization service includes:</p>
              <ul>
                <li>Keyword research to target relevant search terms.</li>
                <li>Optimization of meta tags, headings, and content for better rankings.</li>
                <li>Link building and content marketing strategies to drive organic traffic.</li>
                <li>Regular monitoring and reporting to track performance.</li>
              </ul>
              <p>Boost your online presence and attract more customers with effective SEO strategies.</p>
            </div>
            {/* Add more services as needed */}
          </div>
        </div>

        <div id="contact" className="section">
          <center>
            <h2>Contact Us</h2>
          </center>
          <div className='section1'>
          <div className="contact-info">
            <p>If you have any questions or feedback, feel free to get in touch with us:</p>
            <ul>
              <li><strong>Email:</strong> info@shopiee.com</li>
              <li><strong>Phone:</strong> +1 123-456-7890</li>
              <li><strong>Address:</strong> 123 Main Street, City, Country</li>
            </ul>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
