import React from 'react';
import {Line} from 'react-chartjs-2';
import classes from './Statistic.module.css';
import moment from "moment/moment";

const LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const statistic = props => {
    let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    LABELS.forEach((l, i) =>{
        props.statistic.forEach(s => {
            if(s.month && moment(s.month).format("MMM")===l){
                numbers[i] = s.count;
            }
        })
    })

    const total = props.statistic.reduce((a,b) => a + (b['count'] || 0), 0)

    const data = {
        labels: LABELS,
        datasets: [
            {
                label: 'Number of Interviews',
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
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(68,156,251,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 1,
                data: numbers
            }
        ]
    };


    let stats = (
        <Line data={data} options={{maintainAspectRatio: false,
            animation: 0,
            scales: {
                yAxes: [{
                    ticks: {
                        max: Math.max(...numbers) + 1,
                        min: 0,
                        stepSize: 1
                    }
                }]
            },
        }}
        />
    )

    if(props.statistic.length===0){
        stats = (
            <span style={{color: '#98a0a8'}}>No data</span>
        )
    }

    return(
        <div className={`${props.styleClass} h-100`} >
            <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
                <h6 className="m-0">Interviews overview</h6>
            </div>
            <div className="d-flex py-0 card-body justify-content-center align-items-center">
                {stats}
            </div>
            <div className={`${classes.Card_footer} ${classes.Border_top}`}>
                <div className="row">
                    <span className={`${classes.total} ${classes.Text_right} col`}>Total number: {total}</span>
                </div>
            </div>
        </div>
    )
}

export default statistic;

