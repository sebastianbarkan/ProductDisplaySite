import React from 'react';
import PVCJoinery from './pvc-joinery';
import AluJoinery from './alu-joinery';
import WoodJoinery from './wood-joinery';
import Glass from './glass';

const ProductRequirements = ({ activeProduct }) => {
    switch (activeProduct) {
        case 'PVC Joinery':
            return <PVCJoinery />;
        case 'Aluminium Joinery':
            return <AluJoinery />;
        case 'Laminated Wood Joinery':
            return <WoodJoinery />;
        case 'Glass':
            return <Glass />;
        case 'Railway':
            return <h2>Railway</h2>;
        case 'Garage Door':
            return <h2>Garage Door</h2>;
        case 'Exterior Roller':
            return <h2>Exterior Roller</h2>;
        case 'Textile Roller':
            return <h2>Textile Roller</h2>;
        case 'Insect Nets':
            return <h2>Insect Nets</h2>;
        case 'Canopy':
            return <h2>Canopy</h2>;
        case 'Blinds':
            return <h2>Blinds</h2>;
        case 'Aluminium Ornamental Panel':
            return <h2>Aluminium Ornamental Panel</h2>;

        default:
            break;
    }
};

export default ProductRequirements;
