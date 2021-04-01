import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobs } from '../../../actions/jobs';
import Job from '../Job/job';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { bindActionCreators, compose } from 'redux';
import styles from './styles';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const JobList = styled.div`
  padding: '8px',
  transition: 'background-color 0.2s ease-in',
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flexGrow: 1,
  minHeight: '100px'  
`;


class Column extends Component {

    
    renderMyJobs = () => {
      // console.log('checking jobs', this.props.jobs)
        const user = localStorage.getItem('profile');
        const googleId = JSON.parse(user).result.googleId;
        const myJobs = this.props.jobs.filter(job => job.creator === googleId.toString())
        let filteredJobs = myJobs.filter(job => job.status === this.props.title)
        return filteredJobs.map((job, index) => (
              <Job job={job} id={job._id} index={index} key={job._id} setCurrentId={this.props.setCurrentId} />
            // <Grid item key={job._id} xs={12} sm={6}> 
            // </Grid> 
        ))
    }

    render() {
        const { title, classes, index } = this.props;
        // console.log('in column render:', this.props)
        return (
              <div className={classes.container}>
                <Typography className={classes.title} variant='h5'>{title}</Typography>
                <Droppable droppableId={`${title}-${index}`}>
                  {(provided) => (
                    <JobList 
                      {...provided.droppableProps}
                      innerRef={provided.innerRef}
                      ref={provided.innerRef}
                    >
                      {this.renderMyJobs()}
                      {provided.placeholder}
                    </JobList>
                  )}
                </Droppable>
              </div>

        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchJobs: () => dispatch(getJobs())
    }
}

function mapStateToProps(state){
    return {
        jobs: state.jobs
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles),)(Column);