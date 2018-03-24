import React, { Component } from 'react';

import { withRouter } from "react-router-dom"

import './NavBar.css'
import bookBuddiesApi from './../../api/bookBuddiesApi'

class NavBar extends Component {

    constructor() {
        super()

        this.state = {
            username: ""
        }
    }

    componentWillMount() {
        const userId = sessionStorage.getItem('userId')

        console.log(userId)



        bookBuddiesApi.retrieveUser(userId)
            .then((user) => {
                console.log(user)
                this.setState({ username: user.data.data.username })
            })


    }

    handleClick = value => {

        this.props.history.push(`/category/${value}`)

    }

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
                        
                            <span className="navbar-item is-size-5 has-text-light">
                                

                                <div className="dropdown is-hoverable">
                                    <div className="dropdown-trigger">
                                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                            <span> Libros por género </span>
                                            <span className="icon is-small">
                                                <i className="fa fa-angle-down" aria-hidden="true" />
                                            </span>
                                        </button>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                                        <div className="dropdown-content">
                                            <div className="dropdown-item">

                                                <ul className="menu-list is-size-5-desktop has-text-weight-normal">
                                                    <li>
                                                        <a className=""
                                                            data="history"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))

                                                            }}
                                                        >Historia
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="science"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Ciencia
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="fiction"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Ficción
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            data="fantasy"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Fantasía
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="philosophy"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Filosofía
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="psychology"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Psicología
                                                            </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="biography"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Biografías
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="essay"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Ensayos
                                                         </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="education"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Educación
                                                            </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="travel"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Viajes
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="sports"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Deportes
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="self-help"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Autoayuda
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="health"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Salud
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a
                                                            data="cooking"
                                                            onClick={e => {
                                                                e.preventDefault()
                                                                this.handleClick((e.target.getAttribute('data')))
                                                            }}
                                                        >Cocina
                                                        </a>
                                                    </li>

                                                </ul>


                                            </div>
                                        </div>
                                    </div>
                                </div> 


                               
                            </span>
                            {/* <a className="navbar-item is-size-5 has-text-light">
                                Top Rated
                            </a> */}
                            <a className="navbar-item is-size-5 has-text-light">
                                {this.state.username}
                                
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar)