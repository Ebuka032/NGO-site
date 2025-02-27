import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./donateform.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

const Donateform = () => {
    const navigate = useNavigate();

    return (
        <div className="formBody">
            <div className="donateimgPart">
                <div className="iconHub">
                    <IoIosCloseCircleOutline 
                        size={40} 
                        className="closeIcon" 
                        onClick={() => navigate("/")} 
                    />
                </div>

                <div className="giveOnce">
                    <h4>HOME</h4>
                    <div className="donaButton">
                        <button className="giveButton">GIVE ONCE</button>
                        <button className="giveButton">MONTHLY</button>
                    </div>
                </div>

                <div className="fillForm">
                    <div className="cornerHub">
                        <h1>CHFI ONLINE DONATION</h1>
                        <p className="propFinace">
                            Your financial commitment in attaining a
                            <br />
                            healthy and better society.
                        </p>
                        <button className="giveButton">Learn More</button>
                    </div>

                    <div className="formDonation">
                        <p>First Name</p>
                        <input type="text" placeholder="Esther" />
                        <br />
                        <p>Last Name</p>
                        <input type="text" placeholder="Victoria" />
                        <br />
                        <p>Email</p>
                        <input type="text" placeholder="esthyvibes@yahoo.inc" />
                        <br />
                        <p>Amount</p>
                        <input type="text" placeholder="N50,000" />
                        <br />
                        <button className="donaTon">DONATE ONCE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donateform;
