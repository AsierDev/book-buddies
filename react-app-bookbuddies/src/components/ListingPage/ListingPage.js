import React, { Component } from 'react';

import NavBar from './../NavBar/NavBar'
import Aside from './../Aside/Aside'
import ResultsList from './../ResultsList/ResultsList'

class ListingPage extends Component {


    render() {
        return (

            <div>
            
            <section className="hero is-dark">
                {/* Hero head: will stick at the top */}
                <div className="hero-head">
                    
                    <NavBar />

                </div>
                {/* Hero content: will be in the middle */}
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title">
                            Género de libros listados
                         </h1>
                    </div>
                </div>
            </section>

            <section className="container-fluid">
                <div className="columns">
                   
                    <Aside />

                    <ResultsList />

                </div>
            </section>


        </div>


        )
    }
}

export default ListingPage