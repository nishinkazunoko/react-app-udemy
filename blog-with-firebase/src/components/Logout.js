import { signInWithPopup,signOut } from 'firebase/auth';
import React from 'react'
import {auth, provider} from "../firebase";
import { useNavigate } from 'react-router-dom';
import { fas } from '@fortawesome/free-solid-svg-icons';

const Logout = ({setIsAuth}) => {
  const navigate = useNavigate();
  const logout = () => {
    //Googleでログアウト
    signOut(auth).then(() =>{
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };


  return (
   <div>
    <p>ログアウトして始める</p>
    <button onClick={logout}>ログアウト</button>
   </div>
  );
};


export default Logout