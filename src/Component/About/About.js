import React, { Component } from 'react';
import { Link } from 'react-router';

class About extends Component {
    render() {
        return (
            <div id='About' >
                <div className='Card'>
                    <h2>About</h2>
                    <p> This project of mine came about a way to learn react while maintaining a private repository of all the adventures I have had. This is a traveltorian. The thought is that Instagram is a stream of pictures of your life. You will iterate straight through entire adventures with out emphasis on what you are doing. I find appeal of showing the episodic nature of trips. </p>
                    <p> This is in it foremost a travel-log. </p>
                    <p> You can find out more about the process of developing this at my <a href='avadacodeavra.com'>blog</a>. You can also find the souce code <a href='https://github.com/ScFix/MischiefManaged'>here</a> at my github account.  </p>

                </div>
            </div >
        )
    }
}

export default About;