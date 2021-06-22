import React from 'react';
import { useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Card, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

  card: {
    width: '100%',
    boxShadow: '2px 5px 7px 2px grey',
    marginTop: '-10px'
  },

  calendar: {
    height: 400,
    width: '100%'
  }

});

const localizer = momentLocalizer(moment)



const UserLeavesCalendar = () => {
  const classes = useStyles();
  const { employeeDetails } = useSelector(state => state.employeeDetails)
  const myEventsList = employeeDetails.leaves.map((leave) => {
    const leaves = {
      'title': 'Leaves',
      'allDay': true,
      'start': leave.startDate,
      'end': leave.endDate
    }

    return leaves
  })
  
  return (
    <div >
      <Card className={classes.card}>
        <CardContent >
          <div className={classes.calendar}>
            <Calendar
              localizer={localizer}
              events={myEventsList}
              startAccessor="start"
              endAccessor="end"
            />
          </div>
        </CardContent>
      </Card>
    </div>

  )
}

export default UserLeavesCalendar;