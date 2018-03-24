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

    searchQuery = query => {

        if (query)
            booksBuddiesApi.generalSearch(query)
                .then(_query =>
                    this.setState({
                        results: _query
                    }))
    }

    searchCategory = category => {

        if (category)
            booksBuddiesApi.categorySearch(category)
                .then(_category =>
                    this.setState({
                        results: _category
                    }))
    }

    componentDidMount() {

        this.searchQuery(this.props.match.params.query)
        this.searchCategory(this.props.match.params.category)
        console.log(sessionStorage)

    }

    componentWillReceiveProps(nextProps) {

        console.log(nextProps)

        this.searchQuery(nextProps.match.params.query)

        this.searchCategory(nextProps.match.params.category)

    }

    render() {

        return (

            <div>

                <section className="hero is-dark">

                    <div className="hero-head">

                        <NavBar />

                    </div>

                    <div className="hero-body columns is-mobile">
                        <div className="control column is-2 is-offset-1 is-narrow-mobile" style={{ width: '30%' }}>
                            

                            <input className="input is-primary" type="text" placeholder="Primary input" />
                       
                        </div>

                        <div className="container has-text-centered column">
                            <h4 className="title">
                                Results for  <br /> {this.props.match.params.query || this.props.match.params.category}
                            </h4>
                        </div>

                        <div className="column is-2 is-offset-1" style={{ width: '20%' }}>

                            <a className="button is-primary">Atrás</a>

                        </div>

                    </div>

                    <div className="hero-foot columns">

                    </div>

                </section>

                <section className="container-fluid">
                    <div className="columns">

                        {/* <Aside /> */}

                        <ResultsList onSearch={this.state.results} />

                    </div>
                </section>

            </div>


        )
    }
}

export default ListingPage





