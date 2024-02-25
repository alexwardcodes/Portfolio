import React from "react";
import { Icon } from "@iconify/react";

 const Home = () => {
return (
	<section id="home" class="templatemo-home">
		<div class="container">
			<div class="row">
				<div class="col-md-2 col-sm-1"></div>
				<div class="col-md-8 col-sm-10">
					<h1 class="tm-home-title"><strong>Alexander Ward</strong></h1>
					<h2 class="tm-home-subtitle">Driven. Technophile. Engineer.</h2>
					<p className="scrolldown"><a className="smoothscroll" title="Go to About" href="#about"><i className="icon-down-circle" /></a></p>
					<a href="#about"><Icon icon="icon-park-solid:down-c" id="icon" width="75"/></a>
				</div>
				<div class="col-md-2 col-sm-1"></div>
			</div>
		</div>
	</section>
)
}

export default Home;