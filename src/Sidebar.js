import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallEndIcon from '@material-ui/icons/CallEnd';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Avatar from '@material-ui/core/Avatar';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import HeadsetIcon from '@material-ui/icons/Headset';
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3> Some User llama</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                
                <div className ="sidebar__channelsHeader">
                    <div className = "sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon classNAme = "sidebar__addChannel"/>
                </div>

                <div classNAme="sidebar__channelsList">
                <SidebarChannel/> 
                <SidebarChannel/>      
                <SidebarChannel/>   
                <SidebarChannel/>   
                <SidebarChannel/>   
                </div>
            </div>
        
            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className = "sidebar__voiceIcon"
                    fontSize= "large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon/>
                    <CallEndIcon/>
                </div>
            </div>
                <div className="sidebar__profile">
                    <Avatar src="https://hips.hearstapps.com/pop.h-cdn.co/assets/17/11/768x768/square-1489520090-winrar.png?resize=480:*"/>
                    <div className="sidebar__profileInfo">
                        <h3>James</h3>
                        <p>Winrar#8551</p>
                    </div>


                    <div className="sidebar__profileIcons">
                        <MicIcon/>
                        <HeadsetIcon/>
                        <SettingsIcon/>
                    </div>
                </div>
        </div>
    )
}

export default Sidebar;