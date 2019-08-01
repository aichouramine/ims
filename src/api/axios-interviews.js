import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8892/api/v1/interviews'
})

export const getInterviews = (page, size) => (
    instance.get("/getAllInterviews/" + page + "/" + size)
)

export const setInterviewToInactive = (id) => (
    instance.put("updateInterviewToInactive/" + id)
)

export const getInterviewsNumber = () => (
    instance.get("/getNumberOfAllInterviews")
)

export const getInterviewsStatisticByDate = date => (
    instance.get("getNumberOfInterviewsByDate/" + date)
)