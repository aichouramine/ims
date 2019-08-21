import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
    if(props.show){
        document.querySelector('body').classList.add(classes.scroll_lock)
    } else {
        if(document.querySelector('body').classList.contains(classes.scroll_lock)){
            document.querySelector('body').classList.remove(classes.scroll_lock)
        }
    }

    return(
        props.show ? <div className={classes.backdrop} onClick={props.clicked}></div> : null
    )
}

export default backdrop;