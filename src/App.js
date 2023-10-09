import React, { useState } from 'react';
import './App.css';

import PageContainer from './components/PageContainer';

function App() {
  const [selectedPage, setPage] = useState('homePage');

  return (
    <section id="content_body">
      <section id="body_header">
      </section>
      <section id="body_main">
        <PageContainer />
      </section>
      <section id="body_footer">
      </section>
    </section>
  );
}

export default App;
