import React from "react";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <section id="contact" class="tm-contact">
      <div class="container">
        <div class="title">
          <h2 class="tm-portfolio-title">
            Contact <strong>Me</strong>
          </h2>
        </div>
        <div class="row">
          <div className="contact-icons">
            <a
              href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=alexwardcodes@gmail.com&tf=1
          "
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="ic:outline-alternate-email" width="75" id="contact-icon"/>
            </a>
            <a
              href="https://github.com/alexwardcodes"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="codicon:github-inverted" width="70" id="contact-icon"/>
            </a>
            <a
              href="https://www.linkedin.com/in/alex-sasha-ward/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="entypo-social:linkedin-with-circle" width="70" id="contact-icon"/>
            </a>
          </div>
          <div class="col-md-12 col-sm-12">
            <p>Alexander Ward | 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
