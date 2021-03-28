import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createJob, updateJob } from '../../actions/jobs'
import { useSelector } from 'react-redux'

const Form = ({ currentId, setCurrentId }) => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const [jobData, setJobData] = useState({
        company: '',
        // creator: user.result.name, 
        industry: '', 
        role: '', 
        notes: ''
    })
    const job = useSelector((state) => currentId ? state.jobs.find((j) => j._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    // console.log('user:', user);
    // debugger

    useEffect(() => {
      if(job) setJobData(job)
    }, [job])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(currentId){
          dispatch(updateJob(currentId, { ...jobData}));
          clear();
        }else{
          dispatch(createJob({ ...jobData}));
          clear();
        }
    }

    if(!user?.result?.name){
      return (
        <Paper className={classes.paper}>
          <Typography variant='h6' align='center'>
            Please Sign in to Create a Job  
          </Typography>
        </Paper>
      )
    }

    const clear = () => {
        setCurrentId(null);
        setJobData({company: '', industry: '', role: '', notes: ''});
    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Edit' : 'Create'} a Job</Typography>
                <TextField 
                  name='company' 
                  variant='outlined' 
                  label='company' 
                  fullWidth
                  value={jobData.company}
                  onChange={(e) => setJobData({ ...jobData, company: e.target.value})}
                />
                <TextField 
                  name='industry' 
                  variant='outlined' 
                  label='industry' 
                  fullWidth
                  value={jobData.industry}
                  onChange={(e) => setJobData({ ...jobData, industry: e.target.value})}
                />
                <TextField 
                  name='role' 
                  variant='outlined' 
                  label='role' 
                  fullWidth
                  value={jobData.role}
                  onChange={(e) => setJobData({ ...jobData, role: e.target.value})}
                />
                <TextField 
                  name='notes' 
                  variant='outlined' 
                  label='notes' 
                  fullWidth
                  value={jobData.notes}
                  onChange={(e) => setJobData({ ...jobData, notes: e.target.value})}
                /> 
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>              
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>              

            </form>
        </Paper>
    )
}

export default Form;

// company : String,
// industry: String,
// role: String,
// applied: {
//     type: Date,
//     default: new Date() 
// },
// effort: {
//     type: Number,
//     default: 0
// },
// notes: [String],
// status: {
//     type: String,
//     default: "Preparing"
// },
// followed_up: Boolean
// });