import React from 'react'
import { firstName } from '../App';


const ComB = () => {
    return <>
        <firstName.Consumer>
            {(fname) => {
                return <h1>firstName Right here{fname}</h1>;

            }}
        </firstName.Consumer>
    </>

}


export default ComB;

