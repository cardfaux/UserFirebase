import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import withAuthorization from '../../components/hoc/withAuthorization';
import LogItem from '../../components/logs/LogItem';

import { fetchUserLogs } from '../../app/Redux/actions/index';

const UserServices = (props) => {
	const {
		auth: { user },
		fetchUserLogs,
	} = props;
	const { services } = user;
	console.log('USER', user);
	console.log('SERVICES', services);

	useEffect(() => {
		fetchUserLogs(user.uid);
	}, [user.uid, fetchUserLogs]);

	const renderServices = (services) => {
		return services.map((service) => {
			return <LogItem key={service.id} service={service} />;
		});
	};

	return (
		<Fragment>
			<h1 className='mt-2' style={{ textAlign: 'center' }}>
				Your Logs
			</h1>
			<div className='home-page'>{renderServices(services)}</div>
		</Fragment>
	);
};

export default withAuthorization(
	connect(null, { fetchUserLogs })(UserServices)
);
