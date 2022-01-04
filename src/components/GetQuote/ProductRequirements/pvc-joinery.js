import React from 'react';
import ColorSelect from './Dynamics/ColorSelect';

const PVCJoinery = () => {
    return (
        <div>
            <h4 className="text-center">PVC Joinery</h4>
            <div className="dropdown-divider w-50 mx-auto mb-4" />

            <div className="dropdown-divider gray my-3" />

            <div className="form-group row">
                <div className="col">
                    <label htmlFor="height">Height</label>
                    <input
                        className="form-control"
                        id="height"
                        name="height"
                        type="text"
                    />
                </div>
                <div className="col">
                    <label htmlFor="width">Width</label>
                    <input
                        className="form-control"
                        id="width"
                        name="width"
                        type="text"
                    />
                </div>
            </div>

            <button className="btn btn-secondary rounded-0 d-flex mx-auto mt-3">
                Confirm
            </button>

            {/* <ColorSelect /> */}

            <div className="dropdown-divider gray my-3" />
        </div>
    );
};

export default PVCJoinery;
