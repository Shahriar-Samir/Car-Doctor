import React from 'react';

const Details = () => {
    return (
        <div className='bg-black flex justify-center gap-20 items-center text-white h-[180px] mt-32'>
                <div className='flex gap-3'>
                    <img src='/icons/calender.svg'/>
                    <div>
                        <p>We are open mondey-friday</p>
                        <p>7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img src='/icons/phone.svg'/>
                    <div>
                        <p>We are open mondey-friday</p>
                        <p>7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img src='/icons/location.svg'/>
                    <div>
                        <p>We are open mondey-friday</p>
                        <p>7:00 am - 9:00 pm</p>
                    </div>
                </div>
        </div>
    );
};

export default Details;