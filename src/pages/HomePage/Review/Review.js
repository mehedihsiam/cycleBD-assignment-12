import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from './singleReview/SingleReview';

const Review = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://intense-harbor-12684.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <Container>
            <Typography variant="h4" sx={{ textAlign: 'center', mt: 5, mb: 4 }} className="color-a">
                CUSTOMER REVIEWS
            </Typography>
            <Grid container spacing={2} sx={{ justifyContent: 'space-around', mb: 5 }}>
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
            </Grid>
        </Container>
    );
};

export default Review;