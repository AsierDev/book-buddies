import React, { Component } from 'react';


import booksBuddiesApi from './../../api/bookBuddiesApi'


import NavBar from './../NavBar/NavBar'
import Aside from './../Aside/Aside'
import ResultsList from './../ResultsList/ResultsList'

class ListingPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }

    search = (query) => {
        console.log("heyhey" + query)
        booksBuddiesApi.generalSearch(query)
            .then(_query => this.setState({ results: _query }))
    }

    componentDidMount() {
        this.search(this.props.match.params.query)
    }

 


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

                        <ResultsList onSearch={this.state.results}/>

                </div>
            </section>


        </div>


        )
    }
}

export default ListingPage