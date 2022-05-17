import React from 'react'
import '../App.scss';

import { auth, getUser } from "../data/firebase"; 

function Profile() {
    const [user, setUser] = React.useState({});
    
    React.useEffect(() => {
        auth.onAuthStateChanged(setUser);
    })
    getUser(user.uid).then(userProfile => {
     })
     
  return (
    <div className="Profile">
      <h2>Profile</h2>
      <p>Need to work on thath</p>
      </div>
  )
}

export default Profile