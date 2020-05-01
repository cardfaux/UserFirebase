import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		width: 345,
		margin: 20,
	},
	media: {
		height: 140,
	},
});

const ServiceItem = ({ service }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={service.image}
					title={service.title}
				/>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{service.title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{service.description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary'>
					<Link to={`/services/${service.id}`}>See Details</Link>
				</Button>
			</CardActions>
		</Card>
	);
};

export default ServiceItem;
