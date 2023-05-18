import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ReactModal from 'react-modal'
import { useState, useEffect } from 'react'
export default function Profile(props) {
  const [pop, setPop] = useState(false)
  const [testBio, setBio] = useState('')
  const [testGoals, setGoals] = useState('')
  const [testSkills, setSkills] = useState([])
  const [testUsername, setTestUsername] = ''

   const[testProfile, setTestProfile] = useState({
    username: '',
    bio: '',
    skills:[''],
  })
  // const [intermediateSkills, setInterMediateSkills] = useState([]);
  
  //replace this code below V with the code for setting up the profile with props
  const[johnProfile, setJohn] = useState({
    username:"The World's Fault",
    bio: 'eats birds',
    skills: ['eating asphalt','making kids cry'],

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
    console.log(e.target.value)
    setBio(intermdiateBio)
    console.log(intermdiateBio + ' this is the intermediate vlaue for bio to be passed on or discarded')
    // setTestProfile(testProfile.bio = intermdiateBio)
  }




  function updateObj(){
    let myObj = {
      username: testUsername,
      bio: testBio,
      skills: testSkills,
    }
    console.log(myObj)
    setTestProfile(myObj)
    console.log(testProfile.bio)
    
  }

  function saveData(){
    if(testProfile.bio != ''){
      setJohn(johnProfile.bio = testProfile.bio)
    }
    else if(testProfile.skills != []){
      setJohn(johnProfile.skills = testProfile.skills)
    }
    else if(testProfile.goals != ''){
      setJohn(johnProfile.goals = testProfile.goals)
    }
    else if(testProfile.favorite_GA_snacks != ''){
      setJohn(johnProfile.favorite_GA_snacks = testProfile.favorite_GA_snacks)
    }
  
  }

  return (
    <div>
      <ReactModal  isOpen={pop}> 
        {/*set our content in here*/}
        <form id='editBio'>
          <h5>Bio:</h5>
            <textarea id='bioContent' onChange={updateBio} defaultValue={johnProfile.bio}></textarea>
          <h5>Skills:</h5>
            {johnProfile.skills.map((result) => (
              <input id={johnProfile.skills.indexOf(result)} onChange={updateSkills} className='editableSkill' type='text' defaultValue={result}></input>
            ))}
          
            {/* <textarea onChange={updateGoals} defaultValue = {johnProfile.goals}></textarea> */}
            <button onClick={updateObj} form="editBio" type='submit' >Submit</button>
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
           
            {/* <div id='goalsDiv' className='infoDiv'>
              <h3>Goals:</h3> 
              <p id='goalText' className='content'>
                {johnProfile.goals}
              </p>
            </div> */}
            

            
          </div>
        </div>
    </div>
  )
}
