import React, { Fragment, forwardRef } from 'react';

export const Input = forwardRef(({ type, name, errors, label, errorText, newClass }, ref) => (
	<Fragment>
		<div className="floating-label">
			<input type={type} className="floating-input" placeholder=" " name={name} ref={ref} autoComplete="off" />
			<label style={errors && { color: errorText }}>{label}</label>
			<span className="focus-border" style={errors && { backgroundColor: errorText }} />
		</div>
		<div className={`errors ${newClass}`}>{errors && errors.message}</div>
	</Fragment>
));

//! Example of usage

/*
<Input type="text" name="email" ref={register} errors={errors.email} label="Email address" errorText={errorText} />;
*/
