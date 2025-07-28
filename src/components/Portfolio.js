export const Portfolio = () => {
  const projects = [
    {
      appLink: "https://agora-8009009f3244.herokuapp.com/",
      githubLink: "https://github.com/alexwardcodes/Project4-Agora-Frontend",
    },
    {
      appLink: "https://djangodjourney.herokuapp.com/",
      githubLink: "https://github.com/alexwardcodes/Project3-DjangoDjourneys",
    },
    {
      appLink: "https://ratemycatapp.herokuapp.com/",
      githubLink: "https://github.com/alexwardcodes/Project2-RateMyCatApp",
    },
    {
      appLink: "https://alexwardcodes.github.io/Project1-Odyssey/",
      githubLink: "https://github.com/alexwardcodes/Project1-Odyssey",
    },
  ];
  return (
    <section id="portfolio" className="tm-portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12 wow bounce">
            <div className="title">
              <h2 className="tm-portfolio-title">
                My <strong>Projects</strong>
              </h2>
            </div>

            <div className="iso-section">
              <div className="iso-box-section">
                <div className="iso-box-wrapper col4-iso-box">
                  <div className="iso-box wordpress col-md-3 col-sm-3 col-xs-12">
                    <div className="portfolio-thumb">
                      <img
                        src="images/Agora.png"
                        className="fluid-img"
                        alt="portfolio img"
                      />
                      <div className="portfolio-overlay">
                        <h3 className="portfolio-item-title">Agora</h3>
                        <p>Full-stack marketplace app using the MERN stack.</p>
                        <div className="project-links">
                          <a
                            href={projects[0].appLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Launch
                          </a>
                          <a
                            href={projects[0].githubLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub Repo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iso-box html photoshop col-md-3 col-sm-3 col-xs-12">
                    <div className="portfolio-thumb">
                      <img
                        src="images/Django-Djourneys.png"
                        className="fluid-img"
                        alt="portfolio img"
                      />
                      <div className="portfolio-overlay">
                        <h3 className="portfolio-item-title">
                          Django Djourneys
                        </h3>
                        <p>
                          Full-stack travel app built in Django, using Python &
                          MongoDB.
                        </p>
                        <div className="project-links">
                          <a
                            href={projects[1].appLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Launch
                          </a>
                          <a
                            href={projects[1].githubLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub Repo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iso-box photoshop col-md-3 col-sm-3 col-xs-12">
                    <div className="portfolio-thumb">
                      <img
                        src="images/Rate-My-Cat.png"
                        className="fluid-img"
                        alt="portfolio img"
                      />
                      <div className="portfolio-overlay">
                        <h3 className="portfolio-item-title">Rate My Cat</h3>
                        <p>
                          A fun app where you can rate cats! Built with JS in
                          Express, with MongoDB and Mongoose.
                        </p>
                        <div className="project-links">
                          <a
                            href={projects[2].appLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Launch
                          </a>
                          <a
                            href={projects[2].githubLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub Repo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="iso-box wordpress col-md-3 col-sm-3 col-xs-12">
                    <div className="portfolio-thumb">
                      <img
                        src="images/Odyssey.png"
                        className="fluid-img"
                        alt="portfolio img"
                      />
                      <div className="portfolio-overlay">
                        <h3 className="portfolio-item-title">Odyssey</h3>
                        <p>
                          A game I built solo based on Greek mythology. Built
                          using jQuery in an HTML scaffold.
                        </p>
                        <div className="project-links">
                          <a
                            href={projects[3].appLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Launch
                          </a>
                          <a
                            href={projects[3].githubLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub Repo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
