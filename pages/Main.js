import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Main() {
  return (
    <main className="main-layout">
      <section className="contact-info">
        <div className="contact-info-group">
          <div className="contact-info-row">
            <FontAwesomeIcon icon={faPhone} className="contact-info-icon" />
            <div>
              <address>813-421-2341</address>
            </div>
          </div>
          <div className="contact-info-row">
            <FontAwesomeIcon icon={faEnvelope} className="contact-info-icon" />
            <div>
              <address>kdlgates@kdlgates.com</address>
            </div>
          </div>
          <div className="contact-info-row">
            <FontAwesomeIcon icon={faGlobe} className="contact-info-icon" />
            <div>
              <address>
                <a href="https://www.kdlgates.com">kdlgates.com</a>
              </address>
            </div>
          </div>
          <div className="contact-info-row">
            <FontAwesomeIcon icon={faGithub} className="contact-info-icon" />
            <div>
              <address>
                <a href="https://github.com/kdlgates">github.com/kdlgates</a>
              </address>
            </div>
          </div>
          <div className="contact-info-row">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="contact-info-icon"
            />
            <div>
              <address>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/5211+Oak+Charter+Ct,+Tampa,+FL+33617/"
                  rel="noreferrer"
                >
                  5211 Oak Charter Ct.,
                  <br />
                  Temple Terrace, FL, 33617
                </a>
              </address>
            </div>
          </div>
          <div id="download-button-container">
            <a href="./downloads/Kristopher-Gates-Resume.pdf" download>
              <button id="downloadbutton">Download Resume PDF</button>
            </a>
          </div>
        </div>
        <div className="skills-info-row nohover">
          <div className="list__skills">
            <p>
              <strong>Skills</strong>
            </p>
            <ul>
              <li>Python</li>
              <li>C & C++, Java</li>
              <li>JavaScript, React</li>
              <li>HTML & CSS</li>
              <li>Git & GitHub</li>
              <li>Windows, Linux, Bash/Shell</li>
              {/* <li>Servers & Virtual Machines</li> */}
              <li>Postgres / PostgreSQL</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="main-content">
        <div>
          <div className="flexcontainer">
            <div className="heading__aboutme">
              <span className="heading__category">About Me</span>
            </div>
            <div className="main-text">
              A lifelong technologist and lover of Computer Science, at last
              working hard on breaking into development. My current focus is on
              improving my web literacy via the MERN stack, and fostering my
              design and coding fluency to fill my gaps for practical software
              development and providing real value.
            </div>
          </div>
        </div>
        <div>
          <div className="flexcontainer">
            <div className="heading__relevantprojects">
              <span className="heading__category">Relevant Projects</span>
            </div>
            <div>
              <div className="flexcontaine flexcolr">
                <div className="body__experience">
                  <div className="flexcontainer spacebetween">
                    <span className="heading__experience">
                      Hopfield Network at USF Biorobotics Lab
                    </span>
                    <time>Summer - Fall 2017</time>
                  </div>
                  <div className="main-text">
                    Learned some fundamental principles of neural networks by
                    developing a membrane potential function for simulating
                    neurons in a custom language (Neural Simulation Language) to
                    model biologically inspired behavior. Modelled a Hopfield
                    Network for a basic Optical Character Recognition task
                    (memorizing and recalling letters). Worked as part of a team
                    with a graduate mentor for program credit to help guide me
                    as a beginner in the field.
                  </div>
                </div>
                <div className="body__experience">
                  <div className="flexcontainer spacebetween">
                    <span className="heading__experience">
                      Statistical Tracking and Planning
                    </span>
                    <time>Jan. 2010 - Oct. 2012</time>
                  </div>
                  <div className="main-text">
                    Created monthly reports and visualizations as a part of my
                    help desk employment, tracking the history of laptop
                    replacements for a Fortune 500 company, also used in
                    forecasting to maintain a support contract.
                  </div>
                </div>
                <div className="body__experience">
                  <div className="flexcontainer spacebetween">
                    <span className="heading__experience">
                      Expense Report Development
                    </span>
                    <time>Apr. - Jun. 2011</time>
                  </div>
                  <div className="main-text">
                    Participated on a client driven project which developed and
                    deployed an additional module to facilitate the expense
                    reports and approvals of 1,100 salespeople and their
                    managers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flexcontainer">
            <div>
              <span className="heading__category">Education</span>
            </div>
            <div>
              <div className="flexcontainer spacebetween">
                <span className="heading__experience">
                  B.S. in Computer Science, University of South Florida
                </span>
                <time>2014-2017</time>
              </div>
              <p>
                <em>summa cum laude</em> (GPA 3.91) School is something I took
                quite seriously. I loved the academics and feel spoiled and
                grateful for the opportunity. CS is a lovely field and Automata
                / Theory of Computation was my favorite elective.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
