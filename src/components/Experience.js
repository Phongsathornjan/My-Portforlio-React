import React from "react";
import "../css/experience.css";

export const Experience = () => {
  return (
    <div id="experience">
      <h1 id="text-hover">Work Experience</h1>
      <div className="d-flex mt-5" style={{ width: "1150px" }}>
        <div id="overlay">
          <div id="card-experience" style={{width: "700px",height:"192",display:'flex'}}>
            <img src={`${process.env.PUBLIC_URL}/ub.png`} alt="Me" style={{width:'100px',height:'100px',marginRight: '50px',marginTop:'20px',marginLeft:'20px'}}/>
            <div>
                <p>Internship 2 month</p>
                <span style={{fontSize: '18px'}}>Internship as a front-end developer</span>
                <p style={{fontSize: '18px'}}>at University of burgundy, France</p>
                <button className="btn btn-outline-secondary text-white">More Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
