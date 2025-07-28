import { Icon } from "@iconify/react";

export const Contact = () => {
  return (
    <section id="contact" className="tm-contact">
      <div className="container">
        <div className="title">
          <h2 className="tm-portfolio-title">
            Contact <strong>Me</strong>
          </h2>
        </div>
        <div className="row">
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
          <div className="col-md-12 col-sm-12">
            <p>Alexander Ward | 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
