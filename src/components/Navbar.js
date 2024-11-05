import React, { useEffect, useState } from "react";
import "../css/navbar.css";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
          ? "rgba(26, 11, 46, 0.5)" // เปลี่ยนเป็นโปร่งใส 50% เมื่อเลื่อน
          : "rgba(26, 11, 46, 1)", // เริ่มต้นที่โปร่งใส 100%
      }}
    >
      <div className="d-flex justify-content-evenly container" id="nav">
        <div id="text2-hover">About</div>
        <div id="text2-hover">Experience</div>
        <div id="text2-hover">Skill</div>
        <div id="text2-hover">Project</div>
      </div>
    </div>
  );
}
