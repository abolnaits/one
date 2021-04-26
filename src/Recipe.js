import React from 'react';
import style from './recipe.module.css';

const Recipe = (props) =>{
    return(
        <div id={props.i_k} className={style.recipe}>
            <h2>Title: { props.title }</h2>
            <p>Calories: {props.calories}</p>
            <img src={props.image} alt=""/>
            <h3>Ingredients: </h3>
            {
                props.ingredients.map((item)=>(
                    <p>{item.text}</p>
                ))
            }
        </div>
    );
}

export default Recipe;