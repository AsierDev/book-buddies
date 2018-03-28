import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import bookBuddiesApi from './../../api/bookBuddiesApi'
import Footer from './../Footer/Footer'
import Loader from './../Loader/Loader'
import swal from 'sweetalert2'

import './MainPage.css'

import NavBar from './../NavBar/NavBar'
import Carousel from './Carousel/Carousel'


class MainPage extends Component {

    constructor() {
        super()

        this.state = {
            query: "",
            results: [],
            loading: true
        }
    }

    handleChange = input => {
        this.setState({ query: input });
    }

    handleSubmit() {

        let query = this.state.query

        query = query.replace(/[^A-Za-z_0-9\s]/g, "")

        query.length < 3 ? swal({
            position: 'top',
            text: 'Introduce al menos 3 letras para realizar la busqueda',
            showConfirmButton: true,
            timer: 1500
        }): this.props.history.push(`/results/${query}`)
        

        this.setState({ query: '' }) 

    }

    componentDidMount() {
        bookBuddiesApi.retrieveRandom()
        .then( (books) => {
            console.log(books.data.data)
            this.setState({ 
                results: books.data.data,
                loading: false
            })
        })
        
    }


    render() {

        let loading;
        if (this.state.loading) {
            loading = <Loader/>
        }

        return (
            
            <div>
                    
                
                <section className="hero is-medium" id="header">
                    <div className="hero-opacity">

                        <div className="hero-head heroMain">
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
                                                onSubmit={e => {
                                                    e.preventDefault()
                                                    this.handleSubmit()
                                                }}
                                            >
                                                <input
                                                    className="input is-large is-rounded has-text-centered"
                                                    type="text"
                                                    placeholder="Buscar en Book Buddies"
                                                    onChange={(e) => this.handleChange(e.target.value)}
                                                    required
                                                />
                                            </form>
                                            
                                        </div>
                                        {loading}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    
                {loading}
                               
                <Carousel onLanding={this.state.results}/>
            
                
                <Footer />
                
                
                
                
            
            </div>

        )
    }
}

export default withRouter(MainPage)