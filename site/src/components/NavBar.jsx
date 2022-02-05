import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import moment from "moment";

const pages = ['Home', 'Password', 'Password-Generator', 'Password-Security-Checker', 'FAQs', 'Contact-Us'];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [date, setDate] = React.useState(moment());

    React.useEffect(() => {
        const interval = setInterval(() => setDate(moment()), 1000);
        return () => clearInterval(interval);
    }, [])

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <div style={{ display: "flex", position: "relative" }}>
                    <h1 style={{ margin: "auto" }}>CypherPass</h1>
                    <div style={{ position: "absolute", right: "1em", top: "1em" }}>
                        <p>{date.format("ddd MMM Do YYYY")}</p>
                        <p>{date.format("h:mm:ss a")}</p>
                    </div>
                </div>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                        style={{ minHeight: "0", paddingTop: "0.5em" }}
                    >
                        {pages.map((page) => (
                            <div className="a__navlink" key={page}>
                                <Link to={page.toLowerCase()}>{page.replace(/-/g, ' ')}</Link>
                            </div>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;