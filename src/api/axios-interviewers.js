import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8892/api/v1/interviewers'
})

export const getInterviewers = () => (
    instance.get("/getAllInterviewers")
)

export const getTopInterviewers = () => (
    instance.get("/getTopInterviewers")
)

export const addInterviewer = (id) => (
    instance.put("/addInterviewer")
)