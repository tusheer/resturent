import React, { useState } from 'react';
import validator from 'validator';
function Footer() {
	const [ nerror, setNerror ] = useState({
		error: false,
		errorData: {},
	});

	const [ nstate, setNstate ] = useState({
		email: '',
	});

	const [ nloding, setNloading ] = useState(null);

	const newserror = () => {
		const data = {};
		if (!validator.isEmail(nstate.email)) {
			data.email = 'Email is not correct';
		}
		if (validator.isEmpty(nstate.email)) {
			data.email = 'Email is require';
		}

		return data;
	};

	const nchange = (e) => {
		setNstate({ email: e.target.value });
		setNerror({ error: false });
	};

	const nsubmit = (e) => {
		e.preventDefault();
		const data = newserror();

		if (Object.keys(data).length > 0) {
			setNerror({ error: true, errorData: { ...data } });
		} else {
			setNloading(true);
			setTimeout(() => {
				setNloading(false);
				console.log('sdfdf');
			}, 2500);
		}
	};
	return (
		<div>
			<footer className="footer-area section-gap">
				<div className="container">
					<div className="row">
						<div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
							<h4>Top Products</h4>
							<ul>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Managed Website</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.co">Manage Reputation</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Power Tools</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Marketing Service</a>
								</li>
							</ul>
						</div>
						<div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
							<h4>Quick Links</h4>
							<ul>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Jobs</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Brand Assets</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Investor Relations</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Terms of Service</a>
								</li>
							</ul>
						</div>
						<div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
							<h4>Features</h4>
							<ul>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Jobs</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Brand Assets</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Investor Relations</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Terms of Service</a>
								</li>
							</ul>
						</div>
						<div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
							<h4>Resources</h4>
							<ul>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Guides</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Research</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Experts</a>
								</li>
								<li>
									<a href="https://tusher-protfolio.herokuapp.com">Agencies</a>
								</li>
							</ul>
						</div>
						<div className="col-xl-4 col-md-8 mb-4 mb-xl-0 single-footer-widget">
							<h4>Newsletter</h4>
							<p>You can trust us. we only send promo offers,</p>

							<div className="form-wrap" id="mc_embed_signup">
								<form onSubmit={nsubmit}>
									<div className="input-group">
										<input
											style={{
												border:
													nerror.error && nerror.errorData.email
														? `1px solid red`
														: `1px solid #ddd`,
											}}
											type="email"
											name="email"
											value={nstate.email}
											onChange={nchange}
										/>
										<div className="input-group-append">
											<button className="btn click-btn" type="submit">
												<div style={{ display: 'flex', alignItems: 'center' }}>
													{nloding == true ? <div className="loader" /> : <span />}{' '}
													<i className="ti-arrow-right" />
												</div>
											</button>
										</div>
									</div>
									<div style={{ position: 'absolute', left: '-5000px' }}>
										<input type="text" />
									</div>

									<div className="info"> </div>
								</form>
							</div>
						</div>
					</div>
					<div className="footer-bottom row align-items-center text-center text-lg-left">
						<p className="footer-text m-0 col-lg-8 col-md-12">
							Copyright &copy;{new Date().getFullYear()} All rights reserved | This template is made with{' '}
							<i className="ti-heart" aria-hidden="true" /> by{' '}
							<a href="https://tusher-protfolio.herokuapp.com" target="_blank">
								Jane Alam Tusher
							</a>
						</p>
						<div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
							<a href="https://www.facebook.com/janealam.tusher">
								<i className="ti-facebook" />
							</a>

							<a href="https://www.linkedin.com/in/jane-alam-tusher-00398b158/">
								<i className="ti-linkedin" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
