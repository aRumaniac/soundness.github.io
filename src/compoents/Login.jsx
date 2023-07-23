import React from "react";
import './Reg.css'

function Login() {
  return (
    <div className="login__container">
      <header>Login</header>
      <form action="#">
        <div className="form first">
          <div className="fields">
            <div className="input-field">
              <label>ID Number</label>
              <input type="text" placeholder="Enter your ID Number" required />
            </div>
            <div className="fields">
              <div className="input-field">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" required />
              </div>
            </div>
          </div>
          <button className="sumbit">
              <span className="btnText">Submit</span>
              <i className="uil uil-navigator"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
