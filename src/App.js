import React, {useEffect} from "react";
import LoginPage from "./components/LoginPage";
import Loading from "./components/Loading";
import {auth, db } from '../src/services/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import HomePage from "./components/Homepage";

function App() {

  const [user, loading] = useAuthState(auth);

  useEffect( () => {
    if(user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL
      })
    }
  }, [user]);

  if (loading) return <Loading />;

  if(!user) return <LoginPage />

  return (
    
      <HomePage />
    
  );
}

export default App;