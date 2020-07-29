import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { MIN_AGE, MAX_AGE, registerSchema } from '../utils';

const errorText = '#f44336';

export const Register = () => {
	const [ type, setType ] = useState('text');

	const changeToDate = () => {
		setType('date');
	};

	const { register, handleSubmit, errors } = useForm({
		resolver: yupResolver(registerSchema)
	});
	const onSubmit = (data) => console.log(data);
	return (
		<div className="login-wrapper">
			<div className="login-component">
				<div className="login-container">
					<div className="login-left">
						<img src={require('../../assets/images/generic-hero.svg')} alt="SVG not found" />
					</div>
					<div className="login-right">
						<div className="login-text">
							<span>Register</span>
						</div>
						<div className="login-form">
							<form className="floating-form" onSubmit={handleSubmit(onSubmit)}>
								{/* //! Fistname and Lastname */}

								<div className="sibling-input">
									<div className="sibling-group">
										<div className="floating-label">
											<input
												type="text"
												className="floating-input"
												placeholder=" "
												name="firstname"
												ref={register}
												autoComplete="off"
											/>
											<label style={errors.firstname && { color: errorText }}>Firstname</label>
											<span
												className="focus-border"
												style={errors.firstname && { backgroundColor: errorText }}
											/>
										</div>
										<div className="errors reg_err">
											{errors.firstname && errors.firstname.message}
										</div>
									</div>
									<div className="sibling-group">
										<div className="floating-label">
											<input
												type="text"
												className="floating-input"
												placeholder=" "
												name="lastname"
												ref={register}
												autoComplete="off"
											/>
											<label style={errors.lastname && { color: errorText }}>Lastname</label>
											<span
												className="focus-border"
												style={errors.lastname && { backgroundColor: errorText }}
											/>
										</div>
										<div className="errors reg_err">
											{errors.lastname && errors.lastname.message}
										</div>
									</div>
								</div>

								{/* //! Email */}

								<div className="floating-label">
									<input
										type="text"
										className="floating-input"
										placeholder=" "
										name="email"
										ref={register}
										autoComplete="off"
									/>
									<label style={errors.email && { color: errorText }}>Email</label>
									<span
										className="focus-border"
										style={errors.email && { backgroundColor: errorText }}
									/>
								</div>
								<div className="errors reg_err">{errors.email && errors.email.message}</div>

								{/* //! Password & Confirm Password */}

								<div className="sibling-input">
									<div className="sibling-group">
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
										<div className="errors reg_err">
											{errors.password && errors.password.message}
										</div>
									</div>
									<div className="sibling-group">
										<div className="floating-label">
											<input
												type="password"
												className="floating-input"
												placeholder=" "
												name="passwordConfirmation"
												ref={register}
												autoComplete="off"
											/>
											<label style={errors.passwordConfirmation && { color: errorText }}>
												Confirm Password
											</label>
											<span
												className="focus-border"
												style={errors.passwordConfirmation && { backgroundColor: errorText }}
											/>
										</div>
										<div className="errors reg_err">
											{errors.passwordConfirmation && errors.passwordConfirmation.message}
										</div>
									</div>
								</div>

								{/* //! Gender */}

								<div className="floating-label">
									<select className="floating-select" name="gender" ref={register} required>
										<option value="" />
										<option value="Male">Male</option>
										<option value="Female">Female</option>
										<option value="Other">Prefer not to say</option>
									</select>
									<label style={errors.gender && { color: errorText }}>Gender</label>
									<span
										className="focus-border"
										style={errors.gender && { backgroundColor: errorText }}
									/>
								</div>
								<div className="errors reg_err">{errors.gender && errors.gender.message}</div>

								{/* //! Birthdate */}

								<div className="floating-label">
									<input
										type={type}
										className="floating-input"
										placeholder=" "
										name="birthdate"
										ref={register}
										autoComplete="off"
										onClick={changeToDate}
										min={MIN_AGE}
										max={MAX_AGE}
									/>
									<label style={errors.birthdate && { color: errorText }}>Birth Date</label>
									<span
										className="focus-border"
										style={errors.birthdate && { backgroundColor: errorText }}
									/>
								</div>
								<div className="errors reg_err">{errors.birthdate && errors.birthdate.message}</div>

								{/* //! Register */}

								<div className="floating-label">
									<button type="submit" className="login-button">
										Register
									</button>
								</div>
							</form>
							<div className="login-to-register">
								<span className="account-text">
									Already have an account? <Link to="/login">Sign in</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
