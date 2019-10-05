import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './scss/style.scss';

import Layout from './components/Layout';

import About from './components/About';
import Chef from './components/Chef';
import BlogDetails from './components/BlogDetails';
import Contact from './components/Contact';
import Home from './components/Home';

import Menu from './components/Menu';
import Tusher from './components/tusher';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<div className="App" onScroll={() => console.log('tusher')}>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" exact component={About} />
					<Route path="/chef" exact component={Chef} />

					<Route path="/contact" exact component={Contact} />
					<Route path="/menu" exact component={Menu} />
					<Route path="/about1" exact component={BlogDetails} />
					<Route path="/about2" exact component={BlogDetails} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
//{loding == true ? (<div className="loader"></div>): (<span></span>)}
