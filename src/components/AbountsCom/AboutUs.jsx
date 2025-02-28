import React from 'react';
import "../../pages/About/about.css";

const AboutSections = () => {
  return (
    <div className='aboutUsMainContainer'>
        <section className='ourApproach'>
            <div className='greenBox'> <h1>OUR APPROACH</h1> </div>
            <div className='blackBox'>
              <article><h1>OUR MISSION</h1></article>
              <section>
                <p>To developa safeand accommadation society for all, through</p>
                <p>community driven and family centered-health intervention social-</p>
                <p>economy empowerment, and reshearch-base policy development</p>
              </section>
            </div>
            <div className='darkGreen'>
            <article><h1>OUR VISSION</h1></article>
            <section><p>Healthy Family, Healthy Society</p></section>
            </div>

            <nav className='ourPhiDiv'>
              <div className='topnav'>
                <section><p>Our Philosopy</p></section>
                <section>Our Focus</section>
                <section>Core Value</section>
              </div>
              <div className='downnav'>
                <article>
                    <p>CFHI Belive That:</p>
                    <p>The Family is bedrock of every society</p>
                    <p>Healthy families breed healthy societies;</p>
                    <p>A state of Family well-being devoid of illness/ </p>
                    <p>discuss and attianable, families</p>
                    <p>can reengineer a value oriented society</p>
                    <p>irrespective of the environment.</p>
                    <p>Empowering families with knowledge and</p>
                    <p>skills will migate porvate and susstain</p>
                </article>
                <article style={{textAlign:"center"}}>
                <p>CFHI Belive That:</p>
                    <p>1. Community Health Education and Advocacy</p>
                    <p>2. Social and Economical Empowerment</p>
                    <p>3. Specific Disease Area Intervation (such as</p>
                    <p>for HIV/AIDS, Maleria, Diarrheal)</p>
                    <p>4. Orphanage and Vulnerable Children Services</p>
                    <p>5. Maternal Neonatal and Child Health</p>
                    <p>6. Chid Protection Services</p>
                    <p>Sexual and Repoductive Health</p>
                    <p>7. Youth and Adolesence Health</p>
                </article>
                <article style={{textAlign:"end", justifyContent:"space-between", flexDirection:"column"}}>
                <div style={{width:"100%", height:"40%", display:'flex', flexDirection:"column", gap:"15px"}}>
                <p>CFHI Belive That:</p>
                    <p>The Family is bedrock of every society</p>
                    <p>which we Hold in high esteem,</p>
                    <p>and are reflections of day-to-day </p>
                    <p>charater and attitude</p>
                </div>
               

                    <div style={{width:"100%", height:"20%", display:'flex', flexDirection:"column", gap:"15px", }}>
                    <p>can reengineer a value oriented society</p>
                    <p>irrespective of the environment.</p>
                    <p>Empowering families with knowledge and</p>
                    </div>
                </article>
              </div>
            </nav>
        </section>
        <article className='ourApproachConntinue'>
            <div className='lastUp'></div>
            <div className="partners-section">
        <h2>MEET OUR PARTNERS</h2>
        <div className="partners-logos">
          {/* <img src="path-to-image1.jpg" alt="Partner 1" />
          <img src="path-to-image2.jpg" alt="Partner 2" />
          <img src="path-to-image3.jpg" alt="Partner 3" />
          <img src="path-to-image4.jpg" alt="Partner 4" />
          <img src="path-to-image5.jpg" alt="Partner 5" />
          <img src="path-to-image6.jpg" alt="Partner 6" />
          <img src="path-to-image7.jpg" alt="Partner 7" />
          <img src="path-to-image8.jpg" alt="Partner 8" /> */}
        </div>
      </div>
        </article>
    </div>
  );
};

export default AboutSections;
