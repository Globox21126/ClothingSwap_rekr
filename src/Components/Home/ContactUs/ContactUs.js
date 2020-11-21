import React, {useState} from 'react'
import {database} from "../../../config";


function ContactUs() {

    const [name, changeName] = useState("");
    const setName = (e) => {
        changeName(e.target.value);
    }

    const [email, changeEmail] = useState("");
    const setEmail = (e) => {
        changeEmail(e.target.value);
    }

    const [message, changeMessage] = useState("");
    const setMessage = (e) => {
        changeMessage(e.target.value);
    }

    // const addMessage = (formMessage) => {
    //     fetch("http://localhost:3000/form__send", {
    //         method: "POST",
    //         body: JSON.stringify(formMessage),
    //         headers: {
    //             "Content-type" : "application/json"
    //         }
    //     })
    // }

    const handleForm = (e) => {

        e.preventDefault();

        const formMessage = {
            userName: name,
            userEmail: email,
            userMessage: message,
        }

        console.log(database)
        // addMessage(formMessage);
        database.ref("/messages").push(formMessage);

        changeName("");
        changeEmail("");
        changeMessage("");
        
    }

    return (
        <section id="contact" className="contact__us__form">
            <form onSubmit={handleForm} className="form wrapper">
                {/* <div className="form__container"> */}
                    <h1>Skontaktuj się z nami</h1>
                    <div className="decoration"></div>
                    <div className="form__inputs">
                        <div>
                            <label>Wpisz swoje imię</label>
                            <input onChange={setName} value={name} placeholder="Krzysztof" />
                        </div>
                        <div>
                            <label>Wpisz swój email</label>
                            <input onChange={setEmail} value={email} placeholder="abc@xyz.pl" />
                        </div>
                     </div>
                    <label className="form__message">Wpisz swoją wiadomość</label>
                    <input onChange={setMessage} value={message} className="form__message__input" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                    <button>Wyślij</button>
                {/* </div> */}
                {/* <div className="icons">
                    <div>FB</div>
                    <div>IG</div>
                </div> */}
            </form>
            <div className="form__background">
                <h3>Copyright by Coders Lab</h3>
            </div>
        </section>
    )
}

export default ContactUs
