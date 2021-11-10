import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Grid } from '@mui/material';



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const HomeSingleProduct = ({ product }) => {
    const { name, shortDesc, desc, date, img, price } = product;
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const splitedDate = date.split(' ')
    const displayDate = splitedDate[1] + " " + splitedDate[2] + ", " + splitedDate[3];

    return (
        <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    title={name}
                    subheader={`Posted at: ${displayDate.toString()}`}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h6" className="color-a">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {shortDesc}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button variant="contained" className="btn-a">Order Now</Button>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="product details"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {desc}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid >
    );
};

export default HomeSingleProduct;