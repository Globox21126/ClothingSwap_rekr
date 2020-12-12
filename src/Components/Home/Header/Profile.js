import React from 'react'
import Form from "./Form";
import Nav from "./Header__components/Nav"
import {useAppState} from "../../../app-context";

function Profile() {

    const appState = useAppState();

    return (
        <>
            <Nav />
            <div className="user__profile">
                <Form />
                <section className="user__data">
                    <div>Twoje ID: {appState.user.id}</div>
                    <div>Twój login: {appState.user.login}</div>
                    <div>Twoje hasło: {appState.user.password}</div>
                    <div>Imię: {appState.user.name}</div>
                    <div>Nazwisko: {appState.user.surname}</div>
                    <div>Miasto: {appState.user.city}</div>
                </section>
            </div>
        </>
    )
}

export default Profile
