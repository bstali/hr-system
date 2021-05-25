import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './employeeDetails.css'

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '../CircularProgress/circularProgress'
// import Navbar from '../NavBar/navbar'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function EmployeeDetailsTable() {
  const [user, setUser] = useState([]);
  const classes = useStyles();
  const [circularProgress, setCircularProgress] = useState(false)

  useEffect(() => {
    setCircularProgress(true)
    axios.get('https://60895cb08c8043001757ea35.mockapi.io/api/user')
      .then(response => {
        console.log('response', response.data)
        setUser(response.data)
        setCircularProgress(false)
      });
  }, []);


  return (
    <>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {/* <Grid item xs={12}><Navbar /></Grid> */}
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          {circularProgress ? <CircularProgress /> : null}

          <Grid item xs={12}>

            {
              user.length > 0 ?

                <TableContainer component={Paper} ><h1 style={{textAlign:'left'}}>Employees</h1>
                  <Table className={classes.table} aria-label="simple table" >

                    <TableHead>
                      <TableRow >
                        <TableCell>ID</TableCell>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Phone</TableCell>
                        <TableCell align="left">Email</TableCell>
                        <TableCell align="left">Password</TableCell>
                        <TableCell align="left">Company Name</TableCell>
                        

                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {user.map((usr) => (

                        <TableRow key={usr.id}>
                          <TableCell component="th" scope="row" >{usr.id}
                          </TableCell>
                          <TableCell align="left" data-letters="HA">{usr.name}</TableCell>
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