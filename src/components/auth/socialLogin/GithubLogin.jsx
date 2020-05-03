import React from 'react';
import Button from '@material-ui/core/Button';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

import { signInWithGitHub } from '../../../api/auth';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '1rem',
		backgroundColor: '#24292E',
		color: 'white',
		'&:hover': {
			backgroundColor: '#404448',
			borderColor: '#404448',
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
		<Button onClick={signInWithGitHub} className={classes.root}>
			<Icon className='fab fa-github' color='' />
		</Button>
	);
}
