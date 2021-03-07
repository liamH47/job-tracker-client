import * as api from '../api';

//action creators

export const getJobs = () => async (dispatch) => {
    const action  = { type: 'FETCH_ALL', payload: [] }

    dispatch(action);
}