import React, { Component } from 'react';

import './Aside.css'

// import { Link } from 'react-router-dom'


class Aside extends Component {

    
    constructor() {
        super()

        this.state = {
            category: ""
        }
    }
    
    handleClick = value => {

        console.log(value)

        this.setState({ category: value });
        this.props.sendCategory(value)
        
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
                            <a 
                            data="history"
                            onClick={ e => {
                                e.preventDefault()
                                this.handleClick((e.target.getAttribute('data')))
                                this.props.sendCategory((e.target.getAttribute('data')))
                            }}
                            >Historia</a>
                        </li>
                        <li>
                            <a>Ciencia</a>
                        </li>
                        <li>
                            <a>Ficción</a>
                        </li>
                        <li>
                            <a className="is-active">Fantasía</a>
                        </li>
                        <li>
                            <a>Filosofía</a>
                        </li>
                        <li>
                            <a>Psicología</a>
                        </li>
                        <li>
                            <a>Biografías</a>
                        </li>
                        <li>
                            <a>Ensayos</a>
                        </li>
                        <li>
                            <a>Educación</a>
                        </li>
                        <li>
                            <a>Viajes</a>
                        </li>
                        <li>
                            <a>Deportes</a>
                        </li>
                        <li>
                            <a>Autoayuda</a>
                        </li>
                        <li>
                            <a>Salud</a>
                        </li>
                        <li>
                            <a>Cocina</a>
                        </li>
                    </ul>
                </aside>
            </div>



        )
    }
}

export default Aside