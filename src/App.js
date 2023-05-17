import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { verifyUser } from './services/users';
import HomePage from './screens/HomePage/HomePage.jsx'
import SignUp from './screens/SignUp/SignUp.jsx'
import SignIn from './screens/SignIn/SignIn.jsx'
import SignOut from './screens/SignOut/SignOut.jsx'
import NewsFeed from './screens/NewsFeed/NewsFeed.jsx'
import Profile from './screens/Profile/Profile.jsx'
import MeetTheTeam from './screens/MeetTheTeam/MeetTheTeam.jsx'
import About from './screens/About/About.jsx'
import Footer from './components/Footer/Footer.jsx'


function App() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const user = await verifyUser();
    user ? setUser(user) : setUser(null);
  };

  //sign-in & sign-out
  useEffect(() => {
    fetchUser();
  }, []);


  return (
    <div>
      {/* do not push these changes, just comment this out for testing the development of the profile page */}

      <Profile></Profile>

      {/* <Routes>
        <Route path='/' element={<HomePage user={user} setUser={setUser}/>} />
        <Route path='/sign-up' element={<SignUp user={user} setUser={setUser}/>}/>
        <Route path='/sign-in' element={<SignIn user={user} setUser={setUser}/>}/>
        <Route path='/sign-out' element={<SignOut setUser={setUser}/>}/>
        <Route path='/newsfeed' element={<NewsFeed user={user} />} />
        <Route path='/profile' element={<Profile user={user} setUser={setUser}/>}/>
        <Route path='/meet-the-team' element={<MeetTheTeam user={user}/>}/>
        <Route path='/about' element={<About user={user}/>} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;
