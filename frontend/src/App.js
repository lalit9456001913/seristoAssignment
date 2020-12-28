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
    
    localStorage.setItem('accessToken',response.accessToken)
    
    localStorage.setItem('loggedInEmail',response.profileObj.email)
   
    if(response.profileObj){
      this.setState({
        ...this.state,
      })
    }
  }
  

render(){
  
  const token=localStorage.getItem('accessToken')
  if(token){
    return(<Home />)
  }else{
    return(<GoogleLogin
      clientId="30052336210-i4272ggike1pkpovcrccl6dfn6ds8udt.apps.googleusercontent.com"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}

    />)
  }
 }
}

export default App;
