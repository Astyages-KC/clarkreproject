import React, { useState, useContext } from "react";
import AuthForm from "./AuthForm.js";
import { UserContext } from "../context/UserProvider.js";

function Auth() {
  const initState = { username: "", password: "" };
  const { login, authErrMsg, clearAuthErr } = useContext(UserContext);
  //state
  const [inputs, setInputs] = useState(initState);

  // const [toggle, setToggle] = useState(false);
  
  //handleChange
  const handleChange = e => {
    const { name, value } = e.target;
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }));
  };

  //handleSubmits for signup and login

  // const handleSignupSubmit = e => {
  //   e.preventDefault();
  //   signup(inputs);
  //   setInputs(initState);
  // };

  const handleLoginSubmit = e => {
    e.preventDefault();
    login(inputs);
    setInputs(initState);
    clearAuthErr();
  };

  // const toggleForms = () => {
  //   setToggle(prevToggle => !prevToggle);
  // };

  return (
    <div className="auth-form">
          <AuthForm
            inputs={inputs}
            handleChange={handleChange}
            handleSubmit={handleLoginSubmit}
            btnText="Login"
            />
          <p style={{ color: "red" }}>{authErrMsg}</p>
    </div>
  );
}

/* {!toggle ? ( 
<button onClick={toggleForms}>Not a member?</button>
) : (
<>
<AuthForm
inputs={inputs}
handleChange={handleChange}
handleSubmit={handleSignupSubmit}
btnText="Signup"
/>
<p style={{ color: "red" }}>{authErrMsg}</p>
<button onClick={toggleForms}>Already a member?</button>
</> */

export default Auth;