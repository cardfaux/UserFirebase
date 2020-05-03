import React, { Fragment } from 'react';
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

const NavBar = (props) => {
	const classes = useStyles();
	const { user, isAuth } = props.auth;
	const { logout } = props;

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
					{user && (
						<div
							style={{ color: '#ff4500', marginRight: '4rem' }}
						>{`Hi ${user.fullName}`}</div>
					)}
					{isAuth && (
						<Button
							className={classes.link}
							aria-label='to faq page'
							component={RouterLink}
							to='/logs/me'
							color='inherit'
						>
							My Logs
						</Button>
					)}
					{isAuth && (
						<Button
							className={classes.link}
							aria-label='to faq page'
							component={RouterLink}
							to='/create/log'
							color='inherit'
						>
							Add Log
						</Button>
					)}
					{!isAuth && (
						<Fragment>
							<Button
								className={classes.link}
								aria-label='to login page'
								component={RouterLink}
								to='/login'
								color='inherit'
							>
								Login
							</Button>
							<Button
								className={classes.link}
								component={RouterLink}
								aria-label='to register page'
								to='/register'
								color='inherit'
							>
								Register
							</Button>
						</Fragment>
					)}
					{isAuth && (
						<div style={{ cursor: 'pointer' }} onClick={logout} color='inherit'>
							Logout
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
