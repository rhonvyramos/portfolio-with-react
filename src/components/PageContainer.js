import React, { useState } from "react";
import NavBar from "./navbar";
import HomePage from "./homepage";
import ResumePage from "./resume";
import ProjectPage from "./projects";
import ContactPage from "./contacts";

export default function PageContainer() {
    const [selectedPage, setPage] = useState('Home');

    const renderPage = () => {
        if(selectedPage === 'Home') { return <HomePage />}
        if(selectedPage === 'Resume') { return <ResumePage />}
        if(selectedPage === 'Projects') { return <ProjectPage />}
        if(selectedPage === 'Contacts') { return <ContactPage />}
    }

    const handlePageChange = (page) => setPage(page);

    return (
        <div>
            <NavBar selectedPage={selectedPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}