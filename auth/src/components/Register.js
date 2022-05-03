import React, { useState, useEffect} from 'react';
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
import { auth, signUp, signInWithGoogle } from "../data/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";


// Styles
const styles = cssStyles.styles
const theme = createTheme();
function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
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
         
         
          signUp(firstName, lastName, email, password)
        }else{
          console.log('password mismatch')
        }
    }
    useEffect(() => {
      if (loading) {
          return;
        }
        if (user){
            navigate("/");
        }else{
            console.log(error)
        }
    }, [user, loading, error]);
return (
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
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default Register;