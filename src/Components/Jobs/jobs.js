import React from 'react';
import Job from './Job/job';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core'


const Jobs = ({ setCurrentId }) => {
    const user = localStorage.getItem('profile');
    console.log("user:", user);
    const jobs = useSelector((state) => state.jobs)
    const classes = useStyles();
    console.log(jobs)
    return(
        !jobs.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {jobs.map((job) => (
                   <Grid item key={job._id} xs={12} sm={6}> 
                        <Job job={job} setCurrentId={setCurrentId}/>
                   </Grid> 
                ))}
            </Grid>
        )
    )
}

export default Jobs;

/*
    const user = JSON.parse(localStorage.getItem('profile'));
*/