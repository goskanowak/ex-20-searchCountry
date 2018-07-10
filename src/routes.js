import React from 'react';
import { Route } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import CountryFlagContainer from './containers/flag-container.component';
import CountryDetailsContainer from './containers/country-detail-container.component';
import NotFound from './presentational/not-found.component';

export default (
  <Route path='/' component={Navigation}>
    <Route path='/' component={Home}/>
    <Route path='contries' >
      <Route 
        path='contries/' 
        component={CountryFlagContainer}/>
      <Route 
        path='contry/:id' 
        component={CountryDetailsContainer}/>
    </Route>
    <Route path='contact' component={Contact}/>
    <Route path='*' component={NotFound}/>
  </Route>
);

/*  <IndexRoute component={Home}/>
  IndexRoute not work */