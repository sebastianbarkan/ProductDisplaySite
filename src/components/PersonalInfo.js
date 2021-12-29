import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const PersonalInfo = () => {
    return (
        <div>
            <h4 className="text-center">Get Your Quote</h4>
            <div className="dropdown-divider w-25 mx-auto mb-3" />

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
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>

                <Form.Select aria-label="Default select example">
                    {/* If location value is 1 or 2, return warning */}
                    <option>Location</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>

                <button
                    type="submit"
                    className="btn btn-primary rounded-0 d-flex mx-auto"
                >
                    Send
                </button>
            </Form>
        </div>
    );
};

export default PersonalInfo;
