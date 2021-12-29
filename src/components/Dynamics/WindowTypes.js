import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

const windowTypes = [
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-1-1-thumb.jpg',
        fields: 2
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-1-2-thumb.jpg',
        fields: 3
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-1-3-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-1-4-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-1-5-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-1-6-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-1-7-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-1-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-2-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-3-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-4-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-5-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-6-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-7-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-8-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-9-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-10-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-11-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-12-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-13-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-14-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-15-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-16-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-2-17-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-3-1-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-3-2-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-3-3-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-3-4-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-3-5-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-3-6-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-3-7-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-3-8-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-3-9-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-3-10-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-1-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-2-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-3-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-4-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-5-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-6-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-7-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-8-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-9-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-10-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-11-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-4-12-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-5-1-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-5-2-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-5-3-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-5-4-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-5-5-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-5-6-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-1-1-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-1-2-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-1-3-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-1-4-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-1-5-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-1-6-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-1-7-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-1-8-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-1-9-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-1-10-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-2-1-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-2-2-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-2-3-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/u-2-4-thumb.jpg'
    }
];

const responsive = {
    laptopL: {
        breakpoint: { max: 14400, min: 1024 },
        items: 5
    },
    laptop: {
        breakpoint: { max: 1024, min: 998 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 998, min: 768 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 768, min: 464 },
        items: 3
    },
    mobileL: {
        breakpoint: { max: 464, min: 375 },
        items: 2
    },
    mobileM: {
        breakpoint: { max: 375, min: 0 },
        items: 1
    }
};

export default function WindowTypes() {
    {
        /*
    - Carousel with options
    - based on clicked option add n inputs for Dimensions
        */
    }

    const [fieldsVisible, setFieldsVisible] = useState(false);
    const [fieldsCount, setFieldsCount] = useState(null);

    const showFields = (props) => {
        setFieldsCount(props);
        setFieldsVisible(true);
    };

    return (
        <div id="window-types">
            <h6>Window Type</h6>
            <Carousel
                responsive={responsive}
                autoPlay={false}
                infinite={true}
                loop={true}
            >
                {windowTypes.map((item, index) => (
                    <div key={index} onClick={() => showFields(item.fields)}>
                        <img src={item.type} alt=" " />
                    </div>
                ))}
            </Carousel>

            {fieldsVisible ? (
                <Form.Group>
                    <div className="row">
                        {/* Render based on item.fields integer value */}
                        <div className="col-lg">
                            <Form.Control
                                size="sm"
                                type="number"
                                placeholder="A"
                            />
                        </div>
                        <div className="col-lg">
                            <Form.Control
                                size="sm"
                                type="number"
                                placeholder="B"
                            />
                        </div>
                    </div>
                </Form.Group>
            ) : (
                ''
            )}
        </div>
    );
}
