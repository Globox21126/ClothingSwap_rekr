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
        console.log(appState.user);
        console.log(Users);
        dispatch({ type: 'change', login: login, password: password, id: id, name: name, surname: surname, city: city });
        // appState.user.push({ 
        //     id: id,
        //     login: login,
        //     password: password,
        //     name: name,
        //     surname: surname,
        //     city: city
        // })
    }

    return (
        <form onSubmit={e => dataChange(e)} className="form">
            <div>
                <label>ID</label>
                <input name="id" onChange={(e) => {setId(e.target.value);}} />
            </div>
            <div>
                <label>Login</label>
                <input name="login" onChange={(e) => {setLogin(e.target.value);}} />
            </div>
            <div>
                <label>Imię</label>
                <input name="name" onChange={(e) => {setName(e.target.value);}} />
            </div>
            <div>
                <label>Nazwisko</label>
                <input name="surname" onChange={(e) => {setSurname(e.target.value);}} />
            </div>
            <div>
                <label>Miasto</label>
                <input name="city" onChange={(e) => {setCity(e.target.value);}} />
            </div>
            <div>
                <label>Hasło</label>
                <input name="password" onChange={(e) => {setPassword(e.target.value);}} />
            </div>
            <input type="submit" value="Zapisz"/>
        </form>
    )
}

export default Form
