import React, { Component } from 'react';
import './Login.css'

import booksBuddiesApi from './../../api/bookBuddiesApi'

import { Link, withRouter } from 'react-router-dom';


class Login extends Component {

    constructor() {
        super()

        this.state = {
            username: "",
            password: ""
        }
    }

    handleUsername = (_username) => {
        this.setState({ 
            username: _username     
        })
    }

    handlePassword = (_password) => {
        this.setState({
            password: _password
        })
    }

    getUserId = (_login) => {
        
      sessionStorage.setItem('userId',_login.data.data.id._id)
       

       console.log(sessionStorage)
    }

    handleSubmit = () => {

        booksBuddiesApi.loginUser(this.state.username, this.state.password)

            .then(_login =>{
                
                
                if (_login.data.status === 'OK') {
                    this.getUserId(_login)
                    
                   this.props.history.push(`/browse`)
                } else {
                    alert("Wrong Password and/or Username")
                }
            })
            
        } 
        

    render() {
        return ( 
            <section className="hero is-fullheight is-dark is-bold">
                <div  className="hero-body">
                    <div  className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-6 is-offset-3 has-text-left">
                                <h1 id="title"   className="title ">
                                    Login
                                </h1>
                                <div id="container"  className="box">
                                    <form
                                    onSubmit={e => {
                                        e.preventDefault()
                                        this.handleSubmit()
                                    }}
                                    >
                                        <label className="label">Username</label>
                                        <p className="control">
                                            <input
                                            onChange={(_username) => this.handleUsername(_username.target.value)} 
                                            className="input" 
                                            type="text" 
                                            placeholder="username" 
                                            required 
                                            />
                                        </p>
                                        <label className="label">Password</label>
                                        <p className="control">
                                            <input 
                                            onChange={(_password) => this.handlePassword(_password.target.value)}
                                            className="input" 
                                            type="password" 
                                            placeholder="●●●●●●●" 
                                            required 
                                            />
                                        </p>
                                        <hr />
                                        <p className="control">
                                            <button className="button is-primary">Login</button>
                                            <button id="cancel" className="button is-danger">Cancel</button>
                                        </p>
                                    </form>    
                                </div>
                                <p className="has-text-centered">
                                    <Link to="/register" href="#">Crea cuenta nueva  
                                    </Link> 
                                
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
       

        )
    }
}

export default withRouter(Login)