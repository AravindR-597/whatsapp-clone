import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert, SearchOutlined } from "@material-ui/icons";
import MicIcon from '@material-ui/icons/Mic';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import React, { useState } from "react";
import axios from "./axios"
import "./Chat.css";

function Chat({messages}) {
  const [input , setInput] =useState("") 

  const sendMessage =async (e)=>{
         e.preventDefault();

    await axios.post('/messages/new',{
      message :input,
      name:"Aravind",
      timestamp:'just now',
      received :false,
    })

    setInput('');
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar />
        <div className="chat-headerInfo">
          <h3>Room Name</h3>
          <p>Last seen .....</p>
        </div>
        <div className="chat-headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        { messages.map((message)=>(
            <p className= {`chat-msg ${message.received && "chat-msg-recive"}`}>
            <span className="chat-username">{message.name}</span>
             {message.message}
             <span className="chat-time">{message.timestamp}</span>
            </p>
        ))}
      </div>
      <div className="chat-footer">
      <IconButton>
        <InsertEmoticonIcon/>
        </IconButton>
        <IconButton>
        <AttachFileOutlinedIcon/>
        </IconButton>
        <form>
          <input type="text" value={input} onChange ={(e) => setInput(e.target.value)} placeholder="Type a message"/>
          <button onClick={sendMessage} type="submit">Send</button>
        </form>
        <IconButton>
        <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
