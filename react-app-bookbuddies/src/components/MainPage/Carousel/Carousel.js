import React, { Component } from 'react';

import { withRouter } from "react-router-dom"

import Slider from 'react-slick'

import './Carousel.css'



class Carousel extends Component {

    constructor() {
        super()

        this.state = {
            results: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.onLanding)

        this.setState ({
            results: nextProps.onLanding
        })

    }

    showBook(bookId) {

        this.props.history.push(`/book/${bookId}`)
    }
 

    render() {

        console.log("render")

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 6,
            slidesToScroll: 6,
            initialSlide: 0,
            nextArrow: 0,
            prevArrow: 0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    
                }
            }, {
                breakpoint: 869,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    initialSlide: 0
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0
                }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 0
                        
                    }
                }, {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1

                    }
                }]
        };


        return (
            <div>

                <section className="hero is-primary">
                    <div className="hero-body" id="title">
                        <div className="container has-text-left">
                            <h1 className="title" >
                                Recomendaciones de hoy
                            </h1>
                            
                        </div>
                    </div>
                
                <Slider {...settings} >

                {this.state.results.map(_results => 
                
                    <div key={_results.id}>
                        
                        <figure className="image is-square"  onClick={bookId => this.showBook(_results.id) }>
                            <img src={_results.thumbnail} alt="Book Cover" />
                        </figure>
                    
                    </div>
                
                )}
                    
                </Slider>

                </section>
            </div>
        );
    }
}

export default withRouter(Carousel)