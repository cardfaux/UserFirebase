import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './Layout/NavBar';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import FaqPage from '../pages/Faq';

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/login' component={LoginPage} />
					<Route path='/register' component={RegisterPage} />
					<Route path='/faq' component={FaqPage} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
