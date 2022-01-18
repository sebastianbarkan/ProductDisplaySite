import React from 'react';
import PVCJoinery from './pvc-joinery';
import AluminiumJoinery from './AluminiumJoinery';
import WoodJoinery from './WoodJoinery';
import Glass from './glass';
import Railway from './Railway';
import ExteriorRoller from './ExteriorRoller'
import TextileRoller from './TextileRoller';
import InsectNet from './InsectNet';
import Blinds from './Blinds';
import Canopy from './Canopy';
import OrnamentalPanel from './OrnamentalPanel';
const ProductRequirements = ({ activeProduct }) => {
    switch (activeProduct) {
        case 'PVC Joinery':
            return <PVCJoinery />;
        case 'Aluminium Joinery':
            return <AluminiumJoinery/>;
        case 'Laminated Wood Joinery':
            return <WoodJoinery/>;
        case 'Glass':
            return <Glass/>;
        case 'Railway':
            return <Railway/>;
        case 'Garage Door':
            return <h2>{activeProduct}</h2>;
        case 'Exterior Roller':
            return <ExteriorRoller/>;
        case 'Textile Roller':
            return <TextileRoller/>;
        case 'Insect Nets':
            return <InsectNet/>;
        case 'Canopy':
            return <Canopy/>;
        case 'Blinds':
            return <Blinds/>;
        case 'Aluminium Ornamental Panel':
            return <OrnamentalPanel/>;

        default:
            break;
    }
};

export default ProductRequirements;
