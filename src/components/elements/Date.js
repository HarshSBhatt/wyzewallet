import React, { Fragment, forwardRef } from 'react';

export const Date = forwardRef(({ type, name, errors, label, errorText, newClass, onClick, min, max }, ref) => (
	<Fragment>
		<div className="floating-label">
			<input
				type={type}
				className="floating-input"
				placeholder=" "
				name={name}
				ref={ref}
				autoComplete="off"
				onClick={onClick}
				min={min}
				max={max}
			/>
			<label style={errors && { color: errorText }}>{label}</label>
			<span className="focus-border" style={errors && { backgroundColor: errorText }} />
		</div>
		{errors ? (
			<div className={`errors ${newClass}`}>{errors.message}</div>
		) : (
			<div className={`blank ${newClass}`}>dummy</div>
		)}
	</Fragment>
));

//! Example of usage

/*
<Date type={type} name="birthdate" ref={register} errors={errors.birthdate} label="Birth Date" errorText={errorText} newClass="reg_err" onClick={changeToDate} min={MIN_AGE} max={MAX_AGE} />
*/
