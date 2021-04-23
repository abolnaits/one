import React, {useEffect,useState} from 'react';
import Recipe from './Recipe';

const App = () => {

    //Constantes
    const app_id = 'fbf69388';
    const app_key = '16c5027b9f08287d4f2b229a2c5c0f80';
    const url = `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`;

    const [counter,setCounter] = useState(0);
    const [recipes,setRecipes] = useState([]);
    const [search,setSearch] = useState('');
    //Query de busqueda por defecto
    const [query,setQuery] = useState('chicken')

    //Uso de useEffect

    useEffect(()=>{
        console.log('useEffect run');
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`).then((response)=>{
            console.log('Response =>',response);
            //Devuelvo la repsuesta convertida 
            return response.json();
        }).then((data)=>{
            //Manejo los datos
            console.log('Data =>',data);
            
            
            setRecipes(data.hits);
            console.log('Recipes =>',recipes);
        }).catch((error)=>{
            console.error('Error =>',error);
        });
    },[query]);

    const getSearch = (e)=>{
        console.log('Search =>',e);
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return(
        <div className="App">
            <h1>Search for food:</h1>
            <form className="search-form">
            <input 
            className="search-bar"
            value={search} 
            onChange={(e)=>{
                console.log('Event =>',e);
                console.log('Value =>',e.target.value);
                setSearch(e.target.value)
            }}
            />
            <button 
                className="search-button" 
                onClick={getSearch}
                type="submit">
                Search
            </button>

            <button className="add-button" type="button" onClick={()=>{
                //setCounter(counter + 1)
            }}>Add{counter}</button>
            </form>
            <div>
                {
                    recipes.map((recipe,i) =>(
                        <Recipe key={i} i_k={i}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        ></Recipe>
                    ))
                }
            </div>
        </div>
    );
};

export default App;
