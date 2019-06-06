import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './header/Header'
import Login from './login/login';
import Registr from './login/registration'
import Wrapper from './wrapper/wrapper';
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/login" component={Login}/>
        <Route path="/registr" component={Registr}/>
        <Route path="/todolist" component={Wrapper}/>
      </div>
    </Router>
  );
}

export default App;
