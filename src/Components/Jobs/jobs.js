import React, { Component } from 'react';
import Job from './Job/job';
import styles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Column from './Column/Column';
import { DragDropContext } from 'react-beautiful-dnd';
import { withStyles } from '@material-ui/styles';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { getJobs } from '../../actions/jobs';

class Jobs extends Component {

    state = {
      columns: ['Preparing', 'Applied', 'Interviewing']
    }

    onDragEnd = (result) => {
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
    render(){
        const { classes } = this.props;
        return(
            !this.props.jobs.length ? <CircularProgress /> : (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <section className={classes.mainContainer}>
                        {this.state.columns.map((column, index) => <Column index={index} setCurrentId={this.props.setCurrentId} title={column}/>)}
                    </section>
                </DragDropContext>        
                // <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            )
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

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles),)(Jobs);