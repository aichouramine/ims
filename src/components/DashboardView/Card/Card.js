import React from 'react';
import classes from './Card.module.css';

const card = props => (
    <div className={`${classes.Stats_small} ${props.styleClass} stats-small card card-small`}>
        <div className={`${classes.Card_body} px-0 pb-0`}>
            <div className="d-flex px-3">
                <div className="d-flex flex-column m-auto">
                    <div className={`${classes.Stats_small_data} ${classes.Text_center}`}>
                        <span className={`${classes.Stats_small_label} mb-1 ${classes.Text_uppercase}`}>{props.label}</span>
                        <h6 className={`${classes.Stats_small_value} count m-0`}>{props.count}</h6>
                    </div>
                </div>
                <div className="stats-small__data text-right align-items-center">
                    <span className="stats-small__percentage stats-small__percentage--increase">12.4%</span>
                </div>
            </div>
            {/*<canvas height="60" className="analytics-overview-stats-small-1"*/}
                    {/*style={{display: "block", height: "88px", width: "220px"}}></canvas>*/}
        </div>
    </div>
);

export default card;