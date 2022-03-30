import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    )
}