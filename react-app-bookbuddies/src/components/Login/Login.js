import React, { Component } from 'react';
import './Login.css'

import { Link } from 'react-router-dom';


class Login extends Component {


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
                                    <label className="label">Email</label>
                                    <p className="control">
                                        <input className="input" type="text" placeholder="johndoe@example.org" required />
                                    </p>
                                    <label className="label">Password</label>
                                    <p className="control">
                                        <input className="input" type="password" placeholder="●●●●●●●" required />
                                    </p>
                                    <hr />
                                    <p className="control">
                                        <Link to="/browse"> <button className="button is-primary">Login</button> </Link>
                                        <button id="cancel" className="button is-danger">Cancel</button>
                                    </p>
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

export default Login