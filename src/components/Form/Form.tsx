import React, { ButtonHTMLAttributes } from 'react';
import './Form.css';

const Form: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button {...props} className={'button ' + props.className} />
    );
};

export default Form;
