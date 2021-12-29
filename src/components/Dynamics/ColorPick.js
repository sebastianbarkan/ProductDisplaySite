import React from 'react';
import { Form } from 'react-bootstrap';
import { WoodImitation } from './WoodImitation';
import { RALColors } from './RALColors';

export default function Colors() {
    {
        /*
    - Only 1 can be selected
    -> White
    -> Radio with Wood imitations
    -> Form select with RAL colors
    
    */
    }
    return (
        <div id="color-picker">
            <h6>Desired Color</h6>

            <Form.Check label="White" />

            <div id="wood-imitation">
                {WoodImitation.map((item, index) => (
                    <Form.Check type="radio" id={item.name} key={index}>
                        <Form.Check.Input type="radio" id={item.name} />
                        <Form.Check.Label>
                            <img src={item.source} alt={item.name} />
                            {/* {item.name} */}
                        </Form.Check.Label>
                    </Form.Check>
                ))}
            </div>

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
        </div>
    );
}
