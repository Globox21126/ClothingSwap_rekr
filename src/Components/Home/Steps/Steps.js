import React from 'react'
import {Link as RouterPath} from "react-router-dom";

function Steps() {
    return (
        <>
            <section id="steps" className="wrapper steps__intro">
                <h1>Wystarczą 4 proste kroki</h1>
                <div className="decoration"></div>
            </section>
            <section className="steps__main">
                <summary>
                    <div className="steps__main__imgs"></div>
                    <h3>Wybierz rzeczy</h3>
                    <span></span>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </summary>
                <summary>
                    <div className="steps__main__imgs"></div>
                    <h3>Spakuj je</h3>
                    <span></span>
                    <p>skorzystaj z worków na śmieci</p>
                </summary>
                <summary>
                    <div className="steps__main__imgs"></div>
                    <h3>Zdecyduj komu chcesz pomóc</h3>
                    <span></span>
                    <p>wybierz zaufane miejsce</p>
                </summary>
                <summary>
                    <div className="steps__main__imgs"></div>
                    <h3>Zamów kuriera</h3>
                    <span></span>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </summary>
            </section>
            <section className="steps__outro">
                <div>
                    <RouterPath to="/Login">
                        <button>
                            <span>Oddaj</span>
                            <span>rzeczy</span>
                        </button>
                    </RouterPath>
                </div>
            </section>
        </>
    )
}

export default Steps
