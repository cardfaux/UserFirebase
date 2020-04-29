import React from 'react';

import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => {
	return (
		<div className='spinner-container'>
			<div className='lds-hourglass'></div>
		</div>
	);
};

export default LoadingSpinner;
