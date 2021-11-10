import { Card, Container, Grid, Typography } from '@mui/material';
import React from 'react';


const brandLogo = {
    width: '250px',
    marginTop: '50px'
}

const BrandPartners = () => {

    return (
        <Container>
            <Typography variant="h4" sx={{ textAlign: 'center', mt: 5, mb: 4 }} className="color-a">
                BRAND PARTNERS
            </Typography>
            <Card variant="outlined" sx={{ mb: 4 }}>
                <Grid container spacing={2} sx={{ justifyContent: 'space-between', textAlign: 'center', mb: 5 }}>
                    <Grid item xs={12} sm={12} md={4}>
                        <img src="https://i.ibb.co/JjfBGhN/Alchemy-Bicycles-Logo.png" alt="" style={brandLogo} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} >
                        <img src="https://i.ibb.co/KxGzpRL/all-city-bikes.png" alt="" style={brandLogo} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} >
                        <img src="https://i.ibb.co/546RNbN/BIANCHI.jpg" alt="" style={brandLogo} />
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

export default BrandPartners;