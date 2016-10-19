import React, { Component } from 'react';
//import { Link } from 'react-router';

import ImageCard from "../ImageCard/ImageCard";


class CollectionView extends Component {
    render() {
        return (
            <div id='CollectionView'>
                { [... this.props.trips].map((trip, i) => <ImageCard {... this.props} key={i} i={i} />) }
            </div>
        );
    }
}

export default CollectionView;