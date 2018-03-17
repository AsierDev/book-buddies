import React, { Component } from 'react';

import booksBuddiesApi from './../../api/bookBuddiesApi'

import { Link } from 'react-router-dom';


class BookDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: []
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

        const {results} = this.state
        console.log(results)
        
    
        return (
            <section className="hero is-fullheight is-dark is-bold">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-6 is-offset-3 has-text-left">
                                <h1 id="title" className="title ">
                                    {results.title}
                                </h1>
                                <div id="container" className="box">
                                    <label className="label">Email</label>
                                    <p className="control">
                                        <input className="input" type="text" placeholder="johndoe@example.org" required />
                                    </p>
                                    <label className="label">Password</label>
                                    <figure className="image ">
                                        <img src={results.thumbnail} className="bookCovers image is-square" alt="logo" />
                                    </figure>
                                    <hr />
                                    <p className="control">
                                        <Link to="/browse"> <button className="button is-primary">Login</button> </Link>
                                        <button id="cancel" className="button is-danger">Cancel</button>
                                    </p>
                                </div>
                                <p className="has-text-centered">
                                    <Link to="/register" href="#">{results.description}
                                    </Link>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        )
    }
}

export default BookDetails