import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as About1 } from './svg/shef.svg';
function Chef() {
	return (
		<div>
			<section className="hero-banner hero-banner-sm">
				<div className="hero-wrapper">
					<div className="hero-left">
						<h1 className="hero-title">Talent Chefs</h1>
						<p>
							From set together our divided own saw divided the form god{' '}
							<br className="d-none d-xl-block" /> seas moveth you will fifth under replenish end
						</p>
						<ul className="hero-info d-none d-lg-block">
							<li>
								<img src="img/banner/fas-service-icon.png" alt="Fresh Food" />
								<h4>Fast Service</h4>
							</li>
							<li>
								<img src="img/banner/fresh-food-icon.png" alt="Fresh Food" />
								<h4>Fresh Food</h4>
							</li>
							<li>
								<img src="img/banner/support-icon.png" alt="Fresh Food" />
								<h4>24/7 Support</h4>
							</li>
						</ul>
					</div>
					<div className="hero-right">
						<div className="owl-carousel owl-theme w-100 hero-carousel">
							<div className="hero-carousel-item">
								<About1 style={{ height: '100%', width: '100%' }} />
							</div>
						</div>
					</div>
					<ul className="social-icons d-none d-lg-block">
						<li>
							<a href="https://www.facebook.com/janealam.tusher">
								<i className="ti-facebook" />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/janealam.tusher">
								<i className="ti-twitter" />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/janealam.tusher">
								<i className="ti-instagram" />
							</a>
						</li>
					</ul>
				</div>
			</section>

			<section className="section-margin">
				<div className="container">
					<div className="section-intro mb-75px">
						<h4 className="intro-title">Our Chef</h4>
						<h2>Talent & experience member</h2>
					</div>

					<div className="row">
						<div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
							<div className="chef-card">
								<img className="card-img rounded-0" src="img/home/chef-1.png" alt="Fresh Food" />
								<div className="chef-footer">
									<h4>Daniesl Laran</h4>
									<p>Executive Chef</p>
								</div>

								<div className="chef-overlay">
									<ul className="social-icons">
										<li>
											<a href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="ti-skype" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="ti-vimeo-alt" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
							<div className="chef-card">
								<img className="card-img rounded-0" src="img/home/chef-2.png" alt="Fresh Food" />
								<div className="chef-footer">
									<h4>Daniesl Laran</h4>
									<p>Executive Chef</p>
								</div>

								<div className="chef-overlay">
									<ul className="social-icons">
										<li>
											<a href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="ti-skype" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="ti-vimeo-alt" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
							<div className="chef-card">
								<img className="card-img rounded-0" src="img/home/chef-3.png" alt="Fresh Food" />
								<div className="chef-footer">
									<h4>Daniesl Laran</h4>
									<p>Executive Chef</p>
								</div>

								<div className="chef-overlay">
									<ul className="social-icons">
										<li>
											<a href="#">
												<i className="ti-facebook" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="ti-twitter-alt" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="ti-skype" />
											</a>
										</li>
										<li>
											<a href="#">
												<i className="ti-vimeo-alt" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="cta-area text-center">
				<div classNameName="container">
					<p>Some Trendy And Popular Meal </p>
					<h2>Booking table</h2>
					<Link classNameName="button" to="/contact">
						Reservation
					</Link>
				</div>
			</section>
		</div>
	);
}

export default Chef;
