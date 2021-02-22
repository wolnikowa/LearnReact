import React from 'react';
import './footer.scss';
import facebook from "./../../../images/icons8-facebook-24.png";
import insta from "./../../../images/icons8-instagram-24.png";

class Footer extends React.Component{
    render() {
        return (
            <footer id="2">
            <div>
                <p>Sopot, Poland</p>
                <p>Amyshoots@gmail.com</p>
                <p>Tel: 123-456-789</p><br></br>
                <span>Page created in 2021 by Wiktoria Wolnik</span><br></br>
                <a href='#'><img src={facebook} /></a>
                <a href='#'><img src={insta} /></a>
            </div>
        </footer>
        );
    }
}
export default Footer