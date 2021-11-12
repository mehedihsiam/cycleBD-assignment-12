import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const email = { email: data.email };
        console.log(email)
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(email)
        })
            .then(res => res.json())
            .then(data => console.log(data))
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
            </Box>

        </div>
    );
};

export default MakeAdmin;