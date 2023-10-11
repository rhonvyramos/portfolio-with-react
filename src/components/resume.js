import React from "react";

export default function ResumePage({selectedPage, setPage}) {
    console.log("Selected page is: " + selectedPage);
    return (
        <section id="resume_body">
            <div className="text_margin">
                <h1 id="homepage_h1" className="text_header">My Resume</h1>
                <p className="text_paragraph">
                    I am a Goofy Goober! Here is my resume!
                </p>
            </div>
        </section>
    )
}