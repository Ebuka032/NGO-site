import React from "react";
import "./Involve.css";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const Involve = () => {
  return (
    <div>
      <section className="hero">
      <div className="navbar">
        <div className="logo">
          <img src="logo.png" alt="CFHI Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="/">HOME</a></li>
          <li><a href="/about">ABOUT US</a></li>
          <li><a href="/features">FEATURES PAGE</a></li>
          <li><a href="/involve">GET INVOLVED</a></li>
          <li><a href="/contact">CONTACT US</a></li>
        </ul>
    
      </div>

      <div className="hero-content">
        <h1>
          AT CFHI, WE ARE DEDICATED TO IMPROVING THE LIVING <br/>STANDING OF ALL HUMANS IN EVERY WAY WE CAN.
        </h1>
      </div>
    </section>



      <section className="volunteer-section">
      <div className="container">
        {/* Left: Image */}
        <div className="image-container">
          <img src="volunteers.jpg" alt="Volunteers" className="volunteer-image" />
        </div>

        {/* Right: Content */}
        <div className="content">
          <h2>Join Our Team of Volunteers Today.</h2>
          <p>
            Teamwork makes the dream work! Join hands with other volunteers to
            achieve a better and healthier society today.
          </p>
          <p>
            Or you can bring a smile today through the art of charity by supporting
            urgent causes with your donation.
          </p>

          {/* Buttons */}
          <div className="buttons">
            <button className="apply-btn">APPLY HERE ▼</button>
            <button className="donate-btn">DONATE NOW</button>
          </div>
        </div>
      </div>
    </section>

      <section class="impact-section">
    <h2>Donate to Make an Impact</h2>
    <div class="impact-container">
        <div class="impact-card">
            {/* <img src="women-empowerment.jpg" alt="Women Empowerment Project"> */}
            <img src="" alt="" />
            <h3>Women Empowerment Project</h3>
            <p>A total of 50 Women have been empowered through the CFHI Empowerment Project, where they are making a living-hood and also making life better in their environment.</p>
        </div>
        <div class="impact-card">
            {/* <img src="finding-hope.jpg" alt="Finding Hope, One Meal at a Time">/ */}
            <img src="" alt="" />
            <h3>Finding Hope, One Meal at a Time</h3>
            <p>Finding hope, one meal at a time food campaign was incorporated into the Organization scheme to combat hunger and poverty against children and families.</p>
        </div>
        <div class="impact-card">
            {/* <img src="kick-out-polio.jpg" alt="Kick Out Polio in Babies INC"> */}
            <img src="" alt="" />
            <h3>Kick Out Polio in Babies INC.</h3>
            <p>Polio sickness is common in Babies and Children over the past years, we have successfully cared for more than 350 babies and children in preventing polio and other health-related issues.</p>
        </div>
        <div class="impact-card">
            {/* <img src="education-legacy.jpg" alt="Education is the Best Legacy"> */}
            <img src="" alt="" />
            <h3>Education is the Best Legacy</h3>
            <p>All children deserve quality and better education to further enhance their performances and knowledge in life. This has been done through the support of donors and sponsors.</p>
        </div>
    </div>
</section>

      
      <section className="support-section">
      <div className="support-content">
        <img src="children-support.jpg" alt="Children in need" className="support-image" />
        <div className="support-text">
          <h2>
            Let make these Children Smile again With your Support & Donations
          </h2>
          <p>
            You want to make some smile today with your art of charity by
            supporting our urgent cause with your donation.
          </p>
          <div className="support-buttons">
            <button className="read-more">READ MORE</button>
            <button className="donate-now">DONATE NOW</button>
          </div>
        </div>
      </div>
    </section>
    <section className="donation-section">
      <h2>SUPPORT US AND CHANGE THE <br /> COUSE OF A PERSON’S <br/>LIFE TODAY!</h2>
      <button className="donate-button">DONATE NOW</button>
    </section>
      {/* <footer>
        <div className="footer-logo">
          <img src="logo.png" alt="CFHI Logo" />
          <h3>CENTRE FOR FAMILY HEALTH INITIATIVE (CFHI)</h3>
          <p>...promoting health, protecting well-being</p>
        </div>

        <div className="footer-contacts">
          <h4>Our Contacts</h4>
          <p>8, Excellence & Friends Street, Dawaki, Abuja (FCT) Nigeria</p>
          <p>
            Excellence House, Plot 5001, Commercial Action Area, New Owerri, Imo
            State Nigeria.
          </p>
        </div>

        <div className="footer-mobile">
          <h4>Mobile:</h4>
          <p>+234 809 608 3359,
         <br /> +234 809 608 3336</p>
        </div>

        <div className="footer-social">
          <h4>Follow us:</h4>
          <a >
            <FaFacebook />
          </a>
          <a >
            <FaTwitter />
          </a>
          <a >
            <FaInstagram />
          </a>
          <a >
            <FaEnvelope />
          </a>
        </div>
      </footer> */}
    </div>
  );
};

export default Involve;
