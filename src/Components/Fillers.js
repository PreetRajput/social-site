import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import animationData from './Ani.json'
import { motion, useAnimate, } from "framer-motion"
import { useLocation, useNavigate } from 'react-router-dom';
export default function Fillers( ) {
const [scope, animate]= useAnimate();
const [count, setCount]= useState(0);
const Navigate = useNavigate();
const location= useLocation();
const [file, setFile] = useState("./defaultpic.png");
    
function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  function openUploadPage(username, bio){
    if(username)
    {
    Navigate("/UploadPic", {state: {username: username, bio: bio, name: location.state.name, profilePic: file, email: location.state.email}} );
    }
    else{
      alert('username is must');
    }
  }


  useEffect(()=>{
    animate([
      [scope.current, { scale: 1.1 },{duration: 1}],
      [scope.current, { scale: 1 }, {duration: 1}]
  ]);
  setTimeout(() => {
    setCount(count+1);
  }, 2000);
  },[count])

  const animatingdiv={
    invisible: {
      opacity: 0,
  },
    visible:{
      opacity: 1,
      transition:{
        delay: 0.5,
        duration: 2
      }
    }
    }
  return (
    <>
         <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-sky-500 to-indigo-500 myscreen">
           
            <motion.div variants={animatingdiv}  initial="invisible" animate="visible"className="w-11/12 h-5/6 bg-gradient-to-tr from-slate-600 to-slate-500 rounded-sm border-2 border-white shadow-lg shadow-black flex flex-row   " >
              
              <div className="flex flex-col">
                  <img className=" m-2 w-56 h-56  rounded-full border-2 border-white shadow-black shadow-md " src={file} alt="" />

                  <button className="border-0 bg-white shadow-black shadow-md font-mono font-semibold p-3 rounded-lg m-10 my-2 bg-gradient-to-tr from-cyan-500  to-cyan-400 "> Profile Picture </button> 
                  <input className="absolute top-80 left-28 opacity-0 cursor-pointer"  type="file" name="profilePic" id="profilePic" onChange={handleChange}/>

              </div>

              <div className="flex flex-col my-32 ">
              <label htmlFor="Username:" className=' font-semibold relative left-1/4 tracking-widest'> Username: 
              <br/>
                <input type="text" name="Username:" id="userName" className='border-2 border-slate-600  rounded-md  w-80 px-2 '/> <br />
                <label htmlFor="bio"> Bio: <br />
                <textarea className='p-2 border-2  border-slate-600  rounded-md ' name="bio" id="bio" cols="30" rows="5"></textarea>
                </label>
              </label>
              </div>

              <div  className="w-1/3  h-5/6 ml-36 mt-10 bg-transparent shadow-xl shadow-black rounded-sm">
                 <motion.div   ref={scope} ><Lottie  animationData= {animationData}/>
                 </motion.div>
              </div>
               
              <div>
              <button className="border-0 bg-white shadow-black shadow-md font-mono font-semibold p-3 rounded-lg bg-gradient-to-tr from-cyan-500  to-cyan-400 fixed bottom-20 right-20 tracking-widest" 
              onClick={ ()=>{
                let username= document.querySelector('#userName').value;
                let bio= document.querySelector('#bio').value;
                openUploadPage(username, bio);
                }
                }> Next </button> 
              </div>             
             
              {/*       */}

              </motion.div>
              
              
         
         </div>
    </>
  )
}
