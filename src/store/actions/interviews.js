import * as actionTypes from '../actions/actionTypes';
import {getInterviews} from '../../api/axios-interviews';

export const getAllInterviews = (interviews) => {
    return{
        type: actionTypes.GET_INTERVIEWS,
        interviews: interviews
    }
}

export const fetchInterviews = () => {
    return (dispatch) => {
        getInterviews()
            .then((response) => dispatch(getAllInterviews(response.data)))
    }
}