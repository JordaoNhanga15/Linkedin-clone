import React from 'react'
import { BrowserRouter,Route } from 'react-router-dom';
import Loading from '../screens/Loading';
import Page from '../screens/Page';
import Profile from '../screens/Profile';

function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" component={Loading} exact />
            <Route path="/network" component={Page} />
        </BrowserRouter>
    )
}

export default Routes