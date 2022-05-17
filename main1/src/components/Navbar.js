import React, {useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '../../navigation/route-config.js'
import Home from './Home.js';
import  { GlobalAuthContext } from 'Auth/GlobalAuthContext';
import AuthMenu from 'Auth/AuthMenu';
import authRoutes from 'Auth/routes';


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const  authProv  = useContext(GlobalAuthContext); 
 
 const currentUser=authProv.user?authProv.user:{};

  return (
    <AppBar position="static" className='navbar'>
    <BrowserRouter>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
                <Link className="link white" key="101" to="/">
                    LOGO
                </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                {Object.values(routes).map(route => (
                    
                    <MenuItem key={route.id} onClick={handleCloseNavMenu}>
                    <Link className='link' to={`/${route.url}`}>{route.label}</Link>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
          
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >   
                <Link className="link white" key="1" to="/">
                    LOGO
                </Link>
            </Typography>
          
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Object.values(routes).map(route => (
                <Link 
                    key={route.id}
                    onClick={handleCloseNavMenu}
                    className='link white' 
                    to={`/${route.url}`}>
                        {route.label}
                </Link>
                ))}
            </Box>
            <AuthMenu/>     
        </Toolbar>
      </Container>
      <Routes>
           <Route 
                key='1' 
                path="/" 
                element={<Home />} 
            />
            {Object.values(routes).map(route => (
                <Route 
                    key={route.id}
                    path={route.url}
                    element={route.component}
                />
            ))}
            
            {Object.values(authRoutes)
            .map(route => (
                <Route 
                    key={route.id}
                    path={route.url}
                    element={route.component}
                />
                
            ))}
        
      </Routes> 
      </BrowserRouter>
    </AppBar>
  );
};
export default Navbar;