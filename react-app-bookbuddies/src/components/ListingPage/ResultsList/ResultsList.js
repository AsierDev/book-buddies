import React, { Component } from 'react';
import { withRouter } from "react-router-dom"

import './ResultsList.css'

class ResultsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }

    componentWillReceiveProps(nextProps) {

        this.setState({ results: nextProps.onSearch.data.data })

    }

    selectedBook = bookId => {

        this.props.history.push(`/book/${bookId}`)

    }

    render() {

        console.log(this.state.results)

        return (

            <div className="column is-10">

                {this.state.results.map(_results =>

                    <a key={_results.id} 
                    onClick={bookId => this.selectedBook(_results.id) }>

                        <div className="box content secondColumn" >
                            <div className="notification is-dark">
                                <div className="box">
                                    <article className="columns">
                                        <div className="column is ">
                                            <figure className="image imageResults">
                                                <img src={_results.thumbnail} className="bookCovers image  " alt="logo" />
                                            </figure>
                                        </div>

                                        <div className="column is-three-quarters">
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
                                           {/*  <nav className="level is-mobile">
                                                <div className="level-item">

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
                                            </nav> */}
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