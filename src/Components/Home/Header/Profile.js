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
                    <div>{appState.user.id}</div>
                    <div>{appState.user.login}</div>
                    <div>{appState.user.password}</div>
                    <div>{appState.user.name}</div>
                    <div>{appState.user.surname}</div>
                    <div>{appState.user.city}</div>
                </section>
            </div>
        </>
    )
}

export default Profile
