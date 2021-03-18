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
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs());
    }, [currentId, dispatch]);
    return (
        <div>
            <Grow in>
                <Container>
                    <Grid className={classes.grid} container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Jobs setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>           
        </div>
    )
}

export default Home
