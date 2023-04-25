import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Form, FormControl, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { username: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    defaultValues,
    loginUser
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div className="container">
      <Form className="form" onSubmit={handleSubmit}>
        <FormLabel>
          Username:{" "}
          <FormControl
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </FormLabel>
        <FormLabel>
          Password:{" "}
          <FormControl
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </FormLabel>
        {isServerError ? (
          <p className="error">Login failed, incorrect credentials!</p>
        ) : null}
        {/* <Link to="/register">Click to register!</Link> */}
        <button>Login!</button>
      </Form>
    </div>
  );
};

export default LoginPage;
