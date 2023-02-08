import React from "react";

import './styles.css';

import SidebarHeader from './../SidebarHeader/index';
import SidebarChats from './../SidebarChats/index';

const SideBar = ({ setUserChat, userChat }) => {
    return (
        <div className='sideBarContainerPrincipal'>

            <div className='sideBar'>
                
                <SidebarHeader setUserChat={setUserChat}/>
                <SidebarChats setUserChat={setUserChat} userChat={userChat}/>

            </div>

        </div>
    )
}

export default SideBar;