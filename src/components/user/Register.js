import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import { MIN_AGE, MAX_AGE, registerSchema } from "../utils";
import { InputElement, ButtonElement, DateElement } from "../elements";

const errorText = "#f44336";
const primary_text_color = "#5264ae";
const blur_text_color = "#aaa";

export const Register = (props) => {
  const [type, setType] = useState("text");
  const [color, setColor] = useState(false);

  const changeToDate = () => {
    setType("date");
  };

  const { register, handleSubmit, errors } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const handleFoucs = (e) => {
    const label = document.getElementById("gen-label");
    label.style.color = primary_text_color;
    label.style.top = "-15px";
    label.style.left = "0";
  };
  const handleBlur = (e) => {
    const label = document.getElementById("gen-label");
    if (e.target.value !== "") {
      label.style.color = primary_text_color;
      label.style.top = "-15px";
      label.style.left = "0";
      setColor(e.target.value !== "");
    } else if (errors.gender !== undefined) {
      label.style.color = errorText;
      label.style.top = "5px";
      label.style.left = "5px";
    } else {
      label.style.color = blur_text_color;
      label.style.top = "5px";
      label.style.left = "5px";
    }
  };

  const onSubmit = (data) => console.log(data);
  return (
    <div className="login-wrapper">
      <div className="login-component register-component">
        <div className="login-container">
          <div className="login-left">
            <img
              src={require("../../assets/images/generic-hero.svg")}
              alt="SVG not found"
            />
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
                    <InputElement
                      type="text"
                      name="firstname"
                      ref={register}
                      errors={errors.firstname}
                      label="Firstname"
                      errorText={errorText}
                      newClass="reg_err"
                    />
                  </div>
                  <div className="sibling-group">
                    <InputElement
                      type="text"
                      name="lastname"
                      ref={register}
                      errors={errors.lastname}
                      label="Lastname"
                      errorText={errorText}
                      newClass="reg_err"
                    />
                  </div>
                </div>

                {/* //! Email */}

                <InputElement
                  type="text"
                  name="email"
                  ref={register}
                  errors={errors.email}
                  label="Email"
                  errorText={errorText}
                  newClass="reg_err"
                />

                {/* //! Password & Confirm Password */}

                <div className="sibling-input">
                  <div className="sibling-group">
                    <InputElement
                      type="password"
                      name="password"
                      ref={register}
                      errors={errors.password}
                      label="Password"
                      errorText={errorText}
                      newClass="reg_err"
                    />
                  </div>
                  <div className="sibling-group">
                    <InputElement
                      type="password"
                      name="passwordConfirmation"
                      ref={register}
                      errors={errors.passwordConfirmation}
                      label="Confirm Password"
                      errorText={errorText}
                      newClass="reg_err"
                    />
                  </div>
                </div>

                {/* //! Gender */}

                <div className="floating-label">
                  <select
                    className="floating-select"
                    name="gender"
                    // onClick={handleClick}
                    ref={register}
                    defaultValue=""
                    onFocus={handleFoucs}
                    onBlurCapture={handleBlur}
                  >
                    <option value="" />
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Prefer not to say</option>
                  </select>
                  <label
                    id="gen-label"
                    className={`${color && "focused"} `}
                    style={errors.gender && { color: errorText }}
                  >
                    Gender
                  </label>
                  <span
                    className="focus-border"
                    style={errors.gender && { backgroundColor: errorText }}
                  />
                </div>
                {errors.gender ? (
                  <div className="errors reg_err">{errors.gender.message}</div>
                ) : (
                  <div className="blank reg_err">dummy</div>
                )}
                {/* //! Birthdate */}

                <DateElement
                  type={type}
                  name="birthdate"
                  ref={register}
                  errors={errors.birthdate}
                  label="Birth Date"
                  errorText={errorText}
                  newClass="reg_err"
                  onClick={changeToDate}
                  min={MIN_AGE}
                  max={MAX_AGE}
                />

                {/* //! Register */}

                <ButtonElement auth={props.auth}>Register</ButtonElement>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
