import React from 'react'
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import  { GlobalAuthContext } from '../context/GlobalAuthContext'

function AuthMenu() {

    const  authProv  = useContext(GlobalAuthContext); 
  return (<>
    
    {authProv.user ? [
        <MenuItem key="1" onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Profile</Typography>
        </MenuItem>,
        <MenuItem key="2" onClick={authProv.logOut}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      ]:
      [
        <MenuItem key="3" onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Sign In</Typography>
        </MenuItem>,
        <MenuItem key="4" onClick={handleCloseUserMenu}>
         <Typography textAlign="center">Register</Typography>
      </MenuItem>
      ]
    }
    </>
  )
}

export default AuthMenu;