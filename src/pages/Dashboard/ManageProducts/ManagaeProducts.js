import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageSingleProduct from './ManageSingleProduct/ManageSingleProduct';

const ManagaeProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://intense-harbor-12684.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <>
                <Typography variant="h5" sx={{ textAlign: 'center' }}>Product List</Typography>
                <TableContainer component={Paper}>

                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" sx={{ fontWeight: 'bold' }}>Product</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Product Name</TableCell>
                                <TableCell align="left" sx={{ fontWeight: 'bold' }}>Posted Date</TableCell>
                                <TableCell align="left" sx={{ fontWeight: 'bold' }}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                products.map(product => <ManageSingleProduct
                                    key={product._id}
                                    product={product}
                                    products={products}
                                    setProducts={setProducts}
                                ></ManageSingleProduct>)
                            }
                        </TableBody>
                    </Table>


                </TableContainer>
            </>
        </div>
    );
};

export default ManagaeProducts;