import React, { Component } from 'react';
import { withRouter } from "react-router-dom"

import './Aside.css'


class Aside extends Component {

    constructor() {
        super()

        this.state = {
        
        }
    }
    
    handleClick = value => {

        this.props.history.push(`/category/${value}`)
       
    }

    render() {
        return (
            <div className="column is-3 has-text-left">
                <section className="hero is-primary">
                    <div className="hero-body" id="categories">
                        <h2 className="title is-4">
                            Géneros
                        </h2>
                    </div>
                </section>
                <aside className="menu">
                    <ul className="menu-list is-size-5-desktop has-text-weight-normal">
                        <li>
                            <a className=""
                            data="history"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                                
                            }}
                            >Historia
                            </a>
                        </li>

                        <li>
                            <a
                            data="science"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Ciencia
                            </a>
                        </li>

                        <li>
                            <a
                            data="fiction"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Ficción
                            </a>
                        </li>
                        <li>
                            <a 
                            data="fantasy"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Fantasía
                            </a>
                        </li>

                        <li>
                            <a
                            data="philosophy"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Filosofía
                            </a>
                        </li>

                        <li>
                            <a
                            data="psychology"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Psicología
                            </a>
                        </li>

                        <li>
                            <a
                            data="biography"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Biografías
                            </a>
                        </li>

                        <li>
                            <a
                            data="essay"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Ensayos
                            </a>
                        </li>

                        <li>
                            <a
                            data="education"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Educación
                            </a>
                        </li>

                        <li>
                            <a
                            data="travel"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Viajes
                            </a>
                        </li>

                        <li>
                            <a
                            data="sports"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Deportes
                            </a>
                        </li>

                        <li>
                            <a
                            data="self-help"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Autoayuda
                            </a>
                        </li>

                        <li>
                            <a
                            data="health"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Salud
                            </a>
                        </li>

                        <li>
                            <a
                            data="cooking"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                            }} 
                            >Cocina
                            </a>
                        </li>

                    </ul>

                </aside>

            </div>



        )
    }
}

export default withRouter(Aside)