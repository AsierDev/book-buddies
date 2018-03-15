import React, { Component } from 'react';

//import booksBuddiesApi from './../../api/bookBuddiesApi'

// import './ResultsList.css'

// import { Link } from 'react-router-dom'


class ResultsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
           // results: []
        }
    }

  /*   search = (query) => {
        console.log("heyhey"+query)
        booksBuddiesApi.generalSearch(query)
            .then(_query => this.setState({ results: _query }))
    }

    componentDidMount() {
        this.search(this.props.match.params.query)
    }
 */

    render() {
        console.log(this.props.onSearch.data)
        return (

            <div className="column is-9">

                <div className="box content secondColumn">
                    <div className="notification is-dark">
                        <div className="box">
                            <article className="media">
                                <div className="media-left">
                                    <figure className="image is-128x128">
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt="logo" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <p>
                                            <strong>John Smith</strong>
                                            <small>@johnsmith</small>
                                            <small>31m</small>
                                            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit
                                            amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                                </p>
                                    </div>
                                    <nav className="level is-mobile">
                                        <div className="level-left">

                                            <a className="level-item">
                                                <span className="icon is-small">
                                                    <i className="fa fa-star" />
                                                </span>
                                            </a>
                                            <a className="level-item">
                                                <span className="icon is-small">
                                                    <i className="fa fa-heart" />
                                                </span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

                


        )
    }
}

export default ResultsList