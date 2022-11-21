import React from "react";
import { Icon } from "@iconify/react";
export default function ContactUs (props) {

    let resumeData = props.resumeData;
    return (
      <section id="contact" className="contact-section">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Click on the links below to get in contact with me for job opportunities, project collaboration or further information
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget">
              <span>
                <a
                  href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=alexwardcodes@gmail.com&tf=1
          " target="_blank" rel="noreferrer">
                  <Icon icon="mdi:gmail" width="75" />
                </a>
                <a href={resumeData.linkedinId} target="_blank" rel="noreferrer">
              <Icon icon="radix-icons:linkedin-logo" width="75" />
              </a>
              </span>

            </div>
          </aside>
        </div>
      </section>
    );
  }

