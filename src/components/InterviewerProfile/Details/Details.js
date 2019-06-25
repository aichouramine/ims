import React from 'react';
import classes from './Details.module.css';

const details = props => {
    let profileUpdate = {
        firstName: props.data.firstname,
        lastName: props.data.lastname,
        email: props.data.email
    }

    function onFirstnameChanged(event){
        profileUpdate.firstName = event.target.value;
    }

    function onLastnameChanged(event){
        profileUpdate.lastName = event.target.value;
    }

    function onEmailChanged(event){
        profileUpdate.email = event.target.value;
    }

    return(
        <div className={`${classes.card} h-100 `}>
            <div className={`${classes.card_header} ${classes.Border_bottom}`}>
                <h6 className="m-0">Profile Details</h6>
            </div>
            <div className="row">
                <div className="col">
                    <form style={{padding: '15px'}}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="feFirstname" className={classes.label}>Firstname</label>
                                <input id="feFirstname" type="text" placeholder="Firstname" onChange={onFirstnameChanged}
                                       className={`form-control ${classes.custom_form_control}`} value={profileUpdate.firstName}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="feLastname" className={classes.label}>Lastname</label>
                                <input id="feLastname" type="text" placeholder="Lastname" onChange={onLastnameChanged}
                                       className={`form-control ${classes.custom_form_control}`} value={profileUpdate.lastName}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="feEmail" className={classes.label}>Email</label>
                                <input id="feEmail" type="text" placeholder="Email" onChange={onEmailChanged}
                                       className={`form-control ${classes.custom_form_control}`} value={profileUpdate.email}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="fePosition" className={classes.label}>Title</label>
                                <input id="fePosition" type="text" placeholder="Title" onChange={onEmailChanged}
                                       className={`form-control ${classes.custom_form_control}`}/>
                            </div>
                            <div className="form-group col-md-12">
                                <label htmlFor="feSkills" className={classes.label}>Skills</label>
                                <textarea id="feSkills" placeholder="Skills" onChange={onEmailChanged}
                                       className={`form-control ${classes.custom_form_control}`} rows="6" style={{resize: 'none'}}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`${classes.Card_footer} ${classes.Border_top}`}>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <input type="submit" className={`mb-2 mr-1 btn btn-primary btn-sm ${classes.action_button}`}
                           value="Save" />
                </div>
            </div>
        </div>
    )
}

export default details;
