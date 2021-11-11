import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';

const Login = () => {
    const history = useHistory();
    const location = useLocation()
    const url = location.state?.from || '/home';
    const { emailLogin, setUser, error, setError, googleLogin, handleUserSaveGoogle } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (userSubmition) => {
        const email = userSubmition.email;
        const password = userSubmition.password;
        emailLogin(email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedinUser = userCredential.user;
                setUser(loggedinUser);
                history.push(url);

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

        reset();
    };

    // google login
    const googleSignin = () => {
        googleLogin()
            .then((result) => {
                const loggedinUser = result.user;
                setUser(loggedinUser);
                const name = loggedinUser.displayName;
                const email = loggedinUser.email;
                handleUserSaveGoogle(name, email);
                history.push(url);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                // ...
            });
    }
    return (
        <>
            <Navbar />
            <Container>
                <Box sx={{ textAlign: 'center', my: 4 }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField label="Email" type="email" variant="standard" {...register("email")} sx={{ width: '40%' }} />
                        <br />
                        <br />
                        <TextField label="Password" type="password" variant="standard" {...register("password")} sx={{ width: '40%' }} />
                        <br />
                        <Button type="submit" className="btn-a" sx={{ color: 'white', my: 2, width: '40%' }}>Login</Button>
                        <br />
                        or
                        <br />
                        <Button onClick={googleSignin} className="btn-a" sx={{ color: 'white', my: 2, width: '40%' }}>Login With Google</Button>
                    </form>
                    <Typography sx={{ color: 'error.main', height: '30px' }}>
                        {error.split('Firebase:')[1]}
                    </Typography>
                    <Typography>
                        New at Cycle BD? <Link to="/register" className="color-a">Please Register</Link>
                    </Typography>
                </Box>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;