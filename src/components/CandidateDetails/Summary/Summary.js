import React from 'react';
import classes from './Summary.module.css';

const summary = props => {

    return(
        <div className={`${classes.summary} h-100 `}>
            <div className={`${classes.summary_card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Summary</h6>
            </div>
            <div className="d-flex py-0">
                <ul className={`${classes.summary_body} list-group list-group-flush`} >
                    <li>
                        <span>Name:</span>
                    </li>
                    <li>
                        <span>Status:</span>
                    </li>
                    <li>Start Date:</li>
                </ul>

            </div>
            <div className={`${classes.card_footer} ${classes.border_top}`}>
                <div className="row">
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 15px'}}>
                        <input type="submit" className={`mb-2 mr-1 btn btn-primary btn-sm `}
                               style={{width: '30%'}} value="Save" onClick={props.onConfirm}/>
                        <input type="submit"
                               className={`mb-2 mr-1 btn btn-outline-secondary btn-sm`}
                               style={{width: '30%'}} value="Cancel" onClick={props.cancel}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default summary;