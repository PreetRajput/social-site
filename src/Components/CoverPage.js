import React , {createElement, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faCompass, faHeart, faHome, faMessage, faPersonMilitaryPointing, faSearch, faUpload } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion"
import {  useLocation } from 'react-router-dom'



export default function CoverPage() {
    
    const location= useLocation();

    const arrayOfUserInfo= [location.state.name, location.state.username, location.state.bio, location.state.profilePic , location.state.email, location.state.image1, location.state.image2, location.state.image3];

    let stringOfUserInfo= JSON.stringify(arrayOfUserInfo);
    localStorage.setItem(location.state.name, stringOfUserInfo);
    let a = JSON.parse(stringOfUserInfo);
    let [num, setNum]= useState(0);
    const CoverPageDiv1={
        hidden:{
            x: "-100vw",
        },
        visible:{
            x: 0,
            transition:{
                delay: 0.5,
                duration: 1,
                type: 'spring',
                stiffness: 110
            }
        },
        
    }

    const CoverPageDiv2= {
      secondHidden:{
            y: "-100vh",
        },
        secondVisible:{
            y: 0,
            transition:{
                delay: 1,
                duration: 2,
                type: 'spring',
                stiffness: 110
            }
        },
    }

useEffect(

    ()=>{
        let imageDiv= document.querySelector('.imageDiv')
        
            let img = document.createElement('img');
            img.src= 'https://picsum.photos/200';
            img.height= "1/2"
            img.width= "20"
            imageDiv.appendChild(img);
            console.log(img);   

        setTimeout(() => {
            setNum(num+1);
        }, 1000);
            
    },[])       


    
 








  return (
    < >
        <div  className=" overflow-hidden w-screen h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex flex-row justify-center items-center p-2">
            
            <motion.div variants={CoverPageDiv1} initial="hidden" animate= "visible" className="border-2 border-white -sm shadow-md shadow-black w-1/4 h-full mx-2 bg-white flex flex-col pt-0 font-semibold " >

                    <button className=" border-black tracking-wider m-6 text-xl">
                    <FontAwesomeIcon icon={faHome} /> Home
                    </button>

                   <button className=" border-black tracking-wider m-6 text-xl">
                    <FontAwesomeIcon icon={faSearch} />    Search
                    </button>

                    <button className=" border-black tracking-wider m-6 text-xl">
                    <FontAwesomeIcon icon={faCompass} />    Explore
                    </button>

                    <button className=" border-black tracking-wider m-6 text-xl">
                    <FontAwesomeIcon icon={faHeart} />    Notification
                    </button>

                    <button className=" border-black tracking-wider m-6 text-xl">
                    <FontAwesomeIcon icon={faUpload} />    Upload
                    </button>

                    
                    <button className=" border-black tracking-wider m-6 text-xl">
                    <FontAwesomeIcon icon={faMessage} />    Messages
                    </button>

                    <button className=" border-black tracking-wider m-6 text-xl">
                    <FontAwesomeIcon icon={faArrowUp} />   Profile
                    </button>

                    <button className=" border-black tracking-wider m-6 text-xl">
                    <FontAwesomeIcon icon={faPersonMilitaryPointing} />    Settings
                    </button>
            </motion.div>

            <motion.div variants={CoverPageDiv2} initial="secondHidden" animate= "secondVisible" className="border-2 border-white -sm shadow-md shadow-black w-full h-full mx-2 bg-white flex flex-col justify-center items-center imageDiv overflow-auto">
                
            </motion.div>

        </div>      
    </>
  )
}
