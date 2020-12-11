import React, {useState, useEffect} from 'react'
import Nav from "../Home/Header/Header__components/Nav";
import {Link as RouterPath, useHistory} from "react-router-dom";
import Users from "./users.js";
import { useForm } from 'react-hook-form';
// import {fire} from "../../config";


function Register() {

    const history = useHistory();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [validatePassword, setValidatePassword] = useState("");
    const [passwordErrorParaf, setPasswordErrorParaf] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const { register, handleSubmit } = useForm();

    // const clearErrors = () => {
    //     setEmailError("");
    //     setPasswordError("");
    // };

    // const clearInputs = () => {
    //     setUserEmail("")
    //     setUserPassword("")
    //     setValidatePassword("")
    // };

    // const passwordValidation = (e) => {
    //     if(userPassword === validatePassword){
    //         handleNewuser(e);
    //         clearInputs();
    //     } else {
    //         setPasswordErrorParaf("Hasła muszą być identyczne!");
    //     }
    // };

    // const handleNewuser = (e) => {
    //     e.preventDefault();
    //     clearErrors();
    //     fire 
    //     .auth()
    //     .createUserWithEmailAndPassword(userEmail, userPassword)
    //     .catch((error) => {
    //         switch (error.code) {
    //             case "auth/email-already-in-use":
    //             case "auth/invalid-email":
    //                 setEmailError(error.message);
    //                 break;
    //             case "auth/weak-password":
    //                 setPasswordError(error.message);
    //                 break;
    //         }
    //     });
    // };

    // const handleLogout = () => {
    //     fire.auth().signOut();
    // };

    // const authListener = () => {
    //     fire.auth().onAuthStateChanged((user) => {
    //         if(user) {
    //             setUserEmail(user);
    //         } else {
    //             setUserEmail("");
    //         }
    //     });
    // };

    // useEffect(() => {
    //     authListener();
    // }, []);

    const onSubmit = (data) => {
        const { email: login, password } = data;
        Users.push({ id: Users.length + 1, login, password });
        history.push('/Login');
    }

    return (
        <section className="header wrapper login">
            <Nav />
            <section className="login__form">
                <h1>Zarejestruj się</h1>
                <div className="decoration form__deco"></div>
                <div className="login__box">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label>Email</label>
                            <input className="login__input" name="email" onChange={(e) => {setUserEmail(e.target.value);}} ref={register} />
                        </div>
                        <p>{emailError}</p>
                        <div>
                            <label>Hasło</label>
                            <input className="login__input" name="password" onChange={(e) => {setUserPassword(e.target.value);}} type="password" ref={register} />
                        </div>
                        <p>{passwordError}</p>
                        <div>
                            <label>Powtórz hasło</label>
                            <input className="login__input" name="passwordRepeat" onChange={(e) => {setValidatePassword(e.target.value);}} type="password" ref={register} />
                        </div>
                        <p>{passwordErrorParaf}</p>
                        <input type="submit" value="Zarejestruj"/>
                    </form>
                </div>
                <div className="login__buttons">
                    <RouterPath to="/Login">
                        <button>Zaloguj się</button>
                    </RouterPath>
                    {/* <RouterPath to="/Home"> */}
                        {/* <button onClick={(e) => passwordValidation(e)}>Załóż konto</button> */}
                        <button>Załóż konto</button>
                    {/* </RouterPath> */}
                </div>
            </section>
        </section>
    )
}

export default Register
