import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { orderBy } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '../CircularProgress/CircularProgress';
import Avatar from '@material-ui/core/Avatar';
import UserProfile from '../UserProfilePage/UserProfile'


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    display: 'flex',
  },
  avatar: {
    color: 'white',
    backgroundColor: '#14196b',
    width: theme.spacing(3),
    height: theme.spacing(3),
    fontSize: '0.8rem',
  },
  userNameText: {
    marginLeft: '6px',
    marginTop: '3px',
    cursor: 'pointer'
  },

  circularProgress: {
    paddingLeft: 50,
    paddingTop: 200,
  }
}));


function EmployeeDetailsTable() {
  const [users, setUsers] = useState([]);
  const classes = useStyles();
  const [circularProgress, setCircularProgress] = useState(false)
  const history = useHistory();

  useEffect(() => {
    setCircularProgress(true)
    axios.get('https://60895cb08c8043001757ea35.mockapi.io/api/user/')
      .then(response => {
        const usersArray = response.data;
        setUsers(usersArray)
        setCircularProgress(false)
      });
  }, []);

  const sortUsers = (sortOrder) => {
    const usersArray = users;
    let sortedUsers = [];
    if (sortOrder === 'desc') {
      sortedUsers = orderBy(usersArray, ['name'], ['desc'])
    } else if (sortOrder === 'asc') {
      sortedUsers = orderBy(usersArray, ['name'], ['asc'])
    }
    setUsers(sortedUsers)
  }

  const getIdUrl = (userId) => {
    console.log(userId,"BBBBBBBBBBBBBBBBBBSIT")
    history.push(`/Userprofile/${userId}`)
   { <UserProfile user={userId}/>}
    
  }

  return (
    <>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >

        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {circularProgress ? <CircularProgress /> : null}

          <Grid item xs={12}>

            {
              users.length > 0 ?

                <TableContainer component={Paper} ><h1 style={{ textAlign: 'left' }}>Employees</h1>
                  <Table className={classes.table} aria-label="simple table" >

                    <TableHead>
                      <TableRow >
                        <TableCell>ID</TableCell>
                        <TableCell align="left">
                          <span style={{ cursor: 'pointer' }} onClick={() => sortUsers('asc')}>▲</span>
                          Name
                          <span style={{ cursor: 'pointer' }} onClick={() => sortUsers('desc')}>▼</span>
                        </TableCell>
                        <TableCell align="left">Phone</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Password</TableCell>
                        <TableCell align="left">Company Name</TableCell>


                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {users.map((usr) => (

                        <TableRow key={usr.id}>
                          <TableCell component="th" scope="row" >{usr.id}
                          </TableCell>
                          <TableCell align="left">
                            <div className={classes.root}>
                              <Avatar className={classes.avatar}>{usr.name.charAt(0)}</Avatar>
                              <div className={classes.userNameText} onClick={()=>{getIdUrl(usr.id)}}>{usr.name} </div>
                            </div>
                          </TableCell>
                          <TableCell align="left">#####</TableCell>
                          <TableCell align="left">{usr.email}</TableCell>
                          <TableCell align="left">{usr.password}</TableCell>
                          <TableCell align="left">{usr.companyName}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                :
                null
            }
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default EmployeeDetailsTable;