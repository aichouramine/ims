import React from 'react';
import classes from './ConfirmDialog.module.css';

const confirmDialog = props => {

    return(
        <div className={`${classes.confirm_alert_body} h-100 `}>
            {/*<div className={`${classes.card_header} ${classes.border_bottom}`}>*/}
                {/*<h6 className="m-0">Success</h6>*/}
            {/*</div>*/}

            <div className={`d-flex flex-column p-0 ml-3 card-body ${classes.card_body}`}>
                <div className={`mb-3 mx-auto ${classes.avatar_img}` } />
                <h5>{props.message}</h5>
                <span>{props.subMessage}</span>
            </div>
            <div className={`${classes.card_footer}`}>
                <div className={`${classes.confirm_alert_button_group}`}>
                    <button type="submit" className="mb-2 mr-1 btn btn-primary btn-sm" onClick={props.onConfirmAction}>Yes</button>
                    <button type="button" className="mb-2 mr-1 btn btn-outline-secondary btn-sm" onClick={props.onCancel}>No</button>
                </div>
            </div>
        </div>
    )
}

export default confirmDialog;