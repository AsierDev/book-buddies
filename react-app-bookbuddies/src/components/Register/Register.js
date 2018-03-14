import React, { Component } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';


class Register extends Component {


    render() {
        return (
            
            <section className="hero is-fullheight is-dark is-bold">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-6 is-offset-3 has-text-left">
                                <h1 id="title" className="title">
                                    Registrar Nuevo Usuario
                                </h1>
                                <div id="container" className="box">
                                    <label className="label">Nombre</label>
                                    <p className="control">
                                        <input className="input" type="text" placeholder="John" required />
                                    </p>
                                    <label className="label">Apellidos</label>
                                    <p className="control">
                                        <input className="input" type="text" placeholder="Smith" required />
                                    </p>
                                    <label className="label">Email</label>
                                    <p className="control">
                                        <input className="input" type="text" placeholder="jsmith@example.com" required />
                                    </p>
                                    <hr />
                                    <label className="label">Contraseña</label>
                                    <p className="control">
                                        <input className="input" type="password" placeholder="●●●●●●●" required />
                                    </p>
                                    <label className="label">Confirma Contraseña</label>
                                    <p className="control">
                                        <input className="input" type="password" placeholder="●●●●●●●" required />
                                    </p>
                                    <hr />
                                    <p className="control">
                                        <button className="button is-primary">Registrar</button>
                                        <button id="cancel" className="button is-danger">Cancel</button>
                                    </p>
                                </div>
                                <p className="has-text-centered">
                                    <a href="../login/login.html">Ya tengo cuenta</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}

export default Register