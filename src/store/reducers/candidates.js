import * as actionTypes from '../actions/actionTypes';

const initialState = {
    error: false,
    candidates: [],
    candidatesNumber: 0,
    candidateInfo: {}
}

const candidateReducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.GET_CANDIDATES:
            return {
                ...state,
                // list: [...state.list, ...action.list]
                candidates: action.candidates
            }
        case actionTypes.GET_CANDIDATES_COUNT:
            return {
                ...state,
                candidatesNumber: action.candidatesNumber
            }
        case actionTypes.ADD_CANDIDATE:
            return {
                ...state,
                candidateInfo: action.candidateInfo
            }
        case actionTypes.ADD_CANDIDATE_SUCCESS:
            return Object.assign({}, state, {
                addCandidateSuccess: action.addCandidateSuccess,
                addCandidateInProgress: false,
            });
        case actionTypes.ADD_CANDIDATE_IN_PROGRESS:
            return Object.assign({}, state, {
                addCandidateSuccess: action.addCandidateSuccess,
                addCandidateInProgress: true,
            });
        case actionTypes.GET_CANDIDATE_PROFILE_OFFLINE:
            return {
                ...state,
                candidateInfo: action.candidateInfo
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
