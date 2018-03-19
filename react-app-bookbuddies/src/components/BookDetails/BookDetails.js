import React, { Component } from 'react';
import booksBuddiesApi from './../../api/bookBuddiesApi'
import { Link } from 'react-router-dom';

import NavBar from './../NavBar/NavBar'
import './bookPreview.css'


class BookDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: undefined
        }
    }

    componentWillMount() {

        console.log("did mount")
        this.retrieveBook(this.props.match.params.id)


    }

    retrieveBook = id => {
        console.log("call api")
        if (id)
            booksBuddiesApi.retrieveBook(id)
                .then(_id =>
                    this.setState({
                        results: _id.data.data
                    })
                )
    }


    render() {

        const { results } = this.state
        console.log(results)


        return (
            results ? 
            <div>
                <section className="hero is-primary">
                    <NavBar />
                    <div className="hero-body book-header">
                        <div className="container has-text-centered">
                            <h1 className="title">
                                {results.title}
                            </h1>
                            <h2 className="subtitle">
                                    {results.authors.length > 1 ? `${results.authors[0]} & ${results.authors[1]}` : results.authors[0] }
                            </h2>
                        </div>
                    </div>
                </section>
            

            <main className="container ">
                <div className="box main-book">
                    <section className="columns is-centered">
                        <div className="column is-one-quarter">
                            <figure className="profilePic image">
                                <img src={results.thumbnail} />
                            </figure>
                        </div>
                        <div className="column is-half">
                            <div className="content details">
                                <div className="basic-details">
                                        <h2>{results.title}</h2>
                                    <h5 className="is-italic">
                                            <em> {results.authors.length > 1 ? `${results.authors[0]} & ${results.authors[1]}` : results.authors[0] }</em>
                                    </h5>
                                    <br />
                                    <p>
                                            <span>ISBN: </span> {results.industryIdentifiers[0].identifier}
                                        <br />
                                            <span>Páginas:</span> {results.pageCount}
                                        <br />
                                            <span>Fecha de publicacion:</span> {results.publishedDate}
                                        <br />
                                        <br />
                                        <span className="tag is-link">{results.categories[0]}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="is-one-quarter">
                            <div className="details">
                                <div className="has-text-centered">
                                        
                                    <p className="is-size-2-desktop is-size-3-tablet is-size-4-mobile">{results.averageRating ? results.averageRating*2 : "Sin votos"}</p>    

                                    <p>Rating</p>
                                </div>
                                <br />
                                <div>
                                    <div className="has-text-centered">
                                        <a className="button is-primary is-outlined">Añadir a Favoritos</a>
                                    </div>
                                    <br />
                                    <div className="has-text-centered">
                                        <a className="button is-primary is-outlined">Añadir a Wishlist</a>
                                    </div>
                                    <br />
                                    <div className="has-text-centered">
                                        <a className="button is-primary is-outlined">Añadir Comentario</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="box rating">
                            <form name="opinion">
                                <div className="field opinion-scale">
                                    <ul>
                                        <li>
                                            <input type="radio" id="opinion-1" name="opinion-scale" defaultValue={1} />
                                            <label className="label is-large" htmlFor="opinion-1">1</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="opinion-2" name="opinion-scale" defaultValue={2} />
                                            <label className="label is-large" htmlFor="opinion-2">2</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="opinion-3" name="opinion-scale" defaultValue={3} />
                                            <label className="label is-large" htmlFor="opinion-3">3</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="opinion-4" name="opinion-scale" defaultValue={4} />
                                            <label className="label is-large" htmlFor="opinion-4">4</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="opinion-5" name="opinion-scale" defaultValue={5} />
                                            <label className="label is-large" htmlFor="opinion-5">5</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="opinion-6" name="opinion-scale" defaultValue={6} />
                                            <label className="label is-large" htmlFor="opinion-6">6</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="opinion-7" name="opinion-scale" defaultValue={7} />
                                            <label className="label is-large" htmlFor="opinion-7">7</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="opinion-8" name="opinion-scale" defaultValue={8} />
                                            <label className="label is-large" htmlFor="opinion-8">8</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="opinion-9" name="opinion-scale" defaultValue={9} />
                                            <label className="label is-large" htmlFor="opinion-9">9</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="opinion-10" name="opinion-scale" defaultValue={10} />
                                            <label className="label is-large" htmlFor="opinion-10">10</label>
                                        </li>
                                    </ul>
                                    <button className="button">Submit</button>
                                </div>
                            </form>
                        </div>
                    </section>
                        
                    <section className="box">
                        <section className="hero is-dark">
                            <div className="hero-body comentarios">
                                <div className="container">
                                    <h2 className="subtitle">
                                        Sipnosis de {results.title}
                                    </h2>
                                </div>
                            </div>
                        </section>
                        <section className="message is-dark">
                            <div className="message-body">
                                    <p> {results.description ? results.description : "Este libro no cuenta con una descripción todavia"}</p>
                            </div>
                        </section>
                    </section>
                    <section>
                        <article className="hero is-primary">
                            <div className="hero-body comentarios">
                                <div className="container ">
                                    <h2 className="subtitle">
                                        Comentarios
            </h2>
                                </div>
                            </div>
                        </article>
                        <article className="box content">
                            <div className="content-body">
                                <div className="box">
                                    <h3> Titular Comentario</h3>
                                    <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sunt sed reiciendis dolorum! Eveniet cum vel, atque quasi ratione ex sequi. Aliquam explicabo esse autem voluptates totam fugit, a soluta?
            </p>
                                    <p>
                                        Nombre usuario
            </p>
                                </div>
                            </div>
                        </article>
                    </section>
                </div>
            </main>

        </div>
        : null
        )
    }
}

export default BookDetails