import * as actionTypes from '../actions/actionTypes';
import { getCandidates, getCandidatesNumber, addCandidate } from '../../api/axios-candidates';
import {push} from 'connected-react-router';

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


const addNewCandidate = candidateInfo => {
    return{
        type: actionTypes.ADD_CANDIDATE,
        candidateInfo: candidateInfo
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

export const addCandidateToTheList = obj => {
    return (dispatch) => {
        addCandidate(obj)
            .then((response) => dispatch(addNewCandidate(response.data)))
            .then(() => dispatch(push('/candidates')))
    }
}

