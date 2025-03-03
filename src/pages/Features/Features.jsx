import React from "react";
import { useNavigate } from "react-router";
import "./feature.css"
import TY from "../../assets/Images/TY.jpg";
import PACF from "../../assets/Images/PACF.jpg";
import CCSI from "../../assets/Images/CCSI.jpg";
import CCFN from "../../assets/Images/CCFN.png";
import PEPFAR from "../../assets/Images/PEFAR.png"
import UNICEF from "../../assets/Images/UNICEF.jpg"
import GPI from "../../assets/Images/GPI.png"
import UN from "../../assets/Images/UN.jpg"


const Features = () => {
  const navigate = useNavigate();
  return (
    <div className="featurewrapper">
      <div className="featureimagewrapper">
        <div className="featureimagetext">
          <h1 className="imagetext">
            MAKE A CHILD SMILE TODAY,LITTLE THINGS MATTERS.
          </h1>
          <button className="featuredonatebtn" onClick={()=> navigate("/donate")}>DONATE NOW</button>
        </div>
      </div>
        <div className="featureShadowCover"></div>  

        
      <div className="featureneedspage">  

        <div className="imageAndTextLayers">
            <div className="imageHolder1"></div>
          <div className="layerTextWrapper">
            <div className="textLayerHeading">
              <h1>I can now Cater for My Basic Needs hand Also Support My Siblings.</h1>
              </div>
              <p>Murijanatu Abdullahi is a sixteen year old out of school adolescent who was 
                supported by CFHI to acquire skills in fashion design. Upon graduation, she
                 was provided with a sewing machine.</p>

                 <p>One year down the line, she now has many customers who patronises her. Now Murijanatu 
                  can now cater for her basic needs and also support her siblings.  There are many Murijanatu
                   out there that needs support, but due to resource 
                  limitation, CFHI can only reach out to limited numbers within available resources
                </p>
          </div>
        </div>


        <div className="imageAndTextLayers">
          <div className="layerTextWrapper">
            <div className="textLayerHeading">
              <h1>35 Babies Got Free Immunization Through Our NGO.</h1>
              </div>
              <p>.On October 11th, to commemorate the International Day of the Girl Child, CFHI 
                organized a special visit to Junior Secondary School, Kabusa. The event brought 
                together over 50 students and teachers, engaging them in a lively atmosphere of 
                debates and drama presentations..</p>
          </div>
          <div className="imageHolder2"></div>
        </div>


        <div className="imageAndTextLayers">
        <div className="imageHolder3"></div>
          <div className="layerTextWrapper">
            <div className="textLayerHeading">
              <h1>Survival and WellnessAll Thanks to CFHI</h1>
              </div>
              <p>Murijanatu Abdullahi is a sixteen year old out of school adolescent who was 
                supported by CFHI to acquire skills in fashion design. Upon graduation, she
                 was provided with a sewing machine.</p>

                 <p>One year down the line, she now has many customers who patronises her. Now Murijanatu 
                  can now cater for her basic needs and also support her siblings.  There are many Murijanatu
                   out there that needs support, but due to resource 
                  limitation, CFHI can only reach out to limited numbers within available resources
                </p>
          </div>
        </div>
        

            <div className="imageAndTextLayers">
              <div className="layerTextWrapper">
                <div className="textLayerHeading">
                  <h1>Survival and WellnessAll Thanks to CFHI</h1>
                  </div>
                  <p>Murijanatu Abdullahi is a sixteen year old out of school adolescent who was 
                    supported by CFHI to acquire skills in fashion design. Upon graduation, she
                    was provided with a sewing machine.</p>

                    <p>One year down the line, she now has many customers who patronises her. Now Murijanatu 
                      can now cater for her basic needs and also support her siblings.  There are many Murijanatu
                      out there that needs support, but due to resource 
                      limitation, CFHI can only reach out to limited numbers within available resources
                    </p>
              </div>
              <div className="imageHolder4"></div>
            </div>



            <div className="imageAndTextLayers">
              <div className="imageHolder5"></div>
              <div className="layerTextWrapper">
                <div className="textLayerHeading">
                  <h1>Survival and WellnessAll Thanks to CFHI</h1>
                  </div>
                  <p>Murijanatu Abdullahi is a sixteen year old out of school adolescent who was 
                    supported by CFHI to acquire skills in fashion design. Upon graduation, she
                    was provided with a sewing machine.</p>

                    <p>One year down the line, she now has many customers who patronises her. Now Murijanatu 
                      can now cater for her basic needs and also support her siblings.  There are many Murijanatu
                      out there that needs support, but due to resource 
                      limitation, CFHI can only reach out to limited numbers within available resources
                    </p>
              </div>
            </div>



            <div className="imageAndTextLayers">
              <div className="layerTextWrapper">
                <div className="textLayerHeading">
                  <h1>Survival and WellnessAll Thanks to CFHI</h1>
                  </div>
                  <p>Murijanatu Abdullahi is a sixteen year old out of school adolescent who was 
                    supported by CFHI to acquire skills in fashion design. Upon graduation, she
                    was provided with a sewing machine.</p>

                    <p>One year down the line, she now has many customers who patronises her. Now Murijanatu 
                      can now cater for her basic needs and also support her siblings.  There are many Murijanatu
                      out there that needs support, but due to resource 
                      limitation, CFHI can only reach out to limited numbers within available resources
                    </p>
              </div>
              <div className="imageHolder6"></div>
            
            </div>
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


              <div className='donation-sectionMain'>
        <section className="donation-section">
        <h2>
          SUPPORT US AND CHANGE THE <br /> COUSE OF A PERSON’S <br />
          LIFE TODAY!
        </h2>
        <button className="donateButton" onClick={()=>navigate("/donate")}>DONATE NOW</button>
      </section>
    </div>


      </div>
    </div>
  );
};

export default Features;
