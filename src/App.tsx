import React, { useEffect } from 'react';
import './App.css';
import Header from './Header/Header';
import { useTelegram } from './hooks/useTelegram';
import Button from './Button/Button';

function App() {
    const { tg, handleToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);

    return (
        <div className="App">
            <Header />
            <Button onClick={handleToggleButton}>toggle</Button>
        </div>
    );
}

export default App;
