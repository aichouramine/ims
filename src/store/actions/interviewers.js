import * as actionTypes from '../actions/actionTypes';
import {getInterviewers, getTopInterviewers, updateInterviewerStatus,
    updateInterviewerProfile, getInterviewersNumber} from '../../api/axios-interviewers'

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

export const getCountOfActiveInterviewers = (interviewersNum) => {
    return{
        type: actionTypes.GET_INTERVIEWERS_COUNT,
        interviewersNum: interviewersNum
    }
}

export const getTopOfInterviewers = (topInterviewers) => {
    return{
        type: actionTypes.GET_TOP_INTERVIEWERS,
        topInterviewers: topInterviewers
    }
}

export const updateInterviewerData = (obj) => {
    return{
        type: actionTypes.UPDATE_INTERVIEWER_ONLINE,
        interviewerProfile: obj
    }
}

export const addInterviewerProfileOffline = (obj) => {
    return{
        type: actionTypes.UPDATE_INTERVIEWER_PROFILE_OFFLINE,
        interviewerProfile: obj
    }
}

export const fetchInterviewers = (page, size) => {
    return (dispatch) => {
        // dispatch(allOrdersCountFetchInProgress(true));

        getInterviewers(page, size)
            .then((response) => dispatch(getAllInterviewers(response.data)))

            // .then(() => dispatch(allOrdersCountFetchSuccess()))
            // .catch((e) => {console.error(e);dispatch(allOrdersCountFetchHasErrored(true))});
    }
}

export const fetchInterviewersNumber = () => {
    return (dispatch) => {
        // dispatch(allOrdersCountFetchInProgress(true));

        getInterviewersNumber()
            .then((response) => dispatch(getCountOfActiveInterviewers(response.data)))

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
            // .then(() => dispatch(fetchInterviewersNumber()))
    }
}

export const updateInterviewer = (obj) => {
    return (dispatch) => {
        updateInterviewerProfile(obj)
            .then((response) => dispatch(updateInterviewerData(response.data)))
    }
}

export const updateInterviewerProfileOffline = (obj) => {
    return(dispatch => {
        dispatch(addInterviewerProfileOffline(obj))
    })
}