import React, { useState, useEffect } from 'react'
import {Link} from 'react-scroll'
import {Link as RouterPath} from "react-router-dom";
import {fire} from "../../../../config";

function Nav({authListener}) {

    // const [currentUser, setCurrentUser] = useState("");

    // useEffect(() => {
    //     authListener();
    // }, []);
    // // const [actualUser, setActualUser] = useState("")

    // setCurrentUser(fire.auth().currentUser.email);

    // // if(currentUser) {
    // //     setActualUser(fire.auth().currentUser.email);
    // // }


    return (
        <section>
            <nav className="header__nav">
                <ul className="header__login">
                    {/* <div>{currentUser}</div>  */}
                    <RouterPath to="/Login">
                        <button className="routing">Zaloguj</button>
                    </RouterPath>
                    <RouterPath to="/Register">
                        <button className="routing">Załóż konto</button>
                    </RouterPath>
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
