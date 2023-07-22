import React,{useEffect,useState} from 'react'

function EffectHooks  (){
    const[count, SetCount] = useState(0)

// it simmilar work as the componentdidmount and componentUpdates

    useEffect(()=>{  // only paticular event par chalta hai
      
      console.log(`you clicked ${count} time Effect`);

    },[count])
  return (
     <>
     <p>You Clicked {count} time</p>
     <button onClick={()=> SetCount(count+1)}>Clecked me</button>
     
     </>
  )
}
// url fetch and it run every when data is render
export default EffectHooks;