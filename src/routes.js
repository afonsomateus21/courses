import React from 'react'
import Inicial from './pages/Inicial'

import Detalhes from './pages/Detalhes'
import {BrowserRouter, Switch, Route } from 'react-router-dom'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Inicial} exact/>
                <Route path="/detalhes" component={Detalhes}/>
            </Switch>
        </BrowserRouter>
    )
}
