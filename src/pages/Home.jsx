import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ServiceItem from '../components/ServiceItem';
import { fetchServices } from '../app/Redux/actions/index';

const Home = (props) => {
	useEffect(() => {
		const { dispatch } = props;
		dispatch(fetchServices());
	}, [props]);

	const renderServices = (services) => {
		return services.map((service) => {
			return <ServiceItem key={service.id} service={service} />;
		});
	};

	const { services } = props;

	return <div>{renderServices(services)}</div>;
};

const mapStateToProps = (state) => ({ services: state.service.items });

export default connect(mapStateToProps)(Home);
