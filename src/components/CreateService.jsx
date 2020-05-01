/* eslint-disable no-useless-escape */
import React from 'react';
import { useForm } from 'react-hook-form';

import { isValidImage, isValidUrl } from '../app/utils/validators';

const CreateService = (props) => {
	const { register, handleSubmit, errors } = useForm();

	return (
		<div className='register-form'>
			<form onSubmit={handleSubmit(props.onFormData)}>
				<div className='field'>
					<div className='control'>
						<input
							ref={register({ required: true })}
							name='name'
							className='input is-large'
							type='text'
							placeholder='Name'
						/>
						{errors.name && (
							<div className='form-error'>
								{errors.name.type === 'required' && (
									<span className='help is-danger'>Name is required</span>
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
						<textarea
							ref={register({ maxLength: 100 })}
							name='notes'
							className='input is-large'
							rows='5'
							placeholder='Notes'
						/>
						{errors.notes && (
							<div className='form-error'>
								{errors.notes.type === 'maxLength' && (
									<span className='help is-danger'>
										Maximum length is 100 characters
									</span>
								)}
							</div>
						)}
					</div>
				</div>
				<button type='submit' className='button-primary'>
					Save Workout
				</button>
			</form>
		</div>
	);
};

export default CreateService;
