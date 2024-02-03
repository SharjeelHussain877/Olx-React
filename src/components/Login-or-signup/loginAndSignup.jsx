import React, { useState } from "react";
import "./form.scss";
import sign_up from "./../../firebase/signup.js";
import { BiHide, BiShow } from "react-icons/bi";
import { login } from "../../firebase/Login.js";

const LoginAndSignup = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [PasswordState, setPasswordState] = useState(false);
  const [ConfirmPasswordState, setConfirmPasswordState] = useState(false);
  const [fullname, setFullname] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDateOfBirth] = useState("");
  const [signUpEmail, setEmail] = useState("");
  const [signUppassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPAssword] = useState("");

  async function signIn(e) {
    e.preventDefault()
    if (signInEmail == '' || signInPassword == '') {
      alert("All fields required")
    } else {
      console.log("success")
      login(signInEmail, signInPassword)
      setSignInEmail("")
      setSignInPAssword("")
      alert("You have logged successfully")
    }
  }

  function signUp(e) {
    e.preventDefault()
    console.log("data");
    if (
      fullname == "" ||
      contact == "" ||
      dob == "" ||
      signUpEmail == "" ||
      signUppassword == "" ||
      confirmPassword == ""
    ) {
      alert("Please fill all fields!");
    } else if (signUppassword !== confirmPassword) {
      alert("Password does'nt match!")
    } else {
      sign_up(signUpEmail, signUppassword, fullname, contact, dob)
      setFullname("")
      setContact("")
      setDateOfBirth("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      alert("You have signed up successfully")
    }
  }

  const toggleMode = () => {
    setIsSignUpMode((prevMode) => !prevMode);
  };

  const sign_up_btn = () => {
    container.classList.add("sign-up-mode");
  };

  const sign_in_btn = () => {
    container.classList.remove("sign-up-mode");
  };

  const style = {
    position: "absolute",
    right: "0px",
    margin: "20px 10px 0px 0px",
  };

  return (
    <>
      <div className={`main-container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input value={signInEmail} type="text" placeholder="Email" onChange={e => setSignInEmail(e.target.value)} />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input value={signInPassword} type="password" placeholder="Password" onChange={e => setSignInPAssword(e.target.value)} />
              </div>
              <input type="submit" defaultValue="Login" className="btn solid" onClick={(e) => signIn(e)} />
              {/* <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div> */}
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="text"
                  placeholder="Full name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user" />
                <input
                  type="text"
                  placeholder="Phone"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope" />
                <input
                  type="email"
                  placeholder="Email"
                  value={signUpEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                  type={PasswordState ? "text" : "password"}
                  placeholder="Password"
                  value={signUppassword}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {PasswordState ? (
                  <BiHide
                    onClick={() => setPasswordState(!PasswordState)}
                    className="hide"
                    style={style}
                  />
                ) : (
                  <BiShow
                    onClick={() => setPasswordState(!PasswordState)}
                    className="show"
                    style={style}
                  />
                )}
              </div>
              <div className="input-field">
                <i className="fas fa-lock" />
                <input
                  type={ConfirmPasswordState ? "text" : "password"}
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {ConfirmPasswordState ? (
                  <BiHide
                    onClick={() =>
                      setConfirmPasswordState(!ConfirmPasswordState)
                    }
                    className="hide"
                    style={style}
                  />
                ) : (
                  <BiShow
                    onClick={() =>
                      setConfirmPasswordState(!ConfirmPasswordState)
                    }
                    className="show"
                    style={style}
                  />
                )}
              </div>
              <input
                type="submit"
                className="btn"
                defaultValue="Sign up"
                onClick={(e) => signUp(e)}
              />
              {/* <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google" />
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div> */}
            </form>
          </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>Sign Up for Exclusive Benefits!</h3>
              <p>
              Unlock exclusive deals and seamless shopping experiences by signing up today. Join our e-commerce community for access to the latest products and special promotions!
              </p>
              <button className="btn transparent" onClick={toggleMode}>
                Sign up
              </button>
            </div>
            <img
              src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
              className="image"
              alt=""
            />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of Our Valued Members</h3>
              <p>
                Discover great deals and shop your favorites at our e-commerce store. Login now to explore exclusive offers!
              </p>
              <button className="btn transparent" onClick={toggleMode}>
                Sign in
              </button>
            </div>
            <img
              src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
              className="image"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAndSignup;
