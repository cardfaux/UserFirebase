import React, { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchServiceById } from '../app/Redux/actions/index';
import LoadingSpinner from '../components/LoadingSpinner';
import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import AddRepsModal from '../components/AddRepsModal';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		overflow: 'hidden',
		textAlign: 'center',
	},
	title: {
		fontSize: '2rem',
	},
	details: {
		margin: 'auto',
	},
	item: {
		marginTop: '5rem',
	},
}));

const ServiceDetail = ({ fetchServiceById, isFetching, service }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const onFormData = (formData) => {
		console.log(formData);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const { serviceId } = useParams();

	useEffect(() => {
		fetchServiceById(serviceId);
	}, [serviceId, fetchServiceById]);

	if (isFetching || serviceId !== service.id) {
		return <LoadingSpinner />;
	}

	return (
		<Fragment>
			<AddRepsModal
				open={open}
				handleClose={handleClose}
				handleOpen={handleOpen}
				onFormData={onFormData}
			/>
			<Button onClick={() => setOpen(true)}>Open Modal</Button>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid className={classes.title} item xs={12}>
						{service.title}
					</Grid>
					<Grid item xs={6}>
						<img
							style={{ width: '30rem' }}
							src={service.image}
							alt={service.title}
						/>
					</Grid>
					<Grid className={classes.details} item xs={6}>
						{service.details}
					</Grid>
					<Grid className={classes.item} item xs={4}>
						Number of Sets = {service.sets}
					</Grid>
					<Grid className={classes.item} item xs={4}>
						Number Of Reps = {service.reps}
					</Grid>
					<Grid className={classes.item} item xs={4}>
						Amount Of Weight = {service.weight}
					</Grid>
				</Grid>
			</div>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	service: state.selectedService.item,
	isFetching: state.selectedService.isFetching,
});

export default connect(mapStateToProps, { fetchServiceById })(ServiceDetail);
