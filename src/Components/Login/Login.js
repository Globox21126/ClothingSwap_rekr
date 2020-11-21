import React, {useState, useEffect} from 'react'
import Nav from "../Home/Header/Header__components/Nav";
import {Link as RouterPath} from "react-router-dom";
import {fire} from "../../config";


function Login() {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState("");

    const [currentUser, setCurrentUser] = useState("");


    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }

    const handleLogin = (e) => {
        e.preventDefault();
        clearErrors();
        fire 
        .auth()
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then(authListener())
        .catch((error) => {
            console.log(error)
            switch (error.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(error.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(error.message);
                    break;
            }
        })

    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((userE) => {
            if(userE) {
                setCurrentUser(fire.auth().currentUser.email);
                console.log(fire.auth().currentUser.email);
            } else {
                setHasAccount(false);
            }
        });
    };


    useEffect(() => {
        authListener();
    }, []);


    return (
        <section className="header wrapper login">
            <Nav authListener={authListener} />
            <section className="login__form">
                <h1>Zaloguj się</h1>
                <div className="decoration form__deco"></div>
                <div className="login__box">
                    <div>
                        <label>Email</label>
                        <input className="login__input" onChange={(e) => {setUserEmail(e.target.value);}} />
                    </div>
                    <p>{emailError}</p>
                    <div>
                        <label>Hasło</label>
                        <input className="login__input" onChange={(e) => {setUserPassword(e.target.value);}} type="password" />
                    </div>
                    <p>{passwordError}</p>
                </div>
                <div className="login__buttons">
                    <RouterPath to="/Register">
                        <button>Załóż konto</button>
                    </RouterPath>
                    {/* <RouterPath to="/Home"> */}
                        <button onClick={(e) => handleLogin(e)}>Zaloguj się</button>
                    {/* </RouterPath> */}
                </div>
            </section>
        </section>
    )
}

export default Login
