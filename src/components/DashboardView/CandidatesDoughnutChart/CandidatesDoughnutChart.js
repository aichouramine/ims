import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import classes from './CandidatesDoughnutChart.module.css';
import {levels} from '../../../enums/levels';

const candidatesDoughnutChart = props => {
    let labels = props.countByLevels.map(i => {
        return levels[i.level];
    })

    let dataset = props.countByLevels.map(i => {
        return i.count;
    })

    let data = {
        labels: labels,
        datasets: [{
            data: dataset.slice(),
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#ff6f42'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#ff6f42'
            ]
        }]
    };

    function onChange(e) {
        props.getLevels(e.target.value)
    }

    let stats = (
        <Doughnut data={data} options={{maintainAspectRatio: false}} width={400}
                  height={300}/>
    )

    if(props.countByLevels.length===0){
        stats = (
            <span style={{color: '#98a0a8'}}>No data</span>
        )
    }

    return(
        <div className={`${props.styleClass} h-100 `} style={{minHeight: '420px'}}>
            <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
                <h6 className="m-0">Candidates by level</h6>
            </div>
            <div className="d-flex py-0 card-body justify-content-center align-items-center">
                {stats}
            </div>
            <div className={`${classes.Card_footer} ${classes.Border_top}`}>
                <div className="row">
                    <div className="col"><select
                        className={`${classes.Custom_select} form-control custom-select form-control-sm custom-select-sm`}
                        style={{maxWidth: "130px"}}
                        onChange={onChange}
                    >
                        <option value="currentYear">Current Year</option>
                        <option value="currentMonth">Current Month</option>
                        <option value="prevMonth">Prev Month</option>
                        <option value="prevYear">Prev Year</option>
                    </select></div>
                    <div className={`${classes.View_report} ${classes.Text_right} col`}>
                        <div onClick={() => props.redirect("candidates")}>View full report →</div>
                    </div>
                </div>
            </div>
        </div>
        )
};

export default candidatesDoughnutChart;