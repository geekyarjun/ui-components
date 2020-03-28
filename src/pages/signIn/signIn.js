import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Modal, Input, Button } from "../../components/presentational";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");

  const handleRegister = e => {
    console.log(email, password, userName);
  };
  return (
    <Modal className="txt-ali-cen">
      <div className="header">Sign In</div>
      <div className="field-container mg-bt-sm">
        <Input
          type="text"
          name="email"
          className="curved-input-box sign-in-email mg-bt-sm"
          autoComplete="nope"
          placeHolder="Email Id"
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          name="password"
          className="curved-input-box sign-in-password"
          autoComplete="nope"
          placeHolder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <div className="error"></div>
        <div className="forgot-password mg-tp-sm">Forgot Id / Password?</div>
      </div>
      <Button className="sign-in-btn" onClick={handleRegister}>
        Sign In
      </Button>
      <div className="dont-have-account mg-tp-xl mg-bt-sm">
        <p>Don't have an account?</p>
        <p className="mg-tp-xs">
          <Link to="/">SIGN UP</Link>
        </p>
      </div>
    </Modal>
  );
};

SignIn.propTypes = {};

export default SignIn;
