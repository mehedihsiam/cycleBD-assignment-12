import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const history = useHistory();
    const location = useLocation()
    const url = location.state?.from || '/home';

    const { emailRegistration, setUser, error, setError, googleLogin, handleUserSave, updateDisplayName } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (userSubmition) => {
        const email = userSubmition.email;
        const password = userSubmition.password;
        const name = userSubmition.name;
        emailRegistration(email, password)
            .then((userCredential) => {
                // Signed in 
                setError('')
                const registeredUser = userCredential.user;
                setUser({ email, displayName: name });
                handleUserSave(name, email);
                updateDisplayName(name);
                console.log(registeredUser);
                history.push(url);

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

        reset();
    };

    const googleSignin = () => {
        googleLogin()
            .then((result) => {
                const loggedinUser = result.user;
                setUser(loggedinUser);
                history.push(url);
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                // ...
            });
    }
    return (
        <Container>
            <Box sx={{ textAlign: 'center', my: 4 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField label="Name" type="text" variant="standard" {...register("name")} sx={{ width: '40%' }} />
                    <br />
                    <br />
                    <TextField label="Email" type="email" variant="standard" {...register("email")} sx={{ width: '40%' }} />
                    <br />
                    <br />
                    <TextField label="Password" type="password" variant="standard" {...register("password")} sx={{ width: '40%' }} />
                    <br />
                    <Button type="submit" className="btn-a" sx={{ color: 'white', my: 2, width: '40%' }}>Register</Button>
                    <br />
                    or
                    <br />
                    <Button onClick={googleSignin} className="btn-a" sx={{ color: 'white', my: 2, width: '40%' }}>Register With Google</Button>
                </form>
                <Typography sx={{ color: 'error.main', height: '30px' }}>
                    {error.split('Firebase:')[1]}
                </Typography>
                <Typography>
                    Already have an account? <Link to="/login" className="color-a">Please Login</Link>
                </Typography>
            </Box>
        </Container>
    );
};

export default Register;