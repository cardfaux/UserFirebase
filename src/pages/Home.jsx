import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import ServiceItem from '../components/ServiceItem';
import { fetchServices } from '../app/Redux/actions/index';

const Home = ({ services, fetchServices, authUser }) => {
	useEffect(() => {
		fetchServices();
	}, [fetchServices]);

	const renderServices = (services) => {
		return services.map((service) => {
			return <ServiceItem user={authUser} key={service.id} service={service} />;
		});
	};

	return (
		<Fragment>
			<h1 className='mt-2' style={{ textAlign: 'center' }}>
				Everybodys Logs
			</h1>
			<div className='home-page'>{renderServices(services)}</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	services: state.services.items,
	authUser: state.auth.user,
});

export default connect(mapStateToProps, { fetchServices })(Home);
