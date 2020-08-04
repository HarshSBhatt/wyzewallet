import React, { Fragment, forwardRef, useState } from "react";
import { Eye, EyeOff } from "react-feather";

export const Input = forwardRef(
  ({ type, name, errors, label, errorText, newClass }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleEyeChange = () => {
      setShowPassword(!showPassword);
    };
    return (
      <Fragment>
        {type === "password" ? (
          <div className="floating-label password">
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
                />
              </Fragment>
            )}

            <label style={errors && { color: errorText }}>{label}</label>
            <span
              className="focus-border"
              style={errors && { backgroundColor: errorText }}
            />
          </div>
        ) : (
          <div className="floating-label">
            <input
              type={type}
              className="floating-input"
              placeholder=" "
              name={name}
              ref={ref}
              autoComplete="off"
            />

            <label style={errors && { color: errorText }}>{label}</label>
            <span
              className="focus-border"
              style={errors && { backgroundColor: errorText }}
            />
          </div>
        )}

        {errors ? (
          <div className={`errors ${newClass}`}>{errors.message}</div>
        ) : (
          <div className={`blank ${newClass}`}>dummy</div>
        )}
      </Fragment>
    );
  }
);

//! Example of usage

/*
<Input type="text" name="email" ref={register} errors={errors.email} label="Email address" errorText={errorText} />;
*/
