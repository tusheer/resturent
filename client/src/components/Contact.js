import React, { useEffect, useState } from 'react';
import { ReactComponent as About1 } from './svg/contact.svg';
import validator from 'validator';
function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [ state, setstate ] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});
	const [ isError, setIsError ] = useState({
		error: false,
		errorData: {},
	});

	const [ loding, setLoading ] = useState(null);

	const error = () => {
		const data = {};
		if (validator.isEmpty(state.name)) {
			data.name = 'Name is require';
		}

		if (validator.isEmpty(state.message)) {
			data.message = 'Message is require';
		}
		if (!validator.isEmail(state.email)) {
			data.email = 'Email is not correct';
		}
		if (validator.isEmpty(state.email)) {
			data.email = 'Email is require';
		}

		return data;
	};

	const change = (e) => {
		setstate({ ...state, [e.target.name]: e.target.value });
		setIsError({ error: false });
	};

	const submit = (e) => {
		e.preventDefault();
		const data = error();

		if (Object.keys(data).length > 0) {
			console.log('sdfdsf');
			setIsError({ error: true, errorData: { ...data } });
		} else {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				console.log('sdfdf');
			}, 2500);
		}
	};
	return (
		<div>
			<section className="hero-banner hero-banner-sm">
				<div className="hero-wrapper">
					<div className="hero-left">
						<h1 className="hero-title">Contact Us</h1>
						<p>
							From set together our divided own saw divided the form god{' '}
							<br className="d-none d-xl-block" /> seas moveth you will fifth under replenish end
						</p>
						<ul className="hero-info d-none d-md-block">
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
					<div className="d-none d-sm-block mb-5 pb-4">
						<div id="map" style={{ height: '480px' }}>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d25760.174126936152!2d-119.3706521222695!3d36.190352484873046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sbd!4v1570010436998!5m2!1sen!2sbd"
								width="100%"
								height="480"
								frameborder="0"
								style={{ border: '0' }}
								allowfullscreen=""
							/>
						</div>
					</div>

					<div className="row">
						<div className="col-12">
							<h2 className="contact-title">Get in Touch</h2>
						</div>
						<div className="col-lg-8">
							<form
								className="form-contact contact_form"
								onSubmit={submit}
								id="contactForm"
								novalidate="novalidate"
							>
								<div className="row">
									<div className="col-12">
										<div className="form-group">
											<textarea
												style={{
													border:
														isError.error && isError.errorData.message
															? `1px solid red`
															: `1px solid #ddd`,
												}}
												className="form-control w-100"
												name="message"
												value={state.message}
												id="message"
												cols="30"
												rows="9"
												placeholder="Enter Message"
												onChange={change}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<input
												style={{
													border:
														isError.error && isError.errorData.name
															? `1px solid red`
															: `1px solid #ddd`,
												}}
												className="form-control"
												name="name"
												id="name"
												type="text"
												placeholder="Enter your name"
												value={state.name}
												onChange={change}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<input
												style={{
													border:
														isError.error && isError.errorData.email
															? `1px solid red`
															: `1px solid #ddd`,
												}}
												className="form-control"
												name="email"
												id="email"
												type="email"
												placeholder="Enter email address"
												value={state.email}
												onChange={change}
											/>
										</div>
									</div>
									<div className="col-12">
										<div className="form-group">
											<input
												className="form-control"
												name="subject"
												id="subject"
												type="text"
												placeholder="Enter Subject"
												value={state.subject}
												onChange={change}
											/>
										</div>
									</div>
								</div>
								<div className="form-group mt-3">
									<button type="submit" className="button button-contactForm">
										<div style={{ display: 'flex', alignItems: 'center' }}>
											{loding == true ? <div classNameName="loader" /> : <span />}
											<span>Send Message</span>
										</div>
									</button>
								</div>
							</form>
						</div>

						<div className="col-lg-4">
							<div className="media contact-info">
								<span className="contact-info__icon">
									<i className="ti-home" />
								</span>
								<div className="media-body">
									<h3>Buttonwood, California.</h3>
									<p>Rosemead, CA 91770</p>
								</div>
							</div>
							<div className="media contact-info">
								<span className="contact-info__icon">
									<i className="ti-tablet" />
								</span>
								<div className="media-body">
									<h3>
										<a href="tel:454545654">00 (440) 9865 562</a>
									</h3>
									<p>Mon to Fri 9am to 6pm</p>
								</div>
							</div>
							<div className="media contact-info">
								<span className="contact-info__icon">
									<i className="ti-email" />
								</span>
								<div className="media-body">
									<h3>
										<a href="mailto:support@colorlib.com">support@colorlib.com</a>
									</h3>
									<p>Send us your query anytime!</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Contact;
