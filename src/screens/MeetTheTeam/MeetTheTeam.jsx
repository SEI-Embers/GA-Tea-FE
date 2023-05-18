import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
// import TeamMember from './TeamMember'
import { useState } from 'react';




const MeetTheTeam = () => {
  const [members, setMembers] = useState([
    { name: 'Agustines Sudibya', image: 'https://ca.slack-edge.com/T0351JZQ0-U04P461QR9R-cf7bc80e3d8c-512', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { name: 'Jane Smith', image: 'https://example.com/jane-smith.jpg', bio: 'Praesent eget libero vel elit commodo tempor vel eu neque.' },
    { name: 'Jane Smith', image: 'https://example.com/jane-smith.jpg', bio: 'Praesent eget libero vel elit commodo tempor vel eu neque.' },
    { name: 'Jane Smith', image: 'https://example.com/jane-smith.jpg', bio: 'Praesent eget libero vel elit commodo tempor vel eu neque.' },
    { name: 'Jane Smith', image: 'https://example.com/jane-smith.jpg', bio: 'Praesent eget libero vel elit commodo tempor vel eu neque.' },
    { name: 'Jane Smith', image: 'https://example.com/jane-smith.jpg', bio: 'Praesent eget libero vel elit commodo tempor vel eu neque.' },
    { name: 'Jane Smith', image: 'https://example.com/jane-smith.jpg', bio: 'Praesent eget libero vel elit commodo tempor vel eu neque.' },
    { name: 'Jane Smith', image: 'https://example.com/jane-smith.jpg', bio: 'Praesent eget libero vel elit commodo tempor vel eu neque.' },
    { name: 'Jane Smith', image: 'https://example.com/jane-smith.jpg', bio: 'Praesent eget libero vel elit commodo tempor vel eu neque.' },
   
  ]);

  const handleMemberChange = (index, event) => {
    const updatedMembers = [...members];
    updatedMembers[index][event.target.name] = event.target.value;
    setMembers(updatedMembers);
  };
  return (
    
      <div className="bg-blue-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Meet the Team</h1>
          <div className="grid grid-cols-3 gap-4">
            {members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-4"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={member.name}
                  onChange={(event) => handleMemberChange(index, event)}
                  className="w-full mb-2 p-2 border border-gray-300 rounded"
                />
                <textarea
                  name="bio"
                  placeholder="Short Bio"
                  value={member.bio}
                  onChange={(event) => handleMemberChange(index, event)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MeetTheTeam;
  
  
  
  
  

        








//   return (
//     <div className="bg-blue-100 py-8">
//       <div className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold mb-4">Meet the Team</h1>
//         <div className="grid grid-cols-3 gap-4">
//           {members.map((member, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-lg shadow p-4"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="rounded-full w-24 h-24 mx-auto mb-4"
//               />
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={member.name}
//                 onChange={(event) => handleMemberChange(index, event)}
//                 className="w-full mb-2 p-2 border border-gray-300 rounded"
//               />
//               <textarea
//                 name="bio"
//                 placeholder="Short Bio"
//                 value={member.bio}
//                 onChange={(event) => handleMemberChange(index, event)}
//                 className="w-full p-2 border border-gray-300 rounded"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeetTheTeam;




