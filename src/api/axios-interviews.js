import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8892/api/v1/interviews'
})

export const getInterviews = (page, size) => (
    instance.get("/getAllInterviews/" + page + "/" + size)
)

export const deleteInterview = (id) => (
    instance.delete("deleteInterview/" + id)
)

export const getInterviewsNumber = () => (
    instance.get("/getNumberOfAllInterviews")
)

export const getInterviewsStatisticByDate = date => (
    instance.get("getNumberOfInterviewsByDate/" + date)
)

export const getInterviewDateByCandidateId = id => (
    instance.get("getInterviewByCandidateId/" + id)
)

export const create = obj => (
    instance.post("/", obj)
)