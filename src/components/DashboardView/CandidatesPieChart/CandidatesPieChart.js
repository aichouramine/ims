import React from 'react';
import {Pie} from 'react-chartjs-2';
import classes from './CandidatesPieChart.module.css';
import {locations} from "../../../enums/locations";

const candidatesPieChart = props => {
    let labels = props.countByLocations.map(i => {
        return locations[i.location];
    })

    let dataset = props.countByLocations.map(i => {
        return i.count;
    })

    function onChange(e) {
        props.getLocations(e.target.value)
    }

    const data = {
        labels: labels,
        datasets: [{
            data: dataset,
            backgroundColor: [
                '#0075ea',
                '#20a453',
                '#37abf5',
                '#75c8f5'
            ],
            hoverBackgroundColor: [
                '#0075ea',
                '#20a453',
                '#37abf5',
                '#75c8f5'
            ]
        }]
    };

    let stats = (
        <Pie data={data} options={{maintainAspectRatio: false}} width={442}
             height={323}/>
    )

    if(props.countByLocations.length===0){
        stats = (
            <span style={{color: '#98a0a8'}}>No data</span>
        )
    }

    return(
        <div className={`${props.styleClass} h-100 `}>
            <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
                <h6 className="m-0">Candidates by location</h6>
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
                        <option value="currentMonth">Current Month</option>
                        <option value="prevMonth">Prev Month</option>
                        <option value="currentYear">Current Year</option>
                        <option value="prevYear">Prev Year</option>
                    </select></div>
                    <div className={`${classes.View_report} ${classes.Text_right} col`}>
                        <div onClick={() => props.redirect('candidates')}>View full report →</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default candidatesPieChart;