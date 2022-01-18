import React, { useState } from 'react';
import Products from './Products';
import ProductRequirements from './ProductRequirements';
import QuoteDetails from './QuoteDetails';
import { QuoteStyles } from './quoteElements.js';

export default function GetQuote() {
    const [activeProduct, setActiveProduct] = useState('PVC Joinery');
    const [quoteData, setQuoteData] = useState({});

    return (
        <QuoteStyles>
            <div className="container">
                    <div className="row">
                        <div className="col-lg-3 p-3" id="products-list">
                            <Products
                                activeProduct={activeProduct}
                                setActiveProduct={setActiveProduct}
                            />
                        </div>
                        <div className="col-lg-9 p-3">
                            <ProductRequirements
                                activeProduct={activeProduct}
                            />
                        </div>
                    </div>
            </div>
        </QuoteStyles>
    );
} 
