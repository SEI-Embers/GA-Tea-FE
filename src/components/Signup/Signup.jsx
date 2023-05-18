import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../services/users.js';

export default function Signup ({setUser}) {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [usernameSignUp, setUsernameSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  // const [passwordConfirmSignUp, setPasswordConfirmSignUp] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");

  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleSignUpFormClose = () => {
    setShowSignUpForm(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    const user = await signUp(form)
    setUser(user)
    navigate("/newsfeed")
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   const data = {
  //     username: "apple12345",
  //     email: "applez@email.com",
  //     password: "apple123!"
  //   }
  //   const user = await signUp(data)
  // }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign Up</button>
    }
  };

  const { username, email, password } = form

  return (
    <div className="px-4 py-2 text-black bg-red-600 rounded-md shadow-md hover:shadow-lg border border-black"
    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}>
      <div
        className="bg-transparent text-black text-center font-mono cursor-pointer"
        onClick={handleSignUpClick}
      >
        Sign Up
      </div>
      {showSignUpForm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={handleSignUpFormClose}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-8 pt-10 flex flex-col space-y-4 border border-black"
            onClick={(event) => event.stopPropagation()}
          >
            <input
              type="text"
              placeholder="Username"
              name='username'
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name='email'
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name='password'
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={handleChange}
            />
            {renderError()}
            <button
              type="submit"
              className="bg-black hover:bg-red-500 transition duration-500 ease-in-out text-white font-bold text-md py-2 px-3 rounded"
            >
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
}