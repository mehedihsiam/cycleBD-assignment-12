import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageSingleOrder from './ManageSingleOrder/ManageSingleOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://intense-harbor-12684.herokuapp.com/orders/manage')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [orders])

    return (
        <div>
            {
                orders.length > 0 ?
                    <>
                        <Typography variant="h5" sx={{ textAlign: 'center' }}>Order List</Typography>
                        <TableContainer component={Paper}>

                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left" sx={{ fontWeight: 'bold' }}>Product</TableCell>
                                        <TableCell sx={{ fontWeight: 'bold' }}>Placed Date</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold' }}>Customer Name</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold' }}>Phone Number</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold' }}>Address</TableCell>
                                        <TableCell align="left" sx={{ fontWeight: 'bold' }}>Status</TableCell>
                                        <TableCell align="center" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        orders.map(order => <ManageSingleOrder
                                            key={order._id}
                                            order={order}
                                            orders={orders}
                                            setOrders={setOrders}
                                        ></ManageSingleOrder>)
                                    }
                                </TableBody>
                            </Table>


                        </TableContainer>
                    </>
                    :
                    <Typography variant="h3" sx={{ color: 'GrayText', textAlign: 'center' }}>Order list is empty</Typography>
            }
        </div>
    );
};

export default ManageOrders;