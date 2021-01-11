import React from "react";
import { Row, Col, Container } from 'react-bootstrap';

function AboutMe(){

  return (
    <Container>
      <Row>
        <div className="col-md-9 border mx-auto mt-5 p-4 bg-light">
          <Row>
            <div className="col-md-12 p-2 text-center">
              <h2>About Me</h2>
            </div>
          </Row>
          <img id="about-me-img" width="250" alt="Steve Rodriguez" src='images/Professional-Profile-Pic.png' />
          <p>
            Welcome to my page. My name is Steve Rodriguez and I've been interested in all things technology since I could read and write.
            My passion for technology has steered me in many directions and has introduced me to many pet projects and opportunities to learn. Technology
            had seemed like this big ominous thing, but a big thank you to the internet for having all of the answers to my questions and allowing
            me to grow. Unfortunately, too many things to research leaves me scatter brained at times and a large backlog of projects about interesting topics.
          </p>
          <p>
            I started a webhosting company in 2006 knowing absolutely nothing about managing Linux servers, armed with a Virtual Private Server loaded with CentOS
            and CPanel I was able to get a shared hosting server online. Many long days and nights followed learning to troubleshoot problems on an operating system
            I've never touched in my life. Luckily there was a large support system for CentOS and cPanel which just required some digging to get the answers I needed
            to keep my business online and afloat. Eventually growing to six shared hosting servers, a TeamSpeak server, and a game server, along with a few clients
            also leasing dedicated hardware from me through my datacenter partner. Fast forward three years, a large DDoS attack hit all of my IP space and kept my servers
            offline for a solid week. When everything came online I lost half of my customer base and just didn't have the funds to recover. I sold my shared hosting customers
            to Bluehost and exited the low profit margin business of a Webhost.
          </p>
          <p>
            It wasn't a total loss though, with my new-found skillset I was able to obtain a position as a Network Operations Center engineer for a datacenter. This re-lit my passion
            for technology once more as I now had a new career tract to aspire to, Systems Engineering. After two years of working in a NOC and spending my spare time setting up
            a lab environment in my home I was able to get my feet wet with the popular technologies my work was offering managed services for. I documented the duties of a NOC engineer
            and provided them to management as training material for new hires and got noticed. Shortly after I was promoted to a Tier 2 Technical Support Engineer (Systems Administrator) for
            our managed services department. While performing Systems Administrator work it became painfully apparent that I had no real clue how the networking side of the business worked.
            This led me to expand my lab environment further and pick up some old but still relevant Cisco switches and routers off of eBay and take my passion up another level.
          </p>
          <p>
            As a Tier 2 technical support engineer we were the only staff on 24/7, the Engineers work stopped at 5pm. This left many opportunities to cover for the Network Engineers
            and solve problems before they even showed up to work. Slowly I began teaching myself the CCNA (Cisco Certified Network Associate) track at night while I was working. As 
            I learned more I started picking tickets up from the Network Engineering queue and working them. This caught the attention of the Network Engineering manager and my management.
            I showed I could do more, so they gave me more. A position was made for me Tier 2 Technical Support Analyst (Systems & Network Administrator). Being exposed to a datacenter
            environment allows you to troubleshoot hundreds of different environments and is an amazing experience, but eventually I got bored and the company changed hands so I could not
            make opportunities for myself like I once could. I left and moved to Austin to become a Systems/Network Engineer for a small AdTech company.   
          </p>
          <p>
            While at this AD Tech firm I had gotten a firm grasp of my duties fairly quickly and had noticed I was doing a lot of repetitive tasks for the Systems Engineering side that I 
            didn't want to do anymore. They were simple enough so I figured this might be a good opportunity to pick up a programming language. I started teaching myself Python to automate
            the mundane tasks of systems engineering. This impressed my bosses and was once again promoted shortly after that to Sr. Systems/Network Engineer. I won't continue to bore you
            with this story as I'm getting bored talking about myself, just needed to offer some background in the self-starter that is me.... EXCEPT when it comes to front-end web development. 
            I started doing HTML and CSS in 2007 and ever since it's left a bad taste in my mouth and a bias against it so I decided to do myself a favor and enroll in a more structured course 
            to force myself to go down this rabbit hole that I haven't been traditionally as fond of, learning is much easier when you're interested in the topic, but I'm glad I have as it has 
            evolved A LOT since I've tried this last and this is turning out to be a very fun experience!
          </p>
        </div>
      </Row>
  </Container>
  );
};

export default AboutMe;
