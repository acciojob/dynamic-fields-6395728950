
import React, { useEffect, useState } from "react";
import './../styles/App.css';
import Formsubmission from "./Formsubmission";

const App = () => {
  let val =0;
  const[inputs,setInputs]  =  useState([{name:"",age:""}]);

   function handleadd(){
     setInputs([...inputs,{name:"",age:""}]);
     
     }

     function handlesubmit(event){
      event.preventDefault();
      console.log(inputs);
     }
     function handlechange(index,event){
      const{name,value} = event.target;
      const newInput = [...inputs];
      newInput[index][name] = value;
      setInputs(newInput)
     }
     
   function handleRemove(id){
     const newinput = inputs.filter((_,index)=>index!==id);
     setInputs(newinput);
   }
  
  return (
    
    <div>
        <form onSubmit={handlesubmit}>
          {
            inputs.map((value,index)=>(
              <div key={index}>
                      <input type="text" name="name" placeholder="Name" value={value.name} onChange={(e)=>handlechange(index,e)}></input>
              <input type="text" name="age" placeholder="Age" value={value.age} onChange={(e)=>handlechange(index,e)}></input>
              <button type='button' onClick={()=>handleRemove(index)}>Remove</button>
              </div>
            ))
          }
               <button type="button" onClick={handleadd}>Add More</button>
               <button type="submit">Submit</button>

        </form>
       
    
    </div>
  )
}

export default App
