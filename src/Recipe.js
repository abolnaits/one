import React from 'react';

const Recipe = (props) =>{
    return(
        <div id={props.i_k}>
            <h2>Title: { props.title }</h2>
            <p>Calories: {props.calories}</p>
            <img src={props.image} alt=""/>
            <h3>Ingredients: </h3>
            {
                props.ingredients.map((item)=>(
                    1
                ))
            }
        </div>
    );
}

export default Recipe;