import React from "react";
export default function ContactUs (props) {

    let resumeData = props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <span>{resumeData.name}</span>
              <br></br>
              <br></br>
              <span>
                <a
                  href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=alexwardcodes@gmail.com&tf=1
          ">
                  Gmail
                </a>
              </span>
              <h4>Linked in :{resumeData.linkedinId}</h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }

