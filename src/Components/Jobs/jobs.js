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
import { getJobs, updateJob, updateIndices } from '../../actions/jobs';

const columns = ['Preparing', 'Applied', 'Interviewing'];
let allMyJobs = [];
class Jobs extends Component {

  componentDidMount() {
    
  }
  
    getIndex = (id) => {
     let pls = id.indexOf('-');
     return id.slice(pls + 1);
    }

    getColumn = (id) => {
      let pls = id.indexOf('-');
      return id.slice(0, pls);
    }

    addIndex = (job, index) => {
      job.index = index;
    }

    indexAll = (array) => {
      return array.forEach(this.addIndex);
    }

    filterColumns = (columnName) => {

      const user = localStorage.getItem('profile');
      const googleId = JSON.parse(user).result.googleId;
      const myJobs = this.props.jobs.filter(job => job.creator === googleId.toString())
      // allMyJobs.push(myJobs);
      let columnArray = myJobs.filter(job => job.status === columnName)
      allMyJobs.push(...columnArray)
    }

    onDragEnd = (result) => {
      
      const { destination, source, draggableId } = result;
      // console.log('result:', result)
      if(!destination) {
          return;
      }


      console.log({jobs: this.props.jobs, draggableId, source, destination})
      // if(destination.droppableId === source.droppableId && 
      //   destination.index === source.index
      //   ) {
      //     return;
      //   }

      let draggedItem = this.props.jobs.find(job => job._id === draggableId);
      let newColumn = this.getColumn(destination.droppableId)
      console.log('alljobs before filter test:', allMyJobs)
      draggedItem.status = newColumn;
      console.log('newColumn:', destination);
      allMyJobs = [];
      // console.log('apply filter test', this.filterColumns('Applied'))
      columns.forEach(column => this.filterColumns(column));
      let indexed = this.indexAll(allMyJobs)
      console.log('alljobs after filter test:', allMyJobs);
      console.log('indexed pls:', allMyJobs);
      // this.props.updateJob(draggedItem._id, draggedItem);
      // this.props.updateIndices()

      
      //we need jobs to be reordered in a way that represents the overarching order, as if it were prepared, then applied, then interviewing
      //map over that array to ensure that each item has an index
      //then updateIndices
    }
    

    render(){
        const { classes } = this.props;
        return(
            !this.props.jobs.length ? <CircularProgress /> : (
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <section className={classes.mainContainer}>
                        {columns.map((column, index) => <Column key={index} index={index} setCurrentId={this.props.setCurrentId} title={column} />)}
                    </section>
                </DragDropContext>        
                // <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            )
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        fetchJobs: () => dispatch(getJobs()),
        updateJob: (...args) => dispatch(updateJob(...args)),
        updateIndices: (...args) => dispatch(updateIndices(...args))
    }
}

function mapStateToProps(state){
    return {
        jobs: state.jobs
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles),)(Jobs);