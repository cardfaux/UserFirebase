import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import withAuthorization from '../components/hoc/withAuthorization';
import LogItem from '../components/logs/LogItem';
import { fetchLogs } from '../app/Redux/actions/index';

const Home = ({ services, fetchLogs }) => {
	useEffect(() => {
		fetchLogs();
	}, [fetchLogs]);

	const renderServices = (services) => {
		return services.map((service) => {
			return <LogItem key={service.id} service={service} />;
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

export default withAuthorization(connect(mapStateToProps, { fetchLogs })(Home));
