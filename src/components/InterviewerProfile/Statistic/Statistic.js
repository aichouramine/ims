import React from 'react';
import {Line} from 'react-chartjs-2';
import classes from './Statistic.module.css';
import moment from "moment/moment";

const statistic = props => {
    let dates = props.statistic.map(i =>{
        return moment(i.month).format("MMM")
    })

    // moment(int.date).format("DD-MMMM-YY, HH:mm a")

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
                pointBorderWidth: 1,
                pointHoverRadius: 3,
                pointHoverBackgroundColor: 'rgba(68,156,251,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 1,
                data: [0, 1, 2, 2, 4, 3, 2, 1, 0, 1, 0]
            }
        ]
    };

    return(
        <div className={`${props.styleClass} h-100`}>
            {/*{console.log(dates)}*/}
            <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
                <h6 className="m-0">Interviews overview</h6>
            </div>
            <div className="d-flex py-0 card-body">
                <Line data={data} options={{maintainAspectRatio: false, animation: 0}}/>
            </div>
            <div className={`${classes.Card_footer} ${classes.Border_top}`}>
                <div className="row">
                    <span className={`${classes.total} ${classes.Text_right} col`}>Total number: {props.total}</span>
                </div>
            </div>
        </div>
    )
}

export default statistic;

