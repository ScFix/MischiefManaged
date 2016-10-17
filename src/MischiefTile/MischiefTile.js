import React, { Component } from 'react';
import { Link } from 'react-router';

import ImageCard from "../ImageCard/ImageCard"

import './MischiefTile.css';

class MischiefTile extends Component {
    render() {
        return (
            <div id='MischiefTile'>
                <ImageCard />
            </div>
        );
    }
}

export default MischiefTile;