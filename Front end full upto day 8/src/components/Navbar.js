import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import { Home, Create, Info, Help, Person } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  companyName: {
    fontFamily: 'Grand Hotel, cursive',
    letterSpacing: '0.05em',
    marginRight: '4px',
  },
  menuItem: {
    fontFamily: 'Roboto',
    letterSpacing: '0.05em',
  },
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color='warning'>
      <Toolbar>
      <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          <span className={classes.companyName}>MakeFolio</span>
        </Typography>

        <IconButton color="inherit" aria-label="templates" component={Link} to="/templates">
          <Create />
        </IconButton>

        <IconButton color="inherit" aria-label="about" component={Link} to="/about">
          <Info />
        </IconButton>

        <IconButton color="inherit" aria-label="support" component={Link} to="/support">
          <Help />
        </IconButton>

        <IconButton color="inherit" aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
          <Person />
        </IconButton>
        
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          classes={{ paper: classes.menuItem }}
        ><Link to="/profile">
          <MenuItem onClick={handleClose} className={classes.menuItem}>Profile</MenuItem></Link>
          <Link to="/">
          <MenuItem onClick={handleClose} className={classes.menuItem}>Logout</MenuItem></Link>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
