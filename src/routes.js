import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Form from './components/Form'
import Post from './components/Post'
import Dashboard from './components/Dashboard'

export default  (
    <Switch>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Route exact path='/' component={Auth}></Route>
        <Route path='/form' component={Form}></Route>
        <Route path='/post/:id' component={Post}></Route>
    </Switch>
)