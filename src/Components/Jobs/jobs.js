import React from 'react';
import Job from './Job/job'
import useStyles from './styles'


const Jobs = () => {
    const classes = useStyles();
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