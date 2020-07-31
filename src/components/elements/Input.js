import React, { Fragment, forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

const PASSWORD_LENGTH = 15;

export const Input = forwardRef(({ type, name, errors, label, errorText, newClass }, ref) => {
	const [ showPassword, setShowPassword ] = useState(false);
	const handleEyeChange = () => {
		setShowPassword(!showPassword);
	};
	return (
		<Fragment>
			<div className="floating-label">
				{type === 'password' ? (
					<Fragment>
						{showPassword ? (
							<Fragment>
								<span className="show-password" onClick={handleEyeChange}>
									<Eye />
								</span>
								<input
									type="text"
									className="floating-input"
									placeholder=" "
									name={name}
									ref={ref}
									autoComplete="off"
									maxLength={PASSWORD_LENGTH}
								/>
							</Fragment>
						) : (
							<Fragment>
								<span className="show-password" onClick={handleEyeChange}>
									<EyeOff />
								</span>
								<input
									type="password"
									className="floating-input"
									placeholder=" "
									name={name}
									ref={ref}
									autoComplete="off"
									maxLength={PASSWORD_LENGTH}
								/>
							</Fragment>
						)}
					</Fragment>
				) : (
					<input
						type={type}
						className="floating-input"
						placeholder=" "
						name={name}
						ref={ref}
						autoComplete="off"
					/>
				)}

				<label style={errors && { color: errorText }}>{label}</label>
				<span className="focus-border" style={errors && { backgroundColor: errorText }} />
			</div>
			<div className={`errors ${newClass}`}>{errors && errors.message}</div>
		</Fragment>
	);
});

//! Example of usage

/*
<Input type="text" name="email" ref={register} errors={errors.email} label="Email address" errorText={errorText} />;
*/
