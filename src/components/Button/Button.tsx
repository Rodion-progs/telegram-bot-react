import React, { ButtonHTMLAttributes } from 'react';
import './Button.css';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button {...props} className={'button ' + props.className} />
    );
};

export default Button;
