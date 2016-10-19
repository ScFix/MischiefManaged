import React, { Component } from 'react';
//import { Link } from 'react-router';

import './ImageCard.css';

class ImageCard extends Component {
    render() {
        let { i, trips } = this.props;
        return (
            <div id='ImageCard'>
                <img src={trips[i].imageUrl} ></img>
                <p>{trips[i].location}</p>
            </div>
        );
    }
}

export default ImageCard;