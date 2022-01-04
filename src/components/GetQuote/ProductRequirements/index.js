import React from 'react';
import PVCJoinery from './pvc-joinery';

const ProductRequirements = ({ activeProduct }) => {
    switch (activeProduct) {
        case 'PVC Joinery':
            return <PVCJoinery />;
        case 'Aluminium Joinery':
            return <h2>{activeProduct}</h2>;
        case 'Laminated Wood Joinery':
            return <h2>{activeProduct}</h2>;
        case 'Glass':
            return <h2>{activeProduct}</h2>;
        case 'Railway':
            return <h2>{activeProduct}</h2>;
        case 'Garage Door':
            return <h2>{activeProduct}</h2>;
        case 'Exterior Roller':
            return <h2>{activeProduct}</h2>;
        case 'Textile Roller':
            return <h2>{activeProduct}</h2>;
        case 'Insect Nets':
            return <h2>{activeProduct}</h2>;
        case 'Canopy':
            return <h2>{activeProduct}</h2>;
        case 'Blinds':
            return <h2>{activeProduct}</h2>;
        case 'Aluminium Ornamental Panel':
            return <h2>{activeProduct}</h2>;

        default:
            break;
    }
};

export default ProductRequirements;
