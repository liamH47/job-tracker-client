import React from 'react';
import useStyles from './styles'
import { Card, CardActions, CardMedia, Button, Typography, CardContent } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

const Job = ({ job }) => {
    const classes = useStyles();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} title={job.role} />
            <div className={classes.overlay}>
                <Typography variant='h5'>{job.company}</Typography>
                <Typography variant='body2'>{`Status: ${job.status} as of: ${moment(job.applied).fromNow()}`}</Typography>
            </div>
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