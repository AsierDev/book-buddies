import React, { Component } from 'react';
import './LandingPage.css'
import { Link } from 'react-router-dom';


class LandingPage extends Component {

    componentWillMount() {
        sessionStorage.removeItem('userId')
    }


    render() {
        return (
            <section className="hero is-info is-fullheight" id="landing">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-8 is-offset-2 ">
                            <h1 className="title  is-1 has-text-white mainTitle">
                                Book Buddies
                            </h1>
                            <div className="box ">
                                <div className="columns">
                                    <div className="column is-6">
                                        <h2 className=" title is-4 has-text-light">
                                            Regístrate aquí para buscar contenido
                                        </h2>
                                        <Link to="/register"
                                        className="button is-danger is-rounded is-large"> Register
                                        </Link>
                                    </div>
                                    <div className="column is-6">
                                        <h2 className=" title is-4 has-text-light access">
                                            ¿Ya tienes una cuenta? Accede ahora
                                        </h2>
                                        <Link to="/login"
                                        className="button is-success is-rounded is-large access">Log In 
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default LandingPage