
import React, { Component } from 'react';

import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';


const width = '100%', height = '250px';
const Container = styled.div`
  border: 1px solid red;
  position: relative;
  overflow: hidden;
  width: ${width};
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;
const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 3em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
`;
const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
    <Container>
        <Children>
            {children}
            <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
            <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
        </Children>
        <Dots>
            {Array(...Array(total)).map((val, index) =>
                <Dot key={index} onClick={handleClick} data-position={index}>
                    {index === position ? '● ' : '○ '}
                </Dot>
            )}
        </Dots>
    </Container>
);
const Carousel = makeCarousel(CarouselUI);

class Carousel2 extends Component {

    

    render() {

        return (

            <Carousel defaultWait={0}>
            <Slide right>
            <div className="columns">
                <div className="column">
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
                            <div className="content has-text-justified  is-dark">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Descripcion del libro, como mucho
                                3 frases??
                                </div>
                        </div>
                    </div>
       
                </div>
                <div className="column">
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
                            <div className="content has-text-justified  is-dark">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Descripcion del libro, como mucho
                                3 frases??
                            </div>
                        </div>
                    </div>

                </div>
                <div className="column">
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
                            <div className="content has-text-justified  is-dark">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Descripcion del libro, como mucho
                                3 frases??
                            </div>
                        </div>
                    </div>

                </div>
            </div>    
            </Slide>
            {/* <Slide right>
                <div>
                    <h1>Slide 2</h1>
                    <p>Slide Description</p>
                </div>
            </Slide>
            <Slide right>
                <div>
                    <h1>Slide 3</h1>
                    <p>Slide Description</p>
                </div>
            </Slide> */}
        </Carousel >
        )    

    }
}


export default Carousel2
