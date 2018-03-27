import React, { Component } from 'react';
import './Footer.css'


class Footer extends Component {

  


    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <div>
                            <span className="is-size-5 has-text-light"> Made by Asier. </span>
                            
                            <br /> <br />

                            <span className="icon is-size-4 socialLinks">
                                <a href="https://github.com/AsierDev" target="_blank" rel="noopener noreferrer" className="fa fa-github" alt="social icons"> </a>
                            </span>

                            <span className="icon is-size-4 socialLinks">
                                <a href="https://www.linkedin.com/in/asier-p/" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin" alt="social icons"> </a>
                            </span>

                            <span className="icon is-size-4 socialLinks">
                                <a href="https://twitter.com/AsierDev" target="_blank" rel="noopener noreferrer" className="fa fa-twitter" alt="social icons"> </a>
                            </span>



                        </div>
                    </div>
                </div>
            </footer>

        )
    }
}

export default Footer