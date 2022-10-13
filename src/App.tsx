import React, { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import { Routes, Route } from 'react-router-dom';
import { Endpoints } from './endpoints';
import { ProductList, Form, Header } from './components';

function App() {
    const { tg, handleToggleButton } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [tg]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path={Endpoints.Form} element={<Form />} />
            </Routes>
        </div>
    );
}

export default App;
