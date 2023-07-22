import React from 'react'


function UserGreeting(props) {
    return <h1>Welcome Back!</h1>
}
function GuestGreeting(props) {
    return <h1>Please sign in</h1>
}

function IFelse(props) {
    const st = props.flag;
    // this is other way

    // if (st) {
    //     return <UserGreeting/>
    // }
    // else {
    //     return <GuestGreeting />
    // }

    // ternary oprater only run when write inside return function
    return (
        <>
            {
                st ? <UserGreeting /> : <GuestGreeting />
            }
        </>
    )
}
export default IFelse;
