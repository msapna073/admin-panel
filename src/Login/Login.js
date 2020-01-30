import React, { Component } from "react";
import './Login.css';
import Axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faLock
} from '@fortawesome/free-solid-svg-icons'
import {Redirect} from "react-router-dom"

class Login extends Component {
  /*   state = {
        username: "",
        password: "",
        error: ""
    } */
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            error: ""
        }
        this.handleChange =  this.handleChange.bind(this)
        this.processLogin  = this.processLogin .bind(this)
      
    }
    componentDidMount(){
        sessionStorage.clear();
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value});

        //this.setState({["username"]:event.target.value});
        // state.username
        // state["username"] 
    }

     processLogin (ev) {
        ev.preventDefault()
        console.log('hi');
        const {username, password} = this.state
        try {
            //const token = await Axios.post("localhost:8080/login", {username, password})
            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
              };
              
              Axios.post('http://localhost:8080/login', {username, password}, axiosConfig)
              .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
                if(res.data=='Unauthorized user')
                {
                    console.log('hey')
                }if(res.data.token==null ||res.data.token==undefined ||res.data.token==''){
                   console.log('helo')
                }else {
                    this.props.onLoggedIn1(res.data.token);
                }
              })
              .catch((err) => {
                console.log("AXIOS ERROR: ", err);
              })
            //console.log(token.data.token);
            //localStorage.setItem("token", token.data.token)
           /*  this.setState({
                loggedIn: true
            }) */
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
       /*  if(this.state.username === "aaa" && this.state.password === "aaa"){
            this.props.onLoggedIn1();

        } else {
            this.setState({error: "Login failed! Please check the username and password"})
        } */
    }

    render() {

        return <>
            <div className="loginArea">
                <div className="loginBox">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="loginSidebar">
                                <div className="loginLogo"><img src={"logo.jpg"} /></div>
                                <div className="loginContent">
                                    <h1>Welcome back</h1>
                                    <p>Thanks for your efforts to work faster and be more productive</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="loginForm">
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faUser} /></span>
                                    </div>
                                    <input type="text" className="form-control"
                                        placeholder="Username" name="username" onChange={this.handleChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <FontAwesomeIcon icon={faLock} /></span>
                                    </div>
                                    <input type="password" className="form-control"
                                        placeholder="Password" name="password"
                                        onChange={this.handleChange} />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                            id="customCheck"
                                            name="example1" />
                                        <label className="custom-control-label">
                                            Remember Me
                        </label>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <button type="button" className="btn btn-success"
                                        onClick={this.processLogin}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }

}

export default Login;