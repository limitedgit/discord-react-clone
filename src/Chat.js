import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import "./Chat.css"
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from "./Message.js"
import { useSelector } from 'react-redux';
import {selectUser } from "./features/userSlice";
import { selectChannelID, selectChannelName } from './features/appSlice';
import data from './firebase';
import firebase from "firebase";
function Chat() {

    const user = useSelector(selectUser);
    const channelID = useSelector(selectChannelID);
    console.log(useSelector(selectChannelID));
    const channelName = useSelector(selectChannelName);
    const [input,setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
            if (channelID) {
        data.collection("channels")
        .doc(channelID)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
            setMessages(snapshot.docs.map((doc) => doc.data())))
    }
},[channelID])


    const sendMessage = e => {
        e.preventDefault();
        data.collection("channels")
        .doc(channelID)
        .collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });

        setInput("");
    }

    return (
        <div className = "chat">
            <ChatHeader channelName = {channelName}/>


        <div className="chat__messages">
            {messages.map((m) => (
                <Message
                timestamp={m.timestamp}
                message = {m.message}
                user = {m.user}


                />
            ))}
        </div>


        <div className="chat__input">
            <AddCircleIcon/>
            <form>
                
                <input value = {input} 
                disabled = {!channelID}
                onChange = {i => setInput(i.target.value)} 
                placeholder={`message #${channelName}`}/>
                <button onClick = {sendMessage} className= "chat__inputButton" type="submit">
                    Send Message
                </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize = "large"/>
                    <GifIcon fontSize = "large"/>
                    <EmojiEmotionsIcon fontSize="large"/>


                </div>
        </div>  
        </div>
    )
}

export default Chat
