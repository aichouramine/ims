import React from 'react';
import {Line} from 'react-chartjs-2';
import classes from './InterviewsLineChart.module.css';

const data = {
    labels: ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '30'],
    datasets: [
        {
            label: 'Current Month',
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
            data: [65, 59, 80, 81, 70, 60, 55, 40, 30]
        },
        {
            label: 'Past Month',
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
            data: [60, 70, 85, 90, 85, 65, 50, 53, 30]
        }
    ]
};

const interviewsLineChart = props => (
    <div className={`${props.styleClass} h-100`}>
        <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
            <h6 className="m-0">Interviews overview</h6>
        </div>
        <div className="d-flex py-0 card-body">
            <Line data={data} options={{ maintainAspectRatio: false, animation: 0 }}/>
        </div>
        <div className={`${classes.Card_footer} ${classes.Border_top}`}>
            <div className="row">
                <div className={`${classes.View_report} ${classes.Text_right} col`}><a href="#">View full report →</a></div>
            </div>
        </div>
    </div>
)

export default interviewsLineChart;

