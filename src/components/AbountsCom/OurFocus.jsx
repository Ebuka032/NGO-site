import React from "react";
import "../../Style/About.css";
import { FirstDescription, SecondDescription } from "./TextArea";

const OurFocus = () => {
  return (
    <div className="OurFocusMain">
      <section>
        <nav>
          <div className="focusImage">
            <div className="blackBackroud"></div>
          </div>
          <div className="focusText">
            <div className="greenBar">
              <h1>Our Focus</h1>
            </div>
            <SecondDescription />
            <FirstDescription />
          </div>
        </nav>
      </section>
    </div>
  );
};

export default OurFocus;
