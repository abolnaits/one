import React from 'react';
import './App.css';
/*
Componente que contiene un div con los datos de un mensaje

*/
function Tweet({name,message}){
    return(
        <div className="tweet">
            
            <h2>Titulo Teet</h2>
            <h3>{name}</h3>
            <p>
            {message}
            </p>
            <span>Nº Likes</span>
        </div>
    );
}


export default Tweet;