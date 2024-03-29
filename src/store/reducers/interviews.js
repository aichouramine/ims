import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    interviews: [],
    interviewsNumber: 0
}

const interviewReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.GET_INTERVIEWS:
            return {
                ...state,
                // list: [...state.list, ...action.list]
                interviews: action.interviews
            }
        case actionTypes.REMOVE_INTERVIEW:
            return {
                ...state,
                interviews: state.interviews.filter(({ id }) => id !== action.id)
            }
        case actionTypes.REMOVE_INTERVIEW_SUCCESS:
            return Object.assign({}, state, {
                removeSuccess: true,
                removeInProgress: false,
                removeHasErrored: false,
            });
        case actionTypes.GET_INTERVIEWS_COUNT:
            return {
                ...state,
                interviewsNumber: action.interviewsNumber
            }
        default:
            return state;
    }
}

export default interviewReducer;
