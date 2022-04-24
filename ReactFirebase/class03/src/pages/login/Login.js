import React from "react";
import UseLogin from "./UseLogin";

export default function Login() {
  const { onSubmitHandler, setPassword, setEmail, email, password, loader } =
    UseLogin();
  return (
    <div>
      <h1>Login</h1>

      <div>
        Email:{" "}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="enter your Email"
          type="text"
        />{" "}
      </div>
      <div>
        Password:{" "}
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="enter your password"
          type="password"
        />{" "}
      </div>

      {loader ? (
        <button>Loading...</button>
      ) : (
        <button onClick={onSubmitHandler}>Submit</button>
      )}
    </div>
  );
}
