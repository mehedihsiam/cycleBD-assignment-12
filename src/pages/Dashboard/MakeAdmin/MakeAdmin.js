import { Alert, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { token } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const [success, setSuccess] = useState(false);
    const onSubmit = data => {
        const email = { email: data.email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Barer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);

                }
            })
        reset();
    };

    return (
        <div>
            <Box sx={{ mx: 'auto', width: 400 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        variant="outlined"
                        label="Email"
                        size="small"
                        type="email"
                        style={{ width: 300 }}
                        {...register("email")}
                    />
                    <Button className="btn-b" sx={{ color: 'white', mx: 2 }} type="submit">Add</Button>
                </form>
                <br />
                {success && <Alert severity="success">Added theuser as an admin</Alert>}
            </Box>

        </div>
    );
};

export default MakeAdmin;