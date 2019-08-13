import React from 'react';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidebar from '../Navigation/Sidebar/Sidebar'

const layout = (props) => (
    <div className={classes.Wrapper}>
        <div className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
            <main className={`${classes.Content} main-content-container container-fluid px-5 mb-4`}>
                {props.children}
            </main>
            <footer style={{height: '3.75rem'}} className="d-flex p-2 px-3 bg-white border-top align-items-center flex-shrink-0">
                <div className="container-fluid">
                    <span style={{fontSize: '12px'}}>ignatovich.dm@gmail.com</span>
                </div>
            </footer>
        </div>
    </div>
);

export default layout;