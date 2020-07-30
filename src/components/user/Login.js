import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';

import { loginSchema } from '../utils';
import { loginUser } from '../../store/actions';

const errorText = '#f44336';

export const Login = (props) => {
	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(loginSchema)
	});
	const onSubmit = (data) => {
		props.loginUser(data);
	};
	if (props.auth.isAuthenticated) {
		// const route = props.location.state;
		// const redirectTo = route === undefined ? '/' : route.from.pathname;
		return <Redirect to="/" />;
	}
	return (
		<div className="login-wrapper">
			<div className="login-component">
				<div className="login-container">
					<div className="login-left">
						<img src={require('../../assets/images/generic-hero.svg')} alt="SVG not found" />
					</div>
					<div className="login-right">
						<div className="login-text">
							<span>Sign in</span>
						</div>
						<div className="login-form">
							<form className="floating-form" onSubmit={handleSubmit(onSubmit)}>
								<div className="floating-label">
									<input
										type="text"
										className="floating-input"
										placeholder=" "
										name="email"
										ref={register}
										autoComplete="off"
									/>
									<label style={errors.email && { color: errorText }}>Email address</label>
									<span
										className="focus-border"
										style={errors.email && { backgroundColor: errorText }}
									/>
								</div>
								<div className="errors">{errors.email && errors.email.message}</div>

								<div className="floating-label">
									<input
										type="password"
										className="floating-input"
										placeholder=" "
										name="password"
										ref={register}
										autoComplete="off"
									/>
									<label style={errors.password && { color: errorText }}>Password</label>
									<span
										className="focus-border"
										style={errors.password && { backgroundColor: errorText }}
									/>
								</div>
								<div className="errors">{errors.password && errors.password.message}</div>
								<div className="floating-label">
									<button
										type="submit"
										className={`login-button ${props.auth.isLoading && 'loading-overlay'}`}
										disabled={props.auth.isLoading}
									>
										Sign in
									</button>
								</div>
							</form>
							<div className="login-to-register">
								<span className="account-text">
									Don't have an account? <Link to="/register">Sign up</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
	loginUser: (creds) => dispatch(loginUser(creds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
