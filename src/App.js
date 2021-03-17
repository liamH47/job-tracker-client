import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'

const App = () => {


    return (
        <BrowserRouter>
          <Container maxWidth='lg'>
            <Navbar />
            <Home />
          </Container>
        </BrowserRouter>
    )
}

export default App;