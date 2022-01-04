import React from 'react';

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

const Products = ({ activeProduct, setActiveProduct }) => {
    return (
        <div id="product-list">
            <h4 className="text-center">Select desired product</h4>
            <div className="dropdown-divider w-25 mx-auto mb-4" />

            <ul>
                {products.map((item, index) => (
                    <li
                        className={activeProduct === item.name ? 'active' : ''}
                        onClick={() => setActiveProduct(item.name)}
                        key={index}
                    >
                        <img src={item.image} alt="" />
                        <div>{item.name}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
