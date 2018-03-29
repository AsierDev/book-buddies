import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import ScrollToTop from 'react-scroll-up'
import Loader from './../../Loader/Loader'


import './ResultsList.css'

class ResultsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: [],
            userFavorites: [],
            userWished: [],
            userComments: [],
            loading: true
        }
    }

    componentWillReceiveProps(nextProps) {

        this.setState({ 
            results: nextProps.onSearch.data.data,
            loading: false 
        })

    }

    selectedBook = bookId => {

        this.props.history.push(`/book/${bookId}`)

    }

 
    render() {

        let loading;
        if (this.state.loading) {
            loading = <Loader />
        }

        return (

            <div className="column is-10">
                {loading}

                {
                    this.state.results.length < 2 ?
                        <div className="notification  noResults has-text-centered">
                           
                            <h2 className="is-size-3 "> No hay resultados para esta busqueda </h2>

                        </div>

                    
             
                    :
                


                this.state.results.map(_results =>

                    <a key={_results.id} 
                    onClick={bookId => this.selectedBook(_results.id) }>

                        <div className="box content secondColumn" >
                            
                            <div className="notification is-dark">
                                <div className="box">
                                    
                                    <article className="columns">
                                        <div className="column is-4 ">
                                            <figure className="image imageResults">
                                                <img src={_results.thumbnail} className="bookCovers image  " alt="logo" />
                                            </figure>
                                        </div>

                                        <div className="column ">
                                            <div className="content">
                                                <p>
                                                    <strong className="is-size-4">{_results.title}</strong>
                                                    <br />
                                                    <strong className="is-size-5 has-text-weight-normal has-text-grey-dark">
                                                        {_results.authors.length < 2 ? _results.authors[0] : `${_results.authors[0]} & ${_results.authors[1]}`}</strong>
                                                    <br />

                                                </p>
                                                <p className="">
                                                    <span className="">{_results.description} </span>
                                                </p>
                                            </div>
                                    
                                        </div>
                                    </article>
                                            
                                </div>
                            </div>
                        </div>
                    </a>
                )} 

                <ScrollToTop showUnder={160}>
                    <a className="button is-medium is-primary is-rounded "> &#x21E7; </a>
                </ScrollToTop>
            </div>
        )
    }
}

export default withRouter(ResultsList)