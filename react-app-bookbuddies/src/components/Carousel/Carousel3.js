import React, { Component } from 'react';

import Slider from 'react-slick'

import './Carousel3.css'


// import { Link } from 'react-router-dom'


class Carousel3 extends Component {

 

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 5,
            slidesToScroll: 5,
            initialSlide: 0,
            nextArrow: 0,
            prevArrow: 0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    
                }
            }, {
                breakpoint: 869,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 0
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 0
                }
                }, {
                    breakpoint: 550,
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
                                Más valorados
                            </h1>
                            
                        </div>
                    </div>
                



                <Slider {...settings} >
                    <div>
                        
                        <figure className="image is-square">
                            <img src="http://books.google.com/books/content?id=rZU4AwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE72wXGekkA-RsZi1Hbr6VlnfKfT_cj0cl3zsEvlycxwWtc8R12dwHI16SLruBNq090usIz7TtBbrepFGHd7l6mwuzkj0MjwE-xcmmCD38XNqSNk8obaEGH-GD5Lim7ZfTBS8zRzo&source=gbs_api" alt="Book Cover" />
                        </figure>
                    
                    </div>
                    <div>
                        <figure className="image is-square">
                            <img src="http://books.google.com/books/content?id=tdIyo1Z5TSMC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE716DnMqupYiL-rER6VKlpyBxKk5NlKW9pIz1MnQ1HI1hIK9iZ8IELjsOi1VKG19GkI5Lp8qRi4zkuy5sBpuVL5ktONFNhg1vnNj7MgLrRIptvX-OHpTIe1tQUvt6VYV1XLxjHme&source=gbs_api" alt="Book Cover" />
                        </figure>
                    </div>

                    <div>
                        <figure className="image is-square">
                            <img src="http://books.google.com/books/content?id=DYmUGGwZ8_oC&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73SoHZ3bhlPXiH6ppOu3eyNPT3s0_utJXiA68gmQHwHTj5UWeOnXLhW8NNODdzSHjKYd5lDSv8oBqqebIZpFlL-JSzhGrqObNCMHRmISZxJrkQFj7683GGTRzFKRRxmT35tdecg&source=gbs_api" alt="Book Cover" />
                        </figure>
                    </div>

                    <div>
                        <figure className="image is-square">
                            <img src="http://books.google.com/books/content?id=iKo5DwAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE71t0Ob4wEmboQ89SYPPxuMY8TZIBxZ1Xt_249kSHGNtvEYdxWPTfZLibRExjnVSYf4P29xZwqhtwcO9Ps4d6cF7zU_9OBkj3bukSBHP3n-8MUFBdQOsskPGs5ieGRzFfZOvbD3-&source=gbs_api" alt="Book Cover" />
                        </figure>
                    </div>

                    <div>
                        <figure className="image is-square">
                            <img src="http://books.google.com/books/content?id=GYEzQAM59SAC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE722WRRfEwZsjji8Yf3Dg8yH_j4O86gE9wTVBwcXHdRYVaCfICdemBbiyjSikvqd18JM1CCjczTy4SY-mdy07GtsJ-S-Zv2R-qc8IbkcBsCTinzP2nv1-taij6akYcJmajY97Rgr&source=gbs_api" alt="Book Cover" />
                        </figure>
                    </div>

                    <div>
                        <figure className="image is-square">
                            <img src="http://books.google.com/books/content?id=zfY4AwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72eIze2fiqeSL9EXCpwHbgnEETzWQlYFbFCo-PLyKSyUVzB_-uhozGn2piHo_Sbqw4FXe1U5FyjJXpeYbJdZqM02pr_oivSykoEv4M38hLUjZguhBrM-wXbIH8IQ9su3F622t2x&source=gbs_api" alt="Book Cover" />
                        </figure>
                    </div>

                    <div>
                        <figure className="image is-square">
                            <img src="http://books.google.com/books/content?id=zfY4AwAAQBAJ&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE72eIze2fiqeSL9EXCpwHbgnEETzWQlYFbFCo-PLyKSyUVzB_-uhozGn2piHo_Sbqw4FXe1U5FyjJXpeYbJdZqM02pr_oivSykoEv4M38hLUjZguhBrM-wXbIH8IQ9su3F622t2x&source=gbs_api" alt="Book Cover" />
                        </figure>
                    </div>



                </Slider>

                </section>
            </div>
        );
    }
}

export default Carousel3