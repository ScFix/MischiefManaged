import React, { Component } from 'react';
//import { Link } from 'react-router';

import { SimpleCardCollection, AllPurposeCardCollection } from '../CollectionView/CollectionView';




export class PostsView extends Component {
    render() {
        let {posts, params} = this.props;

        return (
            <div id='PostsView' >
                <SimpleCardCollection {... this.props} items={posts[params.code]} />
            </div>
        );
    }
}
//<CollectionView {... this.props} items={this.props.posts[this.props.i]} />

export class TripsView extends Component {
    render() {
        return (
            <div id='TripsView' >
                <SimpleCardCollection {... this.props} path='trips/' items={this.props.trips} />
            </div>
        );
    }
}

