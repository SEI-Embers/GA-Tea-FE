import React from 'react'
import NavBar from '../../components/NavBar/NavBar'

export default function About({ user }) {
  return (
    <div>
        {user ? (
            <NavBar />
        ) : null}
        About
        </div>
  )
}
