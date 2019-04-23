import React from 'react';
import classes from './Remove.module.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Hoc from '../../../../hoc/Hoc';

export default class Remove extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            popoverOpen: false,
            popoverId: `Popover${this.props.elementId}`
        };
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render(){
        return(
            <Hoc>
                <div className={classes.Remove}>
                    <i className="material-icons" id={this.state.popoverId}>
                        remove_circle_outline
                    </i>
                </div>
                <Popover innerClassName={classes.Popover} placement="bottom" isOpen={this.state.popoverOpen} target={this.state.popoverId} toggle={this.toggle}>
                    <PopoverHeader>{this.props.popoverHeader}</PopoverHeader>
                    <PopoverBody>
                        <div className="d-flex flex-column" >
                            <span className={classes.Popover_body}>
                                {this.props.children}
                            </span>
                            <div className="btn-group" style={{width: "70%", margin: 'auto'}}>
                                <button className={`${classes.Remove_button_text} mb-2 mr-1 btn btn-danger btn-sm`} >{this.props.confirmTitle}</button>
                                <button className={`${classes.Remove_button_text} mb-2 mr-1 btn btn-outline-secondary btn-sm`}>Cancel</button>
                            </div>
                        </div>
                    </PopoverBody>
                </Popover>
            </Hoc>
        )
    }
}

