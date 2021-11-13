import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const currentDate = new Date();
        const displayDate = currentDate.toDateString();

        const postData = { ...data, date: displayDate }
        axios.post('https://intense-harbor-12684.herokuapp.com/products', postData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Package has been added')
                    reset();
                }
            });
    };
    return (
        <div>
            <Box sx={{ mx: 'auto', width: 500 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Product Name"
                        id="outlined-size-small"
                        size="small"
                        style={{ width: 400 }}
                        {...register("name")}
                    />
                    <br /><br />
                    <TextField
                        label="Short Description"
                        multiline
                        rows={4}
                        style={{ width: 400 }}
                        {...register("shortDesc")}
                    />
                    <br /><br />
                    <TextField
                        label="Description"
                        multiline
                        rows={4}
                        style={{ width: 400 }}
                        {...register("desc")}
                    />
                    <br /><br />
                    <TextField
                        label="Price"
                        defaultValue="$ "
                        style={{ width: 400 }}
                        {...register("price")}
                    />
                    <br /><br />
                    <TextField
                        label="Image URL"
                        style={{ width: 400 }}
                        {...register("img")}
                    />
                    <br /><br />
                    <Button type="submit" sx={{ color: 'white' }} className="btn-b">Post</Button>

                </form>
            </Box>
        </div>
    );
};

export default AddProducts;