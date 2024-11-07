import React from "react";
import { Navbar } from "./components/Navbar";
import { Title } from "./components/Title";
import { Cover } from "./components/Cover";
import { Experience } from "./components/Experience";
import { MouseEffect } from "./components/MouseEffect";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";

import "./css/app.css";

function App() {
  return (
    <div
      id="main"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/banner-bg.png)`,
        backgroundSize: '100% auto', 
        backgroundPosition: 'top center',
      }}
    >
      <Navbar />
      <div className="container">
        <Title />
        <img
          src={`${process.env.PUBLIC_URL}/Gradient.png`}
          alt="/Gradient"
          className="background-experience-image"
          style={{ width: "625px", height: "700px" }}
          id="blink"
        />
        <Cover />
        <Experience />
        <Skill/>
        <Project/>
      </div>
      <MouseEffect/>
    </div>
  );
}

export default App;
