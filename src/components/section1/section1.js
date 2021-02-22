import React from 'react';
import './section1.scss';
import VideoPlayer from "react-video-js-player"
import pic1 from "./../../../images/engin-akyurt-6Gs21-_UdDI-unsplash.jpg";
import pic2 from "./../../../images/karthik-chandran-4e0PvfHClnI-unsplash.jpg";
import pic3 from "./../../../images/israel-reyes-2H9tE42d8cE-unsplash.jpg"

class Section1 extends React.Component{
    render() {
        return (
            <section className="first">
            <aside className="number1">
                <div className='picture'>
                    <img src={pic1} />
                </div>

                <div className='picture deletion'>
                <img src={pic2} />
                </div>
                <div className='video'>
                    <img src={pic3} />
                </div>
            </aside>
            <aside className="number2">
                <article>
                    <h1><em>Inspirations</em></h1>
                        <p>“I’m always inspired by unique styles. For so long I kind of got into my own niche of editing and I guess that kept evolving into something that it is right now. It’s always going to keep evolving and changing so it’s definitely a lot of fun.”<br></br><em>Brandon Woelfel</em></p>
                        <p>“For me, the interplay of light and shadows is my muse. I love how something looks under a tree as the light of the sun interplays with the shadows of the leaves. It adds a stunning texture to the photograph.”<br></br><em>Remi, 27</em></p>
                        <p className="del1">“My biggest inspiration is street life and human nature. I love photographing people in their natural environment and observing their behavior. There is something grungy about this rawness that I simply keep coming back to.”<br></br><em>Charles, 27</em></p>
                        <p className="del2">“Photography was such a savior in my life. I want to use my photography to save others. For me, I am inspired by the city. I love the buzz of life and how it’s something that can bring us together. I want to celebrate the beauty of the city and make it as real and as transparent as possible.”<br></br><em>Gerald, 25</em></p>
                        <p className="del3">“Photography can defeat time. Images can keep the memory of a loved one alive, hold a moment in history for future generations, be a witness to tragedy or joy. They can also change behavior, stimulate understanding and create a sense of urgency that will move people to action. Photography is the universal language that speaks to the heart.”<br></br><em>Sarah Leen</em></p>
                </article>

            </aside>
        </section>
        );
    }

}
export default Section1