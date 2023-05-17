import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ReactModal from 'react-modal'
import { useState, useEffect } from 'react'
export default function Profile(props) {
  const [pop, setPop] = useState(false)
  const[testProfile, setTestProfile] = useState({
    bio: '',
    skills:[''],
    goals: '',
    favorite_GA_snacks: ''
  })
  const [intermediateSkills, setInterMediateSkills] = useState([]);
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

  function updateSkills(e){
    let length = johnProfile.skills.length()
    let newArr = []
    for(let i = 0; i < length; i ++){
      newArr.push(e.target.value)
    }
  }

  function updateBio(e){
    let intermdiateBio = e.target.value
    setTestProfile(testProfile.bio = intermdiateBio)
  }

  function updateGoals(e){
    let intermediateGoals = e.target.value
    setTestProfile(testProfile.goals = intermediateGoals)
  }

  function updateSnacks(e){
    let intermdiateSnacks = e.target.value
    setTestProfile(testProfile.favorite_GA_snacks = intermdiateSnacks)
  }

  function saveData(){
    if(!testProfile.bio == ''){
      setJohn(johnProfile = testProfile.bio)
    }
  
  }

  return (
    <div>
      <ReactModal  isOpen={pop}> 
        {/*set our content in here*/}
        <form id='editBio'>
          <h5>Bio:</h5>
            <textarea onChange={updateBio} defaultValue={johnProfile.bio}></textarea>
          <h5>Skills:</h5>
            {johnProfile.skills.map((result) => (
              <input id={johnProfile.skills.indexOf(result)} className='editableSkill' type='text' defaultValue={result}></input>
            ))}
          <h5>Goals:</h5>
            <textarea defaultValue = {johnProfile.goals}></textarea>
            <button onClick={saveData} form="editBio" type='submit' >Submit</button>
        </form>
        <button  onClick={popUp}>cancel</button>
      </ReactModal>
        <NavBar />
        <div className='left'>
          <div id='profileImg'></div>
          <div id='media'></div>
        </div>
       
        <div className='right'>
          <div id='info' style={{ borderColor:'solid black'}}>

            <svg xmlns="http://www.w3.org/2000/svg" onClick={popUp}  width="30" height="10" style={{marginLeft: 'px'}} >
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
