import React from 'react';

export const Button = (props) => {
	const { auth } = props;
	return (
		<div className="floating-label">
			<button type="submit" className="login-button" disabled={auth.isLoading}>
				{auth.isLoading && (
					<span>
						<img src={require('../../assets/loader.svg')} alt="SVG not found" />
					</span>
				)}
				<span>{props.children}</span>
			</button>
		</div>
	);
};

//! Example of usage

/*
<Button auth={props.auth}>Sign in</Button>
*/
