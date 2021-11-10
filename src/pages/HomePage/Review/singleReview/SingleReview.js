import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import './SingleReview.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/system';

const profileIcon = <FontAwesomeIcon icon={faUserCircle} />




const SingleReview = ({ review }) => {
    const { name, messege, img, date, rating } = review;
    return (
        <Grid item xs={12} sm={12} md={4}>
            <Card variant="outlined" sx={{ maxWidth: 345, textAlign: 'center', p: 3 }}>
                {
                    img ? <img src={img} alt="" className="avatar" />
                        :
                        <Box sx={{ fontSize: '80px' }} className="color-b">{profileIcon}</Box>
                }
                <Typography variant="h6" sx={{ fontWeight: 'bold' }} className="color-b">
                    {name}
                </Typography>
                <Typography paragraph sx={{ textAlign: 'justify' }}>
                    {messege}
                </Typography>
                {rating}
                <Typography sx={{ fontSize: '.7rem', textAlign: 'left' }} color="text.secondary">
                    {date}
                </Typography>
            </Card>
        </Grid>
    );
};

export default SingleReview;