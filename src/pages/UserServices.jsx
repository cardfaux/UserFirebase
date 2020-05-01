import React, { useEffect } from 'react';
import withAuthorization from '../components/hoc/withAuthorization';
import ServiceItem from '../components/ServiceItem';

import { fetchUserServices } from '../app/Redux/actions/index';

const UserServices = (props) => {
	const {
		auth: { user },
		dispatch,
	} = props;
	const { services } = user;

	useEffect(() => {
		dispatch(fetchUserServices(user.uid));
	}, [dispatch, user.uid]);

	return (
		<div className='container'>
			<div className='content-wrapper'>
				<h1 className='title'>Your Services</h1>
				<div className='columns is-multiline'>
					{services.map((service) => (
						<div key={service.id} className='column'>
							<ServiceItem service={service} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default withAuthorization(UserServices);
