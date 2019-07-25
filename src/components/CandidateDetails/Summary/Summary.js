import React from 'react';
import classes from './Summary.module.css';

const summary = props => {

    return(
        <div className={`${classes.summary_card} h-100 `}>
            <div className={`${classes.summary_card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Summary</h6>
            </div>
            <div className="d-flex py-0">
                <ul className="list-group list-group-flush" style={{listStyle: 'none'}}>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>

            </div>
            <div className={`${classes.card_footer} ${classes.border_top}`}>
                <div className="row">
                    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 15px'}}>
                        <input type="submit" className={`mb-2 mr-1 btn btn-primary btn-sm `}
                               style={{width: '30%'}} value="Save" onClick={props.onConfirm}/>
                        <input type="submit"
                               className={`mb-2 mr-1 btn btn-outline-secondary btn-sm`}
                               style={{width: '30%'}} value="Cancel" onClick={props.onClose}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default summary;