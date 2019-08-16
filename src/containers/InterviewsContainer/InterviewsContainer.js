import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hoc from '../../hoc/Hoc'
import InterviewsView from '../../components/InterviewsView/InterviewsView';
import Modal from '../../components/UI/Modal/Modal';
import NewInterviewView from '../../components/InterviewsView/InterviewDetails/InterviewDetails';
import * as interviewsActions from '../../store/actions/interviewsIndex';
import * as interviewersActions from "../../store/actions/interviewersIndex";


class InterviewsContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showNew: false,
        };

        this.addNewHandler = this.addNewHandler.bind(this)
        this.addNewCancelHandler = this.addNewCancelHandler.bind(this)
        this.updateUrl = this.updateUrl.bind(this)
    }

    componentDidMount(){
        this.props.onFetchInterviews(this.getPageNumber(), 10)
        this.props.onFetchTotalInterviewsNumber()
        this.props.onFetchInterviewers();
    }

    addNewHandler() {
        this.setState({showNew: true})
    }

    addNewCancelHandler() {
        this.setState({showNew: false})
    }

    updateUrl(url){
        this.props.history.push(`?${url}`);
    }

    getPageNumber = () => {
        if(this.props.history.location.search){
            const searchParams = new URLSearchParams(this.props.history.location.search);
            return +searchParams.get('page')-1;
        }

        return 0;
    }

    render(){
        return (
            <Hoc>
                {/*<Modal show={this.state.showNew} modalClosed={this.addNewCancelHandler}>*/}
                    {/*<NewInterviewView interviewers={this.props.interviewers}/>*/}
                {/*</Modal>*/}
                <InterviewsView addNew={this.addNewHandler}
                                interviews={this.props.interviews}
                                removeInterview={this.props.onRemoveInterview}
                                loadMoreItems={this.props.onFetchInterviews}
                                interviewsNumber={this.props.interviewsNumber}
                                onUrlUpdate={this.updateUrl}
                                history={this.props.history}
                />
            </Hoc>
        )
    }
}

const mapStateToProps = state => {
    return{
        interviews: state.interviewsReducer.interviews,
        interviewsNumber: state.interviewsReducer.interviewsNumber,
        interviewers: state.interviewersReducer.interviewers,
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchInterviews: (page, size) => dispatch(interviewsActions.fetchInterviews(page, size)),
        onRemoveInterview: (id) => dispatch(interviewsActions.removeInterviewRecord(id)),
        onFetchTotalInterviewsNumber: () => dispatch(interviewsActions.fetchInterviewsNumber()),
        onFetchInterviewers: () => dispatch(interviewersActions.fetchInterviewers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewsContainer);