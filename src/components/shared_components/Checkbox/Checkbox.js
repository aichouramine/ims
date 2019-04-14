import React, { Component } from 'react';
import classes from './Checkbox.module.css';

const checkbox = (props) => (
    <div className={`${classes.Checkbox} custom-checkbox custom-control form-group`}>
        <input type="checkbox" className="custom-control-input" id={props.label} checked={props.checked} onChange={(e) => console.log(e.target.checked)}/>
        <label className="label-for-check custom-control-label" htmlFor={props.label}>{props.label}</label>
    </div>
)

export default checkbox;

// class Checkbox extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             checked: false
//         }
//     }
//
//     handleClick = (e) => {
//         this.setState({
//             checked: e.target.checked
//         });
//         if (this.props.onCheckChanged) {
//             this.props.onCheckChanged(e.target.checked);
//         }
//     }
//
//     render() {
//         return (
//             <div className="boxes">
//                 <input type="checkbox" id={this.props.label} checked={this.state.checked} onChange={this.handleClick}/>
//                 <label className="label-for-check" htmlFor={this.props.label}>{this.props.label}</label>
//             </div>
//         )
//     }
// }
//
// export default Checkbox;
