import React from "react";
import { Link } from "react-router-dom";
import previous from '../previous.png'

function BackToMainMenu() {
  return (
    <Link to="/notes">
      <div className="px-4 w-5/6 flex py-2 text-xl font-bold text-white rounded-full ring ring-purple-700 hover:bg-purple-700 mt-10">
      <span className="p-1"><img width="30px" src={previous} /></span>  <button >
        Back to notes
      </button>
      
    </div> 
    </Link>
  );
}

export default BackToMainMenu;
