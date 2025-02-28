import React from "react";
import "./Involve.css";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { LuHeartOff } from "react-icons/lu";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { FaHandsHoldingChild } from "react-icons/fa6";

const Involve = () => {
  return (
    <div className="mainCont">
      <div className="firstCont">
        <div className="goalHolder">
          <div className="goal">
            <div className="leftG">
              <div className="leftInfo">
                <LuHeartOff size={70} style={{ color: "#9CF809" }} />
                <h4>
                  Become a Beneficiary <br />
                  Today
                </h4>
                <p>Facing Some Challanges?</p>
                <span>
                  READ MORE{" "}
                  <FaArrowRight
                    style={{ position: "absolute", top: "2px", right: "49%" }}
                  />
                </span>
              </div>
              <div className="leftInfo">
                <LiaHandHoldingHeartSolid
                  size={70}
                  style={{ color: "#9CF809" }}
                />
                <h4>
                  Become a Volunteer <br />
                  Today
                </h4>
                <p>
                  MORE PEOPLE <br /> MORE IMPACT
                </p>
                <span>
                  READ MORE{" "}
                  <FaArrowRight
                    style={{ position: "absolute", top: "2px", right: "49%" }}
                  />
                </span>
              </div>
              <div className="leftInfo">
                <FaHandsHoldingChild size={70} style={{ color: "#9CF809" }} />
                <h4>Become Our Donor</h4>
                <p>Give a helping Hand Today</p>
                <span>
                  READ MORE{" "}
                  <FaArrowRight
                    style={{ position: "absolute", top: "2px", right: "49%" }}
                  />
                </span>
              </div>
            </div>
            <div className="rightG">
              <h3>
                Together, <br />
                We Change Lives <br />
                for the Better.
                <p>HELP OUR URGENT CAUSE</p>
              </h3>
              <div className="goalImg"></div>
            </div>
          </div>
        </div>
      </div>
      <section className="urgent-cause">
        {/* Dark Overlay */}
        <div className="overlay">
          <h1>Urgent Cause</h1>
          <p>
            With support from individuals and corporate donors through the
            Centre for Family Health Initiative, we create sustainable means of
            cultivating, supporting lives, families, and the society at large
            for a healthy and better society within our selected communities.
          </p>

          {/* Stats Section */}
          <div className="stats-container">
            {/* Target */}
            <div className="stat-box target">
              <h2>TARGET</h2>
              <p>N25,000,000</p>
            </div>

            {/* Progress */}
            <div className="stat-box progress">
              <h2>35% DONE</h2>
              <p>DONATES</p>
            </div>

            {/* Collected */}
            <div className="stat-box collected">
              <h2>COLLECTED</h2>
              <p>N8,750,000</p>
            </div>
          </div>
        </div>
      </section>
      <section className="humanity-section">
        <div className="content-container">
          <div className="image-container">
            <img src="humanity.jpg" alt="Happy children smiling" />
          </div>
          <div className="text-container">
            <h1>We Are Here For The Good Of Humanity</h1>
            <p>
              A joy for one is joy for all, feel free to contact us if you are
              currently facing any challenges.
            </p>
            <p>
              Or you want to make someone smile today with your act of charity
              by supporting our urgent cause with your donation.
            </p>
            <div className="buttons">
              <button className="apply-btn">APPLY HERE ▼</button>
              <button className="donate-btn">DONATE NOW</button>
            </div>
          </div>
        </div>
        <h2 className="footer-text">
          Together we can Change
          <br /> Live For Better.
        </h2>
      </section>
      <section className="stats-section">
        <div className="image-container">
          <img src="uhc2030-event.jpg" alt="UHC 2030 Event" />
        </div>
        <div className="stats-container">
          <div className="stat-item">
            <h2>
              700+ <br />
              volunteers
            </h2>
          </div>
          <div className="stat-item">
            <h2>
              85+ <br />
              Urgent Causes
            </h2>
          </div>
          <div className="stat-item">
            <h2>
              45+ <br />
              Urgent Cause
              <br />
              Solved
            </h2>
          </div>
        </div>
      </section>
      <section className="volunteer-section">
        <div className="container">
          {/* Left: Image */}
          <div className="image-container">
            <img
              src="volunteers.jpg"
              alt="Volunteers"
              className="volunteer-image"
            />
          </div>

          {/* Right: Content */}
          <div className="content">
            <h2>Join Our Team of Volunteers Today.</h2>
            <p>
              Teamwork makes the dream work! Join hands with other volunteers to
              achieve a better and healthier society today.
            </p>
            <p>
              Or you can bring a smile today through the art of charity by
              supporting urgent causes with your donation.
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
            <p>
              A total of 50 Women have been empowered through the CFHI
              Empowerment Project, where they are making a living-hood and also
              making life better in their environment.
            </p>
          </div>
          <div class="impact-card">
            {/* <img src="finding-hope.jpg" alt="Finding Hope, One Meal at a Time">/ */}
            <img src="" alt="" />
            <h3>Finding Hope, One Meal at a Time</h3>
            <p>
              Finding hope, one meal at a time food campaign was incorporated
              into the Organization scheme to combat hunger and poverty against
              children and families.
            </p>
          </div>
          <div class="impact-card">
            {/* <img src="kick-out-polio.jpg" alt="Kick Out Polio in Babies INC"> */}
            <img src="" alt="" />
            <h3>Kick Out Polio in Babies INC.</h3>
            <p>
              Polio sickness is common in Babies and Children over the past
              years, we have successfully cared for more than 350 babies and
              children in preventing polio and other health-related issues.
            </p>
          </div>
          <div class="impact-card">
            {/* <img src="education-legacy.jpg" alt="Education is the Best Legacy"> */}
            <img src="" alt="" />
            <h3>Education is the Best Legacy</h3>
            <p>
              All children deserve quality and better education to further
              enhance their performances and knowledge in life. This has been
              done through the support of donors and sponsors.
            </p>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="support-content">
          <img
            src="children-support.jpg"
            alt="Children in need"
            className="support-image"
          />
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
        <h2>
          SUPPORT US AND CHANGE THE <br /> COUSE OF A PERSON’S <br />
          LIFE TODAY!
        </h2>
        <button className="donate-button">DONATE NOW</button>
      </section>
      <footer>
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
          <p>
            +234 809 608 3359,
            <br /> +234 809 608 3336
          </p>
        </div>

        <div className="footer-social">
          <h4>Follow us:</h4>
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaTwitter />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaEnvelope />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Involve;
