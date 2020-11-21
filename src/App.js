import React from 'react'
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './Scss/main.scss';
import Register from './Components/Login/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>  
      </Switch>
    </Router>
  );
}

export default App;
