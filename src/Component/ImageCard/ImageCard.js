import React, { Component } from 'react';
import { Link } from 'react-router';

import './ImageCard.css';

import heartGray from '../../heartGray.svg';
import heartRed from '../../heartRed.svg';

//need to just pass the imageurl to this in the props themselves
export class TripImageCard extends Component {

    // I don't particularly like do things this way but if I am planning to reuse the Collection componetn and the ImageCard Component this is going to be the way it has to be for now until i better understand what exactly is going on and what is the best way to approach it
    generatePath(path, item, location) {
        var prepath = location.pathname.lastIndexOf('/') === location.pathname.length - 1 ? location.pathname : location.pathname + '/';
        if (path != null)
            prepath += path;
        return prepath + item.code;
    }

    render() {
        let { path, item, location } = this.props;
        var localPath = this.generatePath(path, item, location);
        return (
            <div id='ImageCard' >
                <Link to={localPath}>
                    <div className='Card'>
                        <div className='CardInfo'>
                            <h3>{item.title}</h3>
                            <p>{item.location === undefined ? '' : item.location.name + ' ' + item.date}</p>

                        </div>
                        <div className='ImageContainer' style={{ "backgroundImage": "url(" + item.imageUrl + ")" }}>
                        </div>
                    </div>
                </Link >
            </div>
        )
    }
}

export class CommentImageCard extends Component {

    render() {
        let {item, i, code} = this.props;
        return (
            <div id='ImageCard'>
                <div className='Card'>
                    <div className='CardInfo'>
                        <h3>{item.title}</h3>
                    </div>
                    <div className='ImageContainer' style={{ "backgroundImage": "url(" + item.imageUrl + ")" }}>
                    </div>
                    <div className='ActionBar'>
                        <div className='Likes' onClick={this.props.increment.bind(null, i, code)}>
                            <img src={item.liked ? heartRed : heartGray} role='presentation' >
                            </img>
                            <span>{item.likes}</span>
                        </div>
                    </div>
                    <div className='CommentSection'>
                        <div className='PostedComments'>
                        </div>
                        <div className='AddComment'>
                            Add a Comment
                        </div>
                    </div>
                </div>
            </div>);
    }
}