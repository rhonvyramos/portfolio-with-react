import React from "react";
import "../styles/navbar.css"

export default function NavBar({selectedPage, handlePageChange}) {
    return (
        <nav id="header_navbar">
            <section id="navbar_selections">
                <div>
                    <a href="#home"
                    onClick={() => handlePageChange('Home')}
                    className={selectedPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >Home</a>
                </div>
                <div>
                    <a href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={selectedPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >Resume</a>
                </div>
                <div>
                    <a href="#project"
                    onClick={() => handlePageChange('Projects')}
                    className={selectedPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                    >Projects</a>
                </div>
                <div>
                    <a href="#contact"
                    onClick={() => handlePageChange('Contacts')}
                    className={selectedPage === 'Contacts' ? 'nav-link active' : 'nav-link'}
                    >Contact</a>
                </div>
            </section>
        </nav>
    )
}