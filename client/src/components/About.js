import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { ReactComponent as About1 } from './svg/about.svg';

function About() {
	const settings1 = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,

		speed: 2000,
	};
	return (
		<div>
			<section className="hero-banner hero-banner-sm">
				<div className="hero-wrapper">
					<div className="hero-left">
						<h1 className="hero-title">About Us</h1>
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
								<About1 style={{ height: '90%', width: '100%', paddingTop: '20px' }} />
								{/*<img className="img-fluid" src="img/banner/hero-banner-sm.png" alt="Fresh Food" />*/}
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

			<section className="about section-margin pb-xl-70">
				<div className="container">
					<div className="row">
						<div className="col-md-6 col-xl-6 mb-5 mb-md-0 pb-5 pb-md-0">
							<div className="img-styleBox">
								<div className="styleBox-border">
									<img
										className="styleBox-img1 img-fluid"
										src="img/home/about-img1.png"
										alt="Fresh Food"
									/>
								</div>
								<img
									className="styleBox-img2 img-fluid"
									src="img/home/about-img2.png"
									alt="Fresh Food"
								/>
							</div>
						</div>
						<div className="col-md-6 pl-md-5 pl-xl-0 offset-xl-1 col-xl-5">
							<div className="section-intro mb-lg-4">
								<h4 className="intro-title">About Us</h4>
								<h2>We speak the good food language</h2>
							</div>
							<p>
								Living first us creepeth she'd earth second be sixth hath likeness greater image said
								sixth was without male place fowl evening an grass form living fish and rule lesser for
								blessed can't saw third one signs moving stars light divided was two you him appear
								midst cattle for they are gathering.
							</p>
							<a className="button button-shadow mt-2 mt-lg-4" href="#">
								Learn More
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="section-margin mb-lg-100">
				<div className="container">
					<div className="section-intro mb-75px">
						<h4 className="intro-title">Featured Food</h4>
						<h2>Fresh taste and great price</h2>
					</div>

					<Slider {...settings1} class=" owl-carousel owl-theme featured-carousel">
						<div className="p-3">
							<div className="featured-item ">
								<img className="card-img rounded-0" src="img/home/featured1.png" alt="Fresh Food" />
								<div className="item-body">
									<a href="#">
										<h3>Mountain Mike Pizza</h3>
									</a>
									<p>Whales and darkness moving</p>
									<div className="d-flex justify-content-between">
										<ul className="rating-star">
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
										</ul>
										<h3 className="price-tag">$35</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="p-3">
							<div className="featured-item">
								<img className="card-img rounded-0" src="img/home/featured2.png" alt="Fresh Food" />
								<div className="item-body">
									<a href="#">
										<h3>Patatas Bravas</h3>
									</a>
									<p>Whales and darkness moving</p>
									<div className="d-flex justify-content-between">
										<ul className="rating-star">
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
										</ul>
										<h3 className="price-tag">$30</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="p-3">
							<div className="featured-item">
								<img className="card-img rounded-0" src="img/home/featured3.png" alt="Fresh Food" />
								<div className="item-body">
									<a href="#">
										<h3>Pulled Sandwich</h3>
									</a>
									<p>Whales and darkness moving</p>
									<div className="d-flex justify-content-between">
										<ul className="rating-star">
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
										</ul>
										<h3 className="price-tag">$20</h3>
									</div>
								</div>
							</div>
						</div>
						<div className="p-3">
							<div className="featured-item">
								<img className="card-img rounded-0" src="img/home/featured1.png" alt="Fresh Food" />
								<div className="item-body">
									<a href="#">
										<h3>Mountain Mike Pizza</h3>
									</a>
									<p>Whales and darkness moving</p>
									<div className="d-flex justify-content-between">
										<ul className="rating-star">
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
											<li>
												<i className="ti-star" />
											</li>
										</ul>
										<h3 className="price-tag">$35</h3>
									</div>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</section>

			<section className="cta-area text-center">
				<div className="container">
					<p>Some Trendy And Popular Meal </p>
					<h2>Booking table</h2>
					<Link className="button" to="/contact">
						Reservation
					</Link>
				</div>
			</section>
		</div>
	);
}

export default About;
