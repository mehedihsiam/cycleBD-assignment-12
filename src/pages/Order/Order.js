import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/system';
import Backdrop from '@mui/material/Backdrop';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
const axios = require('axios').default;



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




const Order = () => {
    const { id } = useParams();
    const { user, status } = useAuth();
    const [productToOrder, setProductToOrder] = useState({});
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || '/home'

    useEffect(() => {
        fetch(`https://intense-harbor-12684.herokuapp.com/order/${id}`)
            .then(res => res.json())
            .then(data => setProductToOrder(data))
    }, [])
    const { name, desc, price, img } = productToOrder;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const date = new Date();
    const placedDate = date.toDateString();



    // react hook form functions
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const orderData = { ...data, orderStatus: status, placedDate, img, productName: name }
        // console.log(orderData);

        axios.post('https://intense-harbor-12684.herokuapp.com/order', orderData)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Order Has been placed')
                    reset();
                    handleClose();
                    history.push(url);
                }
            });

    };
    return (
        <Container>
            <Grid
                sx={{ mt: 4 }}
                container
                spacing={4}
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12} sm={12} md={6} >
                    <img src={img} alt="cycle" style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Typography variant="h5" className="color-b">{name}</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 4 }}>About This Cycle</Typography>
                    <Typography paragraph>{desc}</Typography>
                    <Typography variant="h6" className="color-b">Price: {price}</Typography>
                    <Button className="btn-b" sx={{ color: 'white' }} onClick={handleOpen}>Proceed Order</Button>
                </Grid>
            </Grid>

            <div>
                {/* <Button >Open modal</Button> */}
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Typography paragraph sx={{ fontWeight: 'bold', textAlign: 'center' }} className="color-a">Please Provide Shipping Informations</Typography>
                                <TextField {...register("usersName")} label="User's Name" variant="standard" value={user.displayName} style={{ width: '100%' }} />
                                <br />
                                <br />
                                <TextField {...register("usersEmail")} label="User's Email" variant="standard" value={user.email} style={{ width: '100%' }} />
                                <br />
                                <br />
                                <TextField {...register("customersName")} label="Customer's Name" required variant="standard" style={{ width: '100%' }} />
                                <br />
                                <br />
                                <TextField {...register("customersPhone")} label="Customer's Phone" required type="tel" variant="standard" style={{ width: '100%' }} />
                                <br />
                                <br />
                                <TextField {...register("customersEmail")} label="Customer's Email" type="email" variant="standard" style={{ width: '100%' }} />
                                <br />
                                <br />
                                <TextField {...register("shippingAddress")} label="Shipping Address" required variant="standard" style={{ width: '100%' }} />
                                <br /><br />
                                <Button type="submit">Place Order</Button>
                            </form>
                        </Box>
                    </Fade>
                </Modal>
            </div>
        </Container>
    );
};

export default Order;