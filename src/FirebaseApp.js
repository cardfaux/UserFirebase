import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import LoadingSpinner from './components/LoadingSpinner';
import Navbar from './app/Layout/NavBar';
import Routes from './app/Layout/Routes';

import { logout } from './app/Redux/actions/index';

const FirebaseApp = (props) => {
	const logoutUser = () => props.logout();

	return props.auth.isAuthResolved ? (
		<Fragment>
			<Navbar logout={logoutUser} auth={props.auth} />
			<Routes />
		</Fragment>
	) : (
		<LoadingSpinner />
	);
};

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	};
};

export default connect(mapStateToProps, { logout })(FirebaseApp);
