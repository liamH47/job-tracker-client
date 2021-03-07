import React from 'react';
import { Container } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Grow } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Jobs from './Components/Jobs/jobs'
// import Job from './Components/Jobs/Job/job'
import Form from './Components/Form/form'
import useStyles from './styles'

const App = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align ='center'>Jobs!</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Jobs />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;