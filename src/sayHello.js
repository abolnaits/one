import React from 'react';

function Hello(){
    //Add logic 
  const sayHello = ()=>{
    console.log('Hello');
  }

    return(
        <div>
            <h1>Hello</h1>
            <button onClick={sayHello}>Click</button>
        </div>
    );
}

export default Hello;