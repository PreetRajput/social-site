import React from 'react'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'
import animationData from './frontpageAnimation.json'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

export default function Forms() {

  const navigate= useNavigate();

function fillerPageOpen(userObject){
  console.log(userObject.name);
      navigate("/fillers", {state: {email: userObject.email, name: userObject.name}});
    
}

  return (
    <>
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-gradient-to-r from-sky-500 to-indigo-500 myscreen">
            
             <div className="w-80 h-80 absolute left-2 bottom-10">
                 <Lottie animationData= {animationData}/>
              </div>

                 
                <GoogleOAuthProvider clientId="483338773346-7id6he17m7uk0ic4sjgjs8fp6rlipqd7.apps.googleusercontent.com">
                  <GoogleLogin
                onSuccess={credentialResponse => {
                  var userObject = jwt_decode(credentialResponse.credential);
                  console.log(userObject);
                  console.log(userObject.email);
                  console.log(userObject.name);
                  fillerPageOpen(userObject);
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
              </GoogleOAuthProvider>
                
               
        </div>
        </>
  )
}

// AIzaSyBACxMioG8xX7SZGAJ9jMTqQlKHBGpSytE