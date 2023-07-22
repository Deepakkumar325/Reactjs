// converting a function to a Class it same as a props function call like here we use class 
import React, { Component } from 'react'

class Index1 extends React.Component {
    render() {
        return (
        <>
         <p> Function to Class </p>
            <h2 style={{color:'red'}}>Hello,World</h2>
            <h2>it is {this.props.name}</h2>
        </>
        )
    }

}

export default Index1;

// Q1 . When Life Cycle Method run
// when Component in Loaded
// When Component is Updated with state and props
// when Component is removed 


