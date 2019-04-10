import React from 'react';
import './Layout.css'
import Hoc from '../../hoc/Hoc'

const layout = (props) => (
    <Hoc>
        <div>Toolbar</div>
        <main className="Content">{props.children}</main>
    </Hoc>
);

export default layout;