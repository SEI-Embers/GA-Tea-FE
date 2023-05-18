import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ReactModal from 'react-modal'
import { useState, useEffect } from 'react'


export default function Profile(props) {
  const [pop, setPop] = useState(false)
  const [isEditable, setIsEditable] = useState(false);
  const[testProfile, setTestProfile] = useState({
    bio: '',
    skills:[''],
    goals: '',
    favorite_GA_snacks: ''
  })

  const[johnProfile, setJohn] = useState({
    username:"The World's Fault",
    bio: 'eats birds',
    skills: ['eating asphalt','making kids cry'],
    goals: 'becoming president of the US, and waging war against Canada',
    favorite_GA_snacks:['lysol wet wipes']

  })

  function popUp(){
    setPop(!pop)
  }

  

  function saveData(object){

    return
  }

  return (
    <div>
        <NavBar />
        <div className='left'>
          <div id='profileImg'></div>
          <div id='media'></div>
        </div>
       
        <div className='right'>
          <div id='info' style={{ borderColor:'solid black'}}>

            <svg xmlns="http://www.w3.org/2000/svg"  width="30" height="10" style={{marginLeft: 'px'}} >
              <ellipse cx="5" cy="5" rx="4" ry="4" fill="grey"/>
              <ellipse cx="15" cy="5" rx="4" ry="4" fill="grey"/>
              <ellipse cx="25" cy="5" rx="4" ry="4" fill="grey"/>
            </svg>

            <div id='userName' className='infoDiv'>
              <h3 className='content'>{johnProfile.username}</h3>
            </div>

            <div id='bioDiv' className='infoDiv'>
              <h3>Bio:</h3>
              <p id='bioText' className='content' >
                {johnProfile.bio}
              </p>
            </div>
           
            <div id='skillsDiv' className='infoDiv'>
              <h3>Skills:</h3> 
                <ul id='skillsList'>
                 {johnProfile.skills.map((result) => (
                  <li className='content'>{result}</li>
                 ))}
                </ul>
            </div>
           
            
            <h3>Goals:</h3> {/*p tag*/}
            <h3>Favorite GA Snacks:</h3>

            <button>save</button>
          </div>
        </div>
    </div>
  )
}
