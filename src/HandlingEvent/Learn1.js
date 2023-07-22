import React from 'react'

function Learn1() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log("You Clicked Submit");

    }

    return (
        <>
            <center>
                <from onSubmit={handleSubmit} >
                    <label>name</label>
                    <input type='text'/><br></br>
                    <label>password</label>
                    <input type='password'></input><br></br>
                    <button type="submit">Submit</button>
                </from> </center>
        </>
    )
}
export default Learn1;

// 