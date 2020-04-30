import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const onlyGuest = (Component) => {
	const OnlyGuest = (props) => {
		const { auth, dispatch, ...rest } = props;
		return auth.isAuth ? <Redirect to='/' /> : <Component {...rest} />;
	};

	const mapStateToProps = (state) => {
		return { auth: state.auth };
	};
	return connect(mapStateToProps)(OnlyGuest);
};

export default onlyGuest;
