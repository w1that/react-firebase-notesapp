import { getAuth } from "@firebase/auth";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

function Login() {

    let history = useHistory();
    
    const signinHandler =async()=>{
       await signInWithGoogle()
       const auth = getAuth();
       const user = auth.currentUser;
       if(user){
        history.push("/mynotes")
    }
    }

  return (
    <div style={{background:"#161616"}} className=" w-full h-screen">
    
        <span style={{zIndex:"-1", background:"#161616"}} className="absolute top-0 w-full h-screen"></span>
       
        <div className="z-10 flex items-center justify-between w-5/6 sm:w-1/6 bg-gray-600 mt-96 rounded-full mx-auto py-2 pl-3 pr-3">
        
            <span>
                <img className="w-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />
            </span>
            <button onClick={signinHandler} className="bg-blue-500 transition duration-400 rounded-full text-white text-2xl px-3 py-1 hover:bg-blue-400 hover:text-gray-700">Log in with Google</button>
        </div>
    </div>
  );
}

export default Login;
