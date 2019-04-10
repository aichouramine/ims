import React from 'react';
import classes from './Layout.module.css'
import Hoc from '../../hoc/Hoc'

const layout = (props) => (
    <Hoc>
        <div>Toolbar</div>
        <main className={classes.Content}>{props.children}</main>
    </Hoc>
);

export default layout;