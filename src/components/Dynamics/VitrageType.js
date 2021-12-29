import React from 'react';
import { Form } from 'react-bootstrap';

export default function VitrageType() {
    {
        /* 
        When one of the columns gets selected the other one becomses disabled

    - Two sheets - max 4 selected 
    -> thermal, solar, opaque, decorative, ornamental
    Thermal & solar -> only one can be selected
    Opaque, decorative and ornamental -> all can be selected
    
    - Three sheets - max 2 selected
    -> thermal, solar, opaque, decorative, ornamental
    Thermal & solar -> only one can be selected
    Opaque, decorative and ornamental -> only one can be selected
    */
    }
    return (
        <div id="vitrage-type">
            <h6>Vitrage type</h6>

            <div className="row">
                <div className="col-lg-6">
                    <p className="text-center">Two Sheets</p>
                    <Form.Check inline type="radio" label="Thermal Control" />
                    <Form.Check inline type="radio" label="Solar Control" />
                    <Form.Check inline type="radio" label="Opaque" />
                    <Form.Check inline type="radio" label="Decorative" />
                    <Form.Check inline type="radio" label="Ornamental" />
                </div>

                <div className="col-lg-6">
                    <p className="text-center">Three Sheets</p>
                    <Form.Check inline type="radio" label="Thermal Control" />
                    <Form.Check inline type="radio" label="Solar Control" />
                    <Form.Check inline type="radio" label="Opaque" />
                    <Form.Check inline type="radio" label="Decorative" />
                    <Form.Check inline type="radio" label="Ornamental" />
                </div>
            </div>
        </div>
    );
}
