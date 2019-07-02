import React from 'react';
import classes from './ConfirmDialog.module.css';

const confirmDialog = props => {

    return(
        <div className={`${classes.confirm_alert_body} h-100 `}>
            <div className={`${classes.card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Confirm to remove</h6>
            </div>
            <div className={`d-flex p-0 ml-3 card-body ${classes.card_body}`}>
                <span>Are you sure to do this? This action cannot be undone!</span>
            </div>
            <div className={`${classes.card_footer}`}>
                <div className={classes.confirm_alert_button_group}>
                    <button type="button" className="btn btn-danger btn-sm" onClick={props.onConfirmRemove}>Yes</button>
                    <button type="button" className="btn btn-outline-dark btn-sm" onClick={props.onCancel}>No</button>
                </div>
            </div>
        </div>
    )
}

export default confirmDialog;