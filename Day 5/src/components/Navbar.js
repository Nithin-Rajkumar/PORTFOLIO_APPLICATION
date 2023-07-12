import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'ORANGE',
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    color: 'WHITE',
  },
  link: {
    textDecoration: 'none',
    fontFamily: 'Helvetica Neue, sans-serif',
    fontSize: '1.2rem',
    color: 'WHITE',
    marginLeft: theme.spacing(2),
  },
  profileMenu: {
    marginTop: theme.spacing(6),
  },
}));

function Navbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" component={Link} to="/" className={classes.title}>
            MakeFolio
          </Typography>
          <Typography variant="body1" component={Link} to="/" className={classes.link}>
            Home
          </Typography>
          <Typography variant="body1" component={Link} to="/TemplateSelection" className={classes.link}>
            Creation
          </Typography>
          <Typography variant="body1" component={Link} to="/about" className={classes.link}>
            About
          </Typography>
          <Typography variant="body1" component={Link} to="/login" className={classes.link}>
            Login
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
            className={classes.profileMenu}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
