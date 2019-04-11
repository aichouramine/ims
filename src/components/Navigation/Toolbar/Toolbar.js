import React from 'react';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <form>
            <div>
                <div>
                    <span>
                        <i className="material-icons">search</i>
                    </span>
                </div>
                <input></input>
            </div>
        </form>
        <div className={classes.Notification}>
            <div>
                <div>
                    <i className="material-icons">notifications</i>
                    <span className="badge badge-pill badge-danger">2</span>
                </div>
            </div>
        </div>
        <div className={classes.Profile_Nav}>
            <div className={classes.Avatar}/>
            <span>Dzmitry Ihnatovich</span>
        </div>
    </header>
);

export default toolbar;