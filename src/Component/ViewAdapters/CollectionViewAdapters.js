import React, { Component } from 'react';
//import { Link } from 'react-router';

import CollectionView from '../CollectionView/CollectionView';




export class PostsView extends Component {
    render() {
        let {posts, params} = this.props;
        
        return (
            <div id='PostsView' >
                <CollectionView {... this.props} items={posts[params.code]} />
            </div>
        );
    }
}
//<CollectionView {... this.props} items={this.props.posts[this.props.i]} />

 export class TripsView extends Component {
    render() {
        return (
            <div id='TripsView' >
                <CollectionView {... this.props} path='trips/' items={this.props.trips} />
            </div>
        );
    }
}

