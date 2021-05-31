import React from 'react';
import { connect } from 'react-redux';

import { signUpStart } from '../../redux/user/user.actions';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
	constructor() {
		super();
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const { signUpStart } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;

		if(password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		signUpStart(displayName, email, password, confirmPassword);

		this.setState({
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		});
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	}


	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return(
			<div className='sign-up'>
				<h2 className='title'>I don't have an account</h2>
				<span>Sign up with your email and password</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput 
						name='displayName' 
						type='displayName' 
						value={displayName} 
						label='Display Name'
						required
						handleChange={this.handleChange}
					/>
					<FormInput 
						name='email' 
						type='email' 
						value={email} 
						label='Email'
						required
						handleChange={this.handleChange}
					/>
					<FormInput 
						name='password' 
						type='password' 
						value={password} 
						label='Password'
						required
						handleChange={this.handleChange}
					/>
					<FormInput 
						name='confirmPassword' 
						type='password' 
						value={confirmPassword} 
						label='Confirm Password'
						required
						handleChange={this.handleChange}
					/>

					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		);
	};
};

const mapDispatchToProps = dispatch => ({
	signUpStart: (displayName, email, password, confirmPassword) => dispatch(signUpStart({ displayName, email, password, confirmPassword })) 
});

export default connect(null, mapDispatchToProps)(SignUp);