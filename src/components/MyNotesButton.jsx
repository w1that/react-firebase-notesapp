import React from "react";
import { Link } from "react-router-dom";
import documents from '../documents.png'
function MyNotesButton() {
  return (
    <Link to="/mynotes">
      <div className="px-4 w-5/6 flex py-2 text-xl font-bold text-white rounded-full ring ring-purple-700 hover:bg-purple-700 mt-10">
    <span className="p-1"><img width="30px" src={documents} /></span>  <button >
        My Notes
      </button>
     
    </div> 
    </Link>
  );
}

export default MyNotesButton;
