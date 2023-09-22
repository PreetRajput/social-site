import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAnimate } from 'framer-motion';

export default function UploadPic() {
    const navigate= useNavigate();
    let [displayButton, setDisplayButton]= useState(['none','none', 'none']);
    let newButton= [];
    let trash= ['none','none', 'none'];
    const location = useLocation();
    const [Img1, setImg1]= useState("./defaultimg.jpg");
    const [Img2, setImg2]= useState("./defaultimg.jpg");
    const [Img3, setImg3]= useState("./defaultimg.jpg");
    const [count, setCount]= useState(0);
    const [scope, animate]= useAnimate();
    
    function displayOrNot(list){

        if(list==="none"){
            setDisplayButton(trash);
        }
        else{
        for (let index = 0; index < list; index++) 
        {
                newButton.push('inline');
        }
        for (let index = 0; index < (3-list); index++) {
                newButton.push('none')            
        }
        setDisplayButton(newButton);
    }
        
    }
    
    function openCoverPage(){
        if(Img1 !== "./defaultimg.jpg")
        {
        navigate('/CoverPage', {state: {username: location.state.username, bio: location.state.bio, name:location.state.name,profilePic: location.state.profilePic, email: location.state.email, image1: Img1, image2: Img2, image3: Img3}});
        }
        else{
            alert("One must upload a picture");
        }
    }

    useEffect(()=>{
        animate([ 
            [scope.current, {scale: 1.1}, {duration: 1}],
            [scope.current, {scale: 1}, {duration: 1}]
        ]);
        setTimeout(() => {
            setCount(count+1);
        }, 2000);
    },[count])

    const animation= {
        initially: {
            y: "-100vh",
        },
        after:{
            y: '0',
            transition:{
                delay: 0.5,
                duration: 2,
                type: "spring",
                stiffness: 110
            }
        }
    }

  return (
    <>
            <motion.div  className="overflow-hidden w-screen h-screen bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center">

                <motion.div  variants={animation} initial="initially" animate="after" className=" h-3/5 w-3/5 rounded-lg shadow-lg shadow-black bg-white flex flex-col p-2">
                
                    <div className="w-full h-1/5 bg-gradient-to-tr from-red-200 to-pink-400 font-mono font-semibold tracking-widest shadow-black shadow-md rounded-lg flex items-center justify-center text-lg mb-2">
                            Upload a Picture 
                    </div>

                    <div className="w-full h-full shadow-sm shadow-black flex flex-row p-4">

                        <div className="flex flex-col">
                            <p className='bg-red-300 w-2/3 rounded-sm shadow-sm shadow-black p-2 mb-4'>How many pictures you want to upload?</p>
                            <label htmlFor="numOfPic" >
                                <select name="numOfPic" className='list shadow-sm shadow-black p-2 w-96' id="numOfPic" onChange={()=>{
                                    let list= document.querySelector('.list').value;
                                    displayOrNot(list);
                               
                                }}>
                                    <option value="none">None</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </label>
                            <table className='mt-4'>
                                <thead>
                                <tr>
                                    <td className='pb-4'>
                                    <input type="file" name="1" id="1" className='hidden' onChange={
                                        (e)=>{
                                            setImg1(URL.createObjectURL(e.target.files[0]));
                                        }
                                    } />
                                    <label htmlFor="1" className='p-1  bg-gray-300 shadow-sm shadow-black' style={{display: displayButton[0]}} >Choose image </label>
                                    </td>
                                    <td className='pb-4' >
                                    <input type="file" name="2" id='2' className='hidden' onChange={
                                        (e)=>{
                                            setImg2(URL.createObjectURL(e.target.files[0]));
                                        }} />
                                    <label htmlFor="2" className='p-1 bg-gray-300 shadow-sm shadow-black '  style={{display: displayButton[1]}} >Choose image </label>
                                    </td> 
                                </tr>
                                <tr>
                                <td className='pb-4'>
                                    <input type="file" name="3" id="3" className='hidden' onChange={
                                        (e)=>{
                                            setImg3(URL.createObjectURL(e.target.files[0]));
                                        }}/>
                                    <label htmlFor="3" className='p-1 bg-gray-300 shadow-sm shadow-black'  style={{display: displayButton[2]}}>Choose image </label>
                                    </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="pictures ml-2 shadow-sm shadow-black w-full flex justify-center items-center flex-col">
                            <div className=" flex justify-center items-center flex-row">
                                        <img className='  p-2 w-20 h-20' style={{display: displayButton[0]}} src={Img1} alt=""/>
                                        <img className='  p-2 w-20 h-20' style={{display: displayButton[1]}}  src={Img2} alt="" />
                            </div>
                            <div className="">
                                            <img className=' p-2 w-20 h-20' style={{display: displayButton[2]}}  src={Img3} alt="" />
                            </div>

                        </div>
                
                    </div>

                    
                </motion.div>
                <div className="h-full flex items-end pb-32 ml-5">
                <button className="next  bg-gray-300 p-2 rounded shadow-sm shadow-black font-mono font-medium tracking-wide" onClick={openCoverPage} ref={scope} >
                        Next
                </button>
                </div>


            </motion.div>
    </>
  )
}
