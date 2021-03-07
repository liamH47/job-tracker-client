import React from 'react';
import Job from './Job/job';
import useStyles from './styles';
import { useSelector } from 'react-redux';


const Jobs = () => {
    const jobs = useSelector((state) => state.jobs)
    const classes = useStyles();
    console.log(jobs)
    return(
        <>
        <h1>jobs</h1>
        <Job />
        <Job />
        <Job />
        </>
    )
}

export default Jobs;