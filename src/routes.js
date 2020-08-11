import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './components/login/login.component';
import Dashboard from './components/dashboard/dashboard.component';
import Operacoes from './components/operacoes/operacoes.component'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/operacoes" component={Operacoes} />
            </Switch>
        </BrowserRouter>
    )
}