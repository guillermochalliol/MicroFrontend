import React from 'react'
import { auth, getUser } from "../data/firebase"; 

function Profile() {
    const [user, setUser] = React.useState({});
    
    React.useEffect(() => {
        auth.onAuthStateChanged(setUser);
    })
   console.log(user.uid)
    getUser(user.uid).then(userProfile => {
        console.log (userProfile)
     })
     
  return (
    <div>Profile</div>
  )
}

export default Profile