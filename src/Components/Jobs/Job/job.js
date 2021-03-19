import React from 'react';
import useStyles from './styles'
import { Card, Button, Typography, CardContent } from '@material-ui/core'

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteJob } from '../../../actions/jobs'
 
const Job = ({ job, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography variant='h5' component='h2' gutterBottom>
                    {job.company}
                </Typography>
                <Typography>
                    {job.role}
                </Typography>
                <Typography variant='body2'>
                    {`Status: ${job.status} as of: ${moment(job.applied).fromNow()}`}
                </Typography>
                <Button color='primary' size='small' onClick={() => setCurrentId(job._id)}>
                    Edit
                </Button>
                <Button color='primary' size='small' onClick={() => dispatch(deleteJob(job._id))}>
                    Delete
                </Button>                               
            </CardContent>
        </Card>
    )
}

export default Job;