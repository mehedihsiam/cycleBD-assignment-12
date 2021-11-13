import { Button, TableCell, TableRow } from '@mui/material';
import React from 'react';

const MySingleOrder = ({ order, orders, setOrders }) => {
    const { img, productName, placedDate, orderStatus } = order;




    const handleOderDelete = (id) => {
        const procceed = window.confirm('Are you sure to delete this ordder?')
        if (procceed) {
            fetch(`https://intense-harbor-12684.herokuapp.com/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainigOrders = orders.filter(singleOrder => singleOrder._id !== id);
                        setOrders(remainigOrders);
                    }
                })
        }
    }
    return (

        < TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell align="left">
                <img src={img} alt="" style={{ height: '30px' }} />
            </TableCell>
            <TableCell component="th" scope="row">{productName.slice(0, 50)}...</TableCell>
            <TableCell align="right">{placedDate}</TableCell>
            <TableCell align="right">{orderStatus}</TableCell>
            <TableCell align="right"><Button sx={{ color: 'white' }} className="btn-c" onClick={() => handleOderDelete(order._id)}>Cancel</Button></TableCell>
        </TableRow >

    );
};

export default MySingleOrder;