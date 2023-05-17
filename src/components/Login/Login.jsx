import React, { useState } from "react";

export default function Login() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginFormClose = () => {
    setShowLoginForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Username:", username);
    // console.log("Password:", password);
    // add your login logic here
  };

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
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
