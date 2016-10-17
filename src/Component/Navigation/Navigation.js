import React, { Component } from 'react';
import { Link } from 'react-router';

import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div id='Navigation'>
                <ul>
                    <li> <Link to="/"><div>Home</div></Link></li>
                    <li> <Link to="/Event"><div>Event</div></Link></li>
                    <li> <Link to="/Story"><div>Story</div></Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;