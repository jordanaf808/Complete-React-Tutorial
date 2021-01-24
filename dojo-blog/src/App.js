// In React 17 we don't need to import React anymore:
// import React from 'react'

import Navbar from './Navbar';
import Home from './Home';

function App() {
  // react auto converts these values to a string
  const title = 'Welcome to the new blog';
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Home />
        <h1>{title}</h1>
      </div>
    </div>
  );
}

//  exported to index.js
export default App;
