import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Banner.css'
import { Box } from '@mui/system';


const Banner = () => {
    const [bannerInfo, setBannerInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/banner')
            .then(res => res.json())
            .then(data => setBannerInfo(data))
    }, [])

    const banner = bannerInfo[0];
    console.log(banner?.headline)
    return (
        <Container>
            <Grid container sx={{ my: 4 }}>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ mt: 5 }}>
                        <Typography variant='h3' className="color-a" sx={{ fontWeight: 500 }}>
                            {banner?.headline}
                        </Typography>
                        <Box sx={{ my: 3 }}>
                            <Typography variant='p' >
                                {banner?.messege}
                            </Typography>
                        </Box>
                        <Box sx={{ my: 3 }}>
                            <Link to="/allProducts" style={{ textDecoration: 'none' }} >
                                <Button style={{ color: '#00b96c', border: '1px solid #00b96c', fontWeight: 'bold' }}>Our Collection</Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <img src={banner?.img} alt="" style={{ width: '80%' }} />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Banner;