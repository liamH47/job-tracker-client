import React, { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { Grow } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Jobs from '../Jobs/jobs'
import useStyles from './styles'

import Form from '../Form/form'
import { useDispatch } from 'react-redux';
import { getJobs } from '../../actions/jobs';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    // const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [currentId, dispatch]);
    return (
        <div>

            <Jobs setCurrentId={setCurrentId}/>


            <Form currentId={currentId} setCurrentId={setCurrentId}/>

        
        </div>
    )
}

export default Home
