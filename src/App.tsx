import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        console.log('Try to connect!')
    }, [isConnected])

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
                .then(res => setIsConnected(true))
                .catch(e => setIsConnected(false))
    }}>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>Click above image...</div>
            <div>
                {
                    isConnected
                    ? 'Connected!'
                    : 'Not Connected!'
                }
            </div>
        </header>
    </div>
    );
    }

export default App;
