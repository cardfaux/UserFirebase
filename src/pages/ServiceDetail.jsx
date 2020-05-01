import React, { useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchServiceById } from '../app/Redux/actions/index';
import LoadingSpinner from '../components/LoadingSpinner';

const ServiceDetail = ({ fetchServiceById, isFetching, service }) => {
	const { serviceId } = useParams();

	useEffect(() => {
		fetchServiceById(serviceId);
	}, [serviceId, fetchServiceById]);

	if (isFetching || serviceId !== service.id) {
		return <LoadingSpinner />;
	}

	return (
		<Fragment>
			<section className='detail-page'>
				<div className='hero-body'>
					<div className='container has-text-centered'>
						<div className='columns is-vcentered'>
							<div className='column is-5'>
								<h1>{service.title}</h1>
								<figure className='image'>
									<img src={service.image} alt='Description' />
								</figure>
							</div>
							<div className='column is-6 is-offset-1'>
								<h2 className='subtitle is-4'>{service.description}</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='detail-info'>
				<div className='reps'>
					<h1>Monday</h1>
				</div>
				<div className='weight'>
					<h1>Tuesday</h1>
				</div>
				<div className='weight'>
					<h1>Wednesday</h1>
				</div>
				<div className='weight'>
					<h1>Thursday</h1>
				</div>
				<div className='weight'>
					<h1>Friday</h1>
				</div>
			</section>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	service: state.selectedService.item,
	isFetching: state.selectedService.isFetching,
});

export default connect(mapStateToProps, { fetchServiceById })(ServiceDetail);
