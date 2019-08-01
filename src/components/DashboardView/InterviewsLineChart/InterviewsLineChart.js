import React from 'react';
import {Line} from 'react-chartjs-2';
import classes from './InterviewsLineChart.module.css';
import moment from "moment/moment";

const LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const interviewsLineChart = props => {
    let currentYearNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let prevYearNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    LABELS.forEach((l, i) =>{
        props.statistic.currentYear.forEach(s => {
            if(s.month && moment(s.month).format("MMM")===l)
                currentYearNumbers[i] = s.count
        })
    })

    LABELS.forEach((l, i) =>{
        props.statistic.prevYear.forEach(s => {
            if(s.month && moment(s.month).format("MMM")===l)
                prevYearNumbers[i] = s.count
        })
    })

    const data = {
        labels: LABELS,
        datasets: [
            {
                label: 'Current Year',
                fill: true,
                lineTension: 0.3,
                backgroundColor: 'rgba(68,156,251,0.4)',
                borderColor: 'rgba(0,123,255,1)',
                borderCapStyle: 'round',
                borderDash: [],
                borderWidth: 2,
                borderDashOffset: 4.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(68,156,251,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 3,
                pointHoverBackgroundColor: 'rgba(68,156,251,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                data: currentYearNumbers
            },
            {
                label: 'Past Year',
                fill: true,
                lineTension: 0.3,
                backgroundColor: 'rgba(251,113,113,0.4)',
                borderColor: 'rgba(251,90,90,1)',
                borderCapStyle: 'round',
                borderDash: [],
                borderWidth: 2,
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(251,113,113,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 3,
                pointHoverBackgroundColor: 'rgba(251,113,113,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                data: prevYearNumbers
            }
        ]
    };

        return(
            <div className={`${props.styleClass} h-100`} >
                <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
                    <h6 className="m-0">Interviews overview</h6>
                </div>
                <div className="d-flex py-0 card-body">
                    <Line data={data} options={{maintainAspectRatio: false, animation: 0}}/>
                </div>
                <div className={`${classes.Card_footer}`}>

                </div>
            </div>
        )
}

export default interviewsLineChart;

