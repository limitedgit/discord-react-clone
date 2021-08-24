import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase";
import {Button} from "@material-ui/core"

function Login() {
    const signIn =  () => {
        //do the login
        auth.signInWithPopup(provider)
        .catch(e => alert(e.message))
    }
    return (
        <div className="login">
            <h1>Login page</h1>


            <div className="login__logo">
            <img src = "https://discord.com/assets/cb48d2a8d4991281d7a6a95d2f58195e.svg"
            alt ="discord logo"/>
            
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>

       
        
    )
}

export default Login
