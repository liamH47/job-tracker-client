import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createJob } from '../../actions/jobs'

const Form = () => {
    const [jobData, setJobData] = useState({
        company: '', 
        industry: '', 
        role: '', 
        notes: ''
    })
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createJob(jobData));
    }

    const clear = () => {

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Add a Job</Typography>
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