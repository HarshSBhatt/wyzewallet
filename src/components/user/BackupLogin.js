import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";

import { loginSchema } from "../utils";
import { loginUser } from "../../store/actions";
import { getRedirectionPath } from "../utils";
import { Input, Button } from "../elements";

const errorText = "#f44336";

export const Login = (props) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = (data) => {
    props.loginUser(data);
  };
  if (props.auth.isAuthenticated) {
    const redirectPath = getRedirectionPath(props.location);
    return <Redirect to={redirectPath} />;
  }
  return (
    <div className="login-container">
      <div className="login-left">
        <img
          src={require("../../assets/images/generic-hero.svg")}
          alt="SVG not found"
        />
      </div>
      <div className="login-right">
        <div className="login-text">
          <span>Sign in</span>
        </div>
        <div className="login-form">
          <form className="floating-form" onSubmit={handleSubmit(onSubmit)}>
            {/* <Input
									type="text"
									name="email"
									ref={register}
									errors={errors.email}
									label="Email address"
									errorText={errorText}
								/> */}
            <Input
              type="text"
              name="username"
              ref={register}
              errors={errors.username}
              label="Username"
              errorText={errorText}
            />
            <Input
              type="password"
              name="password"
              ref={register}
              errors={errors.password}
              label="Password"
              errorText={errorText}
            />

            <Button auth={props.auth}>Sign in</Button>
          </form>
          <div className="login-to-register">
            <span className="account-text">
              Don't have an account? <Link to="/register">Sign up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  loginUser: (creds) => dispatch(loginUser(creds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
