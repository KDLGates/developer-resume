import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Main() {
    return (
        <main className="main-layout">
            <section className="contact-info">
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
                        <address><a href="https://www.kdlgates.com">kdlgates.com</a></address>
                    </div>
                </div>
                <div className="contact-info-row">
                    <FontAwesomeIcon icon={faGithub} className="contact-info-icon" />
                    <div>
                        <address><a href="https://github.com/kdlgates">github.com/kdlgates</a></address>
                    </div>
                </div>
                <div className="contact-info-row">
                    <FontAwesomeIcon icon={faLocationDot} className="contact-info-icon" />
                    <div>
                        <address><a href="https://www.google.com/maps/place/5211+Oak+Charter+Ct,+Tampa,+FL+33617/">5211 Oak Charter Ct.,<br />Temple Terrace, FL, 33617</a></address>
                    </div>
                </div>
                <div className="contact-info-row">
                    <div>
                        <p><strong>Skills</strong></p>
                        <ul>
                            <li>Python</li>
                            <li>C & C++, Java</li>
                            <li>JavaScript, React</li>
                            <li>HTML & CSS</li>
                            <li>Git & GitHub</li>
                            <li>Linux, Bash/Shell</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="main-content">
                <div>
                    <div className="flexcontainer">                        
                        <div>
                            <h2>About Me</h2>
                        </div>
                        <div>
                            A lifelong technologist and lover of Computer Science, at last working hard on breaking into development.
                            My current focus is on improving my web literacy via the MERN stack, and
                            fostering my design and coding fluency to fill my gaps for practical software development
                            and providing real value.
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flexcontainer">
                        <div>
                            <h2>Relevant Projects</h2>
                        </div>
                        <div>
                            <div className="flexcontainer spaceapart">
                                <h3>Hopfield Network at USF Biorobotics Lab</h3>
                                <time>Summer - Fall 2017</time>
                            </div>
                            <p>
                                Learned some fundamental principles of neural networks by developing a membrane potential function for simulating
                                neurons in a custom language (Neural Simulation Language) to model biologically inspired behavior. Modelled a
                                Hopfield Network for a basic Optical Character Recognition task (memorizing and recalling letters). Worked as part
                                of a team with a graduate mentor for program credit to help guide me as a beginner in the field.
                            </p>
                                <div className="flexcontainer spaceapart">
                                    <h3>Statistical Tracking and Planning</h3>
                                    <time>Jan. 2010 - Oct. 2012</time>
                                </div>
                            <p>
                                Created monthly reports and visualizations as a part of my help desk employment, tracking the history of laptop replacements
                                for a Fortune 500 company, also used in forecasting to maintain a support contract.
                            </p>
                            <div className="flexcontainer spaceapart">
                                <h3>Expense Report Development</h3>
                                <time>Apr. - Jun. 2011</time>
                            </div>
                            <p>
                                Participated on a client driven project which developed and deployed an additional module to facilitate the expense reports
                                and approvals of 1,100 salespeople and their managers.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flexcontainer">
                        <div>
                            <h2>Education</h2>
                        </div>
                        <h3>B.S. in Computer Science</h3>
                        <time>2014-2017</time>
                        <p>
                            <em>summa cum laude</em> (GPA 3.91) School is something I took quite seriously. I loved the academics and feel spoiled and grateful
                            for the opportunity. CS is a lovely field and Automata / Theory of Computation was my favorite elective.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}

