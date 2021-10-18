import React from 'react'
import CreateNote from './CreateNote'
import LogOut from './LogOut'

function BottomMenuMobile() {
    return (
        <div className="flex fixed z-10 bg-black bottom-0 w-full">
            <CreateNote/>
            <LogOut/>
            
        </div>
    )
}

export default BottomMenuMobile
