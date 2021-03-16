import React from 'react'
import { AppBar, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import useStyles from './styles'
import { Toolbar, Button, Avatar } from '@material-ui/core'


const Navbar = () => {
    const classes = useStyles();
    const user = null;
    return (
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} variant='h2' align ='center'>Jobs!</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant='h6'></Typography>
                        <Button variant='contained' className={classes.logout} color='secondary'>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} tp='/auth' variant='contained' color='primary'>Sign in</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
