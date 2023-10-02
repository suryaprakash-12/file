import './App.css';
import React, {useState} from 'react';

function App(){
  function getData(val){
const [state,statefn]=useState(null)
console.log(state)
  }
  return (
    <div>
      <h1>{state}</h1>
<input type="text" onChange={getData} />
</div> 
  );
}

export default App;
