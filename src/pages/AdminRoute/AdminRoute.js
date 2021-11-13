import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const [loadedUser, setLoadedUser] = useState({});
    useEffect(() => {
        fetch(`https://intense-harbor-12684.herokuapp.com/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => setLoadedUser(data))
    }, [])



    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email && loadedUser?.role === 'Admin' ? (children)
                :
                (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    ></Redirect>
                )
            }
        />
    );
};

export default AdminRoute;