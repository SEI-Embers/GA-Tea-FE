import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './About.css';
import { useNavigate } from 'react-router-dom';



export default function About({ user }) {
  const navigate = useNavigate()

  const handleHome = () => {
   navigate('/')
  }

  return (
    
    <div className='container' onClick={handleHome}>
      <h1 className="about">About Us</h1>
      
      <div className='pabout'>
      <p>Throughout this bootcamp, we have experienced a whirlwind of learning, growth, and collaboration. We have explored the depths of programming languages, algorithms, and software development methodologies. But beyond the technical skills we have acquired, it is the friendships and connections we have forged that truly make this experience special.</p>
      <p>This is why we created this app, to stay connected with our peers after this cohort, to continue to foster the spirit of collaboration, learn, innovate, and make a positive impact on the world through the power of software engineering.</p>
      </div>
      
    </div>
    
  )
}
