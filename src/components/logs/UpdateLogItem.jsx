/* eslint-disable no-useless-escape */
import React from 'react';
import { useForm } from 'react-hook-form';

import { isValidImage, isValidUrl } from '../../app/utils/validators';

const UpdateLogItem = (props) => {
	const { register, handleSubmit, errors } = useForm();

	return (
		<div className='register-form'>
			<form onSubmit={handleSubmit(props.onFormData)}>
				<div className='field'>
					<div className='control'>
						<input
							ref={register({ required: true })}
							name='title'
							className='input is-large'
							type='text'
							placeholder='Title'
							defaultValue={props.title}
						/>
						{errors.name && (
							<div className='form-error'>
								{errors.name.type === 'required' && (
									<span className='help is-danger'>Title is required</span>
								)}
							</div>
						)}
					</div>
				</div>

				<div className='field'>
					<div className='control'>
						<input
							ref={register({
								validate: { isValidImage, isValidUrl },
							})}
							name='image'
							className='input is-large'
							type='text'
							placeholder='Image URL'
							defaultValue={props.image}
						/>
						{errors.avatar && (
							<div className='form-error'>
								{errors.image.type === 'isValidImage' && (
									<span className='help is-danger'>
										Avatar extenstion is not valid
									</span>
								)}
								{errors.image.type === 'isValidUrl' && (
									<span className='help is-danger'>Image url is not valid</span>
								)}
							</div>
						)}
					</div>
				</div>

				<div className='field'>
					<div className='control'>
						<input
							ref={register()}
							name='sets'
							className='input is-large'
							type='number'
							placeholder='Number Of Sets'
							defaultValue={props.sets}
						/>
					</div>
				</div>

				<div className='field'>
					<div className='control'>
						<input
							ref={register()}
							name='reps'
							className='input is-large'
							type='number'
							placeholder='Number Of Repitions'
							defaultValue={props.reps}
						/>
					</div>
				</div>

				<div className='field'>
					<div className='control'>
						<input
							ref={register()}
							name='weight'
							className='input is-large'
							type='number'
							placeholder='Amount Of Weight'
							defaultValue={props.weight}
						/>
					</div>
				</div>

				<div className='field'>
					<div className='control'>
						<textarea
							ref={register({ maxLength: 1000 })}
							name='details'
							className='input is-large'
							rows='5'
							placeholder='Log Details'
							defaultValue={props.details}
						/>
						{errors.details && (
							<div className='form-error'>
								{errors.details.type === 'maxLength' && (
									<span className='help is-danger'>
										Maximum length is 1000 characters
									</span>
								)}
							</div>
						)}
					</div>
				</div>
				<button type='submit' className='button-primary'>
					Update Workout
				</button>
			</form>
		</div>
	);
};

export default UpdateLogItem;
