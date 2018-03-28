import React, { Component } from 'react';
import { withRouter } from "react-router-dom"

import './Loader.css'


class Loader extends Component {

    render() {
        return (
           
            <div className="loaderContainer">
                <div className="byt-spinner">
                    <div className="byt-inner">
                    </div>
                </div>
            </div>



        )
    }
}

export default Loader