import React from 'react';
import { Button, Divider, Container, Form, Input } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginStyling = styled.section`
	margin: 50px 0;

	form{
		padding: 15px;
		margin: 10px 0;
		width: 500px;
		max-width: 100%;
		box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

		div.cta{
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		input:focus, input:active{
			border-color: orange !important;
		}
	}

	div.form-wrapper{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`

const Login: React.FC = () =>{

	return (
		<LoginStyling>
			<Container>
				<div className='form-wrapper'>
				<Divider horizontal>
			      <h2>Log-In</h2>
			    </Divider>
				<Form>
					<Form.Field
						control={Input}
						label='Username'
						placeholder='User Name'
					/>
					<Form.Field
						control={Input}
						label='Email Address'
						placeholder='Email Address'
					/>
					<Form.Field
						control={Input}
						label='Password'
						placeholder='Password'
					/>
					<Form.Field
						control={Input}
						label='Confirm Password'
						placeholder='Confirm Password'
					/>
					<div className='cta'>
						<Button color='orange'>
						Log In
					</Button>
					<span>Not Registered ? <Link to='signup'>Click Here</Link></span>
					</div>

				</Form>
				</div>
			</Container>
		</LoginStyling>
	)
}

export default Login;
