import React, {Component} from 'react';
import { connect } from 'react-redux';
import Hoc from '../../hoc/Hoc'
import InterviewsView from '../../components/InterviewsView/InterviewsView';
import Modal from '../../components/UI/Modal/Modal';
import InterviewDetails from '../../components/InterviewsView/InterviewDetails/InterviewDetails'
import * as interviewsActions from '../../store/actions/interviewsIndex';
import * as interviewersActions from "../../store/actions/interviewersIndex";
import {deleteInterview, getInterviews} from "../../api/axios-interviews";
import { toast, ToastContainer } from "react-toastify";

class InterviewsContainer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            showDetails: false,
            showNew: false,
            interviewDetails: {},
            interviewers: []
        };

        this.addNewHandler = this.addNewHandler.bind(this)
        this.addNewCancelHandler = this.addNewCancelHandler.bind(this)
        this.updateUrl = this.updateUrl.bind(this)
        this.editCancelHandler = this.editCancelHandler.bind(this)
        this.editInterviewHandler = this.editInterviewHandler.bind(this)
        this.removeInterviewRecord = this.removeInterviewRecord.bind(this)
    }

    componentDidMount(){
        this.getInterviewsList(this.getPageNumber(), 10)
        this.props.onFetchTotalInterviewsNumber()
        this.props.onFetchInterviewers();
    }

    getInterviewsList = (page, count) => {
        getInterviews(page, count)
            .then(response => {
                this.setState({
                    interviews: response.data
                })
            })
            // .then(()=>{
            //     toast.success('Interview record was added successfully',
            //         {
            //             className: 'toast-body__success',
            //         }
            //     );
            // })
            .catch(() => {
                toast.error('Something went wrong. Please try again.',
                    {
                        className: 'toast-body__error',
                    }
                );
            })

    }

    addNewHandler() {
        this.setState({showNew: true})
    }

    addNewCancelHandler() {
        this.setState({showNew: false})
    }

    editInterviewHandler(obj){
        this.setState((prevState, props) => ({
            showDetails: true,
            interviewDetails: obj
        }));
    }

    editCancelHandler(){
        this.setState({showDetails: false})
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

    removeInterviewRecord = (id) => {
        deleteInterview(id)
            .then(() => {
                this.props.onFetchInterviews(this.getPageNumber(), 10)
            })
            .then(() => {
                toast.success('Interview record removed successfully',
                    {
                        className: 'toast-body__success',
                    }
                );
            })
            .catch(() => {
                toast.error('Something went wrong. Interview record is not removed. Please try again.',
                    {
                        className: 'toast-body__error',
                    }
                );
            })
    }

    render(){
        return (
            <Hoc>
                <Modal show={this.state.showDetails} modalClosed={this.editCancelHandler}>
                    <InterviewDetails
                        interviewers={this.props.interviewers}
                        interviewDetails={this.state.interviewDetails}
                        cancel={this.editCancelHandler}/>
                </Modal>
                <InterviewsView addNew={this.addNewHandler}
                                interviews={this.state.interviews}
                                removeInterview={this.removeInterviewRecord}
                                loadMoreItems={this.getInterviewsList}
                                interviewsNumber={this.props.interviewsNumber}
                                onUrlUpdate={this.updateUrl}
                                history={this.props.history}
                                onEditInterview={this.editInterviewHandler}
                />
                <ToastContainer
                    position="bottom-right"
                    hideProgressBar={false}
                    autoClose={2000}
                    newestOnTop={true}
                    closeOnClick={true}
                    draggable={false}
                    rtl={false}
                    className="toast-container"
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