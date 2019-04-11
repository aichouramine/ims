import React from 'react';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className="p-0 container-fluid">
            <nav className="align-items-stretch flex-md-nowrap p-0 navbar navbar-light">
                <form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                    <div className={`${classes.Input_group} ml-3 input-group input-group-seamless`}>
                        <div className="input-group input-group-prepend">
                            <span className="input-group-text">
                                <i className="material-icons">search</i>
                            </span>
                        </div>
                        <input placeholder="Search for something..." className={`${classes.Input_search} navbar-search form-control`}/>
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
            </nav>
        </div>
    </header>
);

export default toolbar;