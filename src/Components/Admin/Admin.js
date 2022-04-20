import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AddEvent from '../AddEvent/AddEvent';
import RegisterVolunteer from '../RegisterVolunteer/RegisterVolunteer';
import { Link } from 'react-router-dom';
import FestivalIcon from '@mui/icons-material/Festival';
import ManageEvent from '../ManageEvent/ManageEvent';

const drawerWidth = 240;

function Admin(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [addEvent, setAddEvent] = React.useState(true)
    const [manageEvent, setManageEvent] = React.useState(false)
    const [showVolunterCopmonent, sethowVolunterCopmonent] = React.useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleAddEvent = () => {
        setAddEvent(true)
        setManageEvent(false)
        sethowVolunterCopmonent(false)
    }

    const handleVolunteer = () => {
        setAddEvent(false)
        setManageEvent(false)
        sethowVolunterCopmonent(true)
    }
    const handleMangeEvent = () => {
        setAddEvent(false)
        setManageEvent(true)
        sethowVolunterCopmonent(false)
    };

    const drawer = (
        <div>
            <Link to='/' className='navLogo'>
                <img src="/logos/logo2.png" className='logo' alt="" /> <p className='logoText'>SERVE</p>
            </Link>
            <Divider />
            <List>
                <ListItem button onClick={handleAddEvent} >
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary='ADD EVENT' />
                </ListItem>

                <ListItem button onClick={handleVolunteer}>
                    <ListItemIcon>
                        <PeopleAltIcon />
                    </ListItemIcon>
                    <ListItemText primary={'REGISTERD VOLUNTEER'} />
                </ListItem>
                <ListItem button onClick={handleMangeEvent}>
                    <ListItemIcon>
                        <FestivalIcon />
                    </ListItemIcon>
                    <ListItemText primary={'MANAGE EVENT'} />
                </ListItem>
            </List>
            <Divider />

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
                        {/* {
                            addEvent ? 'ADD NEW EVENT' : 'VOLUNTEER REGISTER LIST'
                        } */}
                        {
                            addEvent && 'ADD NEW EVENT'
                        }
                        {
                            manageEvent && 'DELETE OR EDIT AN EVENT'
                        }
                        {
                            showVolunterCopmonent  && 'VOLUNTEER REGISTER LIST'
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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

                {
                    //conditional add event and userlist component goes here
                    addEvent && <AddEvent> </AddEvent>
                }
                {
                    showVolunterCopmonent && <RegisterVolunteer></RegisterVolunteer>
                }
                {
                    manageEvent && <ManageEvent> </ManageEvent>
                }

            </Box>
        </Box>
    );
}

Admin.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Admin;
