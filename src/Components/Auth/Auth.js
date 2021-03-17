import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core';
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';

const Auth = () => {
    const classes = useStyles();
    const [isSignUp, setIsSignUp] = useState(false);

    const submitHandler = () => {

    };

    const handleChange = () => {

    };

    const switchForm = () => {
        setIsSignUp((prevState) => !prevState)
    };

    return (
        <Container component='main' maxWidth='xs'>
          <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={submitHandler}>
              <Grid container spacing={2}>
                {
                  isSignUp && (
                      <>
                        <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                        <Input name='lastName' label='Last Name' handleChange={handleChange} half />
                      </>
                  )
                }
                <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
                <Input name='password' label='Password' handleChange={handleChange} type='password' />
                { isSignUp && <Input name='confirmPassword' label='Confirm Password' type='password' handleChange={handleChange} />}
              </Grid>
              <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                  { isSignUp ? 'Sign Up' : 'Sign In'}
              </Button>
              <Grid container justify='flex-end'>
                <Grid item>
                  <Button onClick={switchForm}>
                      { isSignUp ? 'Have an account already? Sign In' : "Don't have an account yet? Sign Up" }
                  </Button>
                </Grid> 
              </Grid>
            </form>
          </Paper>
        </Container>
    )
}

export default Auth
