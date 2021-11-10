import React, { useEffect, useState } from 'react';
import './Footer.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
const Footer = () => {
    const map = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const phone = <FontAwesomeIcon icon={faPhone} />

    const [footerInfo, setFooterInfo] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/footer')
            .then(res => res.json())
            .then(data => setFooterInfo(data))
    }, [])
    const footer = footerInfo[0];
    return (
        <footer>
            <hr />
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={4}>
                        <Typography variant='h4' className="color-a">
                            {footer?.headline}
                        </Typography>
                        <Box sx={{ my: 2 }}>
                            <Typography variant='p'>
                                {footer?.messege}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>

                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Your Messege"
                            multiline
                            rows={4}
                            style={{ width: '100%' }}
                        />
                        <br />
                        <br />
                        <TextField
                            id="outlined-textarea"
                            label="Your Email"
                            placeholder="example@domain.com"
                            style={{ width: '100%' }}
                        />
                        <br />
                        <br />
                        <Button className="btn-a" style={{ color: 'white' }}>Send</Button>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;