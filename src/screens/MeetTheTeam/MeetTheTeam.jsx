import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import TeamMember from './TeamMember'
import { useState } from 'react';




export default function MeetTheTeam({ user }) {
  const [members, setMembers] = useState([]);

  const handleAddMember = () => {
    const newMember = {
      name: '',
      image: '',
      bio: ''
    };
    setMembers([...members, newMember]);
  };

  const handleMemberChange = (index, event) => {
    const updatedMembers = [...members];
    updatedMembers[index][event.target.name] = event.target.value;
    setMembers(updatedMembers);
  };
  return (
    <div>
        {user ? (
            <NavBar />
        ) : null}
        MeetTheTeam
        <h1>Meet the Team</h1>
    {members.map((member, index) => (
      <div key={index}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={member.name}
          onChange={(event) => handleMemberChange(index, event)}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={member.image}
          onChange={(event) => handleMemberChange(index, event)}
        />
        <textarea
          name="bio"
          placeholder="Short Bio"
          value={member.bio}
          onChange={(event) => handleMemberChange(index, event)}
        />
        <hr />
      </div>
    ))}    <button onClick={handleAddMember}>Add Member</button>
    <div className="team-preview">
      {members.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          image={member.image}
          bio={member.bio}
        />
      ))}
    </div>

        
    </div>
  )
}  









