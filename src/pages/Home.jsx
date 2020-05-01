import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import ServiceItem from '../components/ServiceItem';
import { fetchServices } from '../app/Redux/actions/index';

const Home = ({ services, fetchServices }) => {
	useEffect(() => {
		fetchServices();
	}, [fetchServices]);

	const renderServices = (services) => {
		return services.map((service) => {
			return <ServiceItem key={service.id} service={service} />;
		});
	};

	return (
		<Fragment>
			<h1 style={{ textAlign: 'center' }}>Workouts</h1>
			<div className='home-page'>{renderServices(services)}</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({ services: state.services.items });

export default connect(mapStateToProps, { fetchServices })(Home);
