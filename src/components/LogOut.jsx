import React from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { logout } from "../firebase";
import logoutic from '../logout.png'
function LogOut() {
  let history = useHistory();

  const logouthandler = () => {
    logout();
    toast.success("successfully logged out");
    history.push("/");
  };

  return (
    <div className="px-4 w-5/6 flex sm:py-2 sm:text-xl sm:font-bold text-white rounded-full ring ring-purple-700 hover:bg-purple-700 sm:mt-10">
    <span className="p-1"><img width="30px" src={logoutic} /></span>  <button onClick={logouthandler}>
        Log out
      </button>
     
    </div> 
  );
}

export default LogOut;
