import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Protected  () {
    const {Component} = props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login){
            navigate('login')
        }
    })

  return (
    <div>
        <div>
            <Component/>
        </div>
    </div>
  )
}
export default Protected;