
import "./home.css";
import { FaArrowRight } from "react-icons/fa6";
import { LuHeartOff } from "react-icons/lu";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { FaHandsHoldingChild } from "react-icons/fa6";
import TY from "../../assets/Images/TY.jpg";
import PACF from "../../assets/Images/PACF.jpg";
import CCSI from "../../assets/Images/CCSI.jpg";
import CCFN from "../../assets/Images/CCFN.png";
import PEPFAR from "../../assets/Images/PEFAR.png"
import UNICEF from "../../assets/Images/UNICEF.jpg"
import GPI from "../../assets/Images/GPI.png"
import UN from "../../assets/Images/UN.jpg"
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
              <img src={CCFN} alt="" />
            </div>
            <div className="box">
              <img src={CCSI} alt="" />
            </div>
            <div className="box">
              <img src={TY} alt="" />
            </div>
            <div className="box">
              <img src={PACF} alt="" />
            </div>
            <div className="box">
              <img src={PEPFAR} alt="" />
            </div>
            <div className="box">
            <img src={UNICEF} alt="" />
            </div>
            <div className="box">
            <img src={GPI} alt="" />
            </div>
            <div className="box">
            <img src={UN} alt="" />
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
