import { useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";

// if the user not login in the page then we not enter  get acess to the other page
function login(){
    const login =()=>{
        localStorage.setItem('login',true);
        } 
        const navigate = useNavigate();
    
    useEffect(()=>{
        let login = localStorage.getItem('login');
        if(!login)
        {
            navigate('/login');
        }
    })
    return(
        <>
        <h1> Login Page </h1>
        <input type="text"/>
        <input type="text"/>
        <button onClick={{login}}>Login</button>
        
        </>
    )
}