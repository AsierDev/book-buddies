import React, { Component } from 'react';


import booksBuddiesApi from './../../api/bookBuddiesApi'


import NavBar from './../NavBar/NavBar'
import Aside from './../Aside/Aside'
import ResultsList from './../ResultsList/ResultsList'

class ListingPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            category: ""
        }
    }

    search = (query, category) => {

        if (query && !category)
            booksBuddiesApi.generalSearch(query)
                .then(_query =>
                    this.setState({
                        results: _query
            }))
        else if (!query && category)
            booksBuddiesApi.categorySearch(category)
                .then(_category =>
                    this.setState({
                        results: _category
                    }))        
    }

    componentDidMount() {
        this.search(this.props.match.params.query)

    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
        

    }


    setCategory = (newCategory) => {
        this.setState({
            category: newCategory
        })
    }




    render() {

        console.log(this.props)
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
                                Resultados de {this.props.match.params.query}

                            </h1>
                        </div>
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="columns">

                        <Aside sendCategory={this.setCategory} />

                        <ResultsList onSearch={this.state.results} />

                    </div>
                </section>


            </div>


        )
    }
}

export default ListingPage