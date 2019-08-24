import React from 'react';
import classes from './Newcomers.module.css';
import NewcomerRow from './NewcomerRow/NewcomerRow';

const newcomers = props => {
    let newcomers = <li className={classes.no_data}>No data</li>;

    if(props.newcomers && props.newcomers.length > 0) {
        newcomers = props.newcomers.map((n, i) => {
            return(
                <NewcomerRow key={`${i}`} name={`${n.firstname} ${n.lastname}`} date={n.startDate}/>
            )
        })
    }



    return(
        <div className={`${props.styleClass} h-100 `}>
            <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
                <h6 className="m-0">Newcomers</h6>
            </div>
            <div className="d-flex p-0 card-body">
                <ul className="list-group-small list-group list-group-sm list-group-flush w-100">
                    {newcomers}
                </ul>
            </div>
            <div className={`${classes.Card_footer} ${classes.Border_top}`}>
                <div className="row">
                    <div className={`${classes.View_report} ${classes.Text_right} col`}>
                        <div onClick={() => props.redirect('candidates')}>View full report →</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default newcomers;