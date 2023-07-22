// params user/anil , user/deepak
import React from 'react'
import { Params, useParams } from 'react-router-dom';

function User () {
    const params = useParams();
    const {name} = params;
  return (
    <>
    <h1>This is Page of {name}</h1>
    </>
    
  )
}
export default User ;
