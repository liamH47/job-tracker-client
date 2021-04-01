export default (jobs = [], action) => {
    switch (action.type) {
        case 'DELETE':
            return jobs.filter((job) => job._id !== action.payload);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...jobs, action.payload];
        case 'UPDATE':
            return jobs.map((job) => job._id === action.payload._id ? action.payload : job)
        case 'UPDATE_ALL':
            return action.payload
        default:
            return jobs;
    }
}