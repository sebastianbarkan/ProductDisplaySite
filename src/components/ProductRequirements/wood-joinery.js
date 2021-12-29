import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import WindowTypes from '../Dynamics/WindowTypes';
import VitrageType from '../Dynamics/VitrageType';
import { RALColors } from '../Dynamics/RALColors';

const WoodJoinery = () => {
    const [showRAL, setShowRAL] = useState(false);

    return (
        <div id="product-reqs">
            <h5 className="text-center">Laminated Wood Joinery</h5>
            <div className="dropdown-divider mb-3" />
            <Form>
                <WindowTypes />
                <div className="dropdown-divider my-3" />
                <VitrageType />
                <div className="dropdown-divider my-3" />

                <h6>Desired Color</h6>
                <Form.Check type="radio" label="Northern Pine" />
                <Form.Check type="radio" label="Oak" />

                <div className="dropdown-divider my-3" />

                <h6>Aluminium Plated</h6>
                <Form.Check
                    label="Yes"
                    id="plate"
                    onClick={() => setShowRAL(!showRAL)}
                />
                {showRAL ? (
                    <Form.Select aria-label="Default select example">
                        <option>RAL Painting</option>
                        {RALColors.map((item, index) => (
                            <option
                                value={item.RAL}
                                key={index}
                                style={{
                                    backgroundColor: item.HEX
                                }}
                            >
                                {item.RAL + ' ' + item.English}
                            </option>
                        ))}
                    </Form.Select>
                ) : (
                    ''
                )}

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

export default WoodJoinery;
