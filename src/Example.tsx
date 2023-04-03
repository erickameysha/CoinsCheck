import React, {useEffect, useState} from 'react';

const Example = () => {
   const [value,setValue] =useState<number>(0)
   const incHandler = () => {
     setValue(value +1)
   }
   useEffect(()=>{
       let valueAsconst =localStorage.getItem('counterValue',)
       if (valueAsconst){
           let newValue= JSON.parse(valueAsconst)
           setValue(newValue )
       }

   },[])
   useEffect(()=>{
       localStorage.setItem('counterValue', JSON.stringify(value))
   },[value])
   const getLocalstorageHandler = () => {
       debugger
       let valueAsconst =localStorage.getItem('counterValue',)
  if (valueAsconst){
      let newValue= JSON.parse(valueAsconst)
      setValue(newValue )
  }

   }
   const setLocalstorageHandler = () => {
     localStorage.setItem('counterValue', JSON.stringify(value))
   }
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setLocalstorageHandler}>setLocalstorage</button>
            <button onClick={getLocalstorageHandler}>getLocalstorage</button>
            <button onClick={incHandler}>inc</button>
        </div>
    );
};

export default Example;