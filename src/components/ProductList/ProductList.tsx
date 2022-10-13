import React, { ButtonHTMLAttributes } from 'react';
import './ProductList.css';

const ProductList: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button {...props} className={'button ' + props.className} />
    );
};

export default ProductList;
