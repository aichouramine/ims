import React from 'react';
import classes from './Error.module.css';

const error = props => (
    <div className={classes.error}>
        <div className={classes.error__content}>
            <span>404</span>
            <h3>Page not found</h3>
            <p>It looks like you're lost.</p>
            <button className="btn btn-primary btn-sm"
                    style={{borderRadius: '50px', fontSize: '12px', paddingLeft: '5px'}}
                    onClick={props.goBack}
            >
                &#x21A9; Go to Home
            </button>
        </div>
    </div>
)

export default error;
