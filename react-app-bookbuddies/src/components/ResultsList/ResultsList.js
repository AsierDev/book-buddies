import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
// import booksBuddiesApi from './../../api/bookBuddiesApi'

import './ResultsList.css'


class ResultsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }



    componentWillReceiveProps(nextProps) {

        console.log(nextProps.onSearch.data.data)

        this.setState({ results: nextProps.onSearch.data.data })

    }

    selectedBook = bookId => {
        console.log(bookId)

        this.props.history.push(`/book/${bookId}`)

      /*   booksBuddiesApi.retrieveBook(bookId)
            .then(_bookId =>  this.props.history.push(`/book/${bookId}`))                 */
    }


    render() {


        console.log("renderizate")
        return (

            <div className="column is-9">

                {this.state.results.map(_results =>

                    <a key={_results.id} 
                    onClick={bookId => this.selectedBook(_results.id) }>

                        <div className="box content secondColumn" >
                            <div className="notification is-dark">
                                <div className="box">
                                    <article className="media">
                                        <div className="media-left">
                                            <figure className="image ">
                                                <img src={_results.thumbnail} className="bookCovers image " alt="logo" />
                                            </figure>
                                        </div>

                                        <div className="media-content">
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
                                            <nav className="level is-mobile">
                                                <div className="level-left">

                                                    <span className="level-item">
                                                        <span className="icon is-small">
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </span>
                                                    <span className="level-item">
                                                        <span className="icon is-small">
                                                            <i className="fa fa-heart" />
                                                        </span>
                                                    </span>
                                                </div>
                                            </nav>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </a>
                )}
            </div>




        )
    }
}

export default withRouter(ResultsList)