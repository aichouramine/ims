import React from 'react';
import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <div className={`${classes.Toolbar} sticky-top`}>
        <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0" style={{height: "3.75rem"}}>
            {/*<form className="main-navbar__search d-none d-md-flex d-lg-flex">*/}
                {/*<div className={`${classes.Input_group} input-group input-group-seamless ml-3`}>*/}
                    {/*<i className="material-icons" style={{color: "#8c939b", fontSize: "17px", fontWeight: 600}}>search</i>*/}
                    {/*<input placeholder="Search for something..." className={`${classes.Input_search}`}/>*/}
                {/*</div>*/}
            {/*</form>*/}

            {/*<div className={classes.Notification}>*/}
                {/*<div>*/}
                    {/*<div>*/}
                        {/*<i className="material-icons">notifications</i>*/}
                        {/*<span className="badge badge-pill badge-danger">2</span>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}

            {/*<div className={classes.Profile_Nav}>*/}
                {/*<div className={`${classes.Wrapper} nav-link text-nowrap px-3`}>*/}
                    {/*<div className={classes.Avatar}/>*/}
                    {/*<span>d.ihnatovich</span>*/}
                {/*</div>*/}
            {/*</div>*/}
        </nav>
    </div>
);

export default toolbar;