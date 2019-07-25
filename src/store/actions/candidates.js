import * as actionTypes from '../actions/actionTypes';
import { getCandidates, getCandidatesNumber } from '../../api/axios-candidates'

export const getAllCandidates = (candidates) => {
    return{
        type: actionTypes.GET_CANDIDATES,
        candidates: candidates
    }
}

export const getCountOfCandidates = (candidatesNumber) => {
    return{
        type: actionTypes.GET_CANDIDATES_COUNT,
        candidatesNumber: candidatesNumber
    }
}

export const fetchCandidates = (page, size) => {
    return (dispatch) => {
        // dispatch(allOrdersCountFetchInProgress(true));

        getCandidates(page, size)
            .then((response) => dispatch(getAllCandidates(response.data)))

        // .then(() => dispatch(allOrdersCountFetchSuccess()))
        // .catch((e) => {console.error(e);dispatch(allOrdersCountFetchHasErrored(true))});
    }
}

export const fetchCandidatesNumber = () => {
    return (dispatch) => {
        getCandidatesNumber()
            .then((response) => dispatch(getCountOfCandidates(response.data)))
    }
}
