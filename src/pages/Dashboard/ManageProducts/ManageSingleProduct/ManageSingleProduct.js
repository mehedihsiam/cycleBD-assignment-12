import { Button, TableCell, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const ManageSingleProduct = ({ product, products, setProducts }) => {
    const { name, img, date, _id } = product;


    const handleProductDelete = (id) => {
        const procceed = window.confirm('Are you sure to delete this ordder?')
        if (procceed) {
            fetch(`https://intense-harbor-12684.herokuapp.com/products/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remainigProducts = products.filter(singleProduct => singleProduct._id !== id);
                        setProducts(remainigProducts);
                    }
                })
        }
    }


    return (
        < TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
            <TableCell align="left">
                <img src={img} alt="" style={{ height: '30px' }} />
            </TableCell>
            <TableCell component="th" scope="row">{name}</TableCell>
            <TableCell component="th" scope="row">{date}</TableCell>
            <TableCell component="th" scope="row">
                <Box>
                    <Link to={`/booking/${_id}`} style={{ textDecoration: 'none' }}><Button className="btn-b" sx={{ color: 'white' }}>Details</Button></Link>
                    <Button sx={{ mx: 1, color: 'white' }} className="btn-c" onClick={() => handleProductDelete(product._id)}>Delete</Button>
                </Box>
            </TableCell>

        </TableRow >
    );
};

export default ManageSingleProduct;