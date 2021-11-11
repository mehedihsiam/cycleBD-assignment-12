import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import SingleProduct from './SingleProduct/SingleProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Typography variant="h4" sx={{ textAlign: 'center', mt: 5, mb: 4 }} className="color-a">
                    CYCLE COLLECTION
                </Typography>
                <Grid container spacing={2} sx={{ justifyContent: 'space-around', mb: 5 }}>
                    {
                        products.map(product => <SingleProduct
                            key={product._id}
                            product={product}
                        ></SingleProduct>)
                    }
                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;