import React, { useEffect, useState } from 'react';
import {

    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Payment from './Payment/Payment';
import DashboardHome from './DashboardHome/DashboardHome';
import MyOrders from './MyOrders/MyOrders';
import ReviewDashboard from './ReviewDashboard/ReviewDashboard';
import ManageOrders from './ManageOrders/ManageOrders';
import AddProducts from './AddProducts/AddProducts';
import MakeAdmin from './MakeAdmin/MakeAdmin';







const avatar = <FontAwesomeIcon icon={faUserCircle} />
const drawerWidth = 240;


// dashboard component
const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [loadedUser, setLoadedUser] = useState();
    // const [client, setClient] = useState({})
    let { path, url } = useRouteMatch();



    // load the user 
    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => setLoadedUser(data))
    }, [])

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const { logout, user } = useAuth();
    const drawer = (
        <div>
            <Toolbar >
                {user.photoURL ?
                    <img src={user.photoURL} style={{ height: '40px', borderRadius: '50%', ml: 1 }} alt="" />
                    :
                    <Typography variant="h3" className="color-b" sx={{ fontSize: '2' }}>{avatar}</Typography>}
                <Typography variant="h6" sx={{ ml: 2 }} className="color-b">
                    <Link
                        to="/home" className="color-b" style={{ textDecoration: 'none' }}
                    >{user.displayName.split(' ')[0]}</Link>
                </Typography>
            </Toolbar>
            <Divider />
            {
                loadedUser?.role === 'User' &&
                <List>
                    <ListItem button>
                        <Link to={`${url}`} className="color-b" style={{ textDecoration: 'none' }}>Dashboard</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={`${url}/payment`} className="color-b" style={{ textDecoration: 'none' }}>Payment</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={`${url}/myOrders`} className="color-b" style={{ textDecoration: 'none' }}>My Orders</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={`${url}/review`} className="color-b" style={{ textDecoration: 'none' }}>Reviews</Link>
                    </ListItem>
                </List>
            }
            {
                loadedUser?.role === "Admin" &&
                <List>
                    <ListItem button>
                        <Link to={`${url}`} className="color-b" style={{ textDecoration: 'none' }}>Dashboard</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={`${url}/manageOrders`} className="color-b" style={{ textDecoration: 'none' }}>Manage Orders</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={`${url}/addProduct`} className="color-b" style={{ textDecoration: 'none' }}>Add a Product</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={`${url}/makeAdmin`} className="color-b" style={{ textDecoration: 'none' }}>Make Admin Someone</Link>
                    </ListItem>
                    <ListItem button>
                        <Link to={`${url}/manageProducts`} className="color-b" style={{ textDecoration: 'none' }}>Manage Products</Link>
                    </ListItem>
                </List>
            }
            <ListItem button>
                <Link to="/home" className="color-b" style={{ textDecoration: 'none' }}>Go Home</Link>
            </ListItem>
            <Divider />
            <List>

                <ListItem>
                    <Button sx={{ width: '100%' }} onClick={logout}>Logout</Button>
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;







    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {loadedUser?.role} Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />




                {/*---------- nested routing----------- */}

                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <ReviewDashboard></ReviewDashboard>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProducts></AddProducts>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
};

export default Dashboard;