import React from 'react';
import { Link } from 'react-router-dom';

const ReadList = ({ book }) => {
    const { bookName, author, tags, rating, image, bookId, review, totalPages, publisher, yearOfPublishing, category } = book;


    return (
        <div className='mt-7 mb-5'>
            <div className="bg-base-100 shadow-xl border-2 px-5 gap-10 flex items-center rounded-2xl">
                <div>
                    <img
                        className='w-56 h-60 rounded-xl'
                        src={image}
                        alt="Album" />
                </div>
                <div className='w-full'>
                    <div>
                        <h2 className='playfair-display mt-4 font-bold text-2xl text-[#131313]'>{bookName}</h2>
                        <p className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>By : {author}</p>
                    </div>
                    <div className='pb-5'>
                        <p>
                            <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC] mr-5'><span className='font-bold'>Tags </span></button>

                            {
                                tags.map(tag => <button key={Math.random()} className='bg-[#23BE0A0D] text-[#23BE0A] py-2 px-4 rounded-2xl mr-3 font-medium text-[1rem] work-sans'>#{tag}</button>)
                            }

                            <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>⚲ Year of Publishing: {yearOfPublishing}</button>
                        </p>
                        <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC] mr-8'>🤵🏻 Publisher: {publisher} </button>
                        <button className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>📋 Page: {totalPages} </button>
                        <div className="divider"></div>
                        <div>
                            <button className='bg-[#328EFF26] text-[#328EFF] py-2 px-4 rounded-2xl mr-3 font-medium text-[1rem] work-sans'>Category: {category}</button>

                            <button className='bg-[#FFAC3326] text-[#FFAC33] py-2 px-4 rounded-2xl mr-3 font-medium text-[1rem] work-sans'>Rating: {rating}</button>

                            <Link to={`/books/${bookId}`}>
                            <button className='bg-[#23BE0A] text-white py-2 px-4 rounded-2xl mr-3 font-medium text-[1rem] work-sans'>View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadList;