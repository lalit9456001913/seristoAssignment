import './App.css';
import React from 'react'
import GoogleContacts from 'react-google-contacts';

const data=[

  {
    'name':'lalit',
    'email':'lalit@gmail.com',
    'mobile':'9773950838'
  },
  {
    'name':'pankaj',
    'email':'pankaj@gmail.com',
    'mobile':'9761003677'
  },
  {
    'name':'aditya',
    'email':'aditya@gmail.com',
    'mobile':'9999999999'
  },
  {
    'name':'gaurav',
    'email':'gaurav@gmail.com',
    'mobile':'9999999991'
  },
  {
    'name':'atul',
    'email':'atul@gmail.com',
    'mobile':'9999999992'
  }


]

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
    fetch('/saveContacts/'+email,requestOptions).then(response=>response.json()).then(data=>{
      console.log(data)
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
