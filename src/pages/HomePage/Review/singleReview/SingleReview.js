import React from 'react';
import { Card, Grid, Typography } from '@mui/material';
import Rating from 'react-rating';
import './SingleReview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/system';
import AOS from 'aos';
import 'aos/dist/aos.css';



AOS.init();
const profileIcon = <FontAwesomeIcon icon={faUserCircle} />




const SingleReview = ({ review }) => {
    const { name, messege, img, date, rating } = review;
    return (
        <Grid item xs={12} sm={12} md={4} data-aos="zoom-in">
            <Card variant="outlined" sx={{ maxWidth: 345, textAlign: 'center', p: 3 }}>
                {
                    img ? <img src={img} alt="" className="avatar" />
                        :
                        <Box sx={{ fontSize: '80px' }} className="color-b">{profileIcon}</Box>
                }
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} className="color-b">
                    {name}
                </Typography>
                <Typography paragraph sx={{}}>
                    {messege}
                </Typography>
                <Typography sx={{ color: '#FCC416' }}>
                    <Rating
                        initialRating={rating}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                    />
                </Typography>
                <Typography sx={{ fontSize: '.7rem' }} color="text.secondary">
                    {date}
                </Typography>
            </Card>
        </Grid>
    );
};

export default SingleReview;