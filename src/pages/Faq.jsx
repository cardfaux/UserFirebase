import React from 'react';
import withAuthorization from '../components/hoc/withAuthorization';

const Faq = () => {
	return (
		<div>
			<h1>I am FAQ Page</h1>
		</div>
	);
};

export default withAuthorization(Faq);
