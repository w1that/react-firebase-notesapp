import { collection, getDocs } from "firebase/firestore"; 
import React, { useEffect, useState } from 'react'
import { db} from '../firebase';
import NotesListItem from './NotesListItem';

function NotesList() {
    const [notes, setnotes] = useState([])
    useEffect(() => {
        getDocs(collection(db, "notes")).then(response=>{
            // response.docs.map(doc => {
            //     setnotes([...notes, doc.data()])
            // });
            setnotes(response.docs)
        })
    }, [])
    console.log(notes)
    return (
        <div>
            {notes.map(doc=><NotesListItem title={doc.data().text.title} content={doc.data().text.content}/>)}
        </div> 
    )
}

export default NotesList
