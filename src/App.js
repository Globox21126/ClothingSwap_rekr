import React from 'react'
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Profile from "./Components/Home/Header/Profile"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './Scss/main.scss';
import Register from './Components/Login/Register';
import { AppProvider } from './app-context';

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/Home" component={Home}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>  
          <Route path="/Profile" component={Profile}/>
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
