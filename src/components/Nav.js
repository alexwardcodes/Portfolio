export const Nav = () => {
  return (
    <div className="navbar navbar-default bs-dos-nav navbar-fixed-top sticky-navigation" role="navigation" >
      <div className="container">
        <div className="navbar-header">
          <button
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#rock-navigation"
          >
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>
          <a href="#home" className="navbar-brand">
            {" "}
            <h2 className="tm-portfolio-title nav-title">
              alexward<strong>.codes</strong>
            </h2>
          </a>
        </div>
        <nav className="collapse navbar-collapse" id="rock-navigation">
          <ul className="nav navbar-nav navbar-right main-navigation text-uppercase">
            <li>
              <a href="#about" className="smoothScroll">
                About
              </a>
            </li>
            <li>
              <a href="#resume" className="smoothScroll">
                Skills
              </a>
            </li>
            <li>
              <a href="#work" className="smoothScroll">
                Experience
              </a>
            </li>
            <li>
              <a href="#portfolio" className="smoothScroll">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="smoothScroll">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};