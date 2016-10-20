import React, { Component } from 'react';
//import { Link } from 'react-router';

import ImageCard from "../ImageCard/ImageCard";


class CollectionView extends Component {
    render() {
        let {items} = this.props;
        return (
            <div id='CollectionView'>
                {[...items].map((item, i) => <ImageCard {... this.props} item={item} key={i} i={i} />)}
            </div>
        );
    }
}

export default CollectionView;