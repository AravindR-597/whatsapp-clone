import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
   axios.get("/messages/sync").then((response) => {
     setMessages(response.data);
      console.log(response.data)
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("ba148a15e0bc64dd89bd", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="app">
      <div className="app-body">
        {/*SIDEBAR COMPONENT*/}
        <Sidebar />
        {/*CHAT COMPONENT*/}
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
