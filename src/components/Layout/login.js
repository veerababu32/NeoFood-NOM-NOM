import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../features/AddToCart/authSlice";
import { useNavigate } from "react-router-dom";
import { images } from "../Constants";
import classes from "./../../App.module.css";

const Login = (title) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setISLoading] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setISLoading(true);
    let url;

    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCc6xP8aMywQrYhLFHRe1DZT1bXHe3CO-4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc6xP8aMywQrYhLFHRe1DZT1bXHe3CO-4";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setISLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authntication failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        dispatch(authActions.login(data));

        navigate("/home");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className={classes.loginPage}>
      <section className={classes.imgContainer}>
        <img src={images.NeofoodLoginImg} alt="NeofoodLoginImg" />
      </section>
      <section className={classes.contentContainer}>
        <div className={classes.formContainer}>
          <h1>{isLogin ? "Login" : "Sign Up"}</h1>
          <form onSubmit={submitHandler}>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                required
                ref={emailInputRef}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Your Password
              </label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
                className="form-control"
              />
            </div>
            <div className={classes.actions}>
              {!isLoading && (
                <button>{isLogin ? "Login" : "Create Account"}</button>
              )}
              {isLoading && <p>Sending Request...</p>}
              <button
                type="button"
                className={classes.toggle}
                onClick={switchAuthModeHandler}
              >
                {isLogin ? "Create new account" : "Login with existing account"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
