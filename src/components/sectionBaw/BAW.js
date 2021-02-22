import React from 'react';
import './BAW.scss';
import one from "./../../../images/robby-mccullough-boXHttFX1sE-unsplash.jpg";
import two from "./../../../images/ali-arif-soydas-3ICVaI2uzfE-unsplash.jpg";
import three from "./../../../images/joren-aranas-nmuyqgSOpEE-unsplash.jpg";
import four from "./../../../images/dima-mukhin-fuzFTZNYGCs-unsplash.jpg";
import five from "./../../../images/sinitta-leunen-KYW9BLztxa8-unsplash.jpg";
import six from "./../../../images/joshua-freake-KHGZn-fwsdo-unsplash.jpg";
import seven from "./../../../images/george-chandrinos-TYKsBIW3uLU-unsplash.jpg";
import eight from "./../../../images/max-brown-QhPmpNdNHWo-unsplash.jpg";

class BAW extends React.Component{
    render() {
        return (
<section class='baw'>
<h3><em>Black and white gallery</em></h3>
<div className='gallery'>
    <img class='one' src={one} />
    <img class='two' src={two} />
    <img class='three' src={three} />
    <img class='four' src={four} />
    <img class='five' src={five} />
    <img class='six' src={six} />
    <img class='seven' src={seven} />
    <img class='eight' src={eight} />
</div>
<div className='frame1'></div>
<div className='frame2'></div>
</section>
);
    }
}
export default BAW