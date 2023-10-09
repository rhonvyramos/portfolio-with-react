import React from "react";
import "../styles/navbar.css"

export default function NavBar() {
    return (
        /*<nav>
        <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
        }}>
            <div>
            <a href="#">Home</a>
            </div>
            <div>
            <a href="#">Login</a>
            </div>
            <div>
            <a href="#">Register</a>
            </div>
            <div>
            <a href="#">About</a>
            </div>
            <div>
            <a href="#">Contact</a>
            </div>
        </section>
        </nav>*/

        <nav id="header_navbar">
            <section id="navbar_selections">
                <div>
                    <a href="#">Home</a>
                </div>
                <div>
                    <a href="#">Login</a>
                </div>
                <div>
                    <a href="#">Register</a>
                </div>
                <div>
                    <a href="#">About</a>
                </div>
                <div>
                    <a href="#">Contact</a>
                </div>
            </section>
        </nav>
    )
}