import * as api from '../api';

//action creators

export const getJobs = () => async (dispatch) => {
    try {
        const { data } = await api.fetchJobs();
        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (error) {
        console.log(error.message);        
    }
}

export const createJob = (job) => async (dispatch) => {
    try {
        const { data } = await api.createJob(job);
        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.log(error);
    }
    //
}

export const updateJob = (id, job) => async (dispatch) => {
    console.log("id, job:", id, job)
    try {
        const { data } = await api.updateJob(id, job);
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateIndices = (jobs) => async (dispatch) => {
    try {
        const { data } = await api.updateIndices(jobs)
        dispatch({ type: 'UPDATE_ALL', payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteJob = (id) => async(dispatch) => {
    try {
        await api.deleteJob(id);
        dispatch({ type: 'DELETE', payload: id})
    } catch (error) {
        console.log(error);
    }
}