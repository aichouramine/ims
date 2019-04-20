import React from 'react';
import classes from './Remove.module.css';

const remove = () => (
    <div className={classes.Remove}>
        <a className="material-icons"
           data-toggle="popover" title="Popover title" tabindex="0" data-trigger="focus" data-content="And here's some amazing content. It's very engaging. Right?">
            remove_circle_outline
        </a>
    </div>
);

export default remove;