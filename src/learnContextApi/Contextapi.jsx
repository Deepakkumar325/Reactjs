import React from 'react'
const firstName = createContext();
import ComB from './ComB';
// Welcome();
// here we have to learn context api send name from ComB

  const Contextapi = ()=> {
     return (
       <> 
       <firstName.Provider value={"vinod"}> 
       <ComB/>
       </firstName.Provider>
           </> 
           );
};


export {firstName};

 export default Contextapi;
