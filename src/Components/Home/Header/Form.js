import React, {useState} from 'react'
import Users from "../../Login/users.js";
import {useAppState, useAppDispatch} from "../../../app-context";

function Form() {

    const appState = useAppState();
    const dispatch = useAppDispatch();

    const [id, setId] = useState(appState.user.id);
    const [login, setLogin] = useState(appState.user.login);
    const [password, setPassword] = useState(appState.user.password);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [city, setCity] = useState("");

    const dataChange = (e) => {
        e.preventDefault();
        dispatch({ type: 'change', login: login, password: password, id: id, name: name, surname: surname, city: city });
        const userToUpdate = Users[appState.user.id - 1]
        userToUpdate.login =  login;
        userToUpdate.password =  password;
        userToUpdate.name =  name;
        userToUpdate.surname =  surname;
        userToUpdate.city =  city;
    }

    return (
        <section className="login__form">
            <h1>User Profile</h1>
            <div className="decoration form__deco"></div>
            <div className="profile__box">
            <form onSubmit={e => dataChange(e)} className="form">
                <div>
                    <label>ID</label>
                    <input className="login__input" value={appState.user.id} name="id" placeholder={appState.user.id} onChange={(e) => {setId(e.target.value);}} />
                </div>
                <div>
                    <label>Login</label>
                    <input className="login__input" name="login" placeholder={appState.user.login} onChange={(e) => {setLogin(e.target.value);}} />
                </div>
                <div>
                    <label>Imię</label>
                    <input className="login__input" name="name" placeholder={appState.user.name} onChange={(e) => {setName(e.target.value);}} />
                </div>
                <div>
                    <label>Nazwisko</label>
                    <input className="login__input" name="surname" placeholder={appState.user.surname} onChange={(e) => {setSurname(e.target.value);}} />
                </div>
                <div>
                    <label>Miasto</label>
                    <input className="login__input" name="city" placeholder={appState.user.city} onChange={(e) => {setCity(e.target.value);}} />
                </div>
                <div>
                    <label>Hasło</label>
                    <input className="login__input" name="password" placeholder={appState.user.password} onChange={(e) => {setPassword(e.target.value);}} />
                </div>
                <input type="submit" value="Zapisz"/>
            </form>
            </div>
        </section>
    )
}

export default Form
