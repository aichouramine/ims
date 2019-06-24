import React from 'react';
import classes from './InterviewerEditView.module.css';

const interviewerEditView = props => {
    let profileUpdate = {
        firstName: "",
        lastName: "",
        email: ""
    }

    function updateProfile(){
        console.log(profileUpdate)
        // props.onConfirm();
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
        <div className={`${props.styleClass} h-100 `}>
            <div className={`${classes.Card_header} ${classes.Border_bottom}`}>
                <h6 className="m-0">Edit Interviewer</h6>
            </div>
            <div className="row">
                <div className="col">
                    <form style={{padding: '10px'}}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="feFirstname" className={classes.label}>Firstname</label>
                                <input id="feFirstname" type="text" placeholder="Firstname" onChange={onFirstnameChanged}
                                       className={`form-control ${classes.custom_form_control}`}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="feLastname" className={classes.label}>Lastname</label>
                                <input id="feLastname" type="text" placeholder="Lastname" onChange={onLastnameChanged}
                                       className={`form-control ${classes.custom_form_control}`}/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="feEmail" className={classes.label}>Email</label>
                                <input id="feEmail" type="text" placeholder="Email" onChange={onEmailChanged}
                                       className={`form-control ${classes.custom_form_control}`}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`${classes.Card_footer} ${classes.Border_top}`}>
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <input type="submit" className={`mb-2 mr-1 btn btn-success btn-sm ${classes.action_button}`}
                           value="Сохранить" onClick={updateProfile}/>
                    <input type="submit"
                           className={`mb-2 mr-1 btn btn-outline-dark btn-sm ${classes.action_button} ${classes.action_button__cancel}`}
                           value="Отмена" onClick={props.onClose}/>
                </div>
            </div>
        </div>
    )
}

export default interviewerEditView;