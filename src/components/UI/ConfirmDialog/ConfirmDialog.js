import React from 'react';
import classes from './ConfirmDialog.module.css';

const confirmDialog = props => {

    return(
        <div className={`${classes.confirm_alert_body} h-100 `}>
            <div className={`${classes.card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Create interview</h6>
            </div>
            <div className={`d-flex flex-column p-0 ml-3 card-body ${classes.card_body}`}>
                <span>Candidate is added successfully.</span>
                <span>Would you like to create an interview record for candidate?</span>
            </div>
            <div className={`${classes.card_footer}`}>
                <div className={`btn-group ${classes.confirm_alert_button_group}`}>
                    <button type="submit" className="btn btn-primary btn-sm" onClick={props.onConfirmAction}>Yes</button>
                    <button type="button" className="btn btn-outline-dark btn-sm" onClick={props.onCancel}>No</button>
                </div>
            </div>
        </div>
    )
}

export default confirmDialog;