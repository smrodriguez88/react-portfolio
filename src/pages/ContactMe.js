import React from "react";
import { Row, Col, Container } from 'react-bootstrap';

function ContactMe(){

  return (
    <Container className="container-md">
        <Row>
            <div className="col-md-5 border mx-auto mt-5 p-4 bg-light">
                <Row>
                    <Col className="col-md-12 p-2 text-center">
                        <h2>Let's Connect!</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-md-12 p-2 text-center mt-4">
                        <ul className="list-group list-group-flush pr-4">
                            <li className="list-group-item"><span className="mr-2">[ Phone ]</span><a href="tel:720-421-3355">720.421.3355</a></li>
                            <li className="list-group-item"><span className="mr-2">[ Email ]</span><a href="mailto:smrodriguez88@gmail.com">smrodriguez88@gmail.com</a></li>
                            <li className="list-group-item"><span className="mr-2"></span><a href="files/Resume-Steven-Rodriguez.pdf" target="_blank">Resume</a></li>
                            <li className="list-group-item"><i className="mr-2"></i><a href="https://github.com/smrodriguez88" target="_blank">GitHub</a></li>
                            <li className="list-group-item"><i className="mr-2"></i><a href="https://www.linkedin.com/in/steven-rodriguez-1a418784/" target="_blank">LinkedIn</a></li>                    
                        </ul>
                    </Col>
                </Row>
            </div>
        </Row>
    </Container>
  );
};

export default ContactMe;
