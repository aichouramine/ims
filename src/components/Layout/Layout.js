import React from 'react';
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidebar from '../Navigation/Sidebar/Sidebar'

const layout = (props) => (
    <div className="row">
        {/*<Sidebar/>*/}
        <div className="main-content p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2">
            <Toolbar/>
            <main className={classes.Content}>{props.children}</main>
        </div>
    </div>
);

export default layout;