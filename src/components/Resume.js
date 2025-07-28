import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Image, Text } from "@chakra-ui/react";

export const Resume = () => {
  const WorkIcon = () => {
    return <FontAwesomeIcon icon={["fas", "briefcase"]} />;
  };

  return (
    <Flex
      width="100%"
      direction="column"
      id="work"
      className="tm-padding-top-bottom-100"
    >
      <div className="title">
        <h2 className="tm-portfolio-title">
          My <strong>Experience</strong>
        </h2>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="MAR 2023 - PRESENT"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Image src="" />}
        >
          <Flex width="100%">
            <Image
              src="./images/cappfinity.jpeg"
              borderRadius="50%"
              height="50px"
              mr={4}
            />
            <Flex direction="column">
              <Text as="h3" className="vertical-timeline-element-title">
                Software Developer
              </Text>
              <Text as="h4" className="vertical-timeline-element-subtitle">
                Cappfinity, London, UK
              </Text>
            </Flex>
          </Flex>
          <Text as="h5">
            As part of a close-knit team working primarily on the frontend, I
            handle a range of tickets that include maintenance for multiple
            client sites, implementing client amends and new designs from our
            Creative team, refactoring, fixing bugs, and testing our components.
            Liaising with our backend teams and client-facing colleagues, I help
            to build new applications that meet the changing needs of our
            clients.
          </Text>
          <Flex>
            <strong>
              Skills: TypeScript | JavaScript | React | Node | SQL
            </strong>
          </Flex>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="AUG 2022 - NOV 2022"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<Image src="" />}
        >
          <Flex width="100%">
            <Image
              src="./images/GA.jpeg"
              borderRadius="50%"
              height="50px"
              mr={4}
            />
            <Flex direction="column">
              <Text as="h3" className="vertical-timeline-element-title">
                Software Engineering Immersive
              </Text>
              <Text as="h4" className="vertical-timeline-element-subtitle">
                General Assembly, Remote, UK
              </Text>
            </Flex>
          </Flex>
          <Text as="h5">
            This was a 3-month <strong>Full Stack</strong> course offered by
            General Assembly - a leading provider of tech industry training -
            where I learned the fundamentals of software engineering in order to
            build full-stack applications both on my own and in groups. I did
            daily labs and homework assignments to practice what we learned in
            class, and had regular standups with other students on the course. I
            built and deployed one solo project and 3 group projects to
            demonstrate my new skills in full-stack development.
          </Text>
          <Flex>
            <strong>
              Skills: TypeScript | JavaScript | React | Node | NoSQL | MongoDB
            </strong>
          </Flex>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="JUL 2012 - JUL 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Image src="" />}
        >
          <Flex width="100%">
            <Image
              src="./images/android-chrome-512x512.png"
              borderRadius="50%"
              height="50px"
              mr={4}
            />
            <Flex direction="column">
              {" "}
              <Text as="h3" className="vertical-timeline-element-title">
                Freelance Translator
              </Text>
              <Text as="h4" className="vertical-timeline-element-subtitle">
                Self-employed, Remote, UK
              </Text>
            </Flex>
          </Flex>
          <Text>
            {" "}
            As a translator and proofreader of 10 years, I handled a wide range
            of projects for a diverse portfolio of clients. Specialising
            primarily in games translation and finance, I became highly
            efficient at managing projects while delivering top-quality
            translations - from board reports and annual financial statements to
            game UI, dialogue, and university dissertations, I developed a keen
            eye for detail, time planning and prioritising tasks. The skills I
            learned during this time stand me in good stead as an engineer.
          </Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="APR 2010 - JUN 2012"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Image src="" />}
        >
          <Flex width="100%">
            <Image src="./images/LBG.png" height="50px" mr={4} />
            <Flex direction="column">
              <Text as="h3" className="vertical-timeline-element-title">
                Bilingual IT Analyst
              </Text>
              <Text as="h4" className="vertical-timeline-element-subtitle">
                Lloyds Banking Group, Pudsey, UK
              </Text>
            </Flex>
          </Flex>
          <Text as="h5">Bilingual IT support</Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="FEB 2008 - APR 2010"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Image src="" />}
        >
          <Flex width="100%">
            <Image src="./images/tbw.png" height="50px" mr={4} />
            <Flex direction="column">
              <Text as="h3" className="vertical-timeline-element-title">
                Project Administrator
              </Text>
              <Text as="h4" className="vertical-timeline-element-subtitle">
                The Big Word, Leeds, UK
              </Text>
            </Flex>
          </Flex>
          <Text as="h5">Managing projects</Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="SEP 2006 - JUL 2007"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<Image src="" />}
        >
          <Flex width="100%">
            <Image src="./images/uol.png" height="50px" mr={4} />
            <Flex direction="column">
              <Text as="h3" className="vertical-timeline-element-title">
                Student
              </Text>
              <Text as="h4" className="vertical-timeline-element-subtitle">
                University of Leeds, Leeds, UK
              </Text>
            </Flex>
          </Flex>
          <Text as="h5">Completion of final year</Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="SEP 2005 - SEP 2006"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Image src="" />}
        >
          <Flex width="100%">
            <Image src="./images/allianz_logo.jpeg" height="50px" mr={4} />
            <Flex direction="column">
              <Text as="h3" className="vertical-timeline-element-title">
                Opt-in Reinsurance Administrator
              </Text>
              <Text as="h4" className="vertical-timeline-element-subtitle">
                Allianz AG, Munich, Germany
              </Text>
            </Flex>
          </Flex>
          <Text as="h5">Handling contracts</Text>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="SEP 2003 - SEP 2005"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<Image src="" />}
        >
          <Flex width="100%">
            <Image src="./images/uol.png" height="50px" mr={4} />
            <Flex direction="column">
              <Text as="h3" className="vertical-timeline-element-title">
                Student
              </Text>
              <Text as="h4" className="vertical-timeline-element-subtitle">
                University of Leeds, Leeds, UK
              </Text>
            </Flex>
          </Flex>
          <Text as="h5">First two years of study</Text>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* <section id="resume" className="tm-padding-top-bottom-100">
        <div className="title">
          <h2 className="tm-portfolio-title">
            My <strong>Skills</strong>
          </h2>
        </div>
        <div className="container">
          <div className="row skills-list">
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
              <div className="skill-name" id="bootstrap">
                Bootstrap
              </div>
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
      </section> */}
    </Flex>
  );
};
