import React from 'react';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Portfolio (props) {

    let resumeData = props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check out some of the projects I've built</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, key)=>{
              return(
                <div className="columns portfolio-item" key={key}>
                  <div className="item-wrap">
                    <a href={`#${item.id}`}>
                      <div id={`${item.id}`} className="mfp-hide" >
                        <h1>{item.name}</h1>
                        <p />
                        <img src={`${item.imgurl}`} className="item-img" alt="Project" height="500" width="600"/>
                        <p />
                        <div className="modal-content-points">
                        {item.text}
                        <p />
                        {item.points.map(point => { return (
                          <li>{point}</li>
                        )})}
                        </div>
                        </div>
                      <img src={`${item.imgurl}`} className="item-img" alt="Project"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          {/* <FontAwesomeIcon icon="fab fa-js" /> */}

                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
