import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8892/api/v1/candidates'
})

export const getCandidates = (page, size) => (
    instance.get("/getAllCandidates/" + page + "/" + size)
)

export const getCandidatesLevelsCountByDate = (date) => (
    instance.get("/getNumberOfLevels/" + date)
)

export const getCandidatesNumber = () => (
    instance.get("/getNumberOfAllCandidates/")
)

export const getCandidatesByStatus = (status) => (
    instance.get("getNumberOfAllCandidatesByStatus/" + status)
)

export const getCandidatesLocationsCountByDate = (date) => (
    instance.get("getNumberOfLocations/" + date)
)

export const addCandidate = (obj) => (
    instance.put("addCandidate", obj)
)

export const updateCandidate = (obj) => (
    instance.put("updateCandidateProfile", obj)
)

export const getCandidateInfo = id => (
    instance.get("getCandidateInfo/" + id)
)