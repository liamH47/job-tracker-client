import React from 'react';
import Job from './Job/job';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Column from './Column/Column';
import { DragDropContext } from 'react-beautiful-dnd';

const Jobs = ({ setCurrentId }) => {
    const columns = ['Preparing', 'Applied', 'Interviewing']
    const user = localStorage.getItem('profile');
    // console.log("user:", user);
    const googleId = JSON.parse(user).result.googleId;
    // console.log("parsed googleId:", googleId)
    const jobs = useSelector((state) => state.jobs)
    const myJobs = jobs.filter(job => job.creator === googleId.toString())
    // debugger
    const classes = useStyles();
    // console.log("myjobs:", myJobs)
    const onDragEnd = (result) => {
      const { destination, source, draggableId } = result;

      if(!destination) {
          return;
      }

      if(destination.droppableId === source.droppableId && 
        destination.index === source.index
        ) {
          return;
        }

    }

    return(
        !myJobs.length ? <CircularProgress /> : (
            <DragDropContext onDragEnd={onDragEnd}>
                <section className={classes.mainContainer}>
                    {columns.map((column, index) => <Column index={index} setCurrentId={setCurrentId} title={column}/>)}
                </section>
            </DragDropContext>
        
            // <Grid className={classes.container} container alignItems='stretch' spacing={3}>

        )

    )
}

export default Jobs;

/*
    const user = JSON.parse(localStorage.getItem('profile'));
    const googleId = JSON.parse(user.result.googleID)
    JSON.parse(localStorage.getItem('profile')).result.googleId
                {myJobs.map((job) => (
                   <Grid item key={job._id} xs={12} sm={6}> 
                        <Job job={job} setCurrentId={setCurrentId}/>
                   </Grid> 
                ))}
*/