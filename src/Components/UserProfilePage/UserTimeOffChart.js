import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, makeStyles, Paper } from '@material-ui/core';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import {useSelector} from 'react-redux';


const useStyles = makeStyles({

    card: {
        width: '100%',
        boxShadow: '2px 5px 7px 2px grey',
        marginTop: -10
    },

    content: {
        textAlign: 'justify',
        marginLeft: '50px'
    },
});


export default function UserTimeOffChart(props) {
    const {employeeDetails} = useSelector(state => state.employeeDetails)
   console.log('timeoffchart' ,props)
    const classes = useStyles();
    const chartData = [
        { leaves: 'totalLeaves', area: employeeDetails.totalLeaves },
        { leaves: 'leavesDone', area: employeeDetails.leavesDone },
    ]



    return (
        <Card className={classes.card}>

            <CardContent>
                <div className={classes.content}>
                    <h3>Total Leaves: {employeeDetails.totalLeaves}</h3>
                    <h3>Leaves Done: {employeeDetails.leavesDone}</h3>
                </div>
                <div >
                    <Paper >
                        <Chart
                            data={chartData}
                            height={350}
                        >
                            <PieSeries

                                valueField="area"
                                argumentField="leaves"

                            />
                            <Title
                                text="Leaves"
                            />
                            <Animation />
                        </Chart>
                    </Paper>
                </div>
            </CardContent>
        </Card>
    )
}

UserTimeOffChart.propTypes={
    totalLeaves: PropTypes.number,
    leavesDone: PropTypes.number
}