import * as actionTypes from '../actions/actionTypes';
import { getCandidates } from '../../api/axios-candidates'
import {getInterviewers} from "../../api/axios-interviewers";

export const getAllCandidates = (candidates) => {
    return{
        type: actionTypes.GET_CANDIDATES,
        candidates: candidates
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
