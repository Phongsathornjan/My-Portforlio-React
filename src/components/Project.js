import React from "react";
import { Carousel } from "react-bootstrap";
import '../css/project.css'
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
    },
    {
      title: "Flutter Coffee Shop App",
      description: "Design & Development",
      imgUrl: `${process.env.PUBLIC_URL}/ub.png`,
      url: "https://github.com/Slippy03/Project-Flutter-Clone-App",
    },
    {
      title: "RiceGuard",
      description: "Farmer Helper App Thesis",
      imgUrl: `${process.env.PUBLIC_URL}/ub.png`,
      url: "https://github.com/Slippy03/Project_2024",
    },
  ];

  return (
    <div className="project">
      <div>
        <div className="justify-content-center">
            <div>
              <h2 id="text-hover">Projects</h2>
              <p id="text-hover">Some of my projects during my time in University</p>

              <Carousel
                controls={true}
                indicators={false}
                interval={null}
                className="project-carousel mt-5"
                slide={true}
              >
                {projects.map((project, index) => (
                  <Carousel.Item key={index}>
                      <div className="d-flex mb-5">
                        <img src={project.imgUrl} style={{height: '400px',borderRadius: '15px',marginLeft: '200px'}} alt={index} id="text-hover"/>
                      </div>
                    <p>{project.title}</p>
                    <p>{project.description}</p>

                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
        </div>
      </div>
    </div>
  );
};
