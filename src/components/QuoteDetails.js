import React from 'react';
import { Accordion } from 'react-bootstrap';

const dummyData = [
    {
        productName: 'Laminated Wood Joinery',
        specs: [
            {
                type: 'Type',
                value: 'Door'
            },
            {
                type: 'Opening',
                value: '2 ways'
            },
            {
                type: 'Height',
                value: '1980mm'
            },
            {
                type: 'Width',
                value: '1410mm'
            },
            {
                type: 'Color',
                value: 'RAL 9018'
            }
        ]
    },
    {
        productName: 'aluminum ornamental panel with stainless steel insert',
        specs: [
            {
                type: 'Type',
                value: 'Door'
            },
            {
                type: 'Opening',
                value: '2 ways'
            },
            {
                type: 'Height',
                value: '1980mm'
            },
            {
                type: 'Width',
                value: '1410mm'
            },
            {
                type: 'Color',
                value: 'RAL 9018'
            }
        ]
    }
];

const QuoteDetails = () => {
    return (
        <div>
            <h4 className="text-center">Your Quote</h4>
            <div className="dropdown-divider w-25 mx-auto mb-3" />

            <div className="text-center mb-3">
                <h5>Empty</h5>
                <br />
                OR
            </div>

            <Accordion className="requested-list" defaultActiveKey="0">
                {dummyData.map((item, index) => (
                    <Accordion.Item eventKey={index} key={index}>
                        <Accordion.Header>{item.productName}</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                {item.specs.map((spec, i) => (
                                    <li key={i}>
                                        {spec.type}: {spec.value}
                                    </li>
                                ))}
                                <div>
                                    Quantity: <br />
                                    <div className="d-flex flex-row align-items-center  justify-content-between">
                                        <h5>3</h5>

                                        <div className="d-flex flex-row">
                                            <button className="btn btn-dark rounded-0">
                                                +
                                            </button>
                                            <button className="btn btn-dark rounded-0">
                                                -
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <button className="btn btn-danger rounded-0 d-flex mx-auto">
                                    Remove
                                </button>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </div>
    );
};

export default QuoteDetails;
