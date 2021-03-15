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

  const [users,setUsers] = useState([
    {name:'Andres',message:'Mensaje Andres'},
    {name:'Leo',message:'Mensaje Leo'},
    {name:'Patty',message:'Mensaje Patty'},
    {name:'Balto',message:'Mensaje Balto'},
    
  ])
  const increment = () =>{
    //Modifico el valor de la variable
    setCount(count + 1)
  }

  const changeColor = () =>{
    console.log('Change color',isRed);
    const color = isRed;
    setRed(!color);  
  }
  return(
    <div className={isRed ? 'uno' : 'dos'}>
      {/* 
      <Tweet name="One" message="Mensaje 1"/>
      <Tweet name="Two"  message="Mensaje 2"/>
      <Tweet name="Three"  message="Mensaje 3"/>
      <Tweet name="Four"  message="Mensaje 4"/>

      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={changeColor}>Color</button>
      */}
      { users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      )) }
    </div>
  );
}

export default App;