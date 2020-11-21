import React from 'react'
import Nav from "./Header__components/Nav";
import {Link as RouterPath} from "react-router-dom";

function Header() {
    return (
        <section id="header" className="header">
            <section className="wrapper">
                <Nav />
                <div className="header__details">
                    <h2>Zacznij pomagać!</h2>
                    <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <span className="header__decoration decoration"/>
                    <div className="header__details__buttons">
                        <RouterPath to="/Login">
                            <button>
                               <span>Oddaj</span>
                                <span>rzeczy</span>
                            </button>
                        </RouterPath>
                        <RouterPath to="/Login">
                            <button>
                                <span>Zorganizuj</span>
                                <span>zbiórkę</span>
                            </button>
                        </RouterPath>
                    </div>
                </div>
            </section>
            <div className="header__image"/>
        </section>
    )
}

export default Header
