import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8892/api/v1/interviewers'
})

export const getInterviewers = (page, size) => (
    instance.get("/getAllInterviewers/" + page + "/" + size)
)

export const getInterviewersNumber = () => (
    instance.get("/getCountOfActiveInterviewers")
)

export const getTopInterviewers = () => (
    instance.get("/getTopInterviewers")
)

export const addInterviewer = (id) => (
    instance.put("/addInterviewer")
)

export const updateInterviewerStatus = (id, status) => (
    instance.put("updateInterviewerStatus/" + id + "/" + status)
)

export const updateInterviewerProfile = (obj) => (
    instance.put("updateInterviewerProfile", obj)
)