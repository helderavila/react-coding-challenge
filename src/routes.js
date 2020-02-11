import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/movies" exact component={Movies}/>
        <Route path="/series" exact component={Series}/>
      </Switch>
    </BrowserRouter>
  )
}