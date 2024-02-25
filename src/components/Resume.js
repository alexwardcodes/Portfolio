import React from "react";
import { Icon } from "@iconify/react";

const Resume = () => {
  return (
    <section id="resume" class="tm-padding-top-bottom-100">
      <div class="title">
        <h2 class="tm-portfolio-title">
          My <strong>Skills</strong>
        </h2>
      </div>
      <div class="container">
        <div class="row skills-list">

		  <div className="inline">
            <Icon icon="teenyicons:typescript-outline" id="icon" width="75" />
            <div className="skill-name">TypeScript</div>
          </div>
          <div className="inline">
            <Icon icon="mdi:language-javascript" id="icon" width="75" />
            <div className="skill-name">JavaScript</div>
          </div>
		  <div className="inline">
            <Icon icon="teenyicons:react-outline" id="icon" width="75" />
            <div className="skill-name">React.js</div>
          </div>
          <div className="inline">
            <Icon icon="la:node-js" id="icon" width="75" />
            <div className="skill-name">Node.js</div>
          </div>
          <div className="inline">
            <Icon icon="simple-icons:express" id="icon" width="75" />
            <div className="skill-name">Express.js</div>
          </div>
		  <div className="inline">
            <Icon icon="simple-icons:jest" id="icon" width="75" />
            <div className="skill-name">Jest</div>
          </div>
          <div className="inline">
            <Icon icon="simple-icons:cypress" id="icon" width="75" />
            <div className="skill-name">Cypress</div>
          </div>
          <div className="inline">
            <Icon icon="simple-icons:playwright" id="icon" width="75" />
            <div className="skill-name">Playwright</div>
          </div>
          <div className="inline">
            <Icon icon="simple-icons:sonarqube" id="icon" width="75" />
            <div className="skill-name">Sonar Qube</div>
          </div>
          <div className="inline">
            <Icon icon="mdi:jquery" id="icon" width="75" />
            <div className="skill-name">jQuery</div>
          </div>
		  <div className="inline">
            <Icon icon="ion:logo-html5" id="icon" width="75" />
            <div className="skill-name">HTML</div>
          </div>
          <div className="inline">
            <Icon icon="ion:logo-css3" id="icon" width="75" />
            <div className="skill-name">CSS</div>
          </div>
   
          <div className="inline">
            <Icon icon="simple-icons:python" id="icon" width="75" />
            <div className="skill-name">Python</div>
          </div>
          <div className="inline">
            <Icon icon="akar-icons:django-fill" id="icon" width="75" />
            <div className="skill-name">Django</div>
          </div>
          <div className="inline">
            <Icon icon="teenyicons:mongodb-solid" id="icon" width="75" />
            <div className="skill-name">MongoDB</div>
          </div>
          <div className="inline">
            <Icon icon="akar-icons:postgresql-fill" id="icon" width="75" />
            <div className="skill-name">PostgreSQL</div>
          </div>
          <div className="inline">
            <Icon icon="mdi:sql-right-outer-join" id="icon" width="75" />
            <div className="skill-name">SQL</div>
          </div>
          <div className="inline">
            <Icon icon="fa6-brands:bootstrap" id="icon" width="75" />
            <div className="skill-name" id="bootstrap">Bootstrap</div>
          </div>
          <div className="inline">
            <Icon icon="akar-icons:vscode-fill" id="icon" width="75" />
            <div className="skill-name">VSCode</div>
          </div>
          <div className="inline">
            <Icon icon="mdi:git" id="icon" width="75" />
            <div className="skill-name">Git</div>
          </div>
          <div className="inline">
            <Icon icon="mdi:github" id="icon" width="75" />
            <div className="skill-name">GitHub</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
