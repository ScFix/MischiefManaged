import React, { Component } from 'react';
import { Link } from 'react-router';

import './Navigation.css';
import home from '../../home.svg';
import about from '../../about.svg';
import event from '../../event.svg';

class Navigation extends Component {
    render() {
        return (
            <div id='Navigation'>
                <ul>
                    <li> <Link to="/"><div className='NavigationContent'><img src={home} role='presentation'></img></div></Link></li>
                    <li> <Link to="/Event"><div className='NavigationContent'><img src={event} role='presentation'></img></div></Link></li>
                    <li> <Link to="/About"><div className='NavigationContent'><img src={about} role='presentation'></img></div></Link></li>
                </ul>
            </div>
        );
    }
}

export default Navigation;