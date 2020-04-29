import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ServiceItem from '../components/ServiceItem';
import { fetchServices } from '../app/Redux/actions/index';

const Home = ({ dispatch, services }) => {
	useEffect(() => {
		dispatch(fetchServices());
	}, [dispatch]);

	const renderServices = (services) => {
		return services.map((service) => {
			return <ServiceItem key={service.id} service={service} />;
		});
	};

	return <div>{renderServices(services)}</div>;
};

const mapStateToProps = (state) => ({ services: state.services.items });

export default connect(mapStateToProps)(Home);
