import React from 'react';

const About = () => {
    return (
        <div className='flex mt-32 h-[500px] gap-10'>
            <div className='relative h-full w-1/2'>
                <img src='/images/about_us/person.jpg' className='w-10/12 h-full object-cover'/>
                <img src='/images/about_us/parts.jpg' className='w-[330px] h-[320px] absolute bottom-[-40px] right-[0px] border-[10px] border-white object-cover'/>
            </div>
            <div className='h-full w-1/2'>
                <h1 className='font-semibold text-common-color'>About Us</h1>
                <h1 className='text-5xl font-bold text-black mt-6'>We are qualified & of experience in this field</h1>
                <p className='mt-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, quasi voluptatum. Illum asperiores obcaecati quisquam hic voluptates culpa inventore qui? Necessitatibus illum praesentium inventore, doloribus aut fugiat. Culpa, porro soluta. 
                </p>
                <br/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem accusamus iste magnam libero modi quo sunt temporibus eveniet, iusto ab ea, molestias nulla. Totam cum quibusdam corrupti quasi dicta aliquam exercitationem dolorum consectetur debitis repudiandae ratione numquam iste, possimus similique.</p>
                <button className='p-3 bg-common-color text-white font-semibold mt-10'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;