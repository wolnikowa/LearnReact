import React, {useState} from 'react';
import './header.scss';

import background1 from "./../../../images/pexels-aleksandar-pasaric-1820770.jpg";
import background2 from "./../../../images/pexels-pixabay-355465.jpg"
import arrow from "./../../../images/icons8-shift-up-48.png";
import pic from "./../../../images/taisiia-stupak-0fKMSXKi7sM-unsplash.jpg"

const back={background1,background2}

function Header(){
    // const [appState, changeState]=useState({
    //     activeObject: null,
    //     objects:[{id:1},{id:2},{id:3},{id:4},{id:5}]
    // });
    // function toggleActive(index){
    //     changeState({ ...appState, activeObject: appState.objects[index]});
    // }
    // function toggleActiveStyles(index){
    //     if (appState.objects[index]=== appState.activeObject){
    //         return "box active";
    //     }else{
    //         return "box inactive";
    //     }
    //     }
    const [selected, setSelected] = useState(back.background1)
    let status="first"
    
    return(
        <header id="1">
        <div className="back" onClick={() => {if (status=="first"){
        setSelected(back.background2),
        status="second"}
        else if (status=="second"){
            setSelected(back.background1),
            status="first"}}
        }>
           <img src={selected} alt='back'/>
       </div>
        {/* <div className="State">
            {appState.objects.map((elements, index)=>(
                <div
                key={index}
                className={toggleActiveStyles(index)}
                onClick={()=>{
                    toggleActive(index);
                }}
                ></div>
            ))}
        </div>         */}
        <div className='follow'><p>Leave a like!</p><img src={arrow} /></div>
        <div className='bio'><img src={pic} /></div>
        <div className='description'><p>Hi and Welcome to my blog!<br></br>Feel free to contact me to talk about photography.</p></div>
        </header>
    )
}
export default Header