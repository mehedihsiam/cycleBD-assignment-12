import { Button, TableCell, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


const ManageSingleOrder = ({ order, orders, setOrders }) => {
    const { img, usersName, placedDate, customersName, customersPhone, shippingAddress, orderStatus, productName } = order;

    const status = { status: "Approved" }

    const approveOrder = (id) => {
        fetch(`https://intense-harbor-12684.herokuapp.com/order/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Approved this order")
                }
            })
    }


    const orderReject = (id) => {
        const proceed = window.confirm('Are you sure to Reject this order?')
        if (proceed) {
            fetch(`https://intense-harbor-12684.herokuapp.com/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Rejected this order')
                        const remainingOrders = orders.filter(singleOrder => singleOrder._id !== id)
                        setOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        < TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell align="left">
                <Box sx={{ display: 'flex' }}>
                    <Box><img src={img} alt="" style={{ height: '30px' }} /></Box>
                    <Box sx={{ ml: 2 }}>{productName.slice(0, 20)}... <br /><Typography sx={{ color: 'text.secondary' }}>Ordered By {usersName}</Typography></Box>
                </Box>
            </TableCell>
            <TableCell component="th" scope="row">{placedDate}</TableCell>
            <TableCell component="th" scope="row">{customersName}</TableCell>
            <TableCell component="th" scope="row">{customersPhone}</TableCell>
            <TableCell component="th" scope="row">{shippingAddress}</TableCell>
            <TableCell component="th" scope="row">{orderStatus}</TableCell>
            <TableCell component="th" scope="row">
                <Box>
                    <Button onClick={() => approveOrder(order._id)}>Appove</Button>
                    <Button onClick={() => orderReject(order._id)}>Reject</Button>
                </Box>
            </TableCell>

        </TableRow >
    );
};

export default ManageSingleOrder;