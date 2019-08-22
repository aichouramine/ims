import React, {useState} from 'react';
import classes from './EventPopover.module.css';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const eventPopover = props => {
    const [popoverOpen, setPopoverState] = useState(false);
    const [popoverId, setPopoverId] = useState(`Popover${props.elementId}`);

    function toggle() {
        let currentState = popoverOpen;

        setPopoverState(!currentState);
    }

    function cancelPopover(){
        setPopoverState(false)
    }

    return(
        <Popover innerClassName={classes.Popover} placement="right" isOpen={props.show} target={props.elementId} toggle={toggle}>
            <PopoverHeader>{props.popoverHeader}</PopoverHeader>
            <PopoverBody>
                <div className="d-flex flex-column" >
                    <span className={classes.Popover_body}>
                        {props.children}
                    </span>
                </div>
            </PopoverBody>
        </Popover>
    )
}

export default eventPopover;