import React, {useState, useEffect} from 'react';
import classes from './Sidebar.module.css'
import MenuRow from './MenuRow/MenuRow'

const sidebar = () => {
    const [checked, set] = useState(null);
    const [label, setLabel] = useState("Enable Dark Mode!")

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);

            if (currentTheme === 'dark') {
                set(true)
                document.documentElement.setAttribute('theme', 'dark');
                setLabel("Disable Dark Mode!")
            } else {
                set(false)
            }
        }
    }, []);

    function toggle(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('theme', 'dark');
            localStorage.setItem('theme', 'dark')
            set(true)
            setLabel("Disable Dark Mode!")
        }
        else {
            document.documentElement.removeAttribute('theme');
            localStorage.setItem('theme', 'light')
            set(false)
            setLabel("Enable Dark Mode!")
        }
    }

    return(
        <aside className={`${classes.Sidebar} px-0 col-12 col-md-3 col-lg-2`}>
            <div>
                <nav
                    className={`${classes.Main_Logo} align-items-stretch flex-md-nowrap border-bottom p-0 navbar `}>
                    <div className="w-100 mr-0 navbar-brand"
                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {/*<div className={classes.Logo}/>*/}
                        <span style={{fontWeight: 600}}>QA Interview</span>
                    </div>
                </nav>
            </div>
            <nav className={classes.Menu_wrapper}>
                <ul className="nav flex-column">
                    <MenuRow title="Dashboard" navLink="/" icon="insert_chart_outlined"/>
                    <MenuRow title="Interviewers" navLink="/interviewers" icon="people"/>
                    <MenuRow title="Candidates" navLink="/candidates" icon="person"/>
                    <MenuRow title="Interviews" navLink="/interviews" icon="table_chart"/>
                    <MenuRow title="Schedule" navLink="/schedule" icon="insert_invitation"/>
                    {/*<MenuRow title="Interview Follow-Ups" navLink="/feedbacks" icon="create"/>*/}
                    {/*<MenuRow title="QA Needs" navLink="/needs" icon="how_to_reg"/>*/}
                    {/*<MenuRow title="Help" navLink="/" icon="question_answer"/>*/}
                </ul>
                <div className={classes.slider_wrapper}>
                    <div className="d-flex flex-row justify-content-center align-items-center " style={{margin: '10px 0'}}>
                        <label className={classes.switch}>
                            <input type="checkbox" id="checkbox" onChange={toggle} checked={checked}/>
                            <span className={`${classes.slider} ${classes.round}`}></span>
                        </label>
                        <label style={{fontSize: '0.8em'}} htmlFor="mode">{label}</label>
                    </div>
                </div>
            </nav>
        </aside>
    )
};

export default sidebar;