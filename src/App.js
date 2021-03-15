import React, {useEffect,useState} from 'react';

function App(){

    const app_id = 'fbf69388';
    const app_key = '16c5027b9f08287d4f2b229a2c5c0f80';
    const url = `https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}`;
    
    const [counter,setCounter] = useState(0);

    //Funcion que se ejecuta cuando el estado de la app cambia
    useEffect(()=>{
        console.log('Effect has run');
        get_recipes();
    },[])

    const get_recipes = async() =>{
        const response = await fetch(url);
        const data = await response.json();
        console.log('Data ==>',data);
    }
    return(
        <div className="app">
            <h1>App Recetas</h1>
            <form className="search_form">
                <label>Buscar:</label>
                <input type="text" className="search_bar"/>
                <button type="submit" onClick={()=>setCounter(counter+1)} className="search_btn">{counter}</button>
            </form>
        </div>
    )
}

export default App;