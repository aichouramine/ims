import React from 'react';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidebar from '../Navigation/Sidebar/Sidebar'

const layout = (props) => (
    <div className={classes.Wrapper}>
        <Sidebar/>
        <div className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
            <Toolbar/>
            <main className={`${classes.Content} main-content-container container-fluid px-4`}>
                <div className="page-header row no-gutters py-4">
                    <div className="col-12 col-sm-4 text-center text-sm-left mb-0">
                        <span className={`${classes.Page_subtitle} text-uppercase`}>
                            Overview
                        </span>
                        <h3 className={classes.Page_title}>
                            {props.title}
                        </h3>
                    </div>
                </div>
                {props.children}
            </main>
        </div>
    </div>
);

export default layout;