import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import ReactModal from 'react-modal'
import { useState, useEffect } from 'react'
// import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import { Container } from 'postcss'
export default function Profile(props) {



  const [showModal, setShowModal] = useState(false)

  //replace this code below V with the code for setting up the profile with props
  const[johnProfile, setJohn] = useState({
    username:"The World's Fault",
    bio: 'eats birds',
    skills: ['eating asphalt','making kids cry'],
    github: '',
    linkedin: '',
    pic: '',
    email: ''

  })
  //set the inital value of the test value to the value of the object passed to the profile
  const[testProfile, setTestProfile] = useState(johnProfile)

  // useEffect(() => {
  //   console.log(testProfile);
  // }, [testProfile]);

  function updateProfile(e){
    setTestProfile({
      ...testProfile,
       [e.target.id]: e.target.value
    })
    
  }

  function toggleModal(){
    setShowModal(!showModal)
    setTestProfile(johnProfile)
  }


  // adds one extra space (filled with an empty string) so taht skills has one extra than it did before
  function addSkill(e){
    e.preventDefault()
    setTestProfile({
      ...testProfile,
      skills: [...testProfile.skills, '']
    })
  }


  // function removeSkill(e){
  //   e.preventDefault()
  //   let copyOfTestSkills = testProfile.skills
  //   let finalArr = copyOfTestSkills.filter((skill,index)=>{
  //     copyOfTestSkills.indexOf(skill) != e.target.removalid
  //   })
  //   // console.log(copyOfTestSkills.splice(e.target.dataset.removalid,1))
  //   // console.log(finalArr)
  // }
  function removeSkill(e){
    e.preventDefault()
    
    setTestProfile({
      ...testProfile,
      skills: testProfile.skills.filter(skill=>
        parseInt(testProfile.skills.indexOf(skill)) ===  parseInt(e.target.dataset.removalid)
      )
    })
  }

  // function removeSkill(e) {
  //   e.preventDefault();
  
  //   const removeIndex = parseInt(e.target.dataset.removalid);
  //   const updatedSkills = testProfile.skills.filter((skill, index) => index !== removeIndex);
  
  //   setTestProfile({
  //     ...testProfile,
  //     skills: updatedSkills
  //   });
  // }

  // function removeSkill(e) {
  //   e.preventDefault();
  
  //   const removeIndex = parseInt(e.target.dataset.removalid);
  //   const updatedSkills = testProfile.skills.filter((_, index) => index !== removeIndex);
  
  //   setTestProfile(prevProfile => ({
  //     ...prevProfile,
  //     skills: updatedSkills
  //   }));
  // }
  // function removeSkill(e) {
  //   e.preventDefault();
  
  //   const removeIndex = parseInt(e.target.dataset.removalid, 10);
  //   const updatedSkills = testProfile.skills.filter((_, index) => index !== removeIndex);
  
  //   setTestProfile(prevProfile => ({
  //     ...prevProfile,
  //     skills: updatedSkills
  //   }));
  // }
  // function removeSkill(e) {
  //   e.preventDefault();
  
  //   const removeIndex = parseInt(e.target.dataset.removalid, 10);
  //   const updatedSkills = testProfile.skills.filter((_, index) => index !== removeIndex);
  
  //   setTestProfile(prevProfile => ({
  //     ...prevProfile,
  //     skills: updatedSkills
  //   }));
  // }
  
  
  

  function updateSkills(e){
    e.preventDefault()

    let updatedArr = testProfile.skills.map((skill,i)=>{
      if(i == e.target.id){
        return e.target.value
      }
      else{
        return skill
      }
    })
    
    setTestProfile({
      ...testProfile,
      skills: updatedArr
    }) 

  }

 



  function updateObj(e){
    e.preventDefault()
    let myObj = testProfile
  
    console.log(myObj)
    setJohn(myObj)
    console.log(johnProfile.bio)
    toggleModal()
    
  }



  return (
    <div>
      <ReactModal  isOpen={showModal} ariaHideApp={false}> 
        {/*set our content in here*/}
        <form id='editProfile' onSubmit={updateObj}>
          <h5>Bio:</h5>
            <input id='bio' onChange={updateProfile} defaultValue={testProfile.bio}></input>
          <h5>Skills:</h5>
          <ul>
            {testProfile.skills.map((result, i) => (
              <li key={`${i}Display`}>
              <input id={i} onChange={updateSkills} className='editableSkill' type='text' defaultValue={result}></input>
              <button data-removalid={i} onClick={removeSkill}>- Remove Skill</button>
              </li>
            ))}
          </ul>
            <button key='addSkill' onClick={addSkill}>Add Skill +</button>
            {/* <textarea onChange={updateGoals} defaultValue = {johnProfile.goals}></textarea> */}
            <br/>

            

            <input form="editProfile" type='submit' value={'Submit'} />
        </form>
        <button  onClick={toggleModal}>cancel</button>
      </ReactModal>

        <NavBar />


        <div className='left'>
          <div id='profileImg'><img></img></div>
          <div id='media'> <p id='technology'></p> </div>
        </div>
       
        <div className='right'>
          <div id='info' style={{ borderColor:'solid black'}}>

              <button id='editButton' onClick={toggleModal}>Edit</button>
        

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
                  <li id={`${johnProfile.skills.indexOf(result)}Display`} className='content'>{result}</li>
                 ))}
                </ul>
            </div>
            

            
          </div>
        </div>
    </div>
  )
}
