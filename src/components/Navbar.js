import React, { useEffect, useState } from "react";
import "../css/navbar.css";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOnClickAbout = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth' 
    });
  }

  const handleOnClickExperience = () => {
    window.scrollTo({
      top: 800, 
      behavior: 'smooth' 
    });
  }

  const handleOnClickSkill = () => {
    window.scrollTo({
      top: 1550, 
      behavior: 'smooth' 
    });
  }

  const handleOnClickProject = () => {
    window.scrollTo({
      top: 2350, 
      behavior: 'smooth' 
    });
  }


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // กำหนดเมื่อเลื่อนลงเกิน 50px
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="nav-bg"
      style={{
        backgroundColor: isScrolled
          ? "rgba(0, 0, 0, 0.5)" 
          : "rgba(0, 0, 0, 1)",
      }}
    >
      <div className="d-flex justify-content-evenly container" id="nav">
        <div id="text2-hover" onClick={handleOnClickAbout}>About</div>
        <div id="text2-hover" onClick={handleOnClickExperience}>Experience</div>
        <div id="text2-hover" onClick={handleOnClickSkill}>Skill</div>
        <div id="text2-hover" onClick={handleOnClickProject}>Project</div>
      </div>
    </div>
  );
}
