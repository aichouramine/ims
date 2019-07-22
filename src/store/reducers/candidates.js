import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    candidates: [],
    candidatesNumber: 0
}

const candidateReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.GET_CANDIDATES:
            return {
                ...state,
                // list: [...state.list, ...action.list]
                candidates: action.candidates
            }
        // case actionTypes.REMOVE_INTERVIEW:
        //     return {
        //         ...state,
        //         interviews: state.interviews.filter(({ id }) => id !== action.id)
        //     }
        // case actionTypes.GET_INTERVIEWS_COUNT:
        //     return {
        //         ...state,
        //         interviewsNumber: action.interviewsNumber
        //     }
        default:
            return state;
    }
}

export default candidateReducer;
