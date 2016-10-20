import React, { Component } from 'react';
import { Link } from 'react-router';

import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div id='Navigation'>
                <ul>
                    <li> <Link to="/"><div className='NavigationContent'>Home</div></Link></li>
                    <li> <Link to="/Event"><div className='NavigationContent'>Event</div></Link></li>
                    <li> <Link to="/Story"><div className='NavigationContent'>Story</div></Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;