import React, { HTMLAttributes } from 'react';
import { Button } from '../index';
import { useTelegram } from '../../hooks/useTelegram';
import './Header.css';

const Header: React.FC<HTMLAttributes<HTMLElement>> = (props) => {
    const { user, handleClose } = useTelegram();

    return (
        <header {...props} className={'header'}>
            <Button onClick={handleClose}>Закрыть</Button>
            <span className={'username'}>{user?.username}</span>
        </header>
    );
};

export default Header;
