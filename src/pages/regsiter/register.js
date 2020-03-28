import React, { useState } from "react";
import { Animated } from "react-animated-css";
import Loader from "react-loaders";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { Modal, Input, Button } from "../../components/presentational";
import logo from "../../geekyarjunlogo.jpg";

import { apiResponse } from "../../constants/enum";

const { DOES_NOT_EXIST, VERIFY_EMAIL, VERIFIED } = apiResponse;

// const logo = '';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [showOtpScreen, setShowOtpScreen] = useState(false);
  const [showLoader, setLoader] = useState(false);
  const history = useHistory();

  const handleRegister = async e => {
    try {
      setLoader(true);
      console.log(email, password, userName);

      // regsiter API call
      /* const response = await registerApiCall({
			email,
			username: userName,
			password,
		}); */

      const response = { data: VERIFY_EMAIL, status: 200 };

      if (response.status === 200) {
        if (response.data === VERIFY_EMAIL) {
          setShowOtpScreen(true);
        } else {
          alert("error in registration");
        }
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log("error", error);
    }
  };

  const handleEmailVerify = async e => {
    try {
      setLoader(true);

      // verify email API call
      /* const response = await verifyEmailApiCall({
            email
          }); */
      // const json = await response();

      const response = { status: 200, data: DOES_NOT_EXIST };

      if (response.status === 200) {
        if (response.data === DOES_NOT_EXIST) {
          setEmailVerified(true);
        } else {
          alert("Already exist email");
        }
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log("error", error);
    }
  };

  const handleSubmitOtp = async e => {
    try {
      setLoader(true);

      // verify email OTP
      /* const response = await verifyEmailOtp({
        emailid: email,
        otp
      }); */

      const response = { status: 200, data: VERIFIED };

      if (response.status === 200) {
        if (response.data === VERIFIED) {
          setEmailVerified(true);
          history.push("/home");
        } else {
          alert("Already exist email");
        }
      }
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log("error", error);
    }
  };

  return (
    <div className="register-form-container disp-grid flow-col">
      <div className="register-form-container__comany-logo">
        <Modal className="register-form-container__comany-logo--modal">
          <img src={logo} alt="logo" />
        </Modal>
      </div>
      <div className="register-form-container__form">
        <Modal className="register-form-container__form--modal txt-ali-cen">
          <div className="header">Sign Up</div>
          <div className="field-container mg-bt-sm">
            {!emailVerified && (
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeOut"
                isVisible={!emailVerified}
              >
                <Input
                  type="email"
                  name="email"
                  className="curved-input-box sign-in-email mg-bt-sm"
                  autoComplete="off"
                  placeHolder="Email Id"
                  onChange={e => setEmail(e.target.value)}
                />
              </Animated>
            )}
            {emailVerified && !showOtpScreen && (
              <>
                <Animated
                  animationIn="fadeInUp"
                  animationOut="fadeOut"
                  isVisible={emailVerified}
                  animationInDuration={1000}
                >
                  <Input
                    type="text"
                    name="username"
                    className="curved-input-box sign-in-email mg-bt-sm"
                    autoComplete="nope"
                    placeHolder="Username"
                    onChange={e => setUsername(e.target.value)}
                  />
                </Animated>
                <Animated
                  animationIn="fadeInUp"
                  animationOut="fadeOut"
                  isVisible={emailVerified}
                >
                  <Input
                    type="password"
                    name="password"
                    className="curved-input-box sign-in-password"
                    autoComplete="nope"
                    placeHolder="Password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </Animated>
              </>
            )}
            {showOtpScreen && (
              <Animated
                animationIn="fadeInUp"
                animationOut="fadeOut"
                isVisible={emailVerified}
              >
                <Input
                  type="text"
                  name="otp"
                  className="curved-input-box sign-in-password"
                  autoComplete="nope"
                  placeHolder="Enter OTP"
                  onChange={e => setOtp(e.target.value)}
                />
              </Animated>
            )}
            <div className="error"></div>
          </div>
          <Button
            className="sign-in-btn mg-tp-sm hover-scale"
            onClick={
              !emailVerified
                ? handleEmailVerify
                : showOtpScreen
                ? handleSubmitOtp
                : handleRegister
            }
          >
            {!showLoader ? (
              <span>
                {!emailVerified
                  ? "Submit"
                  : showOtpScreen
                  ? "Submit OTP"
                  : "Register"}
              </span>
            ) : (
              <Loader type="ball-scale-ripple" active={showLoader} />
            )}
          </Button>
          <div className="dont-have-account mg-tp-xl mg-bt-sm">
            <p>Already have an account?</p>
            <p className="mg-tp-xs hover-scale">
              <Link to="/signin">SIGN IN NOW</Link>
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
