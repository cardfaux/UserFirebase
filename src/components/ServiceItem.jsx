import React from 'react';
import { Link } from 'react-router-dom';

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
			<Link to={`/services/${service.id}`}>Learn More</Link>
		</div>
	);
};

export default ServiceItem;
