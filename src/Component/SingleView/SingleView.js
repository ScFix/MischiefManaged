import React, { Component } from 'react';
import { Link } from 'react-router';

import ImageCard from "../ImageCard/ImageCard"

import './SingleView.css';

class SingleView extends Component {
    render() {
        return (
            <div id='SingleView'>
                <ImageCard />
            </div>
        );
    }
}

export default SingleView;