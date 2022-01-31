/* eslint-disable react/prop-types */
/*
 * ========================================================
 * ========================================================
 *
 *                      Imports
 *
 * ========================================================
 * ========================================================
 */
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginMessage from './LoginMessage.jsx';

/*
 * ========================================================
 * ========================================================
 *
 *   Component for Landing Page when user first loads App
 *
 * ========================================================
 * ========================================================
 */
export default function LandingPage({ obj }) {
  // React hook to change to home page on successful login
  const navigate = useNavigate();

  // State and setter for login details
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // State and setter for signup and login message
  const [message, setMessage] = useState('');

  /*
   * ========================================================
   *      On click of sign up button, verify data in DB
   *                and inform user of outcome
   * ========================================================
   */
  const signUpAttempt = () => {
    const data = {
      userEmail: email,
      userPassword: password,
    };
    axios.post('/users/signup', data).then((response) => {
      // Inform user if they did not key in username or password
      if (response.data === 'details missing') {
        setMessage('Please enter an email and password');
      }
      // Inform user if username already exists
      if (response.data === 'user exists') {
        setMessage('Username taken. Please try a different username.');
      }
      // If successful, inform user to login
      if (response.data === 'sign up success') {
        setMessage('Sign up successful, please login!');
      }
    });
  };

  /*
   * ========================================================
   *      On click of login button, verify data in DB
   *                and inform user of outcome
   * ========================================================
   */
  const loginAttempt = () => {
    const data = {
      userEmail: email,
      userPassword: password,
    };

    axios.post('/users/login', data).then((response) => {
      // Inform user if they did not key in username or password
      if (response.data === 'details missing') {
        setMessage('Please enter an email and password');
      }
      // If username or password incorrect, inform player
      if (response.data === 'username or password incorrect') {
        setMessage('Invalid login. Please try again.');
      }
      // If successful, redirect to home page
      if (response.data.success === true) {
        const { userId } = response.data;
        obj.setter(userId);
        // On successful login, redirect to home page
        navigate('/');
      }
    });
  };

  return (
    <div className="loginBox">
      <p className="logo">
        <i className="fas fa-utensils" />
        OM-NOM-NISCIENT
      </p>
      <div className="loginSmallBox">
        <input
          name="email"
          id="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <button className="btn" type="submit" onClick={signUpAttempt}>
          Sign Up
          {' '}
        </button>
        <button className="btn" type="submit" onClick={loginAttempt}>
          Login
          {' '}
        </button>
        <LoginMessage displayMessage={message} />
      </div>
    </div>
  );
}
