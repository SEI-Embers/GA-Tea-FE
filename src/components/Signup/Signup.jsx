import React, { useState } from "react";

export default function Signup() {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [usernameSignUp, setUsernameSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [passwordConfirmSignUp, setPasswordConfirmSignUp] = useState("");
  const [emailSignUp, setEmailSignUp] = useState("");

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleSignUpFormClose = () => {
    setShowSignUpForm(false);
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
        className="bg-transparent text-black text-center pb-80 font-mono cursor-pointer"
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
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={usernameSignUp}
              onChange={(event) => setUsernameSignUp(event.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={emailSignUp}
              onChange={(event) => setEmailSignUp(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={passwordSignUp}
              onChange={(event) => setPasswordSignUp(event.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-black rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={passwordConfirmSignUp}
              onChange={(event) => setPasswordConfirmSignUp(event.target.value)}
            />
            <button
              type="submit"
              className="bg-black hover:bg-red-500 transition duration-500 ease-in-out text-white font-bold text-md py-2 px-3 rounded"
            >
              Sign Up
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
}
