import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import SideMenu from './SideMenu/SideMenu';
import Attendance from './pages/Attendance';
import AddMembers from './pages/AddMembers';
import MembersList from './pages/MembersList';
import Notification from './pages/Notification';
import SlideMenuBar from './pages/SlideMenuBar';
import Login from './Login/Login';
import {Redirect} from "react-router-dom"



class App extends Component {
  state = {
    authenticated: false
   }

  constructor(props){
    super(props)
    var value = sessionStorage.getItem("token");
    console.log(value);
    //value = value != null ? value : false;
if(value == null ||value==undefined ||value=='' ){
  this.state = {authenticated: false};
   //window.location.reload();
}else{
  this.state = {authenticated: true};
}
    
  }

  onLoggedIn = (data) => {
    sessionStorage.setItem("token", data);
    this.setState({authenticated: true});
  }
  onLogout =()=>{
    sessionStorage.removeItem("token");
    this.setState({authenticated: false});
  }
  render() {
    
    if (this.state.authenticated) {
      
      return (<div className="App">
      <div className="wrapper">
        {
         <Router>
          <SideMenu />
          
            <div className="contentArea">
        <SlideMenuBar onLogout1={this.onLogout}/> }
            <Switch> 
              
              <Route path="/notification">
                <Notification />
              </Route>
              <Route path="/addmembers">
                <AddMembers />
              </Route>
              <Route path="/membersList">
                <MembersList />
              </Route>
              <Route path="/">
                <Attendance />
              </Route>
            </Switch>
          </div>
          <Redirect to="/"/>
        </Router>
    }
      </div>

  
    </div>)
    }else{
      return(<Login  onLoggedIn1={this.onLoggedIn}/>
         
        )
    }
  }
}

export default App;
