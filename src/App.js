import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import HomePage from './screens/HomePage/HomePage.jsx'
// import SignOut from './screens/SignOut/SignOut.jsx'
import NewsFeed from './screens/NewsFeed/NewsFeed.jsx'
import Profile from './screens/Profile/Profile.jsx'
import MeetTheTeam from './screens/MeetTheTeam/MeetTheTeam.jsx'
import About from './screens/About/About.jsx'
import Footer from './components/Footer/Footer.jsx'
import {getUser, getToken} from "./services/users.js"
import jwtDecode from "jwt-decode";

function App() {
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false);


useEffect(() => {
  const fetchUser = async() => {
    let token = localStorage.getItem("token")

    if (token !== 'undefined' && token !== null) {
      const user = jwtDecode(token);
  
      let response = await getUser(user.user_id)
      setUser(response)
    } else {
      setUser(null)
    }
  }
  fetchUser()
}, [])

  return (
    <div>
      {/* do not push these changes, just comment this out for testing the development of the profile page */}

     {/* <Profile></Profile>  */}

      <Routes>
        <Route path='/' element={<HomePage setUser={setUser}/>} />
        {/* <Route path='/sign-out' element={<SignOut setUser={setUser}/>}/> */}
        <Route path='/newsfeed' element={<NewsFeed user={user} setUser={setUser} />} />
        <Route path='/profile' element={<Profile user={user} setUser={setUser}/>}/>
        <Route path='/meet-the-team' element={<MeetTheTeam user={user}/>}/>
        <Route path='/about' element={<About user={user}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
