import * as actionTypes from '../actions/actionTypes';

const initialState = {
    interviewers: [],
    topInterviewers: [],
    error: false,
    interviewersNum: null,
    interviewerProfile: {}
}

const interviewerReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.GET_INTERVIEWERS:
            return {
                ...state,
                interviewers: action.interviewers
            }
        case actionTypes.GET_TOP_INTERVIEWERS:
            return {
                ...state,
                topInterviewers: action.topInterviewers
            }
        case actionTypes.REMOVE_INTERVIEWER:
            return {
                ...state,
                interviewers: state.interviewers.filter(({ id }) => id !== action.id)
            }
        case actionTypes.UPDATE_INTERVIEWER:
            return {
                ...state,
                interviewerProfile: action.interviewerProfile
            }
        case actionTypes.GET_INTERVIEWERS_COUNT:
            return {
                ...state,
                interviewersNum: action.interviewersNum
            }
        default:
            return state;
    }
}

export default interviewerReducer;
