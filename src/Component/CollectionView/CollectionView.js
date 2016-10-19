import React, { Component } from 'react';
//import { Link } from 'react-router';

import ImageCard from "../ImageCard/ImageCard";


class CollectionView extends Component {
    render() {
        return (
            <div id='CollectionView'>
                { JSON.stringify(this.props.trips,null,' ')}
            </div>
        );
    }
}

export default CollectionView;