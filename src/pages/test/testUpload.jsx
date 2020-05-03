import React from 'react';
import TestImage from './testPageUpload';

const TestUpload = () => {
	const onInput = (event) => {
		console.log(event.files);
	};

	return (
		<div>
			<TestImage id='image' onInput={onInput} />
		</div>
	);
};

export default TestUpload;
