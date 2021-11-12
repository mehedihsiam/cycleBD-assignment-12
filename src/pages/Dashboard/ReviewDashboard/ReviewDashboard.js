import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const ReviewDashboard = () => {
    const { user } = useAuth();
    const postDate = new Date();
    const date = postDate.toDateString();
    // react hook form function
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const reviewData = { ...data, name: user.displayName, img: user.photoURL, date: date }
        fetch(`http://localhost:5000/reviews?email=${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        alert('Thanks for your review')
        reset();
    };
    return (
        <div>
            <Box sx={{ mx: "auto", width: 200 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Write you opinion"
                        multiline
                        rows={4}
                        style={{ width: 300 }}
                        {...register("messege")}
                    />
                    <br />
                    <br />
                    <input
                        type="number"
                        placeholder="Rating Out Of 5"
                        style={{
                            height: '40px',
                            width: '300px'
                        }}
                        min="1"
                        max="5"
                        {...register("rating")}
                        id="" />
                    <br /><br />
                    <Button className="btn-a" sx={{ color: 'white' }} type="submit">Post</Button>
                </form>
            </Box>
        </div>
    );
};

export default ReviewDashboard;