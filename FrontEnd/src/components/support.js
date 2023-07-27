import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles
} from '@material-ui/core';
import Navbar from './Navbar';
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#E50914',
  },
  container: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(3),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const SupportPage = () => {
  const classes = useStyles();

  return (
    <div>
      <Navbar/>
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}  >
        <Toolbar>
          <Typography variant="h6">Help Center</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={3} backgroundColor="#fef9f92c">
          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Frequently Asked Questions          </Typography>
              <List>
                <ListItem button>
                  <ListItemText primary="Account & Billing" />
                </ListItem>
                <Divider className={classes.divider} />
                <ListItem button>
                  <ListItemText primary="Proffessional templates" />
                </ListItem>
                <Divider className={classes.divider} />
                <ListItem button>
                  <ListItemText primary="Devices" />
                </ListItem>
                <Divider className={classes.divider} />
                <ListItem button>
                  <ListItemText primary="Proffessional Content" />
                </ListItem>
                 <ListItem button><NavLink  to={"/feed"}>
                  <ListItemText primary="FeedBack" /></NavLink>
                </ListItem> 
                 
              </List>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <Typography variant="h6">Account & Billing</Typography>
              <Typography variant="body1">
              The client is highly valued, and their needs will be prioritized. There is no room for errors or delays as the building blocks of their professional journey are shaped. There is no need to compromise on quality or settle for mediocre outcomes. It's a collaborative process, akin to crafting a masterpiece. But instead of paints and canvas, it's about code and innovation. </Typography>
              <Divider className={classes.divider} />
              <Typography variant="h6">Proffessional Templates</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit nisi vitae neque cursus, ut lacinia elit cursus. Nulla sagittis tellus vel ipsum commodo tempus. Proin eu fringilla turpis, in blandit tellus. Sed at elit est. Curabitur et sapien lectus. Integer fermentum nisi ut aliquet aliquam. Sed ac malesuada magna. Curabitur viverra nisi a dapibus aliquam.
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="h6">Devices</Typography>
              <Typography variant="body1">
              We'll work together to create a portfolio that speaks volumes. Every element will be carefully curated to showcase their skills and accomplishments. But just like any great project, it requires dedication and attention to detail. We'll go the extra mile to ensure that the final result is exceptional, leaving a lasting impression. So let's embark on this exciting adventure, crafting a portfolio that stands out from the crowd!             
              </Typography>
              <Divider className={classes.divider} />
              <Typography variant="h6">Proffessional Content</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla hendrerit nisi vitae neque cursus, ut lacinia elit cursus. Nulla sagittis tellus vel ipsum commodo tempus. Proin eu fringilla turpis, in blandit tellus. Sed at elit est. Curabitur et sapien lectus. Integer fermentum nisi ut aliquet aliquam. Sed ac malesuada magna. Curabitur viverra nisi a dapibus aliquam.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
    </div>
  );
};

export default SupportPage;
