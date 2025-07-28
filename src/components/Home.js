import { Icon } from "@iconify/react";
import {Nav} from "./Nav";
import {Portfolio} from "./Portfolio";
import {Resume} from "./Resume";
import {Contact} from "./Contact";
import {About} from "./About";

export const Home = () => {
  return (
    <>
      <Nav />
      <section id="home" className="templatemo-home">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-sm-1"></div>
            <div className="col-md-8 col-sm-10">
              <h1 className="tm-home-title">
                <strong>Alexander Ward</strong>
              </h1>
              <h2 className="tm-home-subtitle">Software Engineer</h2>
              <p className="scrolldown">
                <a className="smoothscroll" title="Go to About" href="#about">
                  <i className="icon-down-circle" />
                </a>
              </p>
              <a href="#about">
                <Icon icon="icon-park-solid:down-c" id="icon" width="75" />
              </a>
            </div>
            <div className="col-md-2 col-sm-1"></div>
          </div>
        </div>
      </section>
      <About />
      <Resume />
      <Portfolio />
      <Contact />
    </>
  );
};
