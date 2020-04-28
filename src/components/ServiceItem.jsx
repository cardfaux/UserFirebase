import React from 'react';

const ServiceItem = ({ service }) => {
	return (
		<div>
			<h1>{service.title}</h1>
			<div>
				<img src={service.image} alt={service.title} />
			</div>
			<div>
				<h3>{service.description}</h3>
			</div>
		</div>
	);
};

export default ServiceItem;
