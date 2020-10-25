import React from "react";
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Avatar } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChats from "./SidebarChats";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar />
        <div className="sidebar-headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Serach or Start a new chat" />
        </div>
      </div>
      <div className="sidebar-chatroom">
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
      </div>
    </div>
  );
}
export default Sidebar;
