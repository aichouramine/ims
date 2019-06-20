import * as actionTypes from '../actions/actionTypes';

const initialState = {
    interviewers: [],
    topInterviewers: [],
    error: false
}

const rootReducer = (state = initialState, action) => {
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

        // case actionTypes.ADD_INTERVIEWER:
        //     return{
        //
        //     }
        // case actionTypes.REMOVE_INTERVIEWER:
        //     return{
        //
        //     }
        default:
            return state;
    }
}

export default rootReducer;