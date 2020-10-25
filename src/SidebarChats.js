import React from 'react'
import "./SidebarChat.css"
import { Avatar } from "@material-ui/core"

function SidebarChats() {
    return (
        <div className="sidebarChats">
               <Avatar />
               <div className="sidebarChats-info">
               <h2>Room Name</h2>
               <p> this is the chat</p>
               </div>
        </div>
    )
}

export default SidebarChats
