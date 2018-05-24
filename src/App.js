import React, { Component } from "react";

import "./App.css";
import { auth } from './base';
import Main from "./Main";
import SignIn from "./SignIn";

class App extends Component {
  state = {
    uid: null
  };

  componentWillMount() {
    const login = window.localStorage.getItem('login');
    if(login) {
      this.handleAuth(login);
    }
    
    auth.onAuthStateChanged(user => {
      if(user) {
        this.handleAuth(user.uid);
      } else {
        this.signOut();
      }
    });
  }

  handleAuth = (user) => {
    this.setState({user});
    window.localStorage.setItem('login', this.state.user);
  };

  signedIn = () => {
    return this.state.uid;
  };

  signOut = () => {
    window.localStorage.setItem('login', "");
    this.setState({ uid: null });
    auth.signOut();
  };

  render() {
    return (
      <div className="App">
        {this.signedIn() ? (
          <Main signOut={this.signOut} user={this.state.uid} />
        ) : (
          <SignIn handleAuth={this.handleAuth} />
        )}
      </div>
    );
  }
}

export default App;
