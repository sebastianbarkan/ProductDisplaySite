import React from 'react';
import QSidebar from './QSidebar.js';
import QForm from './QForm.js';
import styled from 'styled-components';

const QuoteStyles = styled.div`
    #sidebar {
        .card {
            .accordion-header {
                h2 {
                    padding-right: 20px;
                }

                button {
                    text-transform: capitalize;
                    padding-right: 10px;

                    &:active,
                    &:focus,
                    &[aria-expanded='true'] {
                        background: transparent;
                        color: black;
                        box-shadow: 0 0 0 transparent;
                        outline: none;
                    }
                }
            }

            .accordion-item {
                border-radius: 0 !important;
                border-left: none;
                border-right: none;
            }

            .accordion-body {
                padding-top: 0;
            }

            ul {
                list-style: none;
                padding-left: 0;

                li {
                    margin: 2px 0;
                }
            }
        }
    }

    @media only screen and (min-width: 998px) {
        #sidebar .card {
            position: sticky;
            top: 100px;
        }
    }

    #quote-form {
        .product-card {
            cursor: pointer;

            img {
                height: 200px;
                object-fit: cover;
            }

            .product-name {
                padding: 5px;
            }
        }
    }
`;

const GetQuote = () => {
    return (
        <QuoteStyles>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 p-1" id="sidebar">
                        <QSidebar />
                    </div>
                    <div className="col-lg-8" id="quote-form">
                        <QForm />
                    </div>
                </div>
            </div>
        </QuoteStyles>
    );
};

export default GetQuote;
