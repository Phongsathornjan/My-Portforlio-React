import React from "react";
import { Carousel } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "../css/project.css";
export const Project = () => {
  const projects = [
    {
      title: "Tomato Leaf Classification.",
      description: `
      Deep learning classification using MATLAB to identify tomato diseases from leaf pictures, utilizing 8,000
        photos for training.
        The classification is divided into 5 categories: 1. Yellow Leaf Curl Virus 2.Early Blight
     3. Healthy 4. Late Blight 5. Leaf Mold
      `,
      imgUrl: `${process.env.PUBLIC_URL}/project/tomato1.png`,
      github: "#",
    },
    {
      title: "Vet Clinic Management Application",
      description: `
       This group project includes both a Windows app and a mobile app, with four roles: admin, doctor, manager,
       and member.\n
       I contributed as a programmer using Flutter and PHP API to query data from a MySQL database
      `,
      imgUrl: `${process.env.PUBLIC_URL}/project/vet.png`,
      github:
        "https://github.com/Phongsathornjan/vet-management-desktop-application",
      moreDetail: true,
    },
    {
      title:
        "Website Matching Resumes and Positions Using Gen Ai and Word Embedding (TF-IDF)",
      description: `
       A website designed for job posting and searching, built using React, Node.js (express), MongoDB,
       Generative AI (ChatGPT API), and Word Embedding (TF-IDF).\n
        Users upload their resumes, and the ChatGPT API extracts data to match the best related jobs using Word
      Embedding. \n
      The website can recommend relevant jobs and send notifications via email when new matching jobs are
      posted
      `,
      imgUrl: `${process.env.PUBLIC_URL}/project/web_resume.png`,
      github: "#",
    },
  ];

  return (
    <div className="project">
      <div>
        <div className="justify-content-center">
          <div>
            <TrackVisibility partialVisibility={true}>
              {({ isVisible }) => (
                <div className={`fadeIn ${isVisible ? "visible" : ""}`}>
                  <div>
                    <h2 id="text-hover">Projects</h2>
                    <p id="text-hover">
                      Some of my projects during my time in University
                    </p>
                  </div>
                </div>
              )}
            </TrackVisibility>
            <Carousel
              controls={true}
              indicators={false}
              interval={null}
              className="project-carousel mt-5"
              slide={true}
            >
              {projects.map((project, index) => (
                <Carousel.Item key={index}>
                  <div className="d-flex mb-5 justify-content-center">
                    <a href={project.github}>
                        <img
                          src={project.imgUrl}
                          style={{ height: "480px", borderRadius: "15px" }}
                          alt={index}
                          id="photo-hover"
                        />
                    </a>
                  </div>
                  <br />
                  <p>{project.title}</p>
                  <p>
                    {project.description.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};
