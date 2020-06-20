import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Sheda from './Categories/Photo Category/Sheda'
import Landing from './landing/landing'
import Category from './category/category'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sheda" component={Sheda}/>
        <Route exact path= "/" component={Landing}/>
        <Route  path="/categories/:category_name" component={Category}/>
      </Switch>
    </BrowserRouter>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
