/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Jumbotron, Button, Col} from "react-bootstrap"


function HeroAppList() {
    function openTabGithub() {
        window.open('https://github.com/Rey-commits'); 
    }
    function openTabLinkedIn() {
        window.open('https://www.linkedin.com/in/reymondmesuga-421/'); 
    }
    function openTabFacebook() {
        window.open('https://www.facebook.com/reymond.mesugah/');
    }
    return (
        <div>
            <Jumbotron fluid className="hero"> 
                <div className="hero-container-AI">
                    <h1>Web App Development Projects</h1>
                    <h5>by Reymond Mesuga</h5>
                    <p>
                        These are the collections of projects in web app development that i have been doing on my spare time.
                    </p>
                    <Col className="hero-buttons-column">
                        <a onClick={openTabGithub}>
                            <Button className="individual-button" variant="outline-light"><i class="fab fa-github-square social-icon"></i> GitHub</Button>
                        </a>
                        <a onClick={openTabLinkedIn}>
                            <Button className="individual-button" variant="outline-light"><i class="fab fa-linkedin social-icon"></i> LinkedIn</Button>
                        </a>
                        <a onClick={openTabFacebook}>
                            <Button className="individual-button" variant="outline-light"><i class="fab fa-facebook-square social-icon"></i> Facebook</Button>
                        </a>
                    </Col>
                </div>
            </Jumbotron>
        </div>
    )
}

export default HeroAppList