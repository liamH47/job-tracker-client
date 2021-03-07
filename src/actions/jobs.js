import * as api from '../api';

//action creators

const getJobs = () => async (dispatch) => {
    const action  = { type: 'FETCH_ALL', payload: [] }

    dispatch(action);
}