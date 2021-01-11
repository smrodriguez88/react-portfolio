import React from "react";
import { Row, Col, Container } from 'react-bootstrap';

function Project(props) {
    return (
        <Container>
            <Row>
                <div className="col-md-8 portfolio-display mx-auto p-5 mb-5 border border-secondary rounded">
                    <a href={props.project.githubUrl} target="_blank" alt={`${props.project.projectName} Application Screenshot`}><img
                            src={props.project.imageUrl}  width="100%" height="auto%" max-width="500px"/></a>
                        <h3 className="p-2">{props.project.projectName} </h3>
                        <div className="p-2">
                            <b>{props.project.description}</b>
                        </div>
                        <div className="p-2">
                            <a href={props.project.githubUrl} target="_blank"><button className="rounded btn btn-success m-2">GitHub</button></a>
                            <a href={props.project.deployedUrl} target="_blank"><button className="rounded btn btn-success m-2">Deployed Page</button></a>
                        </div>
                </div>
            </Row>
        </Container>
    );
};

export default Project;