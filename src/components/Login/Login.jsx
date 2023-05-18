import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../services/users.js';

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (event) => 
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const user = await signIn(form)
    navigate("/newsfeed")
  };

  const { username, password } = form

  return (
    <React.Fragment>
      <div
        className="bg-transparent text-black text-center font-mono cursor-pointer"
        onClick={handleLoginClick}
      >
        Login
      </div>
      {showLoginForm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center"
          onClick={handleLoginFormClose}
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-8 pt-10 flex flex-col space-y-4 border border-black"
            onClick={(event) => event.stopPropagation()}
          >
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={handleChange}
            />
            <button
              type="Submit"
              className="bg-black hover:bg-red-500 transition duration-500 ease-in-out text-white font-bold text-md py-2 px-3 rounded"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
}
