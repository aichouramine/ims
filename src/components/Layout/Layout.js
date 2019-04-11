import React from 'react';
import classes from './Layout.module.css'
import Hoc from '../../hoc/Hoc'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => (
    <Hoc>
        <Toolbar/>
        <main className={classes.Content}>{props.children}</main>
    </Hoc>
);

export default layout;