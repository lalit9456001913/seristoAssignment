//import { render } from '@testing-library/react';
import React, { Component } from 'react'
import { GoogleLogin } from "react-google-login";
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Home from './Home.js';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      loggedIn:false
    }
  }
  responseGoogle=(response)=>{
    console.log(response)
    localStorage.setItem('accessToken',response.accessToken)
    console.log(response.profileObj.email)
    localStorage.setItem('loggedInEmail',response.profileObj.email)
    const check=localStorage.getItem('loggedInEmail')
    console.log(check)
    if(response.profileObj){
      this.setState({
        ...this.state,
      })
    }
  }
  

render(){
  return(<Home />)
  
 }
}

export default App;
