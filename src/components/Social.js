import React from "react";

const Social = () => {
    return (
        <section id="social" class="tm-social">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-sm-4 wow rotateInUpLeft" data-wow-delay="0.3s">
					<div class="media facebook">
						<a href="#">
							<div class="media-object pull-left">
								<i class="fa fa-facebook"></i>
							</div>
							<div class="media-body">
								<h4 class="media-heading tm-social-title">Follow me on</h4>
								<h3>Social Facebook</h3>
							</div>
						</a>
					</div>
				</div>
				<div class="col-md-4 col-sm-4 wow rotateInUpLeft" data-wow-delay="0.6s">
					<div class="media twitter">
						<a href="#">
							<div class="media-object pull-left">
								<i class="fa fa-twitter"></i>
							</div>
							<div class="media-body">
								<h4 class="media-heading tm-social-title">Tweet me on</h4>
								<h3>Social Twitter</h3>
							</div>
						</a>
					</div>
				</div>
				<div class="col-md-4 col-sm-4 wow rotateInUpLeft" data-wow-delay="0.9s">
					<div class="media pinterest">
						<a href="#">
							<div class="media-object pull-left">
								<i class="fa fa-pinterest"></i>
							</div>
							<div class="media-body">
								<h4 class="media-heading tm-social-title">Pin me on</h4>
								<h3>Social Pinterest</h3>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Social;