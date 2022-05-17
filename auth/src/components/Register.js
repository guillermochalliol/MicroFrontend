import React, { useState, useEffect} from 'react';
import '../App.scss';
//Material
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import  cssStyles from '../styles/formStyles.js'
// Firebase
import { auth, signUp, mapAuthCodeToMessage } from "../data/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
//Spinner
import Spinner from "../library/Spinner"

// Styles
const styles = cssStyles.styles
const theme = createTheme();


function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();



    const  handleInputChange = (event) => {
        event.preventDefault();
        const {id , value} = event.target;
        
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(password === confirmPassword){  
          signUp(firstName, lastName, email, password).then(err => {
            console.log(err)
            setErrorMessage(mapAuthCodeToMessage(err.code));
         })
        }else{
          setErrorMessage('password mismatch')
        }
    }
    useEffect(() => {
        if (user){
            navigate("/");
        }else if (error){
            console.log(error)
            return
        }
    }, [user, loading, error]);
    
return (<>
  { loading ? (
    <Spinner/>
  ) : (
  <div className="Register">
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange = {(e) => handleInputChange(e)}
                    value={firstName}
                    inputProps={{className: styles.cssInput}}
                    sx={[styles.cssInputLabel, styles.cssInputBgCl]}
                  
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange = {(e) => handleInputChange(e)}
                    value={lastName}
                    inputProps={{className: styles.cssInput}}
                    sx={[styles.cssInputLabel, styles.cssInputBgCl]}
                  

                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange = {(e) => handleInputChange(e)}
                    value={email}
                    inputProps={{className: styles.cssInput}}
                    sx={[styles.cssInputLabel, styles.cssInputBgCl]}
                  

                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange = {(e) => handleInputChange(e)}
                    value={password }
                    inputProps={{className: styles.cssInput}}
                    sx={[styles.cssInputLabel, styles.cssInputBgCl]}
                  

                  />

                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="new-password"
                    onChange = {(e) => handleInputChange(e)}
                    value={confirmPassword}
                    inputProps={{className: styles.cssInput}}
                    sx={[styles.cssInputLabel, styles.cssInputBgCl]}
                  
                  />

                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography component="p" variant="caption"  sx={{color:'red'}}>
                        {errorMessage}
                  </Typography>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/sign-in" variant="body2" underline="hover">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          
        </Container>
      </ThemeProvider>
    </div>
    )}
    </>
  );
}
export default Register;