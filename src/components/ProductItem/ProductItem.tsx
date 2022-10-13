import React from 'react';
import { Button } from '../index';
import { Product } from '../ProductList/types';
import './ProductItem.css';

interface Props {
    className: string;
    onAdd: (product: Product) => void;
    product: Product;
}

const ProductItem: React.FC<Props> = ({product, className, onAdd}) => {
    const onAddHandler = () => {
        onAdd(product);
    };

    return (
        <div className={'product ' + className}>
            <div className={'img'} />
            <div className={'title'}>{product.title}</div>
            <div className={'description'}>{product.description}</div>
            <div className={'price'}>
                <span>Стоимость: <b>{product.price}</b></span>
            </div>
            <Button className={'add-btn'} onClick={onAddHandler}>
                Добавить в корзину
            </Button>
        </div>
    );
};

export default ProductItem;
