import React from "react";
import { Link } from "react-router-dom";
import logo from '../write.png';

function CreateNote() {
  return (
    <Link to="/createnew">
    <div className="px-4 w-5/6 flex sm:py-2 sm:text-xl sm:font-bold text-white rounded-full ring ring-purple-700 hover:bg-purple-700 sm:mt-10">
    <span className="p-1"><img width="30px" src={logo} /></span>  <button >
        Create new note 
      </button>
     
    </div> 
    </Link>
  );
}

export default CreateNote;
