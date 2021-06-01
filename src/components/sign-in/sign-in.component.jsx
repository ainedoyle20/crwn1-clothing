import React, { useState } from 'react';
import { connect } from 'react-redux'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, SignInTitle, ButtonsBarContainer } from './sign-in.styles';

const SignIn = ({ emailSignInStart, googleSignInStart}) => {
	const [ userCredentials, setCredentials ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = userCredentials;
	const handleSubmit = async (event) => {
		event.preventDefault();

		emailSignInStart(email, password);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};
	
	return(
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
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
				<ButtonsBarContainer>
					<CustomButton type='submit'>SIGN IN</CustomButton>
					<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password ) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);