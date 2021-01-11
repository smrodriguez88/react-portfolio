import React from "react";
import { Row, Col, Container } from 'react-bootstrap';

function AboutMe(){

  return (
    <div class="container-md">
    <div class="row">
        <div class="col-md-12 border mx-auto mt-5 p-4 bg-light">
            <div class="row">
                <div class="col-md-12 p-2 mb-5 text-center">
                    <h2>Portfolio</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 portfolio-display mx-auto p-5 mb-5 border border-secondary rounded">
                    <a href="https://smrodriguez88.github.io/WatchIt/" target="_blank" alt="WatchIt Application Screenshot"><img
                            src="images/project1-screenshot.png" width="100%" height="auto%" max-width="500px"/></a>
                        <h5 class="p-2">WatchIt</h5>
                        <div class="p-2">
                            <a href="https://github.com/smrodriguez88/WatchIt" target="_blank"><button class="rounded btn btn-success">GitHub</button></a>
                            <a  href="https://smrodriguez88.github.io/WatchIt/" target="_blank"><button class="rounded btn btn-success">Deployed Page</button></a>
                        </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 portfolio-display mx-auto p-5 mb-5 border border-secondary rounded">
                    <a href="https://salty-hamlet-73070.herokuapp.com" target="_blank" alt="Parks n Req Application Screenshot"><img
                            src="images/project2-screenshot.png" width="100%" height="auto%" max-width="500px"/></a>
                        <h5 class="p-2">Parks n Req</h5>
                        <div class="p-2">
                            <a href="https://github.com/smrodriguez88/Parks_n_Req" target="_blank"><button class="rounded btn btn-success">GitHub</button></a>
                            <a  href="https://salty-hamlet-73070.herokuapp.com" target="_blank"><button class="rounded btn btn-success">Deployed Page</button></a>
                        </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 portfolio-display mx-auto p-5 mb-5 border border-secondary rounded">
                    <a href="https://protected-hamlet-58022.herokuapp.com/" target="_blank" alt="Buger Me Application Screenshot"><img
                            src="images/project3-screenshot.png" width="100%" height="auto%" max-width="500px"/></a>
                        <h5 class="p-2">Burger Me</h5>
                        <div class="p-2">
                            <a href="https://github.com/smrodriguez88/13-burger-logger" target="_blank"><button class="rounded btn btn-success">GitHub</button></a>
                            <a  href="https://protected-hamlet-58022.herokuapp.com/" target="_blank"><button class="rounded btn btn-success">Deployed Page</button></a>
                        </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 portfolio-display mx-auto p-5 mb-5 border border-secondary rounded">
                    <a href="https://smrodriguez88.github.io/19-User-Directory/" target="_blank" alt="User Directory Application Screenshot"><img
                            src="images/project4-screenshot.png" width="100%" height="auto%" max-width="500px" /></a>
                        <h5 class="p-2">User Directory</h5>
                        <div class="p-2">
                            <a href="https://github.com/smrodriguez88/19-User-Directory" target="_blank"><button class="rounded btn btn-success">GitHub</button></a>
                            <a  href="https://smrodriguez88.github.io/19-User-Directory/" target="_blank"><button class="rounded btn btn-success">Deployed Page</button></a>
                        </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default AboutMe;
