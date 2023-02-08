import React from "react";

import './styles.css';

import { auth, db } from "../../services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import SidebarChatsItem from '../SidebarChatsItem'

const SideBarChats = ({ setUserChat, userChat }) => {

    const [user] = useAuthState(auth);

    const refChat = db
        .collection('chats')
        .where("users", "array-contains", user.email);

    const [chatSnapShot] = useCollection(refChat);

    return (
        <div className='sideBarChatsContainerPrincipal'>

            {chatSnapShot?.docs.map((item, index) => (
                <div className='sideBarChats' key={index}>
                    <SidebarChatsItem 
                    id={item.id}
                    users={item.data().users}
                    user={user}
                    setUserChat={setUserChat}
                    active={userChat?.chatId === item.id ? "active" : ""}
                    />

                    <div className="divider"/>


                </div>

            ))}



        </div>
    )
}

export default SideBarChats;