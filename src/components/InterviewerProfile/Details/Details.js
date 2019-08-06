import React, {Component} from 'react';
import classes from './Details.module.css';
import Input from '../../shared_components/Input/Input';
import Dropdown from '../../shared_components/Dropdown/Dropdown';
import {levels} from "../../../enums/levels";

const initErrorState = {
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    levelError: '',
}

class Details extends Component{
    constructor(props){
        super(props);

        this.state = {
            profile: {
                id: props.data.id,
                firstname: props.data.firstname,
                lastname: props.data.lastname,
                email: props.data.email,
                level: props.data.level,
                skills: props.data.skills
            },
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            levelError: '',
        }
    }

    onFirstnameChanged = (event) => {
        let updated = {
            ...this.state.profile
        }

        updated.firstname = event.target.value;

        this.setState({ profile: updated});
    }

    onLastnameChanged = (event) => {
        let updated = {
            ...this.state.profile
        }

        updated.lastname = event.target.value;

        this.setState({ profile: updated});
    }

    onEmailChanged = (event) => {
        let updated = {
            ...this.state.profile
        }

        updated.email = event.target.value;

        this.setState({ profile: updated});
    }

    onSkillsChanged = (event) => {
        let updated = {
            ...this.state.profile
        }

        updated.skills = event.target.value;

        this.setState({ profile: updated});
    }

    onLevelChanged = (event) => {
        let updated = {
            ...this.state.profile
        }

        updated.level = Object.keys(levels).find(k => levels[k] === event.target.value)

        this.setState({ profile: updated});
    }

    validate = () => {
       let firstNameError = '';
       let lastNameError = '';
       let emailError = '';
       let levelError = '';

       if(!this.state.profile.email.includes('@')){
           emailError = 'Email address is incorrect'
       }

       if(!this.state.profile.firstname || this.state.profile.firstname.length < 3){
           firstNameError = 'Firstname is too short'
       }

        if(!this.state.profile.lastname || this.state.profile.lastname.length < 3){
            lastNameError = 'Lastname is too short'
        }

        if(!this.state.profile.level){
            levelError = 'Level cannot be blank'
        }

       if(emailError || firstNameError || lastNameError || levelError){
           this.setState({emailError, firstNameError, lastNameError, levelError})
           return false;
       }

       return true;
    }

    updateProfile = (event) => {
        event.preventDefault()
        let isValid = this.validate();

        if(isValid){
            this.setState({
                ...initErrorState
            })

            this.props.update(this.state.profile)
            this.props.onCancel()
        }
    }

    render(){
        return(
            <div className={`${this.props.styleClass} h-100 `} >
                <div className={`${classes.card_header} ${classes.Border_bottom}`}>
                    <h6 className="m-0">Profile Details</h6>
                </div>
                <div className={classes.close} onClick={this.props.onCancel}>
                    <i className="material-icons">close</i>
                </div>
                <form style={{padding: '15px'}} onSubmit={this.updateProfile} noValidate>
                    <div className="row">
                        <div className="col">
                            <div className="form-row">
                                <div className="col col-md-6 form-group">
                                    <Input inputtype="input" label="Firstname" type="text" placeholder="Firstname"
                                           onChange={this.onFirstnameChanged} value={this.state.profile.firstname}
                                           error={this.state.firstNameError}/>
                                </div>
                                <div className="col col-md-6 form-group">
                                    <Input inputtype="input" label="Lastname" type="text" placeholder="Lastname"
                                           onChange={this.onLastnameChanged} value={this.state.profile.lastname}
                                           error={this.state.lastNameError}
                                    />
                                    {/*<div className={classes.invalidFeedback}>{this.state.lastNameError}</div>*/}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col col-md-6 form-group">
                                    <Input inputtype="input" label="Email" type="email" placeholder="Email"
                                           onChange={this.onEmailChanged} value={this.state.profile.email}
                                           error={this.state.emailError}
                                    />
                                    {/*<div className={classes.invalidFeedback}>{this.state.emailError}</div>*/}
                                </div>
                                <div className="col col-md-6 form-group">
                                    <Dropdown onChange={this.onLevelChanged} options={levels} label="Level"
                                              type="select" value={this.state.profile.level}
                                              error={this.state.levelError}
                                    />
                                    {/*<div className={classes.invalidFeedback}>{this.state.levelError}</div>*/}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col col-md-12">
                                    <Input inputtype="textarea" label="Skills" type="text" placeholder="Skills"
                                           onChange={this.onSkillsChanged} rows="6" style={{resize: 'none'}}
                                           value={this.state.profile.skills || ''}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${classes.Card_footer}`}>
                        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <button type="submit" className={`mb-2 mr-1 btn btn-primary btn-sm ${classes.action_button}`}
                            >Save</button>

                            <button type="button" className={`mb-2 mr-1 btn btn-outline-secondary btn-sm ${classes.action_button}`}
                                    onClick={this.props.onCancel}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default Details;
