import React from 'react'
// import NavBar from '../../components/NavBar/NavBar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




const MeetTheTeam = () => {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
   }

  const [members, setMembers] = useState([
    { name: 'Agustines Sudibya', image: 'https://ca.slack-edge.com/T0351JZQ0-U04P461QR9R-cf7bc80e3d8c-512',LinkedIn:'In Progress', bio: 'Agustines Sudibya is a dynamic entrepreneur, engineer, lifelong learner dedicated to making a positive impact through innovation and continuous personal and professional growth.' },
    { name: 'Chelsey Alphonso', image: 'https://ca.slack-edge.com/T0351JZQ0-U04PGU3AQE5-022247ee6693-512',LinkedIn:'https://www.linkedin.com/in/chelsey-alphonso/', bio: "When I'm not coding you can find me playing with my cat or cooking with my boyfriend!" },
    { name: 'Justin Sotolongo', image: 'https://ca.slack-edge.com/T0351JZQ0-U04QZEC44N7-2f189048fd07-512',LinkedIn:'https://www.linkedin.com/in/justin-sotolongo/', bio: 'Trying my best to be something in this world.Idk where im going, but ill definitely bring my Switch!' },
    { name: 'Michael Christenson', image: 'https://ca.slack-edge.com/T0351JZQ0-U04PF4FBZ8A-b6dfda53e589-512',LinkedIn:'https://www.linkedin.com/in/michael-christenson-dev/', bio: 'Originally built as a minor VS Code extension designed to remind fledgling programmers to drink water and ingest granola, Michael currently demonstrates a growth in artificial intelligence extolled by the likes of cybernetic overlord Christopher Duggan as "geometric" and "Turing Test-ready."' },
    { name: 'Demetri Geras', image: 'https://ca.slack-edge.com/T0351JZQ0-U04P6C0P5NX-2297acf53371-512',LinkedIn:'https://www.linkedin.com/in/demetri-geras/', bio: 'In Progress' },
    { name: 'Sydney David', image: 'https://ca.slack-edge.com/T0351JZQ0-U04PU059XQ8-c85adff3f113-512',LinkedIn:'In Progress', bio: 'Entire personality is based off of my love for cars, pitbulls, cats and maps, now coding' },
    { name: 'Giovanny Occident', image: 'https://ca.slack-edge.com/T0351JZQ0-U04QZ3AQYGY-f63d98e0fb9d-512', LinkedIn:'https://www.linkedin.com/in/giovanny-occident/',bio: 'In Progress' },
    { name: 'Grant Terdoslavich', image: 'https://ca.slack-edge.com/T0351JZQ0-U04QHPUFBCG-d56d4d6091e7-512',LinkedIn:'https://www.linkedin.com/in/grant-terdoslavich-363134127/', bio: 'Consuming caffeine to put more code on my screen.' },
    { name: 'Omar White', image: 'https://ca.slack-edge.com/T0351JZQ0-U04BE7G6LJC-5b6a492c1665-512',LinkedIn:'https://www.linkedin.com/in/omarawhite/', bio: 'Gamer,Coder,Medic,Husband,Father love to see people smile ' },
   
  ]);

  const handleMemberChange = (index, event) => {
    const updatedMembers = [...members];
    updatedMembers[index][event.target.name] = event.target.value;
    setMembers(updatedMembers);
  };
  return (
    
      <div className="bg-blue-400 py-8" onClick={handleHome}>
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
                <input
                  type="text"
                  name="LinkedIn"
                  placeholder="LinkedIn"
                  value={member.LinkedIn}
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