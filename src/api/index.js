import axios from 'axios';

const url = 'http://localhost:5000/jobs';

export const fetchJobs = () => axios.get(url);
export const createJob = (newJob) => axios.post(url, newJob);