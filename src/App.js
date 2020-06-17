import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Signin from './signin/signin';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Sheda from './Categories/Photo Category/Sheda'

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path='/Login' component={Login}/>
      <Route exact path='/signin' component={Signin}/>
        <Route exact path="/sheda" component={Sheda}/>
      </Switch>
    </BrowserRouter>
  );
}
export default App;