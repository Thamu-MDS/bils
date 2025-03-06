// src/components/Footer.jsx
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Row 1: Company Name & Social Media Icons */}
      <div className="footer-row">
        <div className="footer-column">
          <ul className="company-name">
            
          <li>   
          <div className="logocont">
               <div className="logoimg">
                      <img src="src/assets/img/footerlogo.png" alt="Image description" />
                  </div>
                <div className="logohead">
               <a>Blissful Occasions</a>
                   </div>
           </div>
             
              </li> 
            </ul>
            <br />
          <div>Together, We Embrace Joyful Moments and Craft Blissful Memories</div>
          <h4><b>Follow us</b></h4>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/img/social 3.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="src/assets/img/social1.png" alt="Twitter" className="social-icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="  src/assets/img/social2.png" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Column 2: ON OUR SITE */}
        <div className="footer-column">
          <h2>ON OUR SITE</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: RESOURCES */}
        <div className="footer-column">
          <h2>RESOURCES</h2>
          <ul>
            <li><a href="/event-planning-guides">Event Planning Guides</a></li>
            <li><a href="/upcoming-events">Upcoming Events</a></li>
            <li><a href="/media-gallery">Media Gallery</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        {/* Column 4: CONTACT US */}
        <div className="footer-column">
          <h2>CONTACT US</h2>
          <ul>
          <li><a href="/event-planning-guides">33RD ST,GKM COLONY,CHENNAI,TAMILNADU</a></li>
            <li><a href="/upcoming-events">Upcoming Events</a></li>
            <li><a href="/media-gallery">Media Gallery</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
          <button className="contact-button">Get in Touch</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;