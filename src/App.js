import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState(null);

  //sign-in & sign-out
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
    getInfo()
  }, []);


  return (
    <div>
      <h1>Life After GA</h1>
      <Routes>
        <Route path='/' element={<HomePage user={user} setUser={setUser}/>} />
        <Route path='/sign-up' element={<SignUp user={user} setUser={setUser}/>}/>
        <Route path='/sign-in' element={<SignIn user={user} setUser={setUser}/>}/>
        <Route path='/sign-out' element={<SignOut setUser={setUser}/>}/>
        <Route path='/newsfeed' element={<NewsFeed user={user} />} />
        <Route path='/profile' element={<Profile user={user} setUser={setUser}/>}/>
        <Route path='/meet-the-team' element={<MeetTheTeam />}/>
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
