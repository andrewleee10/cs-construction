import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import LoginForm from '../../components/LoginForm'
import RegisterForm from '../../components/RegisterForm'
import useMediaQuery from '@material-ui/core/useMediaQuery';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  image: {
    backgroundImage: 'url(https://www.flowstobay.org/wp-content/uploads/2020/03/shutterstock_473681902-scaled.jpg)',

    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vh',
    // maxwidth: '100vh',
    // maxheight: '100vh'
  },
  mobileImage: {
    backgroundImage: 'url(https://www.flowstobay.org/wp-content/uploads/2020/03/shutterstock_473681902-scaled.jpg)',

    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vh',
    minwidth: '100vh',
    minheight: '100vh'
  },
}));


const Login = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const matches = useMediaQuery('(min-width:959px)');

  return (
    <>

      <Grid container component="main" maxWidth="xs">
        <CssBaseline />
        {matches ?
          <Grid item xs={false} sm={12} lg={8} md={8} xl={6} className={classes.image} />
          :
          <Grid item xs={false} sm={12} lg={8} md={8} xl={6} className={classes.mobileImage} />
        }
        <Grid item xs={false} sm={12} lg={4} md={4} xl={6}>
          <div className={classes.root}>

            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
                <Tab label="Login" {...a11yProps(0)} />
                <Tab label="Register" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <LoginForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <RegisterForm />
            </TabPanel>
          </div>
        </Grid>
      </Grid>


    </>

  );
}

export default Login