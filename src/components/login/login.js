import React, { Component } from 'react';
import './login.css';
import {Link} from "react-router-dom";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({error: ''});
  }

  handleSubmit(evt) {
    evt.preventDefault();

    for (let field in this.state) {
      if (!this.state[field] && field !== 'error') {
        return this.setState({error: `${field} is required`})
      }
    }
    // if (!this.state.username) {
    //   return this.setState({error: 'Username is required'});
    // }
    //
    // if (!this.state.password) {
    //   return this.setState({error: 'Password is required'});
    // }
    //
    // return this.setState({error: ''});
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <input type="text"  placeholder="Enter your name!" className="name"  value={this.state.username} onChange={this.handleUserChange}/>
          <input type="password" placeholder="Enter your Password!" className="password" value={this.state.password} onChange={this.handlePassChange}/>
          <input type="submit" className="btnN" value="Log In"/>
        </form>
        <Link to="/registr"> <input type="submit" className="morebtnN" value="Create your ToDo account"/></Link>
      </div>
    );
  }
}

export default Login;