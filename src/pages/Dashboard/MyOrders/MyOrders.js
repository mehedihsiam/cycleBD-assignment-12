import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MySingleOrder from './MySingleOrder/MySingleOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user])



    return (
        <>
            {
                orders.length > 0 ?
                    <>
                        <Typography variant="h5" sx={{ textAlign: 'center' }}>Order List</Typography>
                        <TableContainer component={Paper}>

                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left" sx={{ fontWeight: 'bold' }}>Product</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Placed Date</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        orders.map(order => <MySingleOrder
                                            key={order._id}
                                            order={order}
                                            orders={orders}
                                            setOrders={setOrders}
                                        ></MySingleOrder>)
                                    }
                                </TableBody>
                            </Table>


                        </TableContainer>
                    </>
                    :
                    <Typography sx={{ color: "text.secondary", textAlign: 'center' }} variant="h3">Your orderlist is empty</Typography>
            }
        </>
    );
};

export default MyOrders;