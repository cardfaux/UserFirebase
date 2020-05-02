import React, { useEffect, Fragment } from 'react';
import withAuthorization from '../components/hoc/withAuthorization';
import ServiceItem from '../components/ServiceItem';

import { fetchUserServices } from '../app/Redux/actions/index';

const UserServices = (props) => {
	const {
		auth: { user },
		dispatch,
	} = props;
	const { services } = user;
	console.log('USER', user);

	useEffect(() => {
		dispatch(fetchUserServices(user.uid));
	}, [dispatch, user.uid]);

	const renderServices = (services) => {
		return services.map((service) => {
			return <ServiceItem user={user} key={service.id} service={service} />;
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

export default withAuthorization(UserServices);
