import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	const [ state, setstate ] = useState(false);
	return (
		<React.Fragment>
			<header className="header_area">
				<div className="main_menu">
					<nav className="navbar navbar-expand-lg navbar-light">
						<div className="container box_1620">
							<NavLink className="navbar-brand logo_h" to="/">
								<img onClick={() => console.log('shorna')} src="img/logo.png" alt="logo" />
							</NavLink>
							<button className="navbar-toggler" type="button" onClick={() => setstate(!state)}>
								<span className="icon-bar" />
								<span className="icon-bar" />
								<span className="icon-bar" />
							</button>

							<div
								style={{ transition: 'all 1s' }}
								className={`collapse navbar-collapse ${state && 'bongcong'}`}
								id="navbarSupportedContent"
							>
								<ul
									style={{ transition: 'all 1s' }}
									className="nav navbar-nav menu_nav justify-content-end"
								>
									<li className="nav-item">
										<NavLink
											className="nav-link"
											to="/"
											exact
											activeStyle={{
												fontWeight: 'bold',
												color: 'red',
											}}
										>
											Home
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className="nav-link"
											to="/about"
											activeStyle={{
												fontWeight: 'bold',
												color: 'red',
											}}
										>
											About
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className="nav-link"
											to="/menu"
											activeStyle={{
												fontWeight: 'bold',
												color: 'red',
											}}
										>
											Menu
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className="nav-link"
											to="/chef"
											activeStyle={{
												fontWeight: 'bold',
												color: 'red',
											}}
										>
											Chef
										</NavLink>
									</li>

									<li className="nav-item">
										<NavLink
											className="nav-link"
											to="/contact"
											activeStyle={{
												fontWeight: 'bold',
												color: 'red',
											}}
										>
											Contact
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</header>
		</React.Fragment>
	);
}

export default Header;
