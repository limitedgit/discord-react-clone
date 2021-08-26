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
            <img src = {require('./discordLogo.png')}
            alt ="discord logo"/>
            
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>

       
        
    )
}

export default Login
