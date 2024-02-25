import React from "react";

const Work = () => {
  return (
    <section id="work" class="tm-padding-top-bottom-100">
      <div class="title">
        <h2 class="tm-portfolio-title">
          My <strong>Experience</strong>
        </h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-4">
            <div class="work-wrapper">
              <div className="work-card">
                <div className="work-card-1">
                  <img src="images/cappfinity.jpeg" alt="cappfinity" />
                </div>
                <div className="work-card-2">
                  {" "}
                  <h3 class="text-uppercase tm-work-h3">Cappfinity</h3>
                  <h5>Mar 2023 - Present</h5>
                </div>
              </div>

              <hr />
              <p>
                Cappfinity is a leader in talent management and acquisition when it comes to candidate assessments. As part of a close-knit team working primarily on the frontend, I handle a range of tickets that include maintenance for multiple client sites, implementing client amends and new designs from our Creative team, refactoring, fixing bugs, and testing our components. Liaising with our backend teams and client-facing colleagues, I help to build new applications that meet the changing needs of our clients.
              </p>
            </div>
		  </div>
         <div class="col-md-4 col-sm-4">
            <div class="work-wrapper">
              <div className="work-card">
                <div className="work-card-1">
                  <img src="images/GA.jpeg" alt="General Assembly" />
                </div>
                <div className="work-card-2">
                  {" "}
                  <h3 class="text-uppercase tm-work-h3">General Assembly</h3>
                  <h5>Aug 2022 - Nov 2022</h5>
                </div>
              </div>

              <hr />
              <p>
			  This was a 3-month course offered by General Assembly - a
                leading provider of tech industry training - where I learned the
                fundamentals of software engineering in order to build
                full-stack applications both on my own and in groups. I did
                daily labs and homework assignments to practice what we learned
                in class, and had regular standups with other students on the
                course. I built and deployed one solo project and 3 group
                projects to demonstrate my new skills in full-stack development.
              </p>
            </div>
          </div>
		  <div class="col-md-4 col-sm-4">
            <div class="work-wrapper">
              <div className="work-card">
                <div className="work-card-1">
                  <img src="images/android-chrome-512x512.png" alt="Freelance Translator" />
                </div>
                <div className="work-card-2">
                  {" "}
                  <h3 class="text-uppercase tm-work-h3">Translator</h3>
                  <h5>Jun 2012 - Jul 2022</h5>
                </div>
              </div>

              <hr />
              <p>
			  As a translator and proofreader of 10 years, I handled a wide range of projects for a diverse portfolio of clients. Specialising primarily in games translation and finance, I became highly efficient at managing projects while delivering top-quality translations - from board reports and annual financial statements to game UI, dialogue, and university dissertations, I developed a keen eye for detail, time planning and prioritising tasks. The skills I learned during this time stand me in good stead as an engineer.
              </p>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};

export default Work;
