import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { deleteLog } from '../../app/Redux/actions/index';

const useStyles = makeStyles({
	root: {
		width: 345,
		margin: 20,
	},
	media: {
		height: 140,
	},
});

const LogItem = ({ service, user }) => {
	const [redirect, setRedirect] = useState(false);
	const { addToast } = useToasts();
	const classes = useStyles();

	const handleDelete = async () => {
		try {
			const dataUpdated = await deleteLog(service.id);

			addToast('Deleted Successfully', { appearance: 'success' });
			setRedirect(true);
			return dataUpdated;
		} catch (error) {
			addToast(error, { appearance: 'error' });
		}
	};

	if (redirect) return <Redirect to='/' />;

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={service.image}
					title={service.name}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{service.title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{service.details}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				{service.user.id === user.user.uid && (
					<Button size='small' color='primary'>
						<Link to={`/services/${service.id}`}>See Details</Link>
					</Button>
				)}
				{service.user.id === user.user.uid && (
					<Button size='small' color='secondary'>
						<Link to={`/service/update/${service.id}`}>Edit</Link>
					</Button>
				)}
				{service.user.id === user.user.uid && (
					<Button onClick={handleDelete} size='small' color='secondary'>
						Delete
					</Button>
				)}
			</CardActions>
		</Card>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.auth,
	};
};

export default connect(mapStateToProps)(LogItem);
