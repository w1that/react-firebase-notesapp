import React from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebase';

function NotesListItem({title, content}) {
    
    return (
        <div className="bg-gray-800 border border-white py-2 mb-2 sm:my-2 ">
                
                <h1>title: {title}</h1>
                <h1>content: {content}</h1>
        </div>
    )
}

export default NotesListItem
