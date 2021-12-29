import React from 'react';
import { Form } from 'react-bootstrap';
import WindowTypes from '../Dynamics/WindowTypes';
import ColorPick from '../Dynamics/ColorPick';
import VitrageType from '../Dynamics/VitrageType';

const profileTypes = [
    {
        value: 'pr26',
        label: 'Profilco PR26'
    },
    {
        value: 'pr52',
        label: 'Profilco PR52'
    },
    {
        value: 'cor60',
        label: 'Cortizo COR60'
    },
    {
        value: 'cor80',
        label: 'Cortizo COR80'
    },
    {
        value: 'pr50',
        label: 'Profilco PR50'
    }
];

const AluJoinery = () => {
    return (
        <div id="product-reqs">
            <h5 className="text-center">Aluminium Joinery</h5>
            <div className="dropdown-divider mb-3" />

            <Form>
                <WindowTypes />
                <div className="dropdown-divider my-3" />

                <Form.Group className="my-1">
                    <h6>Desired joinery profile</h6>
                    {profileTypes.map((item, index) => (
                        <Form.Check
                            inline
                            type="radio"
                            label={item.label}
                            name={item.value}
                            id={item.value}
                            key={index}
                        />
                    ))}
                </Form.Group>

                <div className="dropdown-divider my-3" />
                <VitrageType />
                <div className="dropdown-divider my-3" />
                <ColorPick />
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

export default AluJoinery;
