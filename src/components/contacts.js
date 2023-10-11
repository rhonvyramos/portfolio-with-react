import React from "react";
import "../styles/homepage.css"

export default function ContactPage({selectedPage, setPage}) {
    console.log("Selected page is: " + selectedPage);
    return (
        <section id="contacts_body">
            <div className="text_margin">
                <h1 id="homepage_h1" className="text_header">My Contacts</h1>
                <p className="text_paragraph">
                    I am a Goofy Goober! Here is how you can reach me!
                </p>
            </div>
        </section>
    )
}