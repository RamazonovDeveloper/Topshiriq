import React from "react";
import credit from "../images/credit.svg";
import right from "../images/Frame.png";

const Start = () => {
  return (
    <div className="container">
      <div className="start">
        <div className="left">
          <h2>Transform your teamwork with a powerful design tool</h2>
          <p>
            Stop wasting time with clunky, siloed teamwork. Get every
            stakeholder on the same page with a design tool that help you work
            better, faster.
          </p>
          <div>
            <button>Start your free trial</button>
            <img src={credit} alt="" />
          </div>
        </div>
        <div className="right">
          <img src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Start;
