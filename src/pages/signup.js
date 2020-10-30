import React, { useState }from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components';
import * as ROUTES from '../constants/routes'

export default function Signup() {
	const [firstName, setFirstName] = useState('');
	const [emailAddress, setEmailAddress] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const isInvalid = password == '' | emailAddress === '' | firstName === '';
	 
	const handleSignup = (event) => {
		event.preventDefault();
	}

	return (
		<>
		<HeaderContainer>
			<p>Hello</p>
		
		<Form>
			<Form.Title>Sign Up</Form.Title>
			{error && <Form.Error>{error}</Form.Error>}
			<Form.Base OnSubmit={handleSignup} method="POST">
				<Form.Input
					placeholder="First Name"
					value={firstName}
					onChange={({ target }) => setFirstName(target.value)}
				/>
			 	<Form.Input 
					placeholder="Email address"
					value={emailAddress}
					onChange={({ target }) => setEmailAddress(target.value)}
				/>
				<Form.Input 
					type="password"
					placeholder="Password"
					value={password}
					autoComplete="off"
					onChange={({ target }) => setPassword(target.value)}
				/>
				<Form.Submit disabled={isInvalid} type="submit">
                        Sign In
                </Form.Submit>
                <Form.Text>
						Already a user? <Form.Link to="/signin">Sign in here.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected but Google reCAPTCHA.
					</Form.TextSmall>
							
			</Form.Base>
		</Form>
		</HeaderContainer>
		<FooterContainer />
		</>
	)
}
