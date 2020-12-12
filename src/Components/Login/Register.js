import React, {useState} from 'react'
import Nav from "../Home/Header/Header__components/Nav";
import {Link as RouterPath, useHistory} from "react-router-dom";
import Users from "./users.js";
import { useForm } from 'react-hook-form';

function Register() {

    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [validatePassword, setValidatePassword] = useState("");

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
                        <div>
                            <label>Hasło</label>
                            <input className="login__input" name="password" onChange={(e) => {setUserPassword(e.target.value);}} type="password" ref={register} />
                        </div>
                        <div>
                            <label>Powtórz hasło</label>
                            <input className="login__input" name="passwordRepeat" onChange={(e) => {setValidatePassword(e.target.value);}} type="password" ref={register} />
                        </div>
                        <input className="register__submit" type="submit" value="Załóż konto"/>
                    </form>
                </div>
                <div className="login__buttons">
                    <RouterPath to="/Login">
                        <button>Zaloguj się</button>
                    </RouterPath>
                </div>
            </section>
        </section>
    )
}

export default Register