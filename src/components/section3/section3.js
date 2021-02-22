import React from 'react';
import './section3.scss';
import travel1 from "./../../../images/tomas-malik-VF8P5iTbKQg-unsplash.jpg";
import travel2 from "./../../../images/alex-knight-wfwUpfVqrKU-unsplash.jpg";
import travel3 from "./../../../images/sumit-chinchane-jWKk-0ZBUyg-unsplash.jpg";
import travel4 from "./../../../images/leonard-cotte-R5scocnOOdM-unsplash.jpg";

class Section3 extends React.Component{
    render() {
        return (
<section className="third" id='3'>
            <h2><em>My recent travels</em></h2>
            <div className="cont">
                <img src={travel1} />
                <div>
                    <h3>The Sahara, Africa</h3>
                    <p> Amazing sun, fantastic views...
                        <a href='#'>Read more</a>
                    </p>
                </div>
            </div>
            <div className="cont">
                <img src={travel2} />
                <div>
                    <h3>Tokyo, Japan</h3>
                    <p>The heart of night life...
                        <a href='#'>Read more</a>
                    </p>
                </div>
            </div>
            <div className="cont">
                <img src={travel3} />
                <div>
                    <h3>Ko Pha Ngan, Thailand</h3>
                    <p> Only good vibes...
                        <a href='#'>Read more</a>
                    </p>
                </div>
            </div>
            <div className="cont">
                <img src={travel4} />
                <div>
                    <h3>Paris, France</h3>
                    <p>Ahhh, the city of love...
                        <a href='#'>Read more</a>
                    </p>
                </div>
            </div>
            
        </section>

        );
    }
}
export default Section3