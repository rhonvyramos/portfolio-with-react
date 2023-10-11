import React, { useState } from 'react';
import './App.css';

import PageContainer from './components/PageContainer';

function App(handlePageChange) {
  const [selectedPage, setPage] = useState('homePage');

  return (
    <section id="content_body">
      <section id="body_header">
        <section id='header_introduction'>
          <p id='introduction_text'>
            Hello, my name is Rhon Vincent Ramos! Go ahead and explore my portfolio to checkout my experience!
          </p>
        </section>
      </section>
      <section id="body_main">
        <PageContainer />
      </section>
      <section id="body_footer">
        <section id="footer_icon_links">
          <div id="link_name" className="footer_icon">
            <p>My Phone: 123-456-7890</p>
          </div>
          <div id="link_email" className="footer_icon">
            <p>My Email: goober@goobmail.com</p>
          </div>
          <div id="link_github" className="footer_icon">
            <a href='https://github.com/rhonvyramos'>Go to my GitHub Profile</a>
          </div>
          <div id="link_icon" className="footer_icon">&#128578;</div>
        </section>
      </section>
    </section>
  );
}

export default App;
