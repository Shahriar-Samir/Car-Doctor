import React from 'react';

const PageBanner = ({title}) => {
 
    return (
        <div className="bg-[linear-gradient(to_top,rgba(0,0,0,0.4),rgba(0,0,0,0)),linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0)),url('/images/checkout/checkout.png')] bg-cover h-[300px] flex justify-between text-white items-center flex-col">
            <h1 className='ms-20 font-bold text-4xl self-start my-auto'>{title}</h1>
            <div className='bg-common-color p-3 '>
                <p>Home/{title}</p>
            </div>
        </div>
    );
};

export default PageBanner;