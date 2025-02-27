
import "../Style/home.css";
import { FaArrowRight } from "react-icons/fa6";
import { LuHeartOff } from "react-icons/lu";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { FaHandsHoldingChild } from "react-icons/fa6";
import image from "../assets/Images/CCFN-Logo-pqgfylhlha6tbxavgcpy2hmrm4c3qdkq4vbswmqvfc.png";
import image2 from "../assets/Images/CCSI-LOGO-plduddd4ap8mshi7px8z8ligzg8x35jxjyc3bqwuc8.jpg";
import image3 from '../assets/Images/TY-DF-LOGO-plduddd4ap8mshi7px8z8ligzg8x35jxjyc3bqwuc8.jpg'
import image4 from '../assets/Images/PACF-LOGO-pldudcfa3v7cgvjkveuco3r0e2djvgg77tolugy8ig.jpg'
import image5 from '../assets/Images/PEPFAR-pqgfh1u1wm64lysdwronix10f6tg1rx3q0xieorfko.png'
import image6 from '../assets/Images/UNICEF-LOGO-pldudcfa3v7cgvjkveuco3r0e2djvgg77tolugy8ig.jpg'
import image7 from '../assets/Images/GPI-Logo-1-pqgfsyggh2gvo5hsdwyj3wv7aw4tjr6pcyex8v3wrc.png'
import image8 from '../assets/Images/UN-WOMEN-LOGO-plduddd4ap8mshi7px8z8ligzg8x35jxjyc3bqwuc8.jpg'

const Home = () => {
  return (
    <>
    {/* ghjhgfghjkjhgvhjklasdmdnk */}
      <div className="imgk">
        <p>
          MAKE A CHILD SMILE <br /> TODAY, LITTLE THINGS <br />
          MATTERS.
        </p>
        <button>DONATE NOW</button>
        <div className="blackBox"></div>
      </div>
      <div className="impactk">
        <div className="leftIm">
          <h3>OUR IMPACT</h3>
          <hr />
          <p>
            WHAT WE DID OVER THE <br />
            PAST YEARS FOR WOMEN <br />
            AND CHILDREN AROUND <br />
            THE COUNTRY.
          </p>
          <button>
            READ MORE{" "}
            <FaArrowRight
              style={{ position: "absolute", top: "8px", right: "5px" }}
            />
          </button>
        </div>
        <div className="rightIm">
          <div className="impact1"></div>
          <div className="impact2">i</div>
          <div className="impact3"></div>
          <div className="impact4"></div>
        </div>
      </div>


      <div className="chealth">
        <div className="button-tag">OUR FOCUS</div>
        <div className="partK">
          <div className="partK-img"></div>
          <p>
            Centre for Family Health Initiative (CFHI) is a non-political,
            non-religious, not-for-profit organization, committed to the
            promotion of health and protection of the well-being of families in
            Africa (CAC/IT/No. 49787). Driven by a vision of Healthy Families;
            Healthy Societies, CFHI’s mission is to develop a safe and
            accommodating society for all, through community driven and family
            centred health interventions, socio-economic empowerment, research
            and policy development. CFHI has a Special Consultative Status with
            United Nations (UN) Economic and Social Council (ECOSOC) and is
            registered with relevant ministries, departments and agencies of the
            Government of Nigeria.
          </p>
        </div>
        <div className="parts">
          <div className="partK-img"></div>
          <p>
            CFHI has worked across all geopolitical zones of Nigeria providing
            Community Health interventions, Community Activation/Health Services
            demand creation (for Maternal and Child Health, Family Planning,
            Child essential medicine, adolescent health interventions), Micro
            Social Enterprise Support, Socio-economic Empowerment for vulnerable
            children and households, Gender Equality and Women Empowerment,
            Water, Sanitation and Hygiene, Capacity Building for health care
            workers and Policy development, TB Case finding, community-based HIV
            Testing services, Menstrual Health Management, Health system
            strengthening, Monitoring, Evaluation, Research and Policy
            development.
          </p>
        </div>
      </div>

      <div className="partnmotto">
        <div className="partners">
          <p>
            MEET OUR <br />
            PARTNERS
          </p>{" "}
          <div className="partLogo">
            <div className="box">
              <img src={image} alt="" />
            </div>
            <div className="box">
              <img src={image2} alt="" />
            </div>
            <div className="box">
              <img src={image3} alt="" />
            </div>
            <div className="box">
              <img src={image4} alt="" />
            </div>
            <div className="box">
              <img src={image5} alt="" />
            </div>
            <div className="box">
            <img src={image6} alt="" />
            </div>
            <div className="box">
            <img src={image7} alt="" />
            </div>
            <div className="box">
            <img src={image8} alt="" />
            </div>
          </div>
        </div>
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
        <div className="lastPart">
          <p>
            SUPPORT US AND CHANGE THE
            <br /> COURSE OF A PERSON'S <br />
            LIFE TODAY!
          </p>
          <button>DONATE NOW</button>
        </div>
      </div>
    </>
  );
};

export default Home;
