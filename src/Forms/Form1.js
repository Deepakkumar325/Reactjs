import React, { Component } from 'react'

export class form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastname: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    // if whenever we cerate a function so we do bind
    handleChange(e) {
        this.setState({ firstName: e.target.value });
        this.setState({ lastname: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.warn("A firstname was Submitted   " + this.state.firstName);
        console.warn("A lastname was Submitted   " + this.state.lastname);


    }
render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:<input type='text'placeholder='enter your name' onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:<input type='text' placeholder='enter your name' onChange={this.handleChange} />
                    </label>
                    <input type='submit' value="Submit" />
                </form>
                <h1>{this.state.firstName}
                    {this.state.lastname}</h1>
            </>
        )
    }
}

export default form1


// create a form using the class Component 


// when we use input data we use in js 
// const input = document.getElementById('myText');
// const inputValue = input.value;

// in React ------>
// value , onChange