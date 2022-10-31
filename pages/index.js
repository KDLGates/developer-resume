import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>HTML &amp; CSS Resume Template</title>
      {/* Google font  */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&display=swap"
        rel="stylesheet"
      />
      {/* font-awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/* Custom CSS */}
      <link rel="stylesheet" href="style.css" />
      <main className="resume-contents">
        <section className="left-section">
          <div className="left-section-contents">
            <div className="profile">
              <img
                className="profile-image"
                src="https://i.imgur.com/DDlHkL0.jpg"
                alt="Kristopher Gates's Mugshot"
              />
              <p className="name">Kristopher Gates</p>
              <p className="profession">Aspiring Software Developer</p>
            </div>
            <div className="contact-info">
              <p className="left-title">Contact Info</p>
              <ul>
                <li>
                  <i className="fa fa-phone" />
                  +8134212341
                </li>
                <li>
                  <i className="fa fa-envelope" />
                  kdlgates@kdlgates.com
                </li>
                <li>
                  <i className="fa fa-globe" />
                  www.kdlgates.com
                </li>
                <li>
                  <i className="fa fa-github" />
                  github.com/KDLGates
                </li>
                <li>
                  <i className="fa fa-map-marker" />
                  5211 Oak Charter Ct., Temple Terrace, FL, 33617
                </li>
              </ul>
            </div>
            <div className="skills">
              <p className="left-title">Skills</p>
              <ul>
                <li>
                  <p>Python3</p>
                </li>
                <li>
                  <p>C &amp; C++, Java</p>
                </li>
                <li>
                  <p>JavaScript, React</p>
                </li>
                <li>
                  <p>HTML5 &amp; CSS3</p>
                </li>
                <li>
                  <p>SQL, MySql</p>
                </li>
                <li>
                  <p>Git &amp; GitHub</p>
                </li>
                <li>
                  <p>Linux, Bash/Shell</p>
                </li>
              </ul>
            </div>
            <div className="references">
              <p className="left-title">References</p>
              <div className="refer">
                <p className="referance-name">No References</p>
                <p className="referance-profession">Could use a vouch!</p>
                <ul>
                  <li>
                    <i className="fa fa-phone" />
                    +9999999999
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    invalid@donotuse.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="right-section">
          <div className="right-section-contents">
            <section className="about gap">
              <div className="right-title">About Me</div>
              <p className="about-me-contents">
                A lifelong technologist and lover of Computer Science, at last
                working hard on breaking into development. Current focus is on
                breaking through the rust and re-learning the modern web via the
                MERN framework, and how to tie many hours in backend programming and
                education into practical software developent to prove that I can
                provide value.
              </p>
            </section>
            <section className="experience gap">
              <div className="right-title">Relevant Projects</div>
              <div className="experience-contents">
                <div className="exp-left">
                  <p className="exp-company-name">USF</p>
                  <p className="exp-time-period">Nov. 2016- Fall 2017</p>
                </div>
                <div className="exp-right">
                  <p className="exp-position">Research Assistant</p>
                  <p className="exp-desc">
                    Learned some fundamental principles of neural networks by
                    developing a membrane potential function for simulating neurons
                    in a custom language (Neural Simulation Language) to model
                    biologically inspired behavior. Modelled a Hopfield Network for
                    a basic Optical Character Recognition task (memorizing and
                    recalling letters). Worked as part of a team with a graduate
                    mentor for program credit to help guide me as a beginner in the
                    field.
                  </p>
                </div>
              </div>
              <div className="experience-contents">
                <div className="exp-left">
                  <p className="exp-company-name">
                    Statistical Tracking and Planning
                  </p>
                  <p className="exp-time-period">2016-2018</p>
                </div>
                <div className="exp-right">
                  <p className="exp-position">Help Desk Technician</p>
                  <p className="exp-desc">
                    Created monthly reports and visualizations as a part of my help
                    desk employment, tracking the history of laptop replacements for
                    a Fortune 500 company, also used in forecasting to maintain a
                    support contract.
                  </p>
                </div>
              </div>
              {/*
                  <div class="experience-contents">
                      <div class="exp-left">
                          <p class="exp-company-name">Company three</p>
                          <p class="exp-time-period">2016-2018</p>
                      </div>
                      <div class="exp-right">
                          <p class="exp-position">position three</p>
                          <p class="exp-desc">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                              Fugit laborum accusantium repellat?
                          </p>
                      </div>
                  </div>
              */}
            </section>
            <section className="education gap">
              <div className="right-title">Education</div>
              <div className="education-contents">
                <div className="education-left">
                  <p className="education-school-name">
                    University of South Florida
                  </p>
                  <p className="educationp-time-period">2016-2018</p>
                </div>
                <div className="education-right">
                  <p className="education-subject">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="education-desc">
                    <i>summa cum laude</i> (GPA 3.91) School's something I
                    took quite seriously. I loved the academics and feel spoiled and
                    grateful for the opportunity. CS is a lovely field and automata
                    / theory of computation was my favorite elective.
                  </p>
                </div>
              </div>
              {/*
                  <div class="education-contents">
                      <div class="education-left">
                          <p class="education-school-name">College name</p>
                          <p class="educationp-time-period">2016-2018</p>
                      </div>
                      <div class="education-right">
                          <p class="education-subject">Science</p>
                          <p class="education-desc">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                              Fugit laborum accusantium repellat?
                          </p>
                      </div>
                  </div>
                  <div class="education-contents">
                      <div class="education-left">
                          <p class="education-school-name">School name</p>
                          <p class="educationp-time-period">2016-2018</p>
                      </div>
                      <div class="education-right">
                          <p class="education-subject">Science</p>
                          <p class="education-desc">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                              Fugit laborum accusantium repellat?
                          </p>
                      </div>
                  </div>
              */}
            </section>
            {/*
              <section class="awards gap">
                  <div class="right-title">Awards & Certificates</div>
                  <div class="awards-contents">
                      <div class="awards-left">
                          <p class="awards-company-name">Company x</p>
                          <p class="awards-time-period">24 June 2016</p>
                      </div>
                      <div class="awards-right">
                          <p class="awards-name">Employee of the month</p>
                          <p class="awards-desc">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                              Fugit laborum accusantium repellat?
                          </p>
                      </div>
                  </div>
                  <div class="awards-contents">
                      <div class="awards-left">
                          <p class="awards-company-name">Certificate x</p>
                          <p class="awards-time-period">12 January 2019</p>
                      </div>
                      <div class="awards-right">
                          <p class="awards-name">Certificate of complition</p>
                          <p class="awards-desc">
                              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quo. Non provident odio nam quas praesentium! 
                              Fugit laborum accusantium repellat?
                          </p>
                      </div>
                  </div>
              </section>
          */}
          </div>
        </section>
      </main>
    </>
  )
}
