import React, { useEffect } from 'react';
import './App.css';
import { TelegramWebApps } from 'telegram-webapps-types';
import WebApp = TelegramWebApps.WebApp;

// @ts-ignore
const tg: WebApp = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready();
    }, []);

    const handleClose = () => {
        tg.close();
    }

    return (
        <div className="App">
            <button onClick={handleClose}>Закрыть</button>
        </div>
    );
}

export default App;
