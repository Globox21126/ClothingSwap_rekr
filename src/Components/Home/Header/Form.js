import React from 'react'
import Users from "../../Login/users.js";
import {useAppState} from "../../../app-context";
import { useForm } from 'react-hook-form';

function Form() {

    const {handleSubmit} = useForm();
    const appState = useAppState();

    const onSubmit = (data) => {
        const { email: login, password, id, name, surname, city } = data;
        appState.user.push({id: appState.user.id, login: appState.user.login, password: appState.user.password, });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div>
                <label>ID {appState.user.password}</label>
                <input />
            </div>
            <div>
                <label>Login</label>
                <input />
            </div>
            <div>
                <label>Imię</label>
                <input />
            </div>
            <div>
                <label>Nazwisko</label>
                <input />
            </div>
            <div>
                <label>Miasto</label>
                <input />
            </div>
            <div>
                <label>Hasło</label>
                <input />
            </div>
            <input type="submit" value="Zapisz"/>
        </form>
    )
}

export default Form
