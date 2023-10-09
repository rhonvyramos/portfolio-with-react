import React from "react";
import "../styles/homepage.css"

export default function HomePage({selectedPage, setPage}) {
    console.log("Selected page is: " + selectedPage);
    return (
        <section id="homepage_body">
            <div>
                <h1 id="homepage_h1">About Me!</h1>
                <p>
                    I am a Goofy Goober!
                </p>
            </div>
        </section>
    )
}