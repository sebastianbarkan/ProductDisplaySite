import React, { useState } from 'react';
import { Form, InputGroup, Modal } from 'react-bootstrap';
import { RALColors } from './RALColors';
import styled from 'styled-components';
import './modal-styles.css';

const products = [
    {
        image: 'https://adecris.ro/wp-content/gallery/tamplarie-pvc/2.jpg',
        name: 'PVC Joinery'
    },
    {
        image: 'https://ferestre-azzuro.ro/wp-content/uploads/2018/10/Azzuro-Tamplarie-Aluminiu-Slider-2-1024x341.jpg',
        name: 'Aluminium Joinery'
    },
    {
        image: 'https://www.tamplarie.com/wp-content/uploads/2016/05/tamplarie-lemn-900x500.jpg',
        name: 'Laminated Wood Joinery'
    },
    {
        image: 'https://www.teraglass.ro/filehandler/Productfile/1000x1000/sticla-atmosfera-1-412.jpg?v=637170994280378646',
        name: 'Glass'
    },
    {
        image: 'https://alcogroup.ro/wp-content/uploads/2021/02/Balustrada_Sticla_-_AlcoGroup-400x600.jpg',
        name: 'Railway'
    },
    {
        image: 'https://www.usi-sibiu.ro/wp-content/uploads/2020/03/tip-rulou-0603201-scaled.jpg',
        name: 'Garage Door'
    },
    {
        image: 'http://practix.ro/wp-content/uploads/2021/04/Rulouri-aplicate-Practix-1.png',
        name: 'Exterior Roller'
    },
    {
        image: 'https://rolden.ro/cms/model_prod/rolete%20simple.png',
        name: 'Textile Roller'
    },
    {
        image: 'https://www.brico-creativ.ro/wp-content/uploads/2016/05/plase-1-300x225.jpg',
        name: 'Insect Nets'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTebe69XDiB9DrHyOe3NZc5COSHUM50ILTaOA&usqp=CAU',
        name: 'Canopy'
    },
    {
        image: 'https://www.pergolaprestige.ro/wp-content/uploads/copertina-retractabila-helix-1024x538.jpg',
        name: 'Blinds'
    },
    {
        image: 'http://local-consulting.ro/wp-content/uploads/2015/05/Panel-ornanemtal-aluminiu-inox.jpg',
        name: 'Aluminium Ornamental Panel'
    }
];

const FormStyles = styled.div`
    .modal-dialog {
        background: red !important;
    }
`;

const QForm = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <FormStyles>
            <div className="row">
                {products.map((item, index) => (
                    <div className="col-xl-4 col-lg-6 p-1" key={index}>
                        <div
                            className="card product-card rounded-0"
                            onClick={() => setShowModal(true)}
                        >
                            <img src={item.image} alt="" />
                            <div className="product-name text-center">
                                {item.name}
                            </div>
                        </div>
                    </div>
                ))}

                <Modal
                    id="product-modal"
                    size="lg"
                    show={showModal}
                    backdrop="static"
                    onHide={() => setShowModal(false)}
                    centered
                >
                    <Modal.Header closeButton>Product Name</Modal.Header>

                    <Modal.Body>
                        <div className="row">
                            <div className="col">
                                <InputGroup className="mb-2">
                                    <Form.Control
                                        id="inlineFormInputGroup"
                                        placeholder="Height"
                                        type="number"
                                    />
                                    <InputGroup.Text>mm</InputGroup.Text>
                                </InputGroup>
                            </div>
                            <div className="col">
                                <InputGroup className="mb-2">
                                    <Form.Control
                                        id="inlineFormInputGroup"
                                        placeholder="Width"
                                        type="number"
                                    />
                                    <InputGroup.Text>mm</InputGroup.Text>
                                </InputGroup>
                            </div>
                        </div>

                        <Form.Select>
                            <option value="">Select color</option>
                            {RALColors.map((item, index) => (
                                <option
                                    value={item.RAL}
                                    key={index}
                                    style={{
                                        backgroundColor: item.HEX,
                                        color: 'auto',
                                        mixBlendMode: 'difference'
                                    }}
                                >
                                    {item.RAL}
                                </option>
                            ))}
                        </Form.Select>

                        <div className="my-2">
                            Features:
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="feature1"
                                    id="feature1"
                                />
                                <label
                                    className="form-check-label"
                                    for="feature1"
                                >
                                    Feature1
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="feature2"
                                    id="feature2"
                                />
                                <label
                                    className="form-check-label"
                                    for="feature2"
                                >
                                    Feature2
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="feature3"
                                    id="feature3"
                                />
                                <label
                                    className="form-check-label"
                                    for="feature3"
                                >
                                    Feature3
                                </label>
                            </div>
                        </div>

                        <div className="my-2">
                            Opening:
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radio"
                                    id="radio1"
                                />
                                <label
                                    className="form-check-label"
                                    for="radio1"
                                >
                                    None
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radio"
                                    id="radio2"
                                />
                                <label
                                    className="form-check-label"
                                    for="radio2"
                                >
                                    Side-Hung Inward
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radio"
                                    id="radio3"
                                />
                                <label
                                    className="form-check-label"
                                    for="radio3"
                                >
                                    Side-Hung Inward
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radio"
                                    id="radio4"
                                />
                                <label
                                    className="form-check-label"
                                    for="radio4"
                                >
                                    Tilt and Turn
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="radio"
                                    id="radio5"
                                />
                                <label
                                    className="form-check-label"
                                    for="radio5"
                                >
                                    ...
                                </label>
                            </div>
                        </div>

                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Mentions</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer className="justify-content-between">
                        <div
                            className="btn btn-primary rounded-0"
                            onClick={() => setShowModal(false)}
                        >
                            Cancel
                        </div>
                        <div
                            className="btn btn-primary rounded-0"
                            onClick={() => setShowModal(false)}
                        >
                            Confirm
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        </FormStyles>
    );
};

export default QForm;
