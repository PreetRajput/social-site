
import React, {useState, useEffect} from 'react'
export default function Up() {
 const [text, setText]= useState();
 const [preetet, setPreetet]= useState(0);
 useEffect(()=>
 {
   console.log("raosahab");
 },[preetet])

 const onOnChange = (event)=>{
    setText(event.target.value);
 }

 const newtext = ()=> {
   let newtext= text.toUpperCase();
   setPreetet(preetet+1);
    setText(newtext);
 }
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-t from-blue-200 to-pink-300'>

            <textarea name="textarea" value={text} onChange={onOnChange} className=' p-2  border-2 border-black my-2' id="textarea" cols="100" rows="10"></textarea>
            <button type="button" className='p-2 rounded-md shadow-md shadow-black  bg-gradient-to-r from-blue-300 to-amber-200' value={preetet} onClick={newtext}> toUpperCASE</button>
     </div>
  )
}
