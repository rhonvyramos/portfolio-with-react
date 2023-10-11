import React from "react";
import "../styles/homepage.css"

export default function ProjectPage({selectedPage, setPage}) {
    console.log("Selected page is: " + selectedPage);
    return (
        <section id="projects_body">
            <div className="text_margin">
                <h1 id="homepage_h1" className="text_header">Projects</h1>
                <p className="text_paragraph">
                    I am a Goofy Goober! Here are my projects!
                </p>
            </div>
        </section>
    )
}