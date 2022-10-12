import React, { HTMLAttributes } from 'react';
import Button from '../Button/Button';

const Header: React.FC<HTMLAttributes<HTMLElement>> = (props) => {
    // @ts-ignore
    const tg = window.Telegram.WebApp;

    const handleClose = () => {
        tg.close();
    }

    return (
        <header {...props} className={'header'}>
            <Button onClick={handleClose}>Закрыть</Button>
            <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
        </header>
    );
};

export default Header;
