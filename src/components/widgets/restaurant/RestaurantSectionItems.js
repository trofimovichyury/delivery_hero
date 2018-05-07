import React from 'react';
import style from './RestaurantSectionItems.css';

const RestaurantSectionItems = ({ items }) => {
    const handleOnButtonClick = (product) => console.log(`Clicked on product with id ${product.id}`);

    const renderProducts = () => (
        items && items.map(product => (
            <div
                key={product.id}
                className={style.productContainer}
            >
                <div className={style.productName}>{ product.name }</div>
                <div className={style.productPrice}>{ product.price }</div>
                <div
                    className={style.productButton}
                    onClick={() => handleOnButtonClick(product)}
                >Button</div>
            </div>
        ))
    );

    return (
        <div>{ renderProducts() }</div>
    )
};

export default RestaurantSectionItems;
