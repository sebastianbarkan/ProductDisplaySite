import React, { useState } from 'react';

const Products = ({ products, activeProduct, setActiveProduct }) => {
    return (
        <div id="product-list">
            <h5 className="text-center">Select desired product</h5>
            <div className="dropdown-divider w-25 mx-auto mb-3" />

            <ul>
                {products.map((item, index) => (
                    <li
                        className={activeProduct === item.name ? 'active' : ''}
                        onClick={() => setActiveProduct(item.name)}
                        key={index}
                    >
                        <img src={item.image} alt="" />
                        <div>{item.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
