import React from 'react';
import { Form } from 'react-bootstrap';
import VitrageType from '../Dynamics/VitrageType';

const thickSize = ['24', '34', '40', '48', ' 52'];

const Glass = () => {
    return (
        <div id="product-reqs">
            <h5 className="text-center">Glass</h5>
            <div className="dropdown-divider mb-3" />

            <Form>
                <h6>Dimensions</h6>
                <Form.Control type="number" placeholder="Height" />
                <Form.Control type="number" placeholder="Width" />

                <div className="dropdown-divider my-3" />
                <VitrageType />
                <div className="dropdown-divider my-3" />

                <h6>Thickness</h6>
                {thickSize.map((item, index) => (
                    <Form.Check
                        inline
                        type="radio"
                        label={`${item}mm`}
                        key={index}
                    />
                ))}
                <div className="dropdown-divider my-3" />

                <Form.Control
                    as="textarea"
                    placeholder="Mentions"
                    style={{ height: '100px' }}
                />

                <button className="btn btn-primary rounded-0 d-flex mx-auto">
                    Confirm
                </button>
            </Form>
        </div>
    );
};

export default Glass;
