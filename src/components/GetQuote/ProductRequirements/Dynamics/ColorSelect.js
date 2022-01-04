import React from 'react';
import { Form } from 'react-bootstrap';
import { RALColors } from '../components/RALColors';
import { WoodImitation } from '../components/WoodImitation';

const ColorSelect = () => {
    /*
    Only 1 can be selected
        -> White
        -> Radio with Wood imitations
        -> Form select with RAL colors
    */
    return (
        <div id="color-select">
            <h5>Desired color</h5>

            <Form.Check label="White" />

            <p>Wood Imitation</p>
            <div className="wood-imitation">
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

            <p>RAL Painting</p>
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
};

export default ColorSelect;
