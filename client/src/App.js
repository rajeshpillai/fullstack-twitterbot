import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios';

function App() {
  const [timelines, setTimelines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: '/timeline',
        method: 'get'
      });
      console.log(response.data);
      setTimelines(response.data)
    }
    fetchData();
  }, []);

  function showTimelines() {
    const view = timelines.map((t) => {
      return (
        <li className="item">
          {t.text}
        </li>
      )
    });
    return view;
  }
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
      <ol>
        {showTimelines()}
      </ol>
    </div>
  );
}

export default App;
