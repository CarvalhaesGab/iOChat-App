import React from "react";

import * as C from './styles';
import ChatHeader from './../ChatHeader/index';
import ChatBody from './../ChatBody/index';
import ChatFooter from './../ChatFooter/index';
import Default from "../DefaultPage";

const Chat = ({ userChat }) => {

    if(!userChat) return <Default />

    return (
        <C.Container>
            <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name}/>
            <ChatBody chatId={userChat?.chatId} />
            <ChatFooter chatId={userChat?.chatId}/>
        </C.Container>
    )
}

export default Chat;