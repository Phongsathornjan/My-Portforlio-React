import React from "react";
import '../css/title.css'

import { MdOutlineEmail } from "react-icons/md";
const ResumeLocation = '/files/Resume.pdf';
const TranscriptLocation = '/files/Transcript.pdf';

const handleOnClickResume = () => {
  const newWindow = window.open(ResumeLocation, '_blank');
  if (newWindow) {
    newWindow.document.title = 'Resume'; 
  }
};

const handleOnClickTranscript = () => {
  const newWindow = window.open(TranscriptLocation, '_blank');
  if (newWindow) {
    newWindow.document.title = 'Transcript'; 
  }
};

export const Title = () => {
  return (
    <div className="mt-5">
      <div className="d-flex">
        <div className="image-container">
          <img src={`${process.env.PUBLIC_URL}/Arrow.png`} alt="Arrow" className="Arrow-overlay" style={{width:'91px',height:'81px'}} id="text-animation"/>
          <img src={`${process.env.PUBLIC_URL}/Gradient.png`} alt="/Gradient" className="background-image"  style={{width:'385px',height:'431px'}} id="blink"/>
          <img src={`${process.env.PUBLIC_URL}/Me.png`} alt="Me" className="overlay-image" style={{width:'259px',height:'259px'}} id="scale-up"/>
        </div>
        <div className="mt-4 ms-5">
          <div id="text-animation">Hello! I am Phongsathorn</div>
          <div className="ms-2 mt-5">
            <h2 id="text-hover">I'm a Engineer Student who interested in programming. </h2>
            <p id="text-hover"> Currently, Study in KMUTNB university in Thailand. </p>
            <p id="text-hover" style={{fontSize:'18px',marginRight: '20px'}}><MdOutlineEmail/> Email : Phongsathornjanjamsai@gmail.com</p>
            <div className="d-flex">
              <button className="btn btn-outline-danger text-white" onClick={handleOnClickResume}>Resume</button>
              <button className="btn btn-outline-primary text-white ms-4" onClick={handleOnClickTranscript}>Transcript</button>

              <a href="https://github.com/Phongsathornjan" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://seeklogo.com/images/G/github-icon-logo-E5FF767098-seeklogo.com.png" 
                  style={{ width: '45px', height: '42px' }} 
                  className="ms-4" 
                  id="icon-hover" 
                  alt="GitHub icon"
                />
              </a>

              <a href="https://www.facebook.com/profile.php?id=100007374097910" target="_blank" rel="noopener noreferrer">
                <img 
                  src={`${process.env.PUBLIC_URL}/icons/facebook-icon.png`} 
                  style={{ width: '45px', height: '42px', marginLeft: '20px' }} 
                  id="icon-hover" 
                  alt="Facebook icon"
                />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
