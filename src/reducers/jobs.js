export default (jobs = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return jobs;
        case 'CREATE':
            return jobs;
        default:
            return jobs;
    }
}