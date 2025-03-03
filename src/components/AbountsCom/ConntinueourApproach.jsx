import React from 'react'
import TY from "../../assets/Images/TY.jpg";
import PACF from "../../assets/Images/PACF.jpg";
import CCSI from "../../assets/Images/CCSI.jpg";
import CCFN from "../../assets/Images/CCFN.png";
import PEPFAR from "../../assets/Images/PEFAR.png"
import UNICEF from "../../assets/Images/UNICEF.jpg"
import GPI from "../../assets/Images/GPI.png"
import UN from "../../assets/Images/UN.jpg"

const ConntinueourApproach = () => {
  return (
    <div className='ConntinueourApproach'>
        <nav className='ourPhiDiv'>
              <div className='downnav'>
                <article style={{display:"flex", flexDirection:"column", fontSize:"20px"}}>
                <span><b>Empowering families with knowledge and</b></span>
                    <span><b>skills will migate porvate and susstain</b></span>
                    <span><b>economic growth and productivity</b></span>
                    <span><b>CFHI Belive that together, we can achieve it</b></span>
                    <span><b>discuss and attianable, families</b></span>
                    <span><b>yes we can!</b></span>
                    {/* <span><b>Empowering families with knowledge and</b></span> */}
                </article>
                <article style={{textAlign:"center", display:"flex", flexDirection:"column", fontSize:"20px", justifyContent:"stretch"}}>
                <span><b>5. Material Neonatal and child health</b></span>
                    <span><b>6. Child protection and services</b></span>
                    <span><b> Sexual and Reproductive Health</b></span>
                    <span><b>&. Youtjh Adolenscent and Health</b></span>
                </article>
                <section>
                <div style={{width:"100%", height:"40%", display:'flex', flexDirection:"column", gap:"20px", fontFamily: "Montserrat, serif", fontSize:"20px", textAlign:"end"}}>
                <span><b></b></span>
                    <span><b>Love and Empathy</b></span>
                    <span><b>Professionalisim, culture</b></span>
                    <span><b>Inclusion, community-driven</b></span>
                    <span><b>Intervention, Integrety, Family</b></span>
                    <span><b>Canteredness, Reverence to God</b></span>
                </div>
                </section>
              </div>
            </nav>
            <section className="partners-section">
      <div className="partners-container">
        <div className="partners-text"><h1>MEET OUR <br />PARTNERS</h1></div>
        <div className="partners-logos">
        <section className='partnersLogosTop'>
          <div><img src={CCFN} alt=""  style={{width:"100%", height:"100%"}}/></div>
          <div><img src={CCSI} alt=""  style={{width:"100%", height:"100%"}}/></div>
          <div><img src={TY} alt=""  style={{width:"100%", height:"100%"}}/></div>
          <div><img src={PACF} alt=""  style={{width:"100%", height:"100%"}}/></div>

        </section>
        <section className='partnersLogosDown'>
        <div><img src={PEPFAR} alt=""  style={{width:"100%", height:"100%"}}/></div>
        <div><img src={UNICEF} alt=""  style={{width:"100%", height:"100%"}}/></div>
        <div><img src={GPI} alt=""  style={{width:"100%", height:"100%"}}/></div>
        <div><img src={UN} alt=""  style={{width:"100%", height:"100%"}}/></div>
        </section>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ConntinueourApproach