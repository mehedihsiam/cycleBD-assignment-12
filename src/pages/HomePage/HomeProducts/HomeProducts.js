import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HomeSingleProduct from './HomeSingleProduct/HomeSingleProduct';

const HomeProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const selectedProducts = products.slice(0, 6)
    return (
        <>
            <Container>
                <Typography variant="h4" sx={{ textAlign: 'center', mt: 5, mb: 4 }} className="color-a">
                    CYCLE COLLECTION
                </Typography>
                <Grid container spacing={2} sx={{ justifyContent: 'space-around', mb: 5 }}>
                    {
                        selectedProducts.map(product => <HomeSingleProduct
                            key={product._id}
                            product={product}
                        ></HomeSingleProduct>)
                    }
                </Grid>
            </Container>
            <hr />
        </>
    );
};

export default HomeProducts;