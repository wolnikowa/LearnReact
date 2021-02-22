import React from 'react';
import './nav.scss';
import facebook from "./../../../images/icons8-facebook-24.png";
import insta from "./../../../images/icons8-instagram-24.png";

class Nav extends React.Component{
    render() {
        return (
            <nav>
                <div>
                    <a href='#1' className="left">Home</a>
                    <a href='#2' className="left">Contact</a>
                    <a href='#3' className="left">Travel</a>
                    <a href='#' className="right"><img src={facebook} /></a>
                    <a href='#' className="right"><img src={insta} /></a>
                </div>
            </nav>
        );
    }
}
export default Nav