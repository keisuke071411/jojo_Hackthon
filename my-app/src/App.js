import React, { component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './home'
import special from './special'
import first from './first'
import second from './second'
import third from './third'
import fourth from './fourth'
import final from './final'
import other from './other'
import './App.css';

const App = () => (
  <BrowserRouter>
      <Route exact path='/' component={ Home } />
      <Route path='/special' component={ special } />
      <Route path='/first' component={ first } />
      <Route path='/second' component={ second } />
      <Route path='/third' component={ third } />
      <Route path='/fourth' component={ fourth } />
      <Route path='/final' component={ final } />
      <Route path='/other' component={ other } />
  </BrowserRouter>
)

export default App;