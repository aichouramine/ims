import React from 'react';
import classes from './Card.module.css';

const card = props => (
    <div className={`${classes.Stats_small} ${props.styleClass}`}>
        <div className={`${classes.Card_body} p-0 d-flex`}>
            <div className="d-flex flex-column m-auto">
                <div className={`${classes.Stats_small_data} ${classes.Text_center}`}>
                    <span className={`${classes.Stats_small_label} mb-1 ${classes.Text_uppercase}`}>{props.label}</span>
                    <h6 className={`${classes.Stats_small_value} count m-0`}>{props.count}</h6>
                </div>
                {/*<div className={classes.Stats_small_data}>*/}
                    {/*<span className={`${classes.Stats_small_data_percentage} stats-small__percentage--increase`}>4.7%</span>*/}
                {/*</div>*/}
            </div>
            {/*<canvas height="60" className="analytics-overview-stats-small-1"*/}
                    {/*style={{display: "block", height: "88px", width: "220px"}}></canvas>*/}
        </div>
    </div>
);

export default card;