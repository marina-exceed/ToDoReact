import React, { Component } from 'react';
import './login.css';
import {Link} from "react-router-dom";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
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

  handleEmailChange(evt) {
    this.setState({
      email: evt.target.email,
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
            <h3 onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <input type="text"  placeholder="Enter your email!" className="name"  value={this.state.email} onChange={this.handleEmailChange}/>
          <input type="password" placeholder="Enter your Password!" className="password" value={this.state.password} onChange={this.handlePassChange}/>
          <input type="submit" className="btnN" value="Log In"/>
        </form>
        <Link to="/registr"> <input type="submit" className="morebtnN" value="Create your ToDo account"/></Link>
      </div>
    );
  }
}

export default Login;