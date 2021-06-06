import React, { useState } from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignUpContainer, SignUpTitleContainer } from './sign-up.styles';

const SignUp = ({ signUpStart,  }) => {
	const [ userCredentials, setUserCredentials ] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleSubmit = async (event) => {
		event.preventDefault();

		if(password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		signUpStart(displayName, email, password, confirmPassword);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserCredentials({ ...userCredentials, [name]: value });
	};


	return(
		<SignUpContainer>
			<SignUpTitleContainer>I don't have an account</SignUpTitleContainer>
			<span>Sign up with your email and password</span>

			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput 
					name='displayName' 
					type='displayName' 
					value={displayName} 
					label='Display Name'
					required
					handleChange={handleChange}
				/>
				<FormInput 
					name='email' 
					type='email' 
					value={email} 
					label='Email'
					required
					handleChange={handleChange}
				/>
				<FormInput 
					name='password' 
					type='password' 
					value={password} 
					label='Password'
					required
					handleChange={handleChange}
				/>
				<FormInput 
					name='confirmPassword' 
					type='password' 
					value={confirmPassword} 
					label='Confirm Password'
					required
					handleChange={handleChange}
				/>

				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</SignUpContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	signUpStart: (displayName, email, password, confirmPassword) => dispatch(signUpStart({ displayName, email, password, confirmPassword })) 
});

export default connect(null, mapDispatchToProps)(SignUp);