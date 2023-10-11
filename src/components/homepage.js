import React from "react";
import "../styles/homepage.css"

export default function HomePage({selectedPage, setPage}) {
    console.log("Selected page is: " + selectedPage);
    return (
        <section id="homepage_body">
            <div className="text_margin">
                <h1 id="homepage_h1" className="text_header">About Me!</h1>
                <p className="text_paragraph">
                    I am a Goofy Goober!
                </p>
            </div>
        </section>
    )
}