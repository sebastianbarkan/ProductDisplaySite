import React from 'react';

const windowTypes = [
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-1-1-thumb.jpg'
    },
    {
        type: 'https://www.tamplarie.com/comanda-online/assets/img/w-1-2-thumb.jpg'
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

const WindowTypes = () => {
    return <div></div>;
};

export default WindowTypes;
