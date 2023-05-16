import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default function MeetTheTeam({ user }) {
  return (
    <div>
        {user ? (
            <NavBar />
        ) : null}
        MeetTheTeam
    </div>
  )
}
