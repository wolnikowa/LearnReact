import React from 'react';
import './header.scss';

import background from "./../../../images/elcarito-MHNjEBeLTgw-unsplash.jpg";
import arrow from "./../../../images/icons8-shift-up-48.png";
import pic from "./../../../images/taisiia-stupak-0fKMSXKi7sM-unsplash.jpg"

class Header extends React.Component{
    render() {
        return (
            <header id="1">
            <img src={background} />
                <div className='follow'><p>Follow me on insta!</p><img src={arrow} /></div>
                <div className='bio'><img src={pic} /></div>
                <div className='description'><p>Hi and Welcome to my blog! It's my place to share my passion with the world! <br></br>Feel free to contact me to talk about photography.</p></div>
                </header>
        );
    }

}
export default Header