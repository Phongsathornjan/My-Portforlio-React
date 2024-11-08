import React from "react";
import { Navbar } from "./components/Navbar";
import { Title } from "./components/Title";
import { Cover } from "./components/Cover";
import { Experience } from "./components/Experience";
import { MouseEffect } from "./components/MouseEffect";
import { Skill } from "./components/Skill";
import { Project } from "./components/Project";

import TrackVisibility from "react-on-screen";

import "./css/app.css";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div
      id="main"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/banner-bg.png)`,
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
      }}
    >
      <MouseEffect />
      <Navbar />
      <div className="container">
        <TrackVisibility partialVisibility={true}>
          {({ isVisible }) => (
            <div className={`fadeIn ${isVisible ? "visible" : ""}`}>
              <Title />
            </div>
          )}
        </TrackVisibility>

        <TrackVisibility partialVisibility={true}>
          {({ isVisible }) => (
            <div className={`fadeIn ${isVisible ? "visible" : ""}`}>
              <Cover />
            </div>
          )}
        </TrackVisibility>

        <TrackVisibility partialVisibility={true}>
          {({ isVisible }) => (
            <div className={`fadeIn ${isVisible ? "visible" : ""}`}>
              <Experience />
            </div>
          )}
        </TrackVisibility>

        <TrackVisibility partialVisibility={true}>
          {({ isVisible }) => (
            <div className={`fadeIn ${isVisible ? "visible" : ""}`}>
              <Skill />
            </div>
          )}
        </TrackVisibility>
        <Project />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
