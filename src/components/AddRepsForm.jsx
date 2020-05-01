/* eslint-disable no-useless-escape */
import React from 'react';
import { useForm } from 'react-hook-form';

const AddRepsForm = (props) => {
	const { register, handleSubmit, errors } = useForm();

	return (
		<div className='register-form'>
			<form onSubmit={handleSubmit(props.onFormData)}>
				<div className='field'>
					<div className='control'>
						<input
							ref={register({ required: true })}
							name='reps'
							className='input is-large'
							type='number'
							placeholder='Number Of Reps'
						/>
						{errors.reps && (
							<div className='form-error'>
								{errors.reps.type === 'required' && (
									<span className='help is-danger'>
										Number Of Reps Is Required
									</span>
								)}
							</div>
						)}
					</div>
				</div>

				<div className='field'>
					<div className='control'>
						<input
							ref={register({ required: true })}
							name='weight'
							className='input is-large'
							type='number'
							placeholder='Weight'
						/>
						{errors.weight && (
							<div className='form-error'>
								{errors.weight.type === 'maxLength' && (
									<span className='help is-danger'>
										Amount Of Weight Is Required
									</span>
								)}
							</div>
						)}
					</div>
				</div>
				<button type='submit' className='button-primary'>
					Save
				</button>
			</form>
		</div>
	);
};

export default AddRepsForm;
