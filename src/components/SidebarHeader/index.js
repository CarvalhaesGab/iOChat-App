import React from "react";

import './styles.css';
import { MdDonutLarge, MdChat, MdMoreVert } from 'react-icons/md'
import * as EmailValidator from 'email-validator';
import { auth, db } from "../../services/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollection } from 'react-firebase-hooks/firestore';
import { MdPerson } from "react-icons/md";


const SideBarHeader = ({ setUserChat, photoURL }) => {

    const [user] = useAuthState(auth);

    const refChat = db
        .collection('chats')
        .where("users", "array-contains", user.email);

    const [chatSnapShot] = useCollection(refChat);

    const handleCreatechat = () => {
        const emailInput = prompt("Escreva o e-mail do usuário desejado para chat!")

        if (!emailInput) return;

        if (!EmailValidator.validate(emailInput)) {
            return alert("E-mail inválido");
        } else if (emailInput === user.email) {
            return alert("Insira um e-mail diferente do seu!");
        } else if (chatExists(emailInput)) {
            return alert("Chat já existe!")
        }

        db.collection("chats").add({
            users: [user.email, emailInput],
        });
    }

    const chatExists = (emailchat) => {
        return !!chatSnapShot?.docs.find(
            (chat) => chat.data().users.find((user) => user === emailchat)?.lenght > 0
        )
    }

    return (
        <div className='sideBarHeaderContainerPrincipal'>

            <div className='sideBarHeader'>

                <img className='avatar' src={user?.photoURL} />

                <div className="options">
                    <MdDonutLarge className="svg" />
                    <MdChat className="svg" onClick={handleCreatechat} />
                    <MdMoreVert className="svg" />
                </div>

            </div>

        </div>
    )
}

export default SideBarHeader;