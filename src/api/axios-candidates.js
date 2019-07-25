import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8892/api/v1/candidates'
})

export const getCandidates = (page, size) => (
    instance.get("/getAllCandidates/" + page + "/" + size)
)

export const getCandidatesByLevel = () => (
    instance.get("/getNumberOfLevels/")
)

export const getCandidatesNumber = () => (
    instance.get("/getNumberOfAllCandidates/")
)