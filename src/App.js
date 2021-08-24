import React, {useEffect} from 'react';
import Sidebar from "./Sidebar";
import  Chat from "./Chat";
import './App.css';
import {selectUser } from "./features/userSlice";
import {useSelector, useDispatch} from "react-redux";
import Login from "./Login.js";
import { auth } from './firebase';
import {userLogin, userLogout} from "./features/userSlice";
function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);
      if (authUser) {
        //login user
        dispatch(userLogin({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,


        }))
      } else {
        dispatch(userLogout())
      }
    })
  }, [dispatch]);
  return (

    <div className="app">
    { user ? (  
    <>
    <Sidebar />
     <Chat/>
    </>
     ) : (
       <Login/>
     )


     }
      </div>
  );
}

export default App;
