import React, { useReducer, useCallback, useEffect} from 'react';
import './nav.scss';
import facebook from "./../../../images/icons8-facebook-24.png";
import insta from "./../../../images/icons8-instagram-24.png";
import like from "./../../../images/like.png";

const initialState={
    likeC:97,
};

const reducer=(state,action)=>{
    switch(action.type){
        case 'addLike':
            return{
                ...state,
                likeC: state.likeC+1
            }
        default:
            return state;
    }
};


const Nav=()=>{
        const variable1={label:"text1", value:4};
        const [state,dispatch]=useReducer(reducer,initialState);
        const addLike=useCallback(()=>dispatch({type:'addLike'}),[dispatch]);
        useEffect(()=>{
            if (state.likeC==100){
                alert(`Jesteś ${state.likeC} lajkującym!`);
            }else if (state.likeC==110){
                alert(`Jesteś ${state.likeC} lajkującym!`);
            }
        },[state.likeC]);
        return (
            <nav>
                <div>
                    <a href='#1' className="left">Home</a>
                    <a href='#2' className="left">Contact</a>
                    <a href='#3' className="left">Travel</a>
                    <span className="right">{state.likeC}</span>
                    <a href='#' className="right" onClick={addLike}><img src={like} /></a>
                    <a href='#' className="right"><img src={facebook} /></a>
                    <a href='#' className="right"><img src={insta} height="30px"/></a>
                </div>
            </nav>
        );
    }
export default Nav