import React, { Component } from 'react';
import { withRouter } from "react-router-dom"

import './MainPage.css'

import NavBar from './../NavBar/NavBar'
import Carousel3 from './../Carousel/Carousel3'

// import { Link } from 'react-router-dom'


class MainPage extends Component {

    constructor() {
        super()

        this.state = {
          query: ""
        }
    }

    handleChange = input => {
        this.setState({ query: input });
    }

    handleSubmit() {
        this.props.history.push(`/results/${this.state.query}`)
        this.setState({ query: '' })

    }



    render() {

        return (
            <div>
            <section className="hero is-medium" id="header">
                <div className="hero-opacity">

                    <div className="hero-head">
                       <NavBar />
                    </div>

                    <div className="hero-body" id="heroContainer">
                        <div className="container has-text-centered">
                            <h1 id="title" className="title has-text-light is-size-1">
                                Encuentra tu libro favorito
                            </h1>
                            <h2 id="subtitle" className="subtitle has-text-light is-size-4">
                                Busca por título, autor o ISBN
                            </h2>
                        </div>
                        <div className="field is-horizontal level">
                            <div className="field-body">
                                <div className="field ">
                                    <div className="control level-item">
                                        <form id="inputForm" 
                                        onSubmit={ e => {
                                            e.preventDefault()
                                            this.handleSubmit()
                                        }}
                                        >
                                            <input 
                                            className="input is-large is-rounded has-text-centered" 
                                            type="text" 
                                            placeholder="Buscar en Book Buddies"
                                            onChange={(e) => this.handleChange(e.target.value)} 
                                            />
                                    </form>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Carousel3 />
             

            </div>

        )
    }
}

export default withRouter(MainPage)