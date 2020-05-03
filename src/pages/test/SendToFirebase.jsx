import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';

const SendToFirebase = () => {
	const [image, setImage] = useState(null);
	const handleChage = (event) => {
		if (event.target.files[0]) {
			setImage(event.target.files[0]);
		}
	};
	const handleUpload = () => {
		const user = firebase.auth().currentUser;

		const uploadTask = firebase
			.storage()
			//.ref(`images/${image.name}`)
			.ref(`${user.uid}/user_images/${image.name}`)
			.put(image);
		uploadTask.on(
			'state_changed',
			(snapShot) => {},
			(error) => {
				console.log(error);
			},
			() => {
				firebase
					.storage()
					//.ref('images')
					.ref(`${user.uid}/user_images`)
					.child(image.name)
					.getDownloadURL()
					.then((url) => {
						console.log(url);
					});
			}
		);
	};
	console.log('IMAGEUPLOAD', image);
	return (
		<div>
			<h1>Test Page</h1>
			<input type='file' onChange={handleChage} />
			<button onClick={handleUpload}>Upload</button>
		</div>
	);
};

export default SendToFirebase;
