import React from 'react';
import classes from './Sidebar.module.css'
import MenuRow from './MenuRow/MenuRow'

const sidebar = (props) => (
    <aside className={`${classes.Sidebar} px-0 col-12 col-md-3 col-lg-2`}>
        <div>
            <nav className={`${classes.Main_Logo} align-items-stretch bg-white flex-md-nowrap border-bottom p-0 navbar navbar-light`}>
                <div className="w-100 mr-0 navbar-brand" style={{display: "flex", justifyContent: "center", alignItems: "center"}} >
                    {/*<div className={classes.Logo}/>*/}
                    <span style={{color: "#3d5170", fontWeight: 600}}>QA Interview</span>
                </div>
            </nav>
        </div>
        <nav className={classes.Menu_wrapper}>
            <ul className="nav flex-column">
                <MenuRow title="Dashboard" navLink="/" icon="insert_chart_outlined"/>
                <MenuRow title="Interviews" navLink="/interviews" icon="table_chart"/>
                {/*<MenuRow title="Schedule" navLink="/schedule" icon="insert_invitation"/>*/}
                {/*<MenuRow title="Interview Follow-Ups" navLink="/feedbacks" icon="create"/>*/}
                {/*<MenuRow title="QA Needs" navLink="/needs" icon="how_to_reg"/>*/}
                <MenuRow title="Interviewers" navLink="/interviewers" icon="people"/>
                {/*<MenuRow title="Help" navLink="/" icon="question_answer"/>*/}
            </ul>
        </nav>
    </aside>
);

export default sidebar;