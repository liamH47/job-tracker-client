import React, { Component } from 'react'
import useStyles from './styles'
import { Card, Button, Typography, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/styles';
import { bindActionCreators, compose } from 'redux';
import styles from './styles';
import moment from 'moment';
import { deleteJob } from '../../../actions/jobs'
import { connect } from 'react-redux';
 



 class Job extends Component {
     render() {
        const { classes, job } = this.props;
        return (
            <div className={classes.container}>
                <Typography variant='h5' component='h2' gutterBottom>
                    {job.company}
                </Typography>
                <Typography>
                    {job.role}
                </Typography>
                <Button color='primary' size='small' onClick={this.props.setCurrentId(job._id)}>
                  Edit
                </Button>
                <Button color='primary' size='small' onClick={this.props.deleteJob(job._id)}>
                  Delete
                </Button>  
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        deleteJob: () => dispatch(deleteJob())
    }
}

function mapStateToProps(state){
    return {
        jobs: state.jobs
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(styles),)(Job);