import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import NavBar from './../NavBar/NavBar'
import booksBuddiesApi from './../../api/bookBuddiesApi'
import Footer from './../Footer/Footer'
import './UserArea.css'



class UserArea extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: undefined
        }
    }

    componentWillMount() {
        const userId = sessionStorage.getItem("userId")
        booksBuddiesApi.retrieveUser(userId)
            .then(user =>

                 this.setState({
                    user: user.data.data
                }) 
            )
    }

    goToBook(id) {

        this.props.history.push(`/book/${id}`)
    }

    render() {

        const {user} = this.state
        console.log(user)
        return (
            <div>

                <section className="hero is-dark">
                    <NavBar />
                    <div className="hero-body book-header">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                Área de usuario
                            </h1>
                        </div>
                    </div>
                </section>

                 {this.state.user ?    
                <section className="container">
                    <div className="box userBox">
                        <div className="columns is-centered">
                            <div className="column is-one-fifth">
                                <figure className="userPic">

                                    <img className="image is-128x128" src="https://bulma.io/images/placeholders/128x128.png" alt="Profile" />

                                </figure>
                            </div>
                            <div className="column is-three-fifths">
                                <div className="content">
                                    <div className="has-text-centered-mobile">
                                        <h2 className="nameUser">{user.username}</h2>
                                        <br />
                                    </div>
                                    <h6 className="has-text-weight-semibold">Un poco sobre mi</h6>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
                                        non massa sem. Etiam finibus odio quis feugiat facilisis.
                                    </p>
                                </div>
                            </div>
                            <div className=" column is-one-fifth">
                                <div className="columns is-mobile">

                                    <div className="column  has-text-centered hightlights">
                                        <p className="is-size-2-desktop is-size-3-tablet is-size-4-mobile">
                                        {user.favorites.length}
                                        </p>
                                        <p>Favoritos</p>
                                    </div>
                                    <div className="column has-text-centered hightlights">
                                        <p className="is-size-2-desktop is-size-3-tablet is-size-4-mobile">
                                        {user.reviews.length}
                                        </p>
                                        <p>Opiniones</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <hr />
                        <footer className="columns ">

                            <div className=" column">
                                <div className="content">
                                    <h4>Favoritos</h4><hr />
                                    <div className="panel list-group">
                                            {
                                                this.state.user.favorites ? this.state.user.favorites.map(favorite =>

                                                    <a 
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        this.goToBook(favorite.id)

                                                    }}
                                                    className="panel-block list-group-item " 
                                                    key={favorite._id}
                                                    >
                                                        {favorite.title}
                                                    </a>
                                                ) : "Este usuario no ha guardado libros en favoritos todavia"
                                            }
                                    </div>
                                </div>

                            </div>

                            <div className=" column">
                                <div className="content">
                                    <h4>Comentarios</h4><hr />
                                    <div className="panel list-group">
                                            {
                                                this.state.user.reviews ? this.state.user.reviews.map(comment => 
                                                    
                                                <a
                                                onClick={e => {
                                                    e.preventDefault()
                                                    this.goToBook(comment.id)

                                                }} 
                                                className="panel-block list-group-item " 
                                                key={comment._id}
                                                >
                                                    {comment.title} 
                                                </a>
                                                ) : "Este usuario no ha realizado comentarios todavia" 
                                            }
                                        
                                    </div>
                                </div>

                            </div>

                            <div className=" column">
                                <div className="content">
                                    <h4>Wishlist</h4><hr />
                                    <div className="panel list-group">
                                            {
                                                this.state.user.wishlist ? this.state.user.wishlist.map(wish =>

                                                    <a 
                                                    className="panel-block list-group-item " 
                                                    key={wish._id}
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        this.goToBook(wish.id)

                                                    }}
                                                    >
                                                        {wish.title}
                                                    </a>
                                                ) : "Este usuario no ha guardado libros en favoritos todavia"
                                            }
                                    </div>
                                </div>

                            </div>

                        </footer>
                    </div>
                </section>
                : null}
                <Footer />
            </div>
        )
    }
}

export default withRouter(UserArea)