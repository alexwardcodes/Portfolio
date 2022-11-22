import { Icon } from '@iconify/react';
import React from 'react';
export default function Resume (props) {

    let resumeData = props.resumeData;
    return (
      <section id="resume">

<div className="row skill">

<div className="three columns header-col">
   <h1><span>Skills</span></h1>
</div>

<div className="nine columns main-col">

   
   <div className="inline"><Icon icon="ion:logo-html5" id="icon" width="75"/><div>HTML</div></div>
   <div className="inline"><Icon icon="ion:logo-css3" id="icon"  width="75" /><div>CSS</div></div>
   <div className="inline"><Icon icon="mdi:language-javascript" id="icon" width="75" /><div>JavaScript</div></div>
   <div className="inline"><Icon icon="mdi:jquery" id="icon" width="75" /><div>jQuery</div></div>
   <div className="inline"><Icon icon="teenyicons:react-outline" id="icon"  width="75" /><div>React.js</div></div>
   <div className="inline"><Icon icon="la:node-js" id="icon" width="75" /><div>Node.js</div></div>
   <div className="inline"><Icon icon="simple-icons:express" id="icon" width="75" /><div>Express.js</div></div>
   <div className="inline"><Icon icon="simple-icons:python" id="icon" width="75" /><div>Python</div></div>
   <div className="inline"><Icon icon="akar-icons:django-fill" id="icon" width="75" /><div>Django</div></div>
   <div className="inline"><Icon icon="teenyicons:mongodb-solid" id="icon" width="75" /><div>MongoDB</div></div>
   <div className="inline"><Icon icon="akar-icons:postgresql-fill" id="icon" width="75" /><div>PostgreSQL</div></div>
   <div className="inline"><Icon icon="mdi:sql-right-outer-join" id="icon" width="75" /><div>SQL</div></div>
   <div className="inline"><Icon icon="fa6-brands:bootstrap" id="icon"  width="75" /><div>Bootstrap</div></div>
   <div className="inline"><Icon icon="akar-icons:vscode-fill"id="icon"  width="75" /><div>VSCode</div></div>
   <div className="inline"><Icon icon="mdi:git" id="icon" width="75" /><div>Git</div></div>
   <div className="inline"><Icon icon="mdi:github" id="icon" width="75" /><div>GitHub</div></div>
   

{/* <div className="bars">

  <ul className="skills">
    {
      resumeData.skills && resumeData.skills.map((item) => {
        return(
          <li>
          <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
          </span><em>{item.skillname}</em>
          </li>
        )
      })
    }

 </ul>

</div> */}

</div>

</div>
<div className="row experience">

<div className="three columns header-col">
   <h1><span>Experience</span></h1>
</div>

<div className="nine columns main-col">
  {
    resumeData.experience && resumeData.experience.map((item, key)=>{
      return(
        <div className="row item" key={key}>
           <div className="twelve columns">
              <h3>{item.CompanyName}</h3>
              <p className="info">
              {item.specialization}
              <span>&bull;</span> <em className="date">{item.MonthOfStarting} {item.YearOfStarting}</em></p>
              <p>
              {item.Description}
              </p>
           </div>
        </div>
      )
    })
  }
</div>
</div>
<div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item, key) => {
                  return(
                    <div className="row item" key={key}>
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.responsibilities.map((element, key) => {
                            return (<li key={key}>{element}</li>)
                          })}
                          </p>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>
         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item, key)=>{
                  return(
                    <div className="row item" key={key}>
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>

      </section>
    );
  }
