import React from 'react';

import { Card, CardContent, makeStyles, Tab, Paper } from '@material-ui/core';
import { Chart, PieSeries, Title } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


const useStyles = makeStyles({

    card: {
        width: '143%',
    },

    pieChart: {

        marginTop: '120px'
    }

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
                <div>
                    <h3>Total Holidays: 30</h3>
                    <h3>Leaves Done: 20</h3>
                </div>
                <div className={classes.pieChart}>
                    <Paper>
                        <Chart
                            data={chartData}
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