import React, {useState, useEffect} from 'react'
import Nav from "../Home/Header/Header__components/Nav";
import {Link as RouterPath, useHistory} from "react-router-dom";
// import {fire} from "../../config";
import Users from "./users.js";
import { useAppDispatch } from '../../app-context';

//teraz działam z przechwytywaniem danych z formularza do stanu.
//za pomocą danych tworzę obiektu użytkownika, który wpycham do talbicy USERS

//szukam czy obiekt istnieje, jeśli tak to sprawdzam haslo

function Login() {

    const history = useHistory();

    const dispatch = useAppDispatch();

    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("default");

    // const [emailError, setEmailError] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    // const [hasAccount, setHasAccount] = useState("");

    const [currentUser, setCurrentUser] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Users.filter((el) => {
        //         if(el.login === userLogin && el.password === userPassword) {
        //             setCurrentUser(el)
        //         }
        //         return el;
        //     });
        const matchedUsers = Users.filter(user => user.login === userLogin && user.password === userPassword);
        if (matchedUsers.length > 0) {
            dispatch({ type: 'login', login: matchedUsers[0].login, password: matchedUsers[0].password, id: matchedUsers[0].id, name: matchedUsers[0].name, surname: matchedUsers[0].surname, city: matchedUsers[0].city });
            history.push('/Home');
        } else {
            history.push('/Register');
        }
    }

    // const clearErrors = () => {
    //     setEmailError("");
    //     setPasswordError("");
    // }

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     clearErrors();
    //     fire 
    //     .auth()
    //     .signInWithEmailAndPassword(userEmail, userPassword)
    //     .then(authListener())
    //     .catch((error) => {
    //         console.log(error)
    //         switch (error.code) {
    //             case "auth/invalid-email":
    //             case "auth/user-disabled":
    //             case "auth/user-not-found":
    //                 setEmailError(error.message);
    //                 break;
    //             case "auth/wrong-password":
    //                 setPasswordError(error.message);
    //                 break;
    //         }
    //     })

    // };

    // const authListener = () => {
    //     fire.auth().onAuthStateChanged((userE) => {
    //         if(userE) {
    //             setCurrentUser(fire.auth().currentUser.email);
    //             console.log(fire.auth().currentUser.email);
    //         } else {
    //             setHasAccount(false);
    //         }
    //     });
    // };


    return (
        <section className="header wrapper login">
            {/* <Nav authListener={authListener} /> */}
            <Nav />
            <section className="login__form">
                <h1>Zaloguj się</h1>
                <div className="decoration form__deco"></div>
                <div className="login__box">
                    <div>
                        <label>Login</label>
                        <input className="login__input" onChange={(e) => {setUserLogin(e.target.value);}} />
                    </div>
                    {/* <p>{emailError}</p> */}
                    <div>
                        <label>Hasło</label>
                        <input className="login__input" onChange={(e) => {setUserPassword(e.target.value);}} type="password" />
                    </div>
                    {/* <p>{passwordError}</p> */}
                </div>
                <div className="login__buttons">
                    <RouterPath to="/Register">
                        <button>Załóż konto</button>
                    </RouterPath>
                    {/* <RouterPath to="/Home"> */}
                        {/* <button onClick={(e) => handleLogin(e)}>Zaloguj się</button> */}
                        <button onClick={(e) => handleLogin(e)}>Zaloguj się</button>
                    {/* </RouterPath> */}
                </div>
            </section>
        </section>
    )
}

export default Login
