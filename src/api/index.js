import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// const url = 'http://localhost:5000/jobs';

export const fetchJobs = () => API.get('/jobs');
export const createJob = (newJob) => API.post('/jobs', newJob);
export const updateJob = (id, updatedJob) => API.patch(`/jobs/${id}`, updatedJob);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);

export const signIn = (formData) => API.post('user/signin', formData);
export const signUp = (formData) => API.post('user/signup', formData);