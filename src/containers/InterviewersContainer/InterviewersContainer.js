import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hoc from '../../hoc/Hoc'
import InterviewersView from '../../components/InterviewersView/InterviewersView';
import * as interviewersActions from '../../store/actions/interviewersIndex';

class InterviewersContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            editable: false,
        };

        this.editHandler = this.editHandler.bind(this)
        this.editCancelHandler = this.editCancelHandler.bind(this)
        this.updateUrl = this.updateUrl.bind(this)
    }

    componentDidMount(){
         this.props.onFetchInterviewers(0, 30);
         this.props.onFetchInterviewersNumber()
    }

    editHandler(interviewer) {
        this.props.history.push({
            pathname: 'profile',
            state: { interviewer: interviewer }
        })
        this.props.onUpdateInterviewerProfileOffline(interviewer)
        // this.setState({editable: true})
    }

    editCancelHandler() {
        this.setState({editable: false})
    }

    updateUrl(url){
        this.props.history.push(`?${url}`);
    }

    render(){
        return(
           <Hoc>
               <InterviewersView
                   interviewers={this.props.interviewers}
                   editInterviewer={this.editHandler}
                   removeInterviewer={this.props.onRemoveInterviewer}
                   interviewersNumber={this.props.interviewersNum}
                   getInterviewers={this.props.onFetchInterviewers}
                   onUrlUpdate={this.updateUrl}
                   history={this.props.history}
               />
           </Hoc>
        )
    }
}

const mapStateToProps = state => {

    return{
        interviewers: state.interviewersReducer.interviewers,
        interviewersNum: state.interviewersReducer.interviewersNum
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchInterviewers: (page, size) => dispatch(interviewersActions.fetchInterviewers(page, size)),
        onRemoveInterviewer: (id) => dispatch(interviewersActions.removeInterviewer(id)),
        onUpdateInterviewer: (obj) => dispatch(interviewersActions.updateInterviewer(obj)),
        onFetchInterviewersNumber: () => dispatch(interviewersActions.fetchInterviewersNumber()),
        onUpdateInterviewerProfileOffline: obj => dispatch(interviewersActions.updateInterviewerProfileOffline(obj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewersContainer);