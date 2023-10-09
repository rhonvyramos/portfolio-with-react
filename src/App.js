import React, { useState } from 'react';
import './App.css';

import NavBar from './components/navbar';
import HomePage from './components/homepage';

function App() {
  const [selectedPage, setPage] = useState('homePage');

  return (
    <section id="content_body">
      <section id="body_header">
        <NavBar />
      </section>
      <section id="body_main">
        <HomePage selectedPage={selectedPage} setPage={setPage} />
      </section>
      <section id="body_footer">
      </section>
    </section>
  );
}

export default App;
