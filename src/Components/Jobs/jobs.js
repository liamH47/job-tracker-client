import React from 'react';
import Job from './Job/job';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core'


const Jobs = ({ setCurrentId }) => {
    const user = localStorage.getItem('profile');
    console.log("user:", user);
    const googleId = JSON.parse(user).result.googleId;
    console.log("parsed googleId:", googleId)
    const jobs = useSelector((state) => state.jobs)
    const myJobs = jobs.filter(job => job.creator === googleId.toString())
    // debugger
    const classes = useStyles();
    console.log("myjobs:", myJobs)
    return(
        !myJobs.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {myJobs.map((job) => (
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
    const googleId = JSON.parse(user.result.googleID)
    JSON.parse(localStorage.getItem('profile')).result.googleId

*/