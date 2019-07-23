import React from 'react';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidebar from '../Navigation/Sidebar/Sidebar'

const layout = (props) => (
    <div className={classes.Wrapper}>
        <Sidebar/>
        <div className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
            <Toolbar/>
            <main className={`${classes.Content} main-content-container container-fluid px-5 mb-4`}>
                {props.children}
            </main>
            <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
                <div className="container-fluid">
                    Text
                </div>
            </footer>
        </div>
    </div>
);

export default layout;