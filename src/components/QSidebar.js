import React, { useState } from 'react';
import { Accordion, FloatingLabel, Form, Modal } from 'react-bootstrap';

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

const QSidebar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="card rounded-0 py-2">
            <h4 className="text-center m-0">Your Offer</h4>
            <div className="dropdown-divider w-25 mx-auto mb-3" />

            <div className="text-center mb-3">
                empty
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
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>

            <div className="my-2" />

            <button
                className="btn btn-primary d-flex rounded-0 text-white mx-auto"
                onClick={() => setShowModal(true)}
            >
                Get Quote
            </button>

            <Modal
                show={showModal}
                backdrop="static"
                onHide={() => setShowModal(false)}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <div className="row">
                            <div className="col">
                                <FloatingLabel
                                    controlId="firstName"
                                    label="First Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder=" " />
                                </FloatingLabel>
                            </div>
                            <div className="col">
                                <FloatingLabel
                                    controlId="lastName"
                                    label="Last Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder=" " />
                                </FloatingLabel>
                            </div>
                        </div>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </FloatingLabel>

                        <Form.Select aria-label="Default select example">
                            {/* If location value is 1 or 2, return warning */}
                            <option>Location</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>

                <Modal.Footer className="justify-content-between">
                    <div className="btn" onClick={() => setShowModal(false)}>
                        Close
                    </div>
                    <div className="btn" onClick={() => setShowModal(false)}>
                        Send
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default QSidebar;
