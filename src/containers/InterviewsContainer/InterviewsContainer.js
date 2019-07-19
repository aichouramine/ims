import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hoc from '../../hoc/Hoc'
import InterviewsView from '../../components/InterviewsView/InterviewsView';
import Modal from '../../components/UI/Modal/Modal';
import NewInterviewView from '../../components/InterviewsView/InterviewDetails/InterviewDetails';
import * as interviewsActions from '../../store/actions/interviewsIndex';

class InterviewsContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showNew: false,
        };

        this.addNewHandler = this.addNewHandler.bind(this)
        this.addNewCancelHandler = this.addNewCancelHandler.bind(this)
    }

    componentDidMount(){
        this.props.onFetchInterviews(0, 10)
    }

    addNewHandler() {
        this.setState({showNew: true})
    }

    addNewCancelHandler() {
        this.setState({showNew: false})
    }

    render(){
        let modalCustomStyle =
            {
                // width: '70%'
            }

        return (
            <Hoc>
                <Modal show={this.state.showNew} customStyle={modalCustomStyle} modalClosed={this.addNewCancelHandler}>
                    <NewInterviewView/>
                </Modal>
                <InterviewsView addNew={this.addNewHandler}
                                interviews={this.props.interviews}
                                removeInterview={this.props.onRemoveInterview}
                                loadMoreItems={this.props.onFetchInterviews}
                />
            </Hoc>
        )
    }
}

const mapStateToProps = state => {
    return{
        interviews: state.interviewsReducer.interviews
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        onFetchInterviews: (page, size) => dispatch(interviewsActions.fetchInterviews(page, size)),
        onRemoveInterview: (id) => dispatch(interviewsActions.removeInterviewRecord(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InterviewsContainer);