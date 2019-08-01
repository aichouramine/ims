import React, {Component} from 'react';
import classes from './Details.module.css';
import Input from '../../shared_components/Input/Input';
import Dropdown from '../../shared_components/Dropdown/Dropdown';
import {levels} from "../../../enums/levels";

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
            }
        }
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     // do things with nextProps.someProp and prevState.cachedSomeProp
    //     return {
    //         profile: nextProps.profile,
    //         // ... other derived state properties
    //     };
    // }

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

    updateProfile = () => {
        // console.log(this.state.profile);
        this.props.update(this.state.profile)
        this.props.onCancel()
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
                <div className="row">
                    <div className="col">
                        <form style={{padding: '15px'}}>
                            <div className="form-row">
                                <div className="col col-md-6">
                                    <Input inputtype="input" label="Firstname" type="text" placeholder="Firstname"
                                           onChange={this.onFirstnameChanged} value={this.state.profile.firstname}/>
                                </div>
                                <div className="col col-md-6">
                                    <Input inputtype="input" label="Lastname" type="text" placeholder="Lastname"
                                           onChange={this.onLastnameChanged} value={this.state.profile.lastname}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col col-md-6">
                                    <Input inputtype="input" label="Email" type="email" placeholder="Email"
                                           onChange={this.onEmailChanged} value={this.state.profile.email}/>
                                </div>
                                <div className="col col-md-6">
                                    <Dropdown onChange={this.onLevelChanged} options={levels} label="Level"
                                              type="select" value={this.state.profile.level}/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col col-md-12">
                                    <Input inputtype="textarea" label="Skills" type="text" placeholder="Skills"
                                           onChange={this.onSkillsChanged} rows="6" style={{resize: 'none'}}
                                           value={this.state.profile.skills || ''}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={`${classes.Card_footer} ${classes.Border_top}`}>
                    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <input type="submit" className={`mb-2 mr-1 btn btn-primary btn-sm ${classes.action_button}`}
                               value="Save" onClick={this.updateProfile}/>

                        <input type="submit" className={`mb-2 mr-1 btn btn-outline-secondary btn-sm ${classes.action_button}`}
                               value="Cancel" onClick={this.props.onCancel}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Details;
