import React from 'react';
import '../../Style/About.css';

const AboutSections = () => {
  return (
    <div className="aboutUsMainContainer">
      <section className="ourApproach">
        <div className="greenBox">
          <h1>OUR APPROACH</h1>
        </div>
        
        <div className="blackBox">
          <article>
            <h1>OUR MISSION</h1>
          </article>
          <section>
            <p>To develop a safe and accommodating society for all, through</p>
            <p>community-driven and family-centered health interventions,</p>
            <p>social-economic empowerment, and research-based policy development.</p>
          </section>
        </div>

        <div className="darkGreen">
          <article>
            <h1>OUR VISION</h1>
          </article>
          <section>
            <p>Healthy Family, Healthy Society</p>
          </section>
        </div>

        <nav className="ourPhiDiv">
          <div className="topnav">
            <section><p>Our Philosophy</p></section>
            <section><p>Our Focus</p></section>
            <section><p>Core Values</p></section>
          </div>

          <div className="downnav">
            <article>
              <p>CFHI Believes That:</p>
              <p>The Family is the bedrock of every society.</p>
              <p>Healthy families breed healthy societies.</p>
              <p>A state of family well-being, devoid of illness,</p>
              <p>is attainable.</p>
              <p>Families can reengineer a value-oriented society</p>
              <p>irrespective of the environment.</p>
              <p>Empowering families with knowledge and</p>
              <p>skills will mitigate poverty and sustain growth.</p>
            </article>

            <article style={{ textAlign: "center" }}>
              <p>CFHI Believes That:</p>
              <p>1. Community Health Education and Advocacy</p>
              <p>2. Social and Economic Empowerment</p>
              <p>3. Specific Disease Area Intervention (such as HIV/AIDS, Malaria, Diarrheal)</p>
              <p>4. Orphan and Vulnerable Children Services</p>
              <p>5. Maternal, Neonatal, and Child Health</p>
              <p>6. Child Protection Services</p>
              <p>7. Sexual and Reproductive Health</p>
              <p>8. Youth and Adolescent Health</p>
            </article>

            <article style={{ textAlign: "end" }}>
              <div className="belief-container">
                <p>CFHI Believes That:</p>
                <p>The Family is the bedrock of every society,</p>
                <p>which we hold in high esteem</p>
                <p>and reflects day-to-day character and attitude.</p>
              </div>

              <div className="belief-container">
                <p>Families can reengineer a value-oriented society</p>
                <p>irrespective of the environment.</p>
                <p>Empowering families with knowledge and skills</p>
                <p>will help sustain communities.</p>
              </div>
            </article>
          </div>
        </nav>
      </section>
      
    </div>
  );
};

export default AboutSections;
