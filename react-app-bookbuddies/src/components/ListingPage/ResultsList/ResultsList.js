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

  /*   sendToList = (list) => {

        const userId = sessionStorage.getItem("userId")
        const bookId = 
        const bookTitle =  


        if ((list === "favoritos" && this.state.userFavorites.includes(bookId)) || (list === "wishlist" && this.state.userWished.includes(bookId))) {
            alert("Libro ya está en la lista")
        } else {

            booksBuddiesApi.addBookToList(bookId, userId, list, bookTitle)
                .then(() => this.retrieveUser())
        }

    }

    retrieveUser = () => {

        const userId = sessionStorage.getItem("userId")

        let favorites = []
        let wished = []
        let comments = []

        booksBuddiesApi.retrieveUser(userId)
            .then(_user => {


                _user.data.data.favorites.map(fav => {
                    return favorites.push(fav.id)
                })

                _user.data.data.wishlist.map(wish => {
                    return wished.push(wish.id)
                })

                _user.data.data.reviews.map(comment => {
                    return comments.push(comment.id)
                })
            }

            )

            .then(() =>

                this.setState({
                    userFavorites: favorites,
                    userWished: wished,
                    userComments: comments
                })
            )

    }
 */
    render() {

        let loading;
        if (this.state.loading) {
            loading = <Loader />
        }

        console.log(this.state.results)

        return (

            <div className="column is-10">
                {loading}

                {this.state.results.map(_results =>

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
                                            {/*  <nav className="level is-mobile">
                                                <div className="level-left listIcons">

                                                    <span className="level-item">
                                                        <span className="icon is-size-4">
                                                            <i className="fa fa-star" />
                                                        </span>
                                                    </span>
                                                    <span className="level-item">
                                                        <span className="icon is-size-4">
                                                            <i className="fa fa-heart" />
                                                        </span>
                                                    </span>
                                                </div>
                                            </nav>  */}
                                </div>
                            </div>
                        </div>
                    </a>
                )}

                <ScrollToTop showUnder={160}>
                    <a className="button is-primary is-rounded is-outlined"> &#x21E7; </a>
                </ScrollToTop>
            </div>
        )
    }
}

export default withRouter(ResultsList)