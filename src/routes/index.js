import React from 'react';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import { DashBoard } from '../pages';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={DashBoard}/>
                <Redirect from='*'  to="/dashboard" />
            </Switch>
        </BrowserRouter>
    )
}