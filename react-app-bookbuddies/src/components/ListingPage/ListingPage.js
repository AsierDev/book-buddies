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
         
        if(category)
            booksBuddiesApi.categorySearch(category)
                .then(_category =>
                    this.setState({
                        results: _category
                    }))        
    }


  
    
    componentDidMount() {

        this.searchQuery(this.props.match.params.query)
        this.searchCategory(this.props.match.params.category)
      
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
                   
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Results for {this.props.match.params.query || this.props.match.params.category} 

                            </h1>
                        </div>
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="columns">

                        <Aside />

                        <ResultsList onSearch={this.state.results} />

                    </div>
                </section>


            </div>


        )
    }
}

export default ListingPage





