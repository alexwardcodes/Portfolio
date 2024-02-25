import React from "react";

 const Portfolio = () => {

	const projects = [
		{      appLink: "https://sei66project4agora.herokuapp.com/",
		githubLink: "https://github.com/alexwardcodes/Project4-Agora-Frontend",
		githubRepo:
		  "https://github.com/alexwardcodes/Project4-Agora-Frontend/blob/608f4b7883b279b13960eed62d9baf743682bab7/README.md"},
{      appLink: "https://djangodjourney.herokuapp.com/",
githubLink: "https://github.com/alexwardcodes/Project3-DjangoDjourneys",
githubRepo:
  "https://github.com/alexwardcodes/Project3-DjangoDjourneys/blob/master/README.md",},
  {      appLink: "https://ratemycatapp.herokuapp.com/",
  githubLink: "https://github.com/alexwardcodes/Project2-RateMyCatApp",
  githubRepo:
	"https://github.com/alexwardcodes/Project2-RateMyCatApp/blob/master/README.md",},
	{      appLink: "https://alexwardcodes.github.io/Project1-Odyssey/",
	githubLink: "https://github.com/alexwardcodes/Project1-Odyssey",
	githubRepo:
	  "https://github.com/alexwardcodes/Project1-Odyssey/blob/main/README.md",}
	]
return (
<section id="portfolio" class="tm-portfolio">
		<div class="container">
			<div class="row">
				<div class="col-md-12 wow bounce">
					<div class="title">
						<h2 class="tm-portfolio-title">My <strong>Projects</strong></h2>
					</div>

		
					<div class="iso-section">
						{/* <ul class="filter-wrapper clearfix">
							<li><a href="#" class="opc-main-bg selected" data-filter="*">All</a></li>
							<li><a href="#" class="opc-main-bg" data-filter=".html">HTML</a></li>
							<li><a href="#" class="opc-main-bg" data-filter=".photoshop">Photoshop</a></li>
							<li><a href="#" class="opc-main-bg" data-filter=".wordpress">Wordpress</a></li>
							<li><a href="#" class="opc-main-bg" data-filter=".mobile">Mobile</a></li>
						</ul> */}
						<div class="iso-box-section">
							<div class="iso-box-wrapper col4-iso-box">
								
								
								
								
								<div class="iso-box wordpress col-md-3 col-sm-3 col-xs-12">
									<div class="portfolio-thumb">
										<img src="images/Agora.png" class="fluid-img" alt="portfolio img"/>
										<div class="portfolio-overlay">
											<h3 class="portfolio-item-title">Agora</h3>
											<p>Full-stack marketplace app using the MERN stack.</p>
											<div className="project-links">
											<a href={projects[0].appLink} target="_blank" rel="noreferrer">Launch</a>
                          <a href={projects[0].githubLink} target="_blank" rel="noreferrer">GitHub Repo</a>
                          <a href={projects[0].githubRepo} target="_blank" rel="noreferrer">ReadMe</a>
						  </div>
										</div>
									</div>
								</div>
								<div class="iso-box html photoshop col-md-3 col-sm-3 col-xs-12">
									<div class="portfolio-thumb">
										<img src="images/Django-Djourneys.png" class="fluid-img" alt="portfolio img"/>
										<div class="portfolio-overlay">
											<h3 class="portfolio-item-title">Django Djourneys</h3>
											<p>Full-stack travel app built in Django, using Python & MongoDB.</p>
											<div className="project-links">
											<a href={projects[1].appLink} target="_blank" rel="noreferrer">Launch</a>
                          <a href={projects[1].githubLink} target="_blank" rel="noreferrer">GitHub Repo</a>
                          <a href={projects[1].githubRepo} target="_blank" rel="noreferrer">ReadMe</a>
						  </div>
										</div>
									</div>
								</div>
								<div class="iso-box photoshop col-md-3 col-sm-3 col-xs-12">
									<div class="portfolio-thumb">
										<img src="images/Rate-My-Cat.png" class="fluid-img" alt="portfolio img"/>
										<div class="portfolio-overlay">
											<h3 class="portfolio-item-title">Rate My Cat</h3>
											<p>A fun app where you can rate cats! Built with JS in Express, with MongoDB and Mongoose.</p>
											<div className="project-links">
											<a href={projects[2].appLink} target="_blank" rel="noreferrer">Launch</a>
                          <a href={projects[2].githubLink} target="_blank" rel="noreferrer">GitHub Repo</a>
                          <a href={projects[2].githubRepo} target="_blank" rel="noreferrer">ReadMe</a>
						  </div>
										</div>
									</div>
								</div>
								<div class="iso-box wordpress col-md-3 col-sm-3 col-xs-12">
									<div class="portfolio-thumb">
										<img src="images/Odyssey.png" class="fluid-img" alt="portfolio img"/>
										<div class="portfolio-overlay">
											<h3 class="portfolio-item-title">Odyssey</h3>
											<p>A game I built solo based on Greek mythology. Built using jQuery in an HTML scaffold.</p>
											<div className="project-links">
											<a href={projects[3].appLink} target="_blank" rel="noreferrer">Launch</a>
                          <a href={projects[3].githubLink} target="_blank" rel="noreferrer">GitHub Repo</a>
                          <a href={projects[3].githubRepo} target="_blank" rel="noreferrer">ReadMe</a>
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
)
};

export default Portfolio;