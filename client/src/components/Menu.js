import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as About1 } from './svg/menu.svg';
function Menu() {
	return (
		<div>
			<section class="hero-banner hero-banner-sm">
				<div class="hero-wrapper">
					<div class="hero-left">
						<h1 class="hero-title">Food Menu</h1>
						<p>
							From set together our divided own saw divided the form god <br class="d-none d-xl-block" />{' '}
							seas moveth you will fifth under replenish end
						</p>
						<ul class="hero-info d-none d-lg-block">
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
					<div class="hero-right">
						<div class="owl-carousel owl-theme w-100 hero-carousel">
							<div class="hero-carousel-item">
								<About1 style={{ height: '100%', width: '100%' }} />
							</div>
						</div>
					</div>
					<ul class="social-icons d-none d-lg-block">
						<li>
							<a href="https://www.facebook.com/janealam.tusher">
								<i class="ti-facebook" />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/janealam.tusher">
								<i class="ti-twitter" />
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/janealam.tusher">
								<i class="ti-instagram" />
							</a>
						</li>
					</ul>
				</div>
			</section>

			<section class="section-margin">
				<div className="container">
					<div className="section-intro mb-75px">
						<h4 className="intro-title">Food Menu</h4>
						<h2>Delicious food</h2>
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="media align-items-center food-card">
								<img className="mr-3 mr-sm-4" src="img/home/food1.png" alt="Fresh Food" />
								<div className="media-body">
									<div className="d-flex justify-content-between food-card-title">
										<h4>Roasted Marrow</h4>
										<h3 className="price-tag">$32</h3>
									</div>
									<p>Whales and darkness moving form cattle</p>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="media align-items-center food-card">
								<img
									style={{ width: '99px', height: '99px' }}
									className="mr-3 mr-sm-4"
									src="img/home/food2.png"
									alt="Fresh Food"
								/>
								<div className="media-body">
									<div className="d-flex justify-content-between food-card-title">
										<h4>Indian pizza</h4>
										<h3 className="price-tag">$32</h3>
									</div>
									<p>Whales and darkness moving form cattle</p>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="media align-items-center food-card">
								<img
									style={{ width: '99px', height: '99px' }}
									className="mr-3 mr-sm-4"
									src="img/home/food3.png"
									alt="Fresh Food"
								/>
								<div className="media-body">
									<div className="d-flex justify-content-between food-card-title">
										<h4>Omelette</h4>
										<h3 className="price-tag">$32</h3>
									</div>
									<p>Whales and darkness moving form cattle</p>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="media align-items-center food-card">
								<img
									style={{ width: '99px', height: '99px' }}
									className="mr-3 mr-sm-4"
									src="img/home/food4.png"
									alt="Fresh Food"
								/>
								<div className="media-body">
									<div className="d-flex justify-content-between food-card-title">
										<h4>Muffinn</h4>
										<h3 className="price-tag">$11</h3>
									</div>
									<p>Whales and darkness moving form cattle</p>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="media align-items-center food-card">
								<img
									style={{ width: '99px', height: '99px' }}
									className="mr-3 mr-sm-4"
									src="img/home/food5.png"
									alt="Fresh Food"
								/>
								<div className="media-body">
									<div className="d-flex justify-content-between food-card-title">
										<h4>pizza</h4>
										<h3 className="price-tag">$25</h3>
									</div>
									<p>Whales and darkness moving form cattle</p>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="media align-items-center food-card">
								<img
									style={{ width: '99px', height: '99px' }}
									className="mr-3 mr-sm-4"
									src="img/home/food6.png"
									alt="Fresh Food"
								/>
								<div className="media-body">
									<div className="d-flex justify-content-between food-card-title">
										<h4>Barger</h4>
										<h3 className="price-tag">$16</h3>
									</div>
									<p>Whales and darkness moving form cattle</p>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="media align-items-center food-card">
								<img
									style={{ width: '99px', height: '99px' }}
									className="mr-3 mr-sm-4"
									src="img/home/food7.png"
									alt="Fresh Food"
								/>
								<div className="media-body">
									<div className="d-flex justify-content-between food-card-title">
										<h4>Roll</h4>
										<h3 className="price-tag">$30</h3>
									</div>
									<p>Whales and darkness moving form cattle</p>
								</div>
							</div>
						</div>

						<div className="col-lg-6">
							<div className="media align-items-center food-card">
								<img
									style={{ width: '99px', height: '99px' }}
									className="mr-3 mr-sm-4"
									src="img/home/food8.png"
									alt="Fresh Food"
								/>
								<div className="media-body">
									<div className="d-flex justify-content-between food-card-title">
										<h4>Barbeque</h4>
										<h3 className="price-tag">$42</h3>
									</div>
									<p>Whales and darkness moving form cattle</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="cta-area text-center">
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

export default Menu;
