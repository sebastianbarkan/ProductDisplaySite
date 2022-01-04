import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

const PersonalInfo = () => {
    return (
        <div id="personal-info">
            <h4 className="text-center">Get Your Quote</h4>
            <div className="dropdown-divider w-25 mx-auto mb-3" />

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
                <option>Location</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>

            <div className="my-3" />

            <button
                type="submit"
                className="btn btn-primary rounded-0 px-4 d-flex mx-auto"
            >
                Send
            </button>
        </div>
    );
};

export default PersonalInfo;
