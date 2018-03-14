import React, { Component } from 'react';

import './Carousel.css'


// import { Link } from 'react-router-dom'


class Carousel extends Component {


    render() {
        return (
            <section>
                <div className="hero is-primary is-bold ">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Género de los libros
                            </h1>
                            <h3 className="subtitle">
                                <a href="#">Explorar más libros</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="carousel" data-flickity="{ 
                        &quot;wrapAround&quot;: true, 
                        &quot;bgLazyLoad&quot;: 1, 
                        &quot;autoPlay&quot;: 2200, 
                        &quot;pauseAutoPlayOnHover&quot;: true,
                        &quot;initialIndex&quot;: 0,
                        &quot;cellAlign&quot;: &quot;left&quot;,
                        &quot;pageDots&quot;: false
                    }">
                    <div className="carousel-cell ">
                        <div className="card">
                        <div className="card-image">
                            <figure className="image is-4by3">
                            <img src="../../images/BooksCoverDummy.jpg" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="card-content ">
                            <div className="media ">
                            <div className="has-text-centered">
                                <p className="title is-4">Nombre del Libro</p>
                                <p className="subtitle is-6">Nombre del Autor</p>
                            </div>
                            </div>
                            <div className="content has-text-left  is-dark">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Descripcion del libro, como mucho
                            3 frases??
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-cell ">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="../img/coffee-2306471_640-compressor.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content ">
                                <div className="media ">
                                    <div className="has-text-centered">
                                        <p className="title is-4">Nombre del Libro</p>
                                        <p className="subtitle is-6">Nombre del Autor</p>
                                    </div>
                                </div>
                                <div className="content has-text-justified  is-dark">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Descripcion del libro, como mucho
                                    3 frases??
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell ">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="../img/coffee-2306471_640-compressor.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content ">
                                <div className="media ">
                                    <div className="has-text-centered">
                                        <p className="title is-4">Nombre del Libro</p>
                                        <p className="subtitle is-6">Nombre del Autor</p>
                                    </div>
                                </div>
                                <div className="content has-text-justified  is-dark">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Descripcion del libro, como mucho
                                    3 frases??
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell ">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="../img/coffee-2306471_640-compressor.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content ">
                                <div className="media ">
                                    <div className="has-text-centered">
                                        <p className="title is-4">Nombre del Libro</p>
                                        <p className="subtitle is-6">Nombre del Autor</p>
                                    </div>
                                </div>
                                <div className="content has-text-justified  is-dark">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Descripcion del libro, como mucho
                                    3 frases??
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell ">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="../img/coffee-2306471_640-compressor.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content ">
                                <div className="media ">
                                    <div className="has-text-centered">
                                        <p className="title is-4">Nombre del Libro</p>
                                        <p className="subtitle is-6">Nombre del Autor</p>
                                    </div>
                                </div>
                                <div className="content has-text-justified  is-dark">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Descripcion del libro, como mucho
                                    3 frases??
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-cell ">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image is-4by3">
                                    <img src="../img/coffee-2306471_640-compressor.jpg" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="card-content ">
                                <div className="media ">
                                    <div className="has-text-centered">
                                        <p className="title is-4">Nombre del Libro</p>
                                        <p className="subtitle is-6">Nombre del Autor</p>
                                    </div>
                                </div>
                                <div className="content has-text-justified  is-dark">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Descripcion del libro, como mucho
                                    3 frases??
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>




        )
    }
}

export default Carousel