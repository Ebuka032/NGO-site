import React from "react";
import "./Involve.css";
// import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { LuHeartOff } from "react-icons/lu";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { FaHandsHoldingChild } from "react-icons/fa6";
import { useNavigate } from "react-router";
const Involve = () => {
  const navigate = useNavigate();
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
              <div className="goalImg">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6THDeZ_tZ4W3Wj0-JyKHfXxeNmThMzCKiQ&s" alt="" />
              </div>
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
            <img src="data:image/jpeg;base64,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" alt="Happy children smiling" />
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
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6THDeZ_tZ4W3Wj0-JyKHfXxeNmThMzCKiQ&s" alt="UHC 2030 Event" />
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6THDeZ_tZ4W3Wj0-JyKHfXxeNmThMzCKiQ&s"
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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6THDeZ_tZ4W3Wj0-JyKHfXxeNmThMzCKiQ&s" alt="" />
            <h3>Women Empowerment Project</h3>
            <p>
              A total of 50 Women have been empowered through the CFHI
              Empowerment Project, where they are making a living-hood and also
              making life better in their environment.
            </p>
          </div>
          <div class="impact-card">
            {/* <img src="finding-hope.jpg" alt="Finding Hope, One Meal at a Time">/ */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6THDeZ_tZ4W3Wj0-JyKHfXxeNmThMzCKiQ&s" alt="" />
            <h3>Finding Hope, One Meal at a Time</h3>
            <p>
              Finding hope, one meal at a time food campaign was incorporated
              into the Organization scheme to combat hunger and poverty against
              children and families.
            </p>
          </div>
          <div class="impact-card">
            {/* <img src="kick-out-polio.jpg" alt="Kick Out Polio in Babies INC"> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6THDeZ_tZ4W3Wj0-JyKHfXxeNmThMzCKiQ&s" alt="" />
            <h3>Kick Out Polio in Babies INC.</h3>
            <p>
              Polio sickness is common in Babies and Children over the past
              years, we have successfully cared for more than 350 babies and
              children in preventing polio and other health-related issues.
            </p>
          </div>
          <div class="impact-card">
            {/* <img src="education-legacy.jpg" alt="Education is the Best Legacy"> */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6THDeZ_tZ4W3Wj0-JyKHfXxeNmThMzCKiQ&s" alt="" />
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc6THDeZ_tZ4W3Wj0-JyKHfXxeNmThMzCKiQ&s"
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
        <button className="donate-button" onClick={()=>navigate("/donate")}>DONATE NOW</button>
      </section>
    
    </div>
  );
};

export default Involve;