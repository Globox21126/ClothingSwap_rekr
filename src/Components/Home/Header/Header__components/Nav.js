import React, { useState, useEffect } from 'react'
import {Link} from 'react-scroll'
import {Link as RouterPath} from "react-router-dom";
import {fire} from "../../../../config";
import {useAppState, useAppDispatch} from '../../../../app-context';

function Nav() {

    const appState = useAppState();

    const dispatch = useAppDispatch();

    // useEffect(() => {
    //     authListener();
    // }, []);
    // // const [actualUser, setActualUser] = useState("")

    // setCurrentUser(fire.auth().currentUser.email);

    // // if(currentUser) {
    // //     setActualUser(fire.auth().currentUser.email);
    // // }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    return (
        <section>
            <nav className="header__nav">
                <ul className="header__login">
                    {appState.user.isLogged ? 
                    <>
                        <li>{appState.user.login}</li> 
                        <RouterPath to="/Profile">
                            <button>Profil</button>
                        </RouterPath>
                        <button onClick={logout}>Wyloguj</button>
                    </>
                    : 
                    <>
                        <RouterPath to="/Login">
                            <button className="routing">Zaloguj</button>
                        </RouterPath>
                        <RouterPath to="/Register">
                            <button className="routing">Załóż konto</button>
                        </RouterPath>
                    </>
                    }
                    {/* <RouterPath to="/Login">
                        <button className="routing">Zaloguj</button>
                    </RouterPath>
                    <RouterPath to="/Register">
                        <button className="routing">Załóż konto</button>
                    </RouterPath> */}
                </ul>
                <ul className="header__menu">
                    <button>
                        {/* <Link activeClass="active"
                            to="header"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={5}
                            duration={300}
                            delay={200}>
                            Start
                            </Link> */}
                    <RouterPath to="/Home">
                        Start
                    </RouterPath>
                    </button>
                    <button>
                        <Link activeClass="active"
                            to="steps"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            // offset={50}
                            duration={300}
                            delay={200}>
                            O co chodzi?
                            </Link>
                    </button>
                    <button>
                        <Link activeClass="active"
                            to="about__us"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            // offset={50}
                            duration={400}
                            delay={200}>
                            O nas
                            </Link>
                    </button>
                    <button>
                        <Link activeClass="active"
                            to="fundations"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-68}
                            duration={500}
                            delay={200}>
                            Fundacja i organizacje
                            </Link>
                    </button>
                    <button>
                        <Link activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            // offset={50}
                            duration={600}
                            delay={200}>
                            Kontakt
                            </Link>
                    </button>
                </ul>
            </nav>
        </section>
    )
}

export default Nav
