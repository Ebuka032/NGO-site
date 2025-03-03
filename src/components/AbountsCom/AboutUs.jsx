import React from 'react';
import "../../pages/About/about.css";

const AboutUs = () => {
  return (
    <div className='aboutUsMainContainer'>
  <div className='greenBox'> <h1>OUR APPROACH</h1> </div>
  <div className='blackBox'>
              <article><h2>OUR MISSION</h2></article>
              <section>
                <span>To developa safeand accommadation society for all, through</span>
                <span>community driven and family centered-health intervention social-</span>
                <span>economy empowerment, and reshearch-base policy development</span>
              </section>
            </div>
            <div className='darkGreen'>
            <article><h4>OUR VISSION</h4></article>
            <section><span>Healthy Family, Healthy Society</span></section>
            </div>

            <nav className='ourPhiDiv'>
            <div className='topnav'>
                <section>Our Philosopy</section>
                <section>Our Focus</section>
                <section>Core Value</section>
              </div>
              <div className='downnav'>
                <article style={{display:"flex", flexDirection:"column", fontSize:"20px"}}>
                <span><b>CFHI Belive That:</b></span>
                    <span><b>The Family is bedrock of every society</b></span>
                    <span><b>Healthy families breed healthy societies;</b></span>
                    <span><b>A state of Family well-being devoid of illness</b></span>
                    <span><b>discuss and attianable, families</b></span>
                    <span><b>can reengineer a value oriented society</b></span>
                    <span><b>irrespective of the environment.</b></span>
                    {/* <span><b>Empowering families with knowledge and</b></span> */}
                </article>
                <article style={{textAlign:"center", display:"flex", flexDirection:"column", fontSize:"20px", justifyContent:"stretch"}}>
                <span><b>CFHI Belive That:</b></span>
                    <span><b>1. Community Health Education and Advocacy</b></span>
                    <span><b>2. Social and Economical Empowerment</b></span>
                    <span><b>3. Specific Disease Area Intervation (such as</b></span>
                    <span><b>for HIV/AIDS, Maleria, Diarrheal)</b></span>
                    <span><b>4. Orphanage and Vulnerable Children Services</b></span>
                </article>
                <section>
                <div style={{width:"100%", height:"40%", display:'flex', flexDirection:"column", gap:"20px", fontFamily: "Montserrat, serif", fontSize:"20px", textAlign:"end"}}>
                <span><b>CFHI Belive That:</b></span>
                    <span><b>The Family is bedrock of every society</b></span>
                    <span><b>which we Hold in high esteem,</b></span>
                    <span><b>and are reflections of day-to-day</b></span>
                    <span><b>charater and attitude</b></span>
                </div>
                    {/* <div style={{width:"100%", height:"40%", display:'flex', flexDirection:"column", gap:"15px", fontFamily: "Montserrat, serif", fontSize:"20px", textAlign:"end"}}>
                    <span><b>can reengineer a value oriented society</b></span>
                    </div> */}
                </section>
              </div>
            </nav>
    </div>
  );
};

export default AboutUs;
