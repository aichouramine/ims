import * as actionTypes from '../actions/actionTypes';
import {getInterviews, setInterviewToInactive, getInterviewsNumber} from '../../api/axios-interviews';

export const getAllInterviews = (interviews) => {
    return{
        type: actionTypes.GET_INTERVIEWS,
        interviews: interviews
    }
}

export const deactivateInterview = (id) => {
    return{
        type: actionTypes.REMOVE_INTERVIEW,
        id
    }
};

export const getCountOfInterviews = (interviewsNumber) => {
    return{
        type: actionTypes.GET_INTERVIEWS_COUNT,
        interviewsNumber: interviewsNumber
    }
}

export const fetchInterviews = (page, size) => {
    return (dispatch) => {
        getInterviews(page, size)
            .then((response) => dispatch(getAllInterviews(response.data)))
    }
}

export const fetchInterviewsNumber = () => {
    return (dispatch) => {
        getInterviewsNumber()
            .then((response) => dispatch(getCountOfInterviews(response.data)))
    }
}

export const removeInterviewRecord = (id) => {
    return (dispatch) => {
        setInterviewToInactive(id)
            .then(() => dispatch(deactivateInterview(id)))
    }
}