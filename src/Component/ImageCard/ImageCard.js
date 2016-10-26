import React, { Component } from 'react';
import { Link } from 'react-router';

import './ImageCard.css';
//need to just pass the imageurl to this in the props themselves
class ImageCard extends Component {

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
                            <p>{item.location === undefined ? '' : item.location.name}</p>
                        </div>
                        <div className='ImageContainer' style={{ "background-image": "url(" + item.imageUrl + ")" }}>
                        </div>
                    </div>
                </Link >
            </div>
        )
    }
}

export default ImageCard;