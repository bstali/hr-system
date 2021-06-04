import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, AppBar, Tabs, Tab, Typography, Box, } from '@material-ui/core';
import UserInfo from './UserInfo';
import UserTimeOffChart from './UserTimeOffChart';
import { get } from 'lodash';

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
        <Box p={0}>
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

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#14196b',
    height: '50px',
    paddingTop: '0px',
    borderRadius: '0.3rem 0.3rem 0 0',
    boxShadow: '2px 5px 7px 2px grey',
  },
  
});

export default function SimpleTabs(props) {
  const classes = useStyles();
  
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

 
  return (
    <div >
      <AppBar position="static" className={classes.root}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Employee Info" {...a11yProps(0)} />
          <Tab label="Time Off" {...a11yProps(1)} />
          
        </Tabs>
      </AppBar>
      <div>
      <TabPanel value={value} index={0} >
        <UserInfo userDetail={props.userDetail}/> 
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserTimeOffChart 
        totalLeaves={get(props.userDetail,'totalLeaves', '')}
        leavesDone={get(props.userDetail,'leavesDone', '')}
        />
      </TabPanel>
      </div>
    </div>
  );
}