import React,{useState} from 'react'

function IntroHooks  ()  {
    // declare a new state which we call count
    const[count,setCount] = useState(0);

    function Incresed(){
        setCount(count+1);

    }

  return (
    <>
    <p>You Clicked {count} times</p>
    {/* two way Increse which 1- is fun, 2- arrow fun */}
    <button onClick={()=>{setCount(count+1)}}>Click Me</button>
    <button onClick={Incresed}>Click Me 2</button>
   
    </>
   
  )
}



export default IntroHooks;