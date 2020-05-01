import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuthorization = (Component) => {
	const WithAuthorization = (props) => {
		const { auth } = props;
		return auth.isAuth ? <Component {...props} /> : <Redirect to='/login' />;
	};

	const mapStateToProps = (state) => {
		return { auth: state.auth };
	};
	return connect(mapStateToProps)(WithAuthorization);
};

export default withAuthorization;
