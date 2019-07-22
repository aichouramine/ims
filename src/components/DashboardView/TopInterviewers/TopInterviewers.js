import React from 'react';
import classes from './TopInterviewers.module.css';
import TopInterviewersRow from './TopInterviewersRow/TopInterviewersRow';

const topInterviewers = props => {
    let interviewers = <span>нфомрация отсутствует</span>;

    if(props.topList && props.topList.length > 0) {
        interviewers = props.topList.map((t, i) => {
            return(
                <TopInterviewersRow key={`${i}`} name={`${t.firstname} ${t.lastname}`} count={t.numberOfInterviews}/>
            )
        })
    }


    return(
        <div className={`${props.styleClass} h-100 `}>
            <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
                <h6 className="m-0">Top 5 Interviewers</h6>
            </div>
            <div className="d-flex p-0 card-body">
                <ul className="list-group-small list-group list-group-sm list-group-flush w-100">
                    {interviewers}
                </ul>
            </div>
            <div className={`${classes.Card_footer} ${classes.Border_top}`}>
                <div className="row">
                    <div className="col"><select className={`${classes.Custom_select} form-control custom-select form-control-sm custom-select-sm`}
                                                 style={{maxWidth: "130px"}}>
                        <option value="last-week">All times</option>
                        <option value="last-month">Last Month</option>
                    </select></div>
                    <div className={`${classes.View_report} ${classes.Text_right} col`}><a href="#">View full report →</a></div>
                </div>
            </div>
        </div>
    )
};

export default topInterviewers;