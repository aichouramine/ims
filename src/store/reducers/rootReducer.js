import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
    interviewers: [],
    topInterviewers: [],
    error: false,
    interviews: [],
    interviewersNum: null
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
        case actionTypes.REMOVE_INTERVIEWER:
            return {
                ...state,
                interviewers: state.interviewers.filter(({ id }) => id !== action.id)
            }
        case actionTypes.UPDATE_INTERVIEWER:
            return {
                ...state,

            }
        case actionTypes.GET_INTERVIEWS:
            return {
                ...state,
                interviews: action.interviews
            }
        case actionTypes.REMOVE_INTERVIEW:
            return {
                ...state,
                interviews: state.interviews.filter(({ id }) => id !== action.id)
            }
        case actionTypes.GET_INTERVIEWERS_COUNT:
            return {
                ...state,
                interviewersNum: action.interviewersNum
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