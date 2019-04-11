import React from 'react';
import classes from './Sidebar.module.css'

const sidebar = (props) => (
    <aside className={`${classes.Sidebar} px-0 col-12 col-md-3 col-lg-2`}>
        <div>
            <nav className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0 navbar navbar-light">
                <div className="w-100 mr-0 navbar-brand" >
                    <i className="material-icons">mic</i>
                    <span>QA Interview</span>
                </div>
            </nav>
        </div>
        <nav >
            <ul>
                <li><a href="#section-1">Section 1</a></li>
                <li><a href="#section-2">Section 2</a></li>
                <li><a href="#section-3">Section 3</a></li>
                <li><a href="#section-4">Section 4</a></li>
            </ul>
        </nav>
    </aside>
);

export default sidebar;