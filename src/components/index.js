import React, { useState } from 'react';
import Products from './Products';
import ProductRequirements from './ProductRequirements/';
import PersonalInfo from './PersonalInfo';
import QuoteDetails from './QuoteDetails';
import { QuoteStyles } from './quoteElements';
import { products } from './Dynamics/productList';

const GetQuote = () => {
    const [activeProduct, setActiveProduct] = useState('PVC Joinery');

    return (
        <QuoteStyles>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Products
                            products={products}
                            activeProduct={activeProduct}
                            setActiveProduct={setActiveProduct}
                        />
                    </div>

                    <div className="col-lg-9 p-4">
                        <ProductRequirements activeProduct={activeProduct} />
                    </div>
                </div>

                <div className="py-4" />
                <QuoteDetails />
                <div className="py-4" />
                <PersonalInfo />
            </div>
        </QuoteStyles>
    );
};

export default GetQuote;
