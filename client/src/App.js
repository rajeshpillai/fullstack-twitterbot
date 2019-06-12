import React, { useEffect } from 'react';
import './App.css';

import axios from 'axios';

function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: '/timeline',
        method: 'get'
      });
      return response;
    }
    let timelines = fetchData();
    console.log(timelines);
  });

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter Bot
        </a>
      </header>
    </div>
  );
}

export default App;
