import { getAuth } from '@firebase/auth';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import CreateNote from '../components/CreateNote';
import NotesList from '../components/NotesList';

function MyNotes() {
    const auth = getAuth();
    const user = auth.currentUser;
    let history = useHistory()
    useEffect(() => {
        if(!user){
            toast.info('Log in first', {
                position: "bottom-center"
                });
            history.push("/")
        }
    }, [])

    if(!user){
        
        return ''
    }

    return (
        <div style={{background:"#161616"}} className=" text-white sm:h-screen">
        
        <div className="w-1/2 mx-auto ">
            <CreateNote/>
            <NotesList/>
        </div>
        </div>
    )
}

export default MyNotes