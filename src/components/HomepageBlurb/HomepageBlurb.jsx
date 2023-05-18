// import { useState } from 'react';
import Login from "../Login/Login.jsx";
import Signup from "../Signup/Signup.jsx";

export default function HomepageBlurb({setUser}) {  
  return (
    <>
      <div className="ml-96 pt-80">
        <div className="flex justify-center items-center">
          <svg className="transform rotate-0 h-64 w-96">
            <defs>
              <path id="line1" d="M 15,100 A 270,150 0 0 1 450,620" />
            </defs>
            <text className="text-black text-center text-5xl font-serif font-bold">
              <textPath
                className="pl-24 flex justify-center shadow-md hover:shadow-lg"
                href="#line1"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
              >
                Life After GA
              </textPath>
            </text>
          </svg>
        </div>
        <div className="fixed bottom-48 left-1/3 ml-24 text-center">
          <p
            className="font-serif text-lg leading-relaxed"
            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
          >
            General Assembly alumni <br /> have a <b>unique</b> bond and{" "}
            <b>shared</b> experience <br /> that can last long after the program
            ends. Our app provides
            <br /> a platform for alumni to continue <b>connecting</b> and{" "}
            <b>collaborating</b> <br /> no matter where they are in the world.
            Join our community today to share <br /> advice, seek mentorship,
            and keep <b>growing</b> with your General Assembly network.
          </p>
        </div>
      </div>
      <div className="flex justify-center pl-96 pt-24">
          <Login setUser={setUser}/>
          <Signup setUser={setUser}/>
      </div>
    </>
  );
}
