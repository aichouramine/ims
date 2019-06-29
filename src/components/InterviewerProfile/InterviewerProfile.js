import React, {Component} from 'react';
import classes from './InterviewerProfile.module.css';
import Introduction from './Introduction/Introduction';
import Details from './Details/Details';
import Hoc from '../../hoc/Hoc';
import PageHeader from '../Layout/PageHeader/PageHeader';
import Statistic from '../InterviewerProfile/Statistic/Statistic';

class InterviewerProfile extends Component{
    constructor(props) {
        super(props);

        this.state = {
            editable: false,
        };

        this.editHandler = this.editHandler.bind(this)
        this.editCancelHandler = this.editCancelHandler.bind(this)
    }

    editHandler() {
        this.setState({
            editable: true
        })
    }
    //
    editCancelHandler() {
        this.setState({editable: false})
    }

    render(){
        let secondaryView = (<Statistic styleClass={classes.card}/>)

        if(this.state.editable){
            secondaryView = (
                <Details styleClass={classes.card} data={this.props.interviewer} update={this.props.updateInterviewer}
                         onCancel={this.editCancelHandler}/>
            )
        }

        return(
            <Hoc>
                <div className="page-header no-gutters py-4 row mb-4">
                    <PageHeader subtitle="People" title="Interviewer Profile"/>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-md-4">
                        <Introduction styleClass={classes.card} onEdit={this.editHandler} data={this.props.interviewer}
                                      removeInterviewer={this.props.remove}/>
                    </div>
                    <div className="col-lg-8 col-sm-6 col-md-8">
                        {secondaryView}
                    </div>
                </div>
            </Hoc>
        )
    }

}

export default InterviewerProfile;