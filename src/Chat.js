import React from 'react'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import "./Chat.css"
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from "./Message.js"
function Chat() {
    return (
        <div className = "chat">
            <ChatHeader/>


        <div className="chat__messages">
            <Message/>
        </div>


        <div className="chat__input">
            <AddCircleIcon/>
            <form>
                
                <input placeholder={"message the channel"}/>
                <button class= "chat__inputButton" type="submit">
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
