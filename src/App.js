import React from 'react';
import {useState} from 'react';
import Hello from './sayHello';
import Tweet from './Tweet';

/*
Funcion principal que muestra los Tweets
Se pasan varias props desde aqui al componente Tweet
*/
function App(){
  
  //Defino el nombre de la variable y la funcion que modificara el valor
  const [isRed, setRed] = useState(false)
  const [count,setCount] = useState(0)

  const increment = () =>{
    setCount(count + 1)
  }
  return(
    <div>
      <Tweet name="One" message="Mensaje 1"/>
      <Tweet name="Two"  message="Mensaje 2"/>
      <Tweet name="Three"  message="Mensaje 3"/>
      <Tweet name="Four"  message="Mensaje 4"/>

      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;