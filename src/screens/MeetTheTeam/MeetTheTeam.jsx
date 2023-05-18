import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { useState } from 'react';




const MeetTheTeam = () => {
  const [members, setMembers] = useState([
    { name: 'Agustines Sudibya', image: 'https://ca.slack-edge.com/T0351JZQ0-U04P461QR9R-cf7bc80e3d8c-512', bio: '' },
    { name: 'Chelsey Alphonso', image: 'https://ca.slack-edge.com/T0351JZQ0-U04PGU3AQE5-022247ee6693-512', bio: '' },
    { name: 'Justin Sotolongo', image: 'https://ca.slack-edge.com/T0351JZQ0-U04QZEC44N7-2f189048fd07-512', bio: '' },
    { name: 'Michael Christenson', image: 'https://ca.slack-edge.com/T0351JZQ0-U04PF4FBZ8A-b6dfda53e589-512', bio: 'Originally built as a minor VS Code extension designed to remind fledgling programmers to drink water and ingest granola, Michael currently demonstrates a growth in artificial intelligence extolled by the likes of cybernetic overlord Christopher Duggan as "geometric" and "Turing Test-ready.' },
    { name: 'Demetri Geras', image: 'https://ca.slack-edge.com/T0351JZQ0-U04P6C0P5NX-2297acf53371-512', bio: '' },
    { name: 'Sydney David', image: 'https://ca.slack-edge.com/T0351JZQ0-U04PU059XQ8-c85adff3f113-512', bio: '' },
    { name: 'Giovanny Occident', image: 'https://ca.slack-edge.com/T0351JZQ0-U04QZ3AQYGY-f63d98e0fb9d-512', bio: '' },
    { name: 'Grant Terdoslavich', image: 'https://ca.slack-edge.com/T0351JZQ0-U04QHPUFBCG-d56d4d6091e7-512', bio: '' },
    { name: 'Omar White', image: 'https://ca.slack-edge.com/T0351JZQ0-U04BE7G6LJC-5b6a492c1665-512', bio: '' },
   
  ]);

  const handleMemberChange = (index, event) => {
    const updatedMembers = [...members];
    updatedMembers[index][event.target.name] = event.target.value;
    setMembers(updatedMembers);
  };
  return (
    
      <div className="bg-blue-400 py-8">
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
                  disabled={true}
                />
                <textarea
                  name="bio"
                  placeholder="Short Bio" 
                  value={member.bio}
                  onChange={(event) => handleMemberChange(index, event)}
                  className="w-full p-2 border border-gray-300 rounded"
                  disabled={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MeetTheTeam;
  
  
  
  
  

        







