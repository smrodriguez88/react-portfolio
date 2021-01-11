import React from "react";
import Project from '../components/Project';
import { Row, Container } from 'react-bootstrap';
import projects from '../projects.json';

function AboutMe(){

  return (
    <Container>
      <Row>
          <div className="col-md-12 border mx-auto mt-5 p-4 bg-light">
              <Row>
                  <div className="col-md-12 p-2 mb-5 text-center">
                      <h2>Portfolio</h2>
                  </div>
              </Row>      
                {projects.map((project, i) =>
                  <Project project={project} key={i}/>
                  )
                };
          </div>
      </Row>
    </Container>
  );
};

export default AboutMe;
