import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button/Button';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		color: 'inherit',
		outline: 'none',
	},
	link: {
		color: 'inherit',
		outline: 'none',
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar>
					<Link
						component={RouterLink}
						to='/'
						variant='h6'
						className={classes.title}
						aria-label='link back home'
					>
						FireBase
					</Link>
					<Button color='inherit'>
						<Link
							className={classes.link}
							aria-label='to faq page'
							component={RouterLink}
							to='/faq'
						>
							FAQ
						</Link>
					</Button>
					<Button color='inherit'>
						<Link
							className={classes.link}
							aria-label='to login page'
							component={RouterLink}
							to='/login'
						>
							Login
						</Link>
					</Button>
					<Button color='inherit'>
						<Link
							className={classes.link}
							component={RouterLink}
							aria-label='to register page'
							to='/register'
						>
							Register
						</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
