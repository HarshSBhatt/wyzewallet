import React from 'react';

export const Button = (props) => {
	const { auth } = props;
	return (
		<div className="floating-label">
			<button
				type="submit"
				className={`login-button ${auth.isLoading && 'loading-overlay'}`}
				disabled={auth.isLoading}
			>
				{props.children}
			</button>
		</div>
	);
};

//! Example of usage

/*
<Button auth={props.auth}>Sign in</Button>
*/
