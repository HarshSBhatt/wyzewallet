import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Login = () => {
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
							<form className="floating-form">
								<div className="floating-label">
									<input type="email" className="floating-input" placeholder=" " />
									<label>Email address</label>
									<span className="focus-border" />
								</div>
								<div className="floating-label">
									<input type="password" className="floating-input" placeholder=" " />
									<label>Password</label>
									<span className="focus-border" />
								</div>
								<div className="floating-label">
									<button className="login-button">Sign in</button>
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
