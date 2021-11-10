import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css'
import { Link } from 'react-router-dom';



const Navbar = () => {
    const navbarCustomize = {
        backgroundColor: 'transparent',
        color: '#00b96c'
    }
    const navMenu = {
        textDecoration: 'none',
        color: '#00b96c',
        margin: '0 10px'
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={navbarCustomize}>
                <Toolbar style={{ fontWeight: 'bold' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/home"><img src="/logo.png" alt="" className="logo" /></Link>
                    </Typography>
                    <Link to="/dashboard" style={navMenu}>Dashboard</Link>
                    <Link to="/login" style={navMenu}>Login</Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;