import React from 'react';
import classes from './Details.module.css';
import {levels} from "../../../enums/levels";
import {locations} from "../../../enums/locations";
import Datepicker from '../../shared_components/Datepicker/Datepicker';
import Dropdown from '../../shared_components/Dropdown/Dropdown';
import {candidate_location} from "../../../enums/candidate_location";

const details = props => {

    return(
        <div className={`${classes.summary_card} h-100 `}>
            <div className={`${classes.summary_card_header} ${classes.border_bottom}`}>
                <h6 className="m-0">Details</h6>
            </div>
            <div className="d-flex py-2 px-4 flex-column">
                <div className={classes.form_group_wrapper}>
                    <div className="form-group pl-0 mb-0" style={{width: '25%'}}>
                        <label htmlFor="feFirstname" className={classes.label}>Firstname</label>
                        <input id="feFirstname" type="text" placeholder="Firstname"
                               className={`form-control ${classes.custom_input_control}`}/>
                    </div>
                    <div className="form-group p-0 mb-0" style={{width: '25%'}}>
                        <label htmlFor="feLastname" className={classes.label}>Lastname</label>
                        <input id="feLastname" type="text" placeholder="Lastname"
                               className={`form-control ${classes.custom_input_control}`}/>
                    </div>
                    <div className="form-group p-0 mb-0" style={{width: '20%'}}>
                        <label className={classes.label}>Level</label>
                        <Dropdown options={levels}/>
                    </div>
                    <div className="form-group p-0 mb-0" style={{width: '20%'}}>
                        <label className={classes.label}>Location</label>
                        <Dropdown options={candidate_location}/>
                    </div>
                </div>
                <div className="pt-4 ">
                    <div className="form-group">
                        <label htmlFor="feSkills" className={classes.label}>Skills</label>
                        <textarea id="feSkills" placeholder="Skills"
                                  className={`form-control ${classes.custom_area_control}`} rows="4" style={{resize: 'none'}}/>
                    </div>
                </div>
                <div >
                    <div className="form-group">
                        <label htmlFor="feSkills" className={classes.label}>Comment</label>
                        <textarea id="feSkills" placeholder="Comment"
                                  className={`form-control ${classes.custom_area_control}`} rows="4" style={{resize: 'none'}}/>
                    </div>
                </div>
            </div>
            {/*<div className={`${classes.card_footer} ${classes.border_top}`}>*/}
                {/*<div className="row">*/}
                    {/*<div style={{display: 'flex', justifyContent: 'space-between', width: '100%', padding: '0 15px'}}>*/}
                        {/*<input type="submit" className={`mb-2 mr-1 btn btn-primary btn-sm `}*/}
                               {/*style={{width: '30%'}} value="Save" onClick={props.onConfirm}/>*/}
                        {/*<input type="submit"*/}
                               {/*className={`mb-2 mr-1 btn btn-outline-secondary btn-sm`}*/}
                               {/*style={{width: '30%'}} value="Cancel" onClick={props.onClose}/>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        </div>
    )
}

export default details;