import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8892/api/v1/interviews'
})

export const getInterviews = () => (
    instance.get("/getAllInterviews")
)

export const setInterviewToInactive = (id) => (
    instance.put("updateInterviewToInactive/" + id)
)

export const getInterviewsNumber = () => (
    instance.get("/getNumberOfAllInterviews")
)

export const  getInterviewsByStatus = (status) => (
    instance.get("getNumberOfAllInterviewsByStatus/" + status)
)