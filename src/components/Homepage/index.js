import React, { useState } from 'react';

import './styles.css'

import { FiHome, FiLogOut, FiMessageSquare } from 'react-icons/fi'
import SideBar from '../Sidebar';

import { auth } from "../../services/firebase";
import Chat from '../Chat';

import Logo from '../../assets/pngegg.png'

function HomePage({ }) {

    const [userChat, setUserChat] = useState(null);

 

    return (
       
        <div className='containerPrincipal'>

            <div className='BarraLateralMenu'>

                <div className='itensMenu'>

                    <img src={Logo} className='logoHomePage'/>

                    <FiLogOut onClick={() => [auth.signOut(), setUserChat(null)]} size={30} className='iconeLogout' />
                    <h1 className='logoutTittle'>Sair</h1>

                </div>

            </div>

            <SideBar setUserChat={setUserChat} userChat={userChat} />

            <Chat userChat={userChat} />
            

        </div>

        
        
    )
}

export default HomePage;