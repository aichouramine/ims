import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8892/api/v1/interviews'
})

export const getInterviews = () => (
    instance.get("/getAllInterviews")
)