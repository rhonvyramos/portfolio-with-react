import React, { useState } from 'react';
import './App.css';

import PageContainer from './components/PageContainer';

function App() {
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
          <div id="link_name" className="footer_icon"></div>
          <div id="link_email" className="footer_icon"></div>
          <div id="link_github" className="footer_icon"></div>
          <div id="link_icon" className="footer_icon"></div>
        </section>
      </section>
    </section>
  );
}

export default App;
