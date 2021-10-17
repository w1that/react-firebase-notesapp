import React from 'react'
import { Link } from 'react-router-dom'

function CreateNote() {
    return (
        <Link to="/createnew"><button  className="px-4  py-2 text-xl font-bold text-white rounded-full ring ring-purple-700 hover:bg-purple-700 mt-10">
        Create new note
    </button></Link>
    )
}

export default CreateNote
