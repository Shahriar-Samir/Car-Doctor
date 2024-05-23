import React from 'react';

const About = () => {
    return (
        <div className='flex flex-col w-11/12 mx-auto md:full items-center md:flex-row mt-32 md:h-[500px] gap-10'>
            <div className='relative h-full md:w-1/2'>
                <img src='/images/about_us/person.jpg' className='w-full md:w-10/12 h-full object-cover'/>
                <img src='/images/about_us/parts.jpg' className='w-8/12 h-10/12 absolute bottom-[-40px] right-[0px] border-[10px] border-white object-cover'/>
            </div>
            <div className='h-full md:w-1/2 '>
                <h1 className='font-semibold text-common-color mt-5'>About Us</h1>
                <h1 className='text-2xl md:text-5xl font-bold text-black mt-6 text-center'>We are qualified & of experience in this field</h1>
                <p className='mt-5 text-center md:text-start'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, quasi voluptatum. Illum asperiores obcaecati quisquam hic voluptates culpa inventore qui? Necessitatibus illum praesentium inventore, doloribus aut fugiat. Culpa, porro soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, aliquam distinctio? Rem quibusdam quam perspiciatis possimus corporis numquam asperiores laboriosam?
                </p>
                <button className='mx-auto block md:inline p-3 bg-common-color text-white font-semibold mt-5'>Get More Info</button>
            </div>
        </div>
    );
};

export default About;