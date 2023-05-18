import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

import { useState } from 'react';

const AboutPage = () => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">About Our App</h1>
      <textarea
        className="w-full p-4 border border-gray-300 rounded"
        rows="8"
        placeholder="Write an explanation about the app here..."
        value={text}
        onChange={handleChange}
      ></textarea>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            // Handle saving the text or any other action
            console.log('Text saved:', text);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AboutPage;







// export default function About({ user }) {
//   return (
//     <div>
//         {user ? (
//             <NavBar />
//         ) : null}
        
//         About
//         </div>
//   )
// }
