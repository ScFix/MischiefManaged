import React, { Component } from 'react';
//import { Link } from 'react-router';

import { TripImageCard, CommentImageCard } from "../ImageCard/ImageCard";
import './CollectionView.css';

// these collSimpleCardCollectiona group of Items to be in the props
export class SimpleCardCollection extends Component {
    render() {
        let {items} = this.props;
        return (
            <div id='CollectionView'>
                {[...items].map((item, i) => <TripImageCard {... this.props} item={item} key={i} i={i} />)}
            </div>
        );
    }
}

export class AllPurposeCardCollection extends Component {
    render() {
        let {items, params} = this.props;
        return (
            <div id='CollectionView'>
                {[...items].map((item, i) => <CommentImageCard {... this.props} item={item} key={i} i={i} code={params.code} />)}
            </div>
        );
    }
} 
