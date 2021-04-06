import React from 'react';
import useStyles from './styles'
import { Card, Button, Typography, CardContent } from '@material-ui/core'
import styled from 'styled-components';
// import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteJob } from '../../../actions/jobs';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`
 
const Job = ({ job, setCurrentId, index }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <>
        <Draggable draggableId={job._id} index={index}>
          {(provided) => (

            <Container
              className={classes.card}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              innerRef={provided.innerRef}
              ref={provided.innerRef}
            >
              <h5>{job.company}</h5>
              <p>{job.role}</p>
              <Button color='primary' size='small' onClick={() => setCurrentId(job._id)}>
                Edit
              </Button>
              <Button color='primary' size='small' onClick={() => dispatch(deleteJob(job._id))}>
                Delete
              </Button> 
            </Container>
            
          )}
        </Draggable>
        </>
    )
}

export default Job;

{/* <Card
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
  <Button color='primary' size='small' onClick={() => setCurrentId(job._id)}>
      Edit
  </Button>
  <Button color='primary' size='small' onClick={() => dispatch(deleteJob(job._id))}>
      Delete
  </Button>                               
</CardContent>
</Card> */}