import React, { Component } from 'react';

import './NavBar.css'

// import { Link } from 'react-router-dom'


class NavBar extends Component {


    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#/browse">
                            <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
                        </a>
                        <span className="navbar-burger burger has-text-light" data-target="navbarMenuHeroA">
                            <span />
                            <span />
                            <span />
                        </span>
                    </div>
                    <div id="navbarMenuHero" className="navbar-menu">
                        <div className="navbar-end">
                            <a className="navbar-item is-size-5 has-text-light">
                                Libros por género
                                        </a>
                            <a className="navbar-item is-size-5 has-text-light">
                                Top Rated
                                        </a>
                            <a className="navbar-item is-size-5 has-text-light">
                                Cuenta
                                        </a>
                        </div>
                    </div>
                </div>
            </nav>



        )
    }
}

export default NavBar