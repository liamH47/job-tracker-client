import React from 'react';
import useStyles from './styles'
import { Card, Button, Typography, CardContent } from '@material-ui/core'

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteJob } from '../../../actions/jobs';
import { Draggable } from 'react-beautiful-dnd';
 
const Job = ({ job, setCurrentId, index }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <>
        <Draggable draggableId={job._id} index={index}>
          {(provided) => (
            <Card
              className={classes.card}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              innerRef={provided.innerRef}
              ref={provided.innerRef}
            >
              <CardContent>
                <Typography variant='h5' component='h2' gutterBottom>
                    {job.company}
                </Typography>
                <Typography>
                    {job.role}
                </Typography>
                {/* <Typography variant='body2'>
                    {`Status: ${job.status} as of: ${moment(job.applied).fromNow()}`}
                </Typography> */}
                <Button color='primary' size='small' onClick={() => setCurrentId(job._id)}>
                    Edit
                </Button>
                <Button color='primary' size='small' onClick={() => dispatch(deleteJob(job._id))}>
                    Delete
                </Button>                               
              </CardContent>
            </Card>
          )}
        </Draggable>
        </>
    )
}

export default Job;