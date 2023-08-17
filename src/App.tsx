import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" onClick={() => {
      fetch('https://www.ujoon.site/', {
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'text/plain'
                    },
                    referrerPolicy: "no-referrer"
                })
                .then(res => res.json())
                .then(res => console.log(res))
    }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
    </div>
  );
}

export default App;
