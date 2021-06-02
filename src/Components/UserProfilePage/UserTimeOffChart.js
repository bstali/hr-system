import React from 'react';

import { Card, CardContent, makeStyles, Paper } from '@material-ui/core';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


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

const data = [
    { leaves: 'remainingLeaves', area: 25 },
    { leaves: 'leavesDone', area: 75 },
]

export default function TimeOffTab() {
    const classes = useStyles();
    const chartData = data;

    return (
        <Card className={classes.card}>

            <CardContent>
                <div className={classes.content}>
                    <h3>Total Holidays: 30</h3>
                    <h3>Leaves Done: 20</h3>
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