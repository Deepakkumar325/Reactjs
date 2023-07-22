import { useSearchParams } from 'react-router-dom'
import React from 'react'

function Filter() {
  const [seachParams, setSearchParams] = useSearchParams('');

  const name = seachParams.get('name');
  const Age = seachParams.get('Age');


  return (
    <div>
      <center>
        <h1>Filter Page</h1>

        <h2> Name is  :{name}    </h2>
        <h3> Age is :  {Age}   </h3>

        <input type="text"
          onChange={(e) => setSearchParams({ name: e.target.value })}
          placeholder='Search City...' />
        <br></br>

        <input type="text"
          onChange={(e) => setSearchParams({ age: e.target.value })}
          placeholder='Search Age...' /><br></br>

        <button onClick={() => setSearchParams({ name: name })}>Set Name Query</button>
        <br></br>
        <button onClick={() => setSearchParams({ age: Age })}>Set Age Query</button>




      </center>
    </div>


  )
}
export default Filter;