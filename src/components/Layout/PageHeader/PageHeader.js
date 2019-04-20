import React from 'react';
import classes from './PageHeader.module.css';

const pageHeader = props => (
    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
            <span className={`${classes.Page_subtitle} text-uppercase`}>
                {props.subtitle}
            </span>
        <h3 className={classes.Page_title}>
            {props.title}
        </h3>
    </div>
);

export default pageHeader;