import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles'
import Input from './Input';
import { GoogleLogin } from 'react-google-login';
import Icon from './Icon';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Auth = () => {
    const classes = useStyles();
    const [isSignUp, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const submitHandler = () => {

    };

    const handleChange = () => {

    };

    const switchForm = () => {
        setIsSignUp((prevState) => !prevState)
    };

    const googleSuccess = async (response) => {
        const result = response?.profileObj;
        const token = response?.tokenId;
        try {
          dispatch({ type: 'AUTH', data: { result, token } });
          history.push('/');
        } catch (error) {
          console.log(error)
        } 
    };

    const googleFailure = () => {
        console.log("google Oauth failed")
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
              <GoogleLogin 
                clientId='316410812356-10kuve647u67aj1fs7jv1h0t07be4lkg.apps.googleusercontent.com'
                render={(renderProps) => (
                    <Button 
                      className={classes.googleButton} 
                      color='primary' 
                      variant='contained' 
                      fullWidth 
                      onClick={renderProps.onClick} 
                      disabled={renderProps.disabled} 
                      startIcon={<Icon />}
                    >
                      Sign In With Google 
                    </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy='single_host_origin'
              />
              <Grid container justify='flex-end'>
                <Grid item>
                  <Button className={classes.switchButton} onClick={switchForm}>
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
