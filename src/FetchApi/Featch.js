import React, { useEffect, useState } from 'react'

function Featch() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('http://www.omdbapi.com?apikey=b6003d8a')
      .then(response => response.json())
      .then(data => setUser(data))
      
      .catch(error => console.error(error))

  }, [])
  return (
    <>
      <h1 style={{color:"black",textAlign:"center"}}>User Data Show</h1>
      <ul>{
        users.map(user => {

          return <li key={user.userId} style={{listStyle:'none',border:'2px solid black',margin:"1rem"}}>
                      <strong>{user.id}</strong> 
                     <p>{user.title}</p>  
                     <p>{user.body}</p>
                </li>
        })
      }
      </ul>
    </>
  )
}

export default Featch;