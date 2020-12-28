import './App.css';
import React from 'react'
import GoogleLogout from 'react-google-login';
import { Redirect } from 'react-router-dom';
import App from './App.js'
import { withRouter } from "react-router-dom";
import GoogleContacts from 'react-google-contacts';

class Home extends React.Component{
  componentDidMount(){
    let email = localStorage.getItem('loggedInEmail')
    fetch('/getContacts/'+email).then(response=>response.json()).then(data=>{
      console.log(data)
    })
  }
 
  responseCallback=(response)=>{
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(response)
    }
    
    let email=localStorage.getItem('loggedInEmail')
    console.log('/saveContacts/'+email)
    fetch('/saveContacts/'+email,requestOptions).then(response=>{
     console.log(response)
    })
  }
    
  

  render(){
    
    return (<GoogleContacts
      clientId="30052336210-i4272ggike1pkpovcrccl6dfn6ds8udt.apps.googleusercontent.com"
      buttonText="Import"
      onSuccess={this.responseCallback}
      onFailure={this.responseCallback}
    />);
   }
  }

export default Home;
