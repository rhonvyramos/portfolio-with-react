import React from "react";
import "../styles/homepage.css"
import picture from "../images/Ramos_RhonVincent.JPG"

export default function HomePage({selectedPage, setPage}) {
    console.log("Selected page is: " + selectedPage);
    return (
        <section id="homepage_body">
            <div className="text_margin">
                <h1 id="homepage_h1" className="text_header">About Me!</h1>
                <img src={picture}/>
                <p className="text_paragraph">
                    Hi, my name is Rhon Vincent Ramos! I can be trusted to use various computer equipment and is specialized in full-stack programming!
                </p>
            </div>
        </section>
    )
}