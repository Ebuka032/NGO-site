import React from "react";
import { useNavigate } from "react-router-dom";
import { SiVisa } from "react-icons/si";
import "./Donate.css";

const Donate = () => {
  const navigate = useNavigate();

  return (
    <div className="donateBody">
      <div className="donateHeader"></div>

      <div className="donateMoney">
        <h1>MONEY DONATE</h1>
      </div>

      <div className="donateDesc">
        <div className="descRiption">
          <p>
            CHFI with your generous support, recently donated food items to over
            50 households, provided scholarships for 2 students,
            <br />
            <br />
            educational materials to over 10 students, donated over 600 books to
            2 schools, provided medical support in 2 communities and
            <br />
            <br />
            donated 50 packs of reusable microbial sanitary pads.
            <br />
            <br />
            <br />
            <br />
            To support CFHI to distribute relief materials to children in
            orphanages and impoverished communities across Nigeria, please
            <br />
            <br />
            call 08095271645 or send an email to info@cfhinitiative.org and make
            your contributions to;
          </p>
        </div>

        <div className="descImage">
          <img src="" alt="" />
        </div>
      </div>

      <div className="donatePay">
        <div className="paymentPlatform">
          <div className="visaPay">
            <h2>1. Online Donations</h2>
            <p>You can make donations through any of these options</p>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgc9xW_t712-TgFMwJxWxmgiKfTiPjrazjjg&s"
                alt="image"
              />
              <SiVisa size={40} />
              <img
                src="https://cdn.pixabay.com/photo/2018/05/08/21/29/paypal-3384015_1280.png"
                alt=""
              />
            </div>
            <button onClick={() => navigate("/donate-form")}>DONATE NOW</button>
          </div>

          <div className="visaPay">
            <h2>2. Local Bank Transfer</h2>
            <p>ACCOUNT NAME:</p>
            <br />
            <p>Centre for Family Health Initiative</p>
            <p>
              BANK: Fidelity Bank
              <br />
              ACCOUNT NUMBER: 5620062190
              <br />
              SWIFT CODE: FIDTNGLA
            </p>
          </div>

          <div className="visaPay">
            <h2>3. Cheque</h2>
            <h5> Write a Cheque "ACCOUNT NAME"</h5>
            <p>Centre for Family Health Initiative</p>
            <p>
              BANK: Fidelity Bank
              <br />
              ACCOUNT NUMBER: 5620062190
            </p>
          </div>
        </div>
      </div>

      <div className="partnersDiv">
        <div className="partnersLink">
          <div className="meetDiv">
            <h1>
              MEET OUR
              <br />
              PARTNERS
            </h1>
          </div>
          <div className="sponsorDiv">
            <div className="sponsorDiv1">
              <div className="sponsorImg"></div>
              <div className="sponsorImg"></div>
              <div className="sponsorImg"></div>
              <div className="sponsorImg"></div>
            </div>

            <div className="sponsorDiv2">
              <div className="sponsorImg1"></div>
              <div className="sponsorImg1"></div>
              <div className="sponsorImg1"></div>
              <div className="sponsorImg1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
