import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { useTelegram } from './hooks/useTelegram';
import { Routes, Route } from 'react-router-dom';
import { Endpoints } from './endpoints';
import ProductList from './components/ProductList/ProductList';

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
                <Route path={Endpoints.Form} element={<ProductList />} />
            </Routes>
        </div>
    );
}

export default App;
