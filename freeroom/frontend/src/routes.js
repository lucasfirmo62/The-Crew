import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home   from './Pages/Home';
import Login  from './Pages/Login';
import Rooms  from './Pages/Rooms';
import Teach  from './Pages/Teach';
import agenda from './Pages/AgendaPA';
import MinhaSalas from './Pages/MyRooms';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/rooms" component={Rooms} />
                <Route path="/teacher" component={Teach} />
                <Route path="/pa" component={agenda} />
                <Route path="/my-rooms" component={MinhaSalas} />
            </Switch>
        </BrowserRouter>
    )
}