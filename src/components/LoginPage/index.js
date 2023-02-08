import React, { useState } from 'react';

import './styles.css'

import logo from '../../assets/pngegg.png'
import bg from '../../assets/bg.jpg'
import { auth, provider } from '../../services/firebase';

import { FcGoogle } from 'react-icons/fc'
import { BsFillEyeFill, BsFillEyeSlashFill} from 'react-icons/bs'
import HomePage from '../Homepage';

function LoginPage() {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    }

    const handleSigninGoogle = () => {
        auth.signInWithPopup(provider).catch(alert)
    };


   

    return (
        <div className='containerTelaToda'>

            <img className='bg' src={bg} />

            <div className='containerLogin'>

                <div className='background'></div>

                <img className='logo' src={logo} />

                <h1 className='texto'>Faça seu Login.</h1>

                <button className='loginWithGoogleButton' onClick={handleSigninGoogle}> Entrar com o Google  <FcGoogle size={25} className='googleIconLogin' /></button>

                <h1 className='version'>Versão 1.0</h1>

            </div>

        </div>
    )
}

export default LoginPage;