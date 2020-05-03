import React from 'react';
import Button from '@material-ui/core/Button';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import { signInWithGoogle } from '../../../api/auth';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#DB4437',
		color: 'white',
		'&:hover': {
			backgroundColor: '#0069d9',
			borderColor: '#0062cc',
			boxShadow: 'none',
			transition: 'background-color 300ms linear',
		},
	},
}));

export default function GoogleLogin() {
	const classes = useStyles();

	React.useEffect(() => {
		loadCSS(
			'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
			document.querySelector('#font-awesome-css')
		);
	}, []);

	return (
		<Button onClick={signInWithGoogle} className={classes.root}>
			<Icon className='fab fa-google' />
		</Button>
	);
}
