import * as actionTypes from '../actions/actionTypes';
import {getInterviews, setInterviewToInactive} from '../../api/axios-interviews';

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

export const fetchInterviews = () => {
    return (dispatch) => {
        getInterviews()
            .then((response) => dispatch(getAllInterviews(response.data)))
    }
}

export const removeInterviewRecord = (id) => {
    return (dispatch) => {
        setInterviewToInactive(id)
            .then(() => dispatch(deactivateInterview(id)))
    }
}