import React from 'react'
import "./Message.css"
import Avatar from '@material-ui/core/Avatar';

function Message() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message__info">
                <h4>some info
                    <span className="message__timestamp">
                        999 a clock
                    </span>
                </h4>

                <p>lorem ipsum</p>
            </div>
        </div>
    )
}

export default Message
