import React, {useState, useEffect} from 'react';

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
import { auth, signIn, signInWithGoogle } from "../data/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const styles = cssStyles.styles
// Styles
const theme = createTheme();

function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
 
    useEffect(() => {
        if (loading) {
           return;
        }
        if (user){
            navigate("/");
        }else{
            console.log(error)
        }
    }, [user, loading]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        signIn(email, password)
    };

    return (
        <ThemeProvider theme={theme}>
        <Container  component="main" maxWidth="xs">
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }} aver
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                inputProps={{className: styles.cssInput}}
                sx={[styles.cssInputLabel, styles.cssInputBgCl]}
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                inputProps={{className: styles.cssInput}}
                sx={[styles.cssInputLabel, styles.cssInputBgCl]}
                />
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign In
                </Button>
                <Button
                onClick={signInWithGoogle}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign In with Google
                </Button>
                <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                    Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
                </Grid>
            </Box>
            </Box>
            
        </Container>
        </ThemeProvider>
    );
}
export default Login;
