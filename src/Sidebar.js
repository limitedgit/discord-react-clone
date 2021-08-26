import React, { useState } from "react";
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
import {useSelector} from "react-redux";
import {selectUser } from "./features/userSlice";
import data, {auth} from "./firebase"
import { useEffect } from "react";
function Sidebar() {
    const user = useSelector(selectUser);
    var [channels, setChannels] = useState([]);

    useEffect(() => {
        data.collection("channels").onSnapshot(snapshot => {
            setChannels(snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            })))

        })

    },[]);

    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name");
        if (channelName) {
            data.collection('channels').add({
                channelName: channelName,
            })
        }
    }
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3> Looks like Discord</h3>
                <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                
                <div className ="sidebar__channelsHeader">
                    <div className = "sidebar__header">
                        <ExpandMoreIcon/>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon onClick = {handleAddChannel}className = "sidebar__addChannel"/>
                </div>

                <div className="sidebar__channelsList">
                {channels.map(({id, channel}) => (
                    <SidebarChannel 
                    key={id} 
                    id = {id} 
                    channel = {channel.channelName}/>
                ))}  
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
                    <Avatar onClick = {() => auth.signOut()}src={user.photo}/>
                    <div className="sidebar__profileInfo">
                        <h3>{user.displayName}</h3>
                        <p>{user.uid}</p>
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