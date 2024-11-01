import React from 'react';
import bannerImage from '../../../public/banner.png'


const Banner = () => {
    return (
        <div className='bg-[#1313130D] md:flex justify-center items-center playfair-display p-20 rounded-3xl mb-24'>
            <div>
                <h2 className='text-5xl font-semibold leading-tight mb-8'>Books to freshen up your bookshelf</h2>
                <button className='mr-5 rounded-lg py-4 px-5 bg-[#23BE0A] text-white font-semibold work-sans mb-5'>View The List</button>
            </div>
            <div>
                <img className='w-96 h-96' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;