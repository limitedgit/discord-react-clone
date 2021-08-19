import React, { Component } from 'react';
import "./SidebarChannel.css"

function SidebarChannel({id, channel}) {

        return (
            <div className="sidebarChannel">
                <h4><span className = "sidebarChannel__hash">#</span> Default channel</h4>
            </div>
        );

}

export default SidebarChannel;