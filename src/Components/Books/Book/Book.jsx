import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookName, author, tags, rating, image, bookId } = book;
    return (
        <div>
            <Link to={`books/${bookId}`}>
                <div className='border-2 p-6 rounded-2xl shadow-xl'>

                    <div className='bg-[#F3F3F3] flex justify-center p-10 mb-6 rounded-2xl'>
                        <img className='h-80' src={image} alt="" />
                    </div>
                    <div>
                        <p>
                            {
                                tags.map(tag => <button key={Math.random()} className='bg-[#23BE0A0D] text-[#23BE0A] py-2 px-4 rounded-2xl mr-3 font-medium text-[1rem] work-sans'>{tag}</button>)
                            }
                        </p>
                        <h2 className='mt-4 font-bold text-2xl text-[#131313]'>{bookName}</h2>
                        <p className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>By : {author}</p>
                        <div className="divider"></div>
                        <div className='flex justify-between items-center'>
                            <p className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>Fiction</p>
                            <p className='work-sans mt-4 font-medium text-[1rem] text-[#131313CC]'>{rating} <span className='text-xl ml-3'>☆</span></p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;