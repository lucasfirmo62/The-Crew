import React from 'react';

import Home from '../../src/Pages/Home';
import Login from '../../src/Pages/Login';
import Rooms from '../../src/Pages/Rooms';
import AgendaPA from '../../src/Pages/AgendaPA';



export default function Routes() {
    return (
        <>
            <Home />
            <Login />
            <Rooms />
            <AgendaPA />
        </>
    )
}