import React from 'react'

import { Link } from 'react-router-dom';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

import  { GlobalAuthContext } from '../context/GlobalAuthContext'
import routes from '../navigation/routes.js'

function AuthMenu() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
        
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const  authProv  = React.useContext(GlobalAuthContext); 
 
    const currentUser=authProv.user?authProv.user:{};
    return (
        
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="" />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >{Object.values(routes)
                    .filter(route => route.auth ==  (Object.keys(currentUser).length === 0))
                    .map(route => (
                        <MenuItem key={route.id} onClick={handleCloseUserMenu}>
                            <Link 
                                onClick={route.onClick}
                                className='link white' 
                                to={`/${route.url}`}>
                                    {route.label}
                            </Link>
                        </MenuItem>
                    ))}
            </Menu>
        </Box>
       
        
  )
}

export default AuthMenu;