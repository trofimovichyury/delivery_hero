import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RestaurantPage from './pages/RestaurantPage'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/restaurant/:id' component={RestaurantPage}/>
        </Switch>
    </main>
);

export default Main
