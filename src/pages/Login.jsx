import React, { useState } from 'react';
import { Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import { connect } from 'react-redux';
import loginAction from '../actions';


function Login({loginAction}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const validateEmailAndPassword = (email, password) => {
    const validateEmail =
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    // const validatePassword = 
    //   // /^.*(?=.{6,})(?=.*d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    if (validateEmail.test(email) && password.length > 6) {
      return false;
    }
    return true;
  };

  return (
    <div className="Login">
      <Form>
        <h4> Sign in 🙂 </h4>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            placeholder="example@bol.com"
            type="email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </Form.Group>
        <Link to="/home">
        <OverlayTrigger
          overlay={
            <Tooltip id="tooltip-disabled">
              Type a password and email correct
            </Tooltip>
          }
        >
          <span className="d-inline-block">
            <Button
              disabled={validateEmailAndPassword(email, password)}
              onClick={() => loginAction(email,password)}
            >
              Login
            </Button>
          </span>
        </OverlayTrigger>
        </Link>
      </Form>
    </div>
  );
}
const mapDispatchToProps = { loginAction };

export default connect(null, mapDispatchToProps)(Login)
