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
            {/* <CardMedia className={classes.media} title={job.role} />
            <div className={classes.overlay}>
                <Typography variant='h5'>{job.company}</Typography>
                <Typography variant='body2'>{`Status: ${job.status} as of: ${moment(job.applied).fromNow()}`}</Typography>
            </div>
                <MoreHorizIcon /> */}
            {/* <div className={classes.overlay2}>
                <Button color='white size='small' >
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div> */}
            {/* <CardMedia className={classes.media} title={job.role} />
            <div className={classes.overlay}>
                <Typography variant='h5'>{job.company}</Typography>
                <Typography variant='body2'>{`Status: ${job.status} as of: ${moment(job.applied).fromNow()}`}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size='small' >
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <div className={classes.details} >
                <Typography variant='body2' color='textSecondary'>
                    {job.notes.map((note) => `#${note} `)}
                </Typography>
            </div>
            <CardContent>
                <Typography className={classes.role} variant='h6' gutterBottom>{job.role}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='secondary' >
                    <DeleteIcon fontSize='small'/>
                </Button>
            </CardActions> */}
        </Card>
    )
}

export default Job;