import React from 'react';
import { connect } from 'react-redux';

export const Login = () => {
	return (
		<div className="login-wrapper">
			<div className="login-component">Login</div>
			<div className="login-component">Login</div>
			<div className="login-component">Login</div>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
