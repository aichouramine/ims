import * as actionTypes from '../actions/actionTypes';
import {getInterviewers, getTopInterviewers, updateInterviewerStatus} from '../../api/axios-interviewers'

export const addInterviewer = (obj) => {
    return{
        type: actionTypes.ADD_INTERVIEWER,
        obj
    }
};

export const deactivateInterviewer = (id) => {
    return{
        type: actionTypes.REMOVE_INTERVIEWER,
        id
    }
};

export const getAllInterviewers = (interviewers) => {
    return{
        type: actionTypes.GET_INTERVIEWERS,
        interviewers: interviewers
    }
}

export const getTopOfInterviewers = (topInterviewers) => {
    return{
        type: actionTypes.GET_TOP_INTERVIEWERS,
        topInterviewers: topInterviewers
    }
}

export const fetchInterviewers = () => {
    return (dispatch) => {
        // dispatch(allOrdersCountFetchInProgress(true));

        getInterviewers()
            .then((response) => dispatch(getAllInterviewers(response.data)))

            // .then(() => dispatch(allOrdersCountFetchSuccess()))
            // .catch((e) => {console.error(e);dispatch(allOrdersCountFetchHasErrored(true))});
    }
}

export const fetchTopInterviewers = () => {
    return (dispatch) => {
        getTopInterviewers()
            .then((response) => dispatch(getTopOfInterviewers(response.data)))

        // .then(() => dispatch(allOrdersCountFetchSuccess()))
        // .catch((e) => {console.error(e);dispatch(allOrdersCountFetchHasErrored(true))});
    }
}

export const removeInterviewer = (id) => {
    return (dispatch) => {
        updateInterviewerStatus(id, "false")
            .then(() => dispatch(deactivateInterviewer(id)))

        // .then(() => dispatch(allOrdersCountFetchSuccess()))
        // .catch((e) => {console.error(e);dispatch(allOrdersCountFetchHasErrored(true))});
    }
}