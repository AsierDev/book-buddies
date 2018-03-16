import React, { Component } from 'react';

//import booksBuddiesApi from './../../api/bookBuddiesApi'

// import './ResultsList.css'

// import { Link } from 'react-router-dom'


class ResultsList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            results: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.onSearch.data.data)
        this.setState({ results: nextProps.onSearch.data.data})
        
    }

    render() {
      
        
        console.log("renderizate")
        return (
            
            <div className="column is-9">

                {this.state.results.map( _results => 
                <div className="box content secondColumn" key={_results.id}>
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
                                                    {_results.authors[0] }</strong>
                                            <br />
                                            
                                        </p>
                                        <p className="">     
                                                <span className="">{_results.description} </span>
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

                 ) }           
            </div>

                


        )
    }
}

export default ResultsList