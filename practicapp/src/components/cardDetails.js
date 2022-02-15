import React from "react";
import './card.css'

function CardDetail(props){


    return(
        <>
        <div className="card">
            <img src={props.imgSrc} alt="Imag is not display" style={{width:"250px"}}/>
            <h1>{props.name}</h1>
            <p className="title">{props.title}</p>
            <p>{props.university}</p>
        </div>
        </>
    );
}

export default CardDetail;