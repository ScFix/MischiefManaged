import React, { Component } from 'react';
import { Link } from 'react-router';

import MischiefTile from "../MischiefTile/MischiefTile"


class MischiefList extends Component {
    render() {
        return (
            <div id='MischiefList'>
                <MischiefTile />
            </div>
        );
    }
}

export default MischiefList;