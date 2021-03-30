import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobs } from '../../../actions/jobs';
import Job from '../Job/job';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { bindActionCreators, compose } from 'redux';
import styles from './styles';


class Column extends Component {

    componentDidMount() {
        // console.log('in column cdm:', this.props.jobs)
        // console.log('in column cdm title:', this.props)

    }
    
    renderMyJobs = () => {
        const user = localStorage.getItem('profile');
        const googleId = JSON.parse(user).result.googleId;
        const myJobs = this.props.jobs.filter(job => job.creator === googleId.toString())
        let filteredJobs = myJobs.filter(job => job.status === this.props.title)
        return filteredJobs.map((job) => (
            <Grid item key={job._id} xs={12} sm={6}> 
              <Job job={job} setCurrentId={this.props.setCurrentId} />
            </Grid> 
        ))
    }

    render() {
        const { title, classes } = this.props;
        return (
              <div className={classes.container}>
                <Typography className={classes.title} variant='h5'>{title}</Typography>
                <div className={classes.joblist}>
                  {this.renderMyJobs()}
                </div>
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