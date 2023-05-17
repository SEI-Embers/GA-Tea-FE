import React from "react";
import Login from "../Login/Login.jsx";
import Signup from "../Signup/Signup.jsx";

export default function HomepageBlurb() {
  return (
    <>
      <div class="ml-80 pt-80">
        <div class="flex justify-center items-center">
          <svg class="transform rotate-0 h-64 w-96">
            <defs>
              <path id="line1" d="M 10,100 A 250,150 0 0 1 450,500" />
            </defs>
            <text class="text-black text-center text-5xl font-serif font-bold">
              <textPath class="pl-24 flex justify-center" href="#line1">
                Life After GA
              </textPath>
            </text>
          </svg>
        </div>

        <div class="fixed bottom-72 pl-24 left-1/3 font-serif text-center">
          <p>
            {" "}
            We created this app for GA Alumni to feel less alone after
            graduation{" "}
          </p>
          <p>Join today and collab</p>
        </div>
            <Login />
            <Signup />
        </div>
    </>
  );
}
